package com.topline.controller;

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
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.ManAdjustment;
import com.topline.model.wrappers.ManAdjustmentDtlWrapper;
import com.topline.utils.GlobalCC;
@Controller
@RequestMapping(value = "/adjustment")
public class ManAdjustmentController extends BaseController{
	@RequestMapping(value="/processAdjustment.action")
	@Transactional
	private @ResponseBody String processTransfer(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));			
			String date = GlobalCC.CheckNullValues(request.getParameter("date"));
			String remarks=GlobalCC.CheckNullValues(request.getParameter("remarks"));
			String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			String location = GlobalCC.CheckNullValues(request.getParameter("location"));
			ManAdjustment adjustment=new ManAdjustment();
			List<ManAdjustmentDtlWrapper> adjustmentdtl = Arrays.asList(mapper.readValue(dataDetail, ManAdjustmentDtlWrapper[].class));
			adjustment.setMadjCapturedBy(userName);
			adjustment.setMadjDate(GlobalCC.formatLongDateString(date));
			adjustment.setMadjRemarks(remarks);
			adjustment.setMadjStatus("POSTED");
			manAdjustmentMapper.save(adjustment);
			
			for(int i=0;i<adjustmentdtl.size();i++){
				map.clear();
				map.put("product", adjustmentdtl.get(i).getMadjdPdtCode());				
				map.put("qty", adjustmentdtl.get(i).getMadjdQty());
				map.put("location", location);				
				adjustmentdtl.get(i).setMadjdMadjId(adjustment.getMadjId());
				manAdjustmentDtlMapper.insert(adjustmentdtl.get(i));
				manAdjustmentMapper.postAdjustment(map);
				Object rtnVal=map.get("v_rtnVal");
				if(!rtnVal.toString().equalsIgnoreCase("S")){
					txnManager.rollback(status);
			    	jsonResponse.setSuccess(false);	
					jsonResponse.setData(null);
					jsonResponse.addMessage("message", "Adjustment not Posted..."+rtnVal);
					 return jsonObject(jsonResponse);
				}
				
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Adjustment Posted successfully ...");
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
