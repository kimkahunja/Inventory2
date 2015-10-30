package com.topline.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



import com.topline.model.Invoice;
import com.topline.model.InvoiceDtls;
import com.topline.model.InvoiceDtlsExample;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/invoice")
public class InvoiceController extends BaseController {
	@RequestMapping(value="/saveInvoice.action")
	private @ResponseBody String saveInvoice(HttpServletRequest request){
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			Invoice invoice=mapper.readValue(data, Invoice.class);
			List<InvoiceDtls> invoiceDtls = Arrays.asList(mapper.readValue(dataDetail, InvoiceDtls[].class));
			invoice.setInvStatus("PENDING");
			if(invoice.getInvId()==null){
				invoiceMapper.save(invoice);
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
			}
			
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);	        
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
