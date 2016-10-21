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
import com.topline.model.CreditSale;
import com.topline.model.wrappers.CreditSaleDtlWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/sale")
public class CreditSaleController extends BaseController{
	@RequestMapping(value="/fetchCreditSaledtls.action", method=RequestMethod.GET)
	private @ResponseBody String fetchCreditSaledtls(HttpServletRequest request){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
			
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			map.put("accCode", accCode==null?null:new BigDecimal(accCode));
			List<CreditSaleDtlWrapper>list=creditSaleDtlMapper.fetchCreditSaleDtls(map);
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			return jsonObject(jsonResponse);
		}catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
	}
	@RequestMapping(value="/processPayment.action")
	@Transactional
	private @ResponseBody String processpayment(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String payMode = GlobalCC.CheckNullValues(request.getParameter("payMode"));
			String paymentMemo = GlobalCC.CheckNullValues(request.getParameter("paymentMemo"));
			String date = GlobalCC.CheckNullValues(request.getParameter("date"));
			String amount = GlobalCC.CheckNullValues(request.getParameter("amount"));
			String accCode = GlobalCC.CheckNullValues(request.getParameter("accCode"));
			String remarks = GlobalCC.CheckNullValues(request.getParameter("remarks"));
			String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			CreditSale sale=new CreditSale();
			List<CreditSaleDtlWrapper> paymentDtl = Arrays.asList(mapper.readValue(dataDetail, CreditSaleDtlWrapper[].class));		
			sale.setCrsAccCode(accCode==null?null:Integer.parseInt(accCode));			
			sale.setCrsAmount(amount==null?null:new BigDecimal(amount));			
			sale.setCrsCapturedBy(userName);			
			sale.setCrsDate(GlobalCC.formatLongDateString(date));			
			sale.setCrsPaymemo(paymentMemo);			
			sale.setCrsPaymode(payMode);			
			sale.setCrsRemarks(remarks);
			creditSaleMapper.save(sale);
			for(int i=0;i<paymentDtl.size();i++){
				paymentDtl.get(i).setCrsdCrsId(sale.getCrsId());
				creditSaleDtlMapper.insert(paymentDtl.get(i));
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Transaction Processed successfully ...");
			return jsonObject(jsonResponse);
		}catch(Exception e){
			txnManager.rollback(status);			
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		
	}	
}
