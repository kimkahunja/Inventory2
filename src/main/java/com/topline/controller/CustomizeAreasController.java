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

import com.topline.mappers.CustomizeAreaMapper;
import com.topline.model.CustomizeArea;
import com.topline.model.CustomizeAreaDtl;
import com.topline.model.CustomizeAreaExample;
import com.topline.model.wrappers.SystemAreasWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/customizeArea")
public class CustomizeAreasController extends BaseController {
	@RequestMapping(value = "/fetchAreas.action", method = RequestMethod.GET)
	private @ResponseBody String fetchAreas(HttpServletRequest request) {
		try {
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String type=GlobalCC.CheckNullValues(request.getParameter("type"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			map.put("type", type==null?"PROD":type);
			List<SystemAreasWrapper>list=customizeAreaDtlMapper.fetchSystemAreas(map);			
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
	}
	@RequestMapping(value = "/fetchMainAreas.action", method = RequestMethod.GET)
	private @ResponseBody String fetchMainAreas(HttpServletRequest request) {
		try {
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
			CustomizeAreaExample example=new CustomizeAreaExample();
			List<CustomizeArea>list=customizeAreaMapper.selectByExample(example);			
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
	}
	@RequestMapping(value="/saveArea.action")
	@Transactional
	private @ResponseBody String saveArea(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));			
			//String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			
			List<SystemAreasWrapper> list = Arrays.asList(mapper.readValue(dataDetail, SystemAreasWrapper[].class));
			for(int i=0;i<list.size();i++){	
				//System.out.println("is_ctadIsvisible == "+list.get(i).is_ctadIsvisible());
				list.get(i).setCtadIsvisible(list.get(i).is_ctadIsvisible()==true?"Y":"N");
				
				//System.out.println("setCtadIsvisible == "+list.get(i).getCtadIsvisible());
				customizeAreaDtlMapper.updateByPrimaryKey(list.get(i));
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Setup updated successfully ...");
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
