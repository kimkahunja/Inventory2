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

import com.topline.model.ApprovalAreaDtl;
import com.topline.model.ApprovalAreaDtlExample;
import com.topline.model.wrappers.ApprovalAreaDtlWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/approvalArea")
public class ApprovalAreaController extends BaseController {
	@RequestMapping(value="/fetchApprovalAreas.action", method=RequestMethod.GET)
	private @ResponseBody String fetchApprovalAreas(HttpServletRequest request){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String user= GlobalCC.CheckNullValues(request.getParameter("user"));
			//System.out.println("user=== "+user);
			if(user!=null){
				map.put("user", user==null?null:new BigDecimal(user));
				List<ApprovalAreaDtlWrapper>list=approvalAreaDtlMapper.fetchApprovalAreas(map);			
				if (list != null) {
					int count = list.size();
					data.put("count", count);
					data.put("data", list);
				}
			}
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
	@RequestMapping(value="/saveApprovalAreaDtl.action")
	@Transactional
	private @ResponseBody String saveApprovalAreaDtl(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String user=GlobalCC.CheckNullValues(request.getParameter("user"));
			List<ApprovalAreaDtlWrapper> list = Arrays.asList(mapper.readValue(dataDetail, ApprovalAreaDtlWrapper[].class));
			//delete existing approvals for the user
			ApprovalAreaDtlExample example= new ApprovalAreaDtlExample();
			ApprovalAreaDtlExample.Criteria creteria=example.createCriteria();
			creteria.andAppvdUsrCodeEqualTo(user==null?null:Integer.parseInt(user));
			approvalAreaDtlMapper.deleteByExample(example);
			
			for(int i=0;i<list.size();i++){
				ApprovalAreaDtl dtls=new ApprovalAreaDtl();
				dtls.setAppvdAppvCode(list.get(i).getAppvdAppvCode());
				dtls.setAppvdUsrCode(user==null?null:Integer.parseInt(user));
				dtls.setAppvdWef(GlobalCC.parseSQLDate(GlobalCC.getCurrentDate()));
				approvalAreaDtlMapper.insert(dtls);
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Approvals updated successfully ...");
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
