package com.topline.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;






























import com.topline.model.Purchase;
import com.topline.model.PurchaseDetail;
import com.topline.model.PurchaseDetailExample;
import com.topline.model.PurchaseExample;
import com.topline.model.ReportSummary;
import com.topline.model.Summary;
import com.topline.model.wrappers.PurchaseDetailWrapper;
import com.topline.model.wrappers.PurchaseWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/purchase")
public class PurchaseController extends BaseController {
	@RequestMapping(value="/savePurchase.action")
	private @ResponseBody String savePurchase(HttpServletRequest request){
		try{
			ObjectMapper mapper = new ObjectMapper();
			HashMap<String, Object> dataM = new HashMap<String, Object>();	
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String location=GlobalCC.CheckNullValues(request.getParameter("location"));
			Purchase purchase=mapper.readValue(data, Purchase.class);			
			List<PurchaseDetail> purchaseDetail = Arrays.asList(mapper.readValue(dataDetail, PurchaseDetail[].class));
			System.out.println("Supplier=== "+purchase.getPurAccCode());
			System.out.println("Invoice Number=== "+purchase.getPurInvono());
			System.out.println("Start of details......");
			purchase.setPurStatus("PENDING");
			purchase.setPurLocCode(location==null?null:Integer.parseInt(location));
			if(purchase.getPurId()==null){
				purchaseMapper.save(purchase);
				System.out.println("last record inserted== "+purchase.getPurId());
				//jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			}else{
				purchaseMapper.updateByPrimaryKey(purchase);
				//jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			try{
				PurchaseDetailExample example= new PurchaseDetailExample();
				PurchaseDetailExample.Criteria creteria=example.createCriteria();
				creteria.andPurdPurIdEqualTo(purchase.getPurId());
				purchaseDetailMapper.deleteByExample(example);
				
				for(int i=0;i<purchaseDetail.size();i++){
					purchaseDetail.get(i).setPurdPurId(purchase.getPurId());
					System.out.println(purchaseDetail.get(i).getPurdPrice());
					purchaseDetailMapper.insert(purchaseDetail.get(i));
				}
			}catch(Exception ex){
				purchaseMapper.deleteByPrimaryKey(purchase.getPurId());
				//check this functionality here...
				ex.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", ex.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
			jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			dataM.put("data", purchase.getPurId());
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
	//fetch Purchases
		@RequestMapping(value="/fetchPurchasesXXX.action", method=RequestMethod.GET)
		private @ResponseBody
		String fetchPurchases(HttpServletRequest request){
			try{
				HashMap<String, Object> data = new HashMap<String, Object>();
				
				Map<String, Object> map = new HashMap<String, Object>();		
				
				String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request.getParameter("start"));
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}
				/*PurchaseExample example=new PurchaseExample();
				PurchaseExample.Criteria criteria=example.createCriteria();
				criteria.andPurStatusEqualTo("PENDING");
				List<Purchase>list=purchaseMapper.selectByExample(example);*/
				map.put("purStatus", "PENDING");
				List<PurchaseWrapper>list=purchaseMapper.fetchPurchases(map);
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
		//fetch Purchases details
				@RequestMapping(value="/fetchPurchaseDtls.action", method=RequestMethod.GET)
				private @ResponseBody
				String fetchPurchaseDtls(HttpServletRequest request){
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
							jsonResponse.addMessage("message", "Purchase particulars  have not been provided...");
							return jsonObject(jsonResponse);
						}else{
							map.put("purId", new BigDecimal(id));
							map.put("start", start==null?null:new BigDecimal(start));
							map.put("limit", limit==null?null:new BigDecimal(limit));
						}
					
						List<PurchaseDetailWrapper>list=purchaseDetailMapper.fetchPurchaseDetails(map);
						List<Summary>summaryList=purchaseDetailMapper.fetchRptPurchasesCount(map);
						JSONObject myObj = new JSONObject();
						JSONArray arrayObj=new JSONArray();
						for(int i=0;i<summaryList.size();i++){
							BigDecimal count = summaryList.get(i).getMyCount();
							BigDecimal summary=summaryList.get(i).getMySummary();
							data.put("count", count);
							myObj.put("total", summary);
							arrayObj.add(myObj);
							data.put("summary", arrayObj);
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
	@RequestMapping(value="/postPurchase.action")
	@Transactional
	private @ResponseBody String postPurchase(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

		TransactionStatus status = txnManager.getTransaction(def);
		try{
			Map<String, Object> map = new HashMap<String, Object>();	
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			String userName=GlobalCC.CheckNullValues(request.getParameter("userName"));
			Purchase purchase=mapper.readValue(data, Purchase.class);	
			if(purchase.getPurId()==null){
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Purchase particulars  have not been provided...");
				return jsonObject(jsonResponse);
			}else{
				map.put("v_pur_id",purchase.getPurId());
				map.put("postedBy", userName);
				purchaseMapper.postPurchase(map);
			}
			Object v_count=map.get("v_count");
			System.out.println("count===== "+v_count);
		    if(v_count.toString().equalsIgnoreCase("1")) {
		    	txnManager.commit(status);
		    	jsonResponse.setSuccess(true);	
				jsonResponse.setData(null);
				jsonResponse.addMessage("message", "Purchase Transaction successfully Posted...");
		    }else{
		    	txnManager.rollback(status);
		    	jsonResponse.setSuccess(false);	
				jsonResponse.setData(null);
				jsonResponse.addMessage("message", "Purchase Transaction not Posted...");
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
	//fetch Purchases Rpt
			@RequestMapping(value="/fetchPurchases.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchPurchasesRpt(HttpServletRequest request){
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
					String purId=GlobalCC.CheckNullValues(request.getParameter("id"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					
					map.put("purStatus", root==null? "PENDING":status);
					map.put("accCode", accCode==null?null:new BigDecimal(accCode));
					map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
					map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
					map.put("purId",purId==null?null:new BigDecimal(purId));
					List<PurchaseWrapper>list=purchaseMapper.fetchPurchases(map);
					
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
			//fetchRptPurchases
			@RequestMapping(value="/fetchRptPurchases.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchRptPurchases(HttpServletRequest request){
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
					String purId=GlobalCC.CheckNullValues(request.getParameter("id"));
					String product=GlobalCC.CheckNullValues(request.getParameter("product"));
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					map.put("start", start==null?null:new BigDecimal(start));
					map.put("limit", limit==null?null:new BigDecimal(limit));
					map.put("purStatus", root==null? "PENDING":status);
					map.put("accCode", accCode==null?null:new BigDecimal(accCode));
					map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
					map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
					map.put("purId",purId==null?null:new BigDecimal(purId));
					map.put("product",product==null?null:new BigDecimal(product));
					List<PurchaseDetailWrapper>list=purchaseDetailMapper.fetchRptPurchases(map);
					List<Summary>summaryList=purchaseDetailMapper.fetchRptPurchasesCount(map);
					//System.out.println("Summry Count==="+summary.get(Integer.parseInt("0")).getMyCount());
					//System.out.println("Summry total==="+summary.get(Integer.parseInt("0")).getMySummary());
					JSONObject myObj = new JSONObject();
					JSONArray arrayObj=new JSONArray();
					for(int i=0;i<summaryList.size();i++){
						BigDecimal count = summaryList.get(i).getMyCount();
						BigDecimal summary=summaryList.get(i).getMySummary();
						data.put("count", count);
						myObj.put("total", summary);
						arrayObj.add(myObj);
						data.put("summary", arrayObj);
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
			//fetchPurchaseSummary
			@RequestMapping(value="/fetchPurchaseSummary.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchPurchaseSummary(HttpServletRequest request){
				try{
				    HashMap<String, Object> data = new HashMap<String, Object>();					
					Map<String, Object> map = new HashMap<String, Object>();
					List<ReportSummary>list=purchaseMapper.fetchResultSummary(map);
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
