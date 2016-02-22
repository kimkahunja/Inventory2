package com.topline.controller;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;














import com.topline.model.Invoice;
import com.topline.model.InvoiceDtls;
import com.topline.model.InvoiceDtlsExample;
import com.topline.model.Purchase;
import com.topline.model.wrappers.InvoiceDtlsWrapper;
import com.topline.model.wrappers.InvoiceWrapper;
import com.topline.model.wrappers.PurchaseDetailWrapper;
import com.topline.model.wrappers.PurchaseWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/invoice")
public class InvoiceController extends BaseController {
	@RequestMapping(value="/saveInvoice.action")
	private @ResponseBody String saveInvoice(HttpServletRequest request){
		try{
			HashMap<String, Object> dataM = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String location = GlobalCC.CheckNullValues(request.getParameter("location"));
			Invoice invoice=mapper.readValue(data, Invoice.class);
			List<InvoiceDtlsWrapper> invoiceDtls = Arrays.asList(mapper.readValue(dataDetail, InvoiceDtlsWrapper[].class));
			invoice.setInvStatus("PENDING");
			invoice.setInvLocCode(location==null?null:Integer.parseInt(location));
			map.put("location", location);
			System.out.println("location==== "+location);
			if(invoice.getInvId()==null){
				invoiceMapper.save(invoice);
				invoiceMapper.updateNextInvoiceNumber(map);
			}else{
				invoiceMapper.updateByPrimaryKey(invoice);
			}
			
			try{
				InvoiceDtlsExample example=new InvoiceDtlsExample();
				InvoiceDtlsExample .Criteria creteria=example.createCriteria();
				creteria.andInvdInvIdEqualTo(invoice.getInvId());
				invoiceDtlsMapper.deleteByExample(example);
				for(int i=0;i<invoiceDtls.size();i++){
					invoiceDtls.get(i).setInvdInvId(invoice.getInvId());
					invoiceDtlsMapper.insert(invoiceDtls.get(i));
				}
			}catch(Exception ex){
				invoiceMapper.deleteByPrimaryKey(invoice.getInvId());
				ex.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", ex.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			dataM.put("data", invoice.getInvId());
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(dataM);	        
	        return jsonObject(jsonResponse);
		}
		catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
	}
	//fetch Invoices
			@RequestMapping(value="/fetchInvoices.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchInvoices(HttpServletRequest request){
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();
					
					Map<String, Object> map = new HashMap<String, Object>();		
					
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String id=GlobalCC.CheckNullValues(request.getParameter("id"));
					String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
					String status=GlobalCC.CheckNullValues(request.getParameter("status"));
					String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
					String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
					String root=GlobalCC.CheckNullValues(request.getParameter("root"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					map.put("invStatus", root==null? "PENDING":status);
					map.put("id", id==null?null:new BigDecimal(id));
					map.put("accCode", accCode==null?null:new BigDecimal(accCode));
					map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
					map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
					//System.out.println("id=== "+id);
					
					List<InvoiceWrapper>list=invoiceMapper.fetchInvoices(map);
					if (list != null) {
						int count = list.size();
						data.put("count", count);
					}
					data.put("data", list);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}
				catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
			//fetch Invoice details
			@RequestMapping(value="/fetchInvoiceDtls.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchInvoiceDtls(HttpServletRequest request){
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();
					
					Map<String, Object> map = new HashMap<String, Object>();		
					
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String id=GlobalCC.CheckNullValues(request.getParameter("id"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					if(id==null){
						jsonResponse.setData(null);
						jsonResponse.setSuccess(false);
						jsonResponse.addMessage("message", "Invoice particulars  have not been provided...");
						return jsonObject(jsonResponse);
					}else{
						map.put("invId", new BigDecimal(id));
					}
				
					List<InvoiceDtlsWrapper>list=invoiceDtlsMapper.fetchInvoiceDtls(map);
					if (list != null) {
						int count = list.size();
						data.put("count", count);
					}
				
					data.put("data", list);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}
				catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
			//fetchInvoiceNumber 
			@RequestMapping(value="/fetchInvoiceNumber.action", method=RequestMethod.POST)
			private @ResponseBody
			String getInvoiceNumber(HttpServletRequest request){
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();
					
					Map<String, Object> map = new HashMap<String, Object>();		
					
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String location=GlobalCC.CheckNullValues(request.getParameter("location"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					map.put("location", location);
					String invoiceNumber=invoiceMapper.fetchInvoiceNumber(map);
					if (invoiceNumber != null) {
						int count = Integer.parseInt("1");
						data.put("count", count);
					}
					data.put("data", invoiceNumber);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}
				catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
			@RequestMapping(value="/postInvoice.action")
			@Transactional
			private @ResponseBody String postInvoice(HttpServletRequest request){
				DefaultTransactionDefinition def = new DefaultTransactionDefinition();
				def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

				TransactionStatus status = txnManager.getTransaction(def);
				try{
					Map<String, Object> map = new HashMap<String, Object>();	
					ObjectMapper mapper = new ObjectMapper();
					String data=GlobalCC.CheckNullValues(request.getParameter("data"));					
					String userName=GlobalCC.CheckNullValues(request.getParameter("userName"));
					String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
					String location = GlobalCC.CheckNullValues(request.getParameter("location"));
					Invoice invoice=mapper.readValue(data, Invoice.class);
					
					List<InvoiceDtlsWrapper> invoiceDtls = Arrays.asList(mapper.readValue(dataDetail, InvoiceDtlsWrapper[].class));
					invoice.setInvStatus("PENDING");
					invoice.setInvLocCode(location==null?null:Integer.parseInt(location));
					map.put("location", location);
					
					if(invoice.getInvId()==null){
						invoiceMapper.save(invoice);
						invoiceMapper.updateNextInvoiceNumber(map);
					}else{
						invoiceMapper.updateByPrimaryKey(invoice);
					}
					
					try{
						InvoiceDtlsExample example=new InvoiceDtlsExample();
						InvoiceDtlsExample .Criteria creteria=example.createCriteria();
						creteria.andInvdInvIdEqualTo(invoice.getInvId());
						invoiceDtlsMapper.deleteByExample(example);
						for(int i=0;i<invoiceDtls.size();i++){
							invoiceDtls.get(i).setInvdInvId(invoice.getInvId());
							invoiceDtlsMapper.insert(invoiceDtls.get(i));
						}
					}catch(Exception ex){
						invoiceMapper.deleteByPrimaryKey(invoice.getInvId());
						ex.printStackTrace();
						jsonResponse.setData(null);
						jsonResponse.setSuccess(false);
						jsonResponse.addMessage("message", ex.getLocalizedMessage());
						return jsonObject(jsonResponse);
					}
					//validate whether the stock remaining is enough to cater for the current sale
					
					//post the invoice
					
					if(invoice.getInvId()==null){
						txnManager.rollback(status);
						jsonResponse.setData(null);
						jsonResponse.setSuccess(false);
						jsonResponse.addMessage("message", "Invoice particulars  have not been provided...");
						return jsonObject(jsonResponse);
					}else{
						map.put("v_inv_id",invoice.getInvId());
						map.put("postedBy", userName);
						invoiceMapper.postInvoice(map);
					}
					Object v_count=map.get("v_count");
					System.out.println("count===== "+v_count);
				    if(v_count.toString().equalsIgnoreCase("1")) {
				    	txnManager.commit(status);
				    	jsonResponse.setSuccess(true);	
						jsonResponse.setData(null);
						jsonResponse.addMessage("message", "Invoice Transaction successfully Posted...");
				    }else{
				    	txnManager.rollback(status);
				    	jsonResponse.setSuccess(false);	
						jsonResponse.setData(null);
						jsonResponse.addMessage("message", "Invoice Transaction not Posted...");
				    }
				    
				    return jsonObject(jsonResponse);
				}
				
				catch(Exception e){
					txnManager.rollback(status);			
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
				
			}	
			//fetchRptInvoices
			@RequestMapping(value="/fetchRptInvoices.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchRptInvoices(HttpServletRequest request){
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();
					
					Map<String, Object> map = new HashMap<String, Object>();		
					
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
					String status=GlobalCC.CheckNullValues(request.getParameter("status"));
					String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
					String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
					String root=GlobalCC.CheckNullValues(request.getParameter("root"));
					String invId=GlobalCC.CheckNullValues(request.getParameter("id"));
					String product=GlobalCC.CheckNullValues(request.getParameter("product"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					
					map.put("invStatus", root==null? "PENDING":status);
					map.put("accCode", accCode==null?null:new BigDecimal(accCode));
					map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
					map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
					map.put("invId",invId==null?null:new BigDecimal(invId));
					map.put("product",product==null?null:new BigDecimal(product));
					List<InvoiceDtlsWrapper>list=invoiceDtlsMapper.fetchRptInvoices(map);
					
					if (list != null) {
						int count = list.size();
						data.put("count", count);
					}
				
					data.put("data", list);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}
				catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}			
}
