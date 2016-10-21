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
import com.topline.model.UserLocation;
import com.topline.model.UserLocationExample;
import com.topline.model.wrappers.ApprovalAreaDtlWrapper;
import com.topline.model.wrappers.UserLocationWrapper;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponseImpl;

@Controller
@RequestMapping(value = "/userLocation")
public class UserLocationController extends BaseController {
	@RequestMapping(value="/fetchUserLocations.action", method=RequestMethod.GET)
	private @ResponseBody String fetchUserLocations(HttpServletRequest request){
		StandardJsonResponseImpl jsonResponse=new StandardJsonResponseImpl();
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String user= GlobalCC.CheckNullValues(request.getParameter("user"));
			String location= GlobalCC.CheckNullValues(request.getParameter("location"));
			String userName= GlobalCC.CheckNullValues(request.getParameter("userName"));
			if (location==null){
				if(user!=null){
					map.put("user", user==null?null:new BigDecimal(user));
					List<UserLocationWrapper>list=userLocationMapper.fetchUserLocations(map);
					if (list != null) {
						int count = list.size();
						data.put("count", count);
						data.put("data", list);
					}
				}
					
			}else{
				map.put("location", location==null?null:new BigDecimal(location));
				map.put("userName", userName);
				List<UserLocationWrapper>list=userLocationMapper.fetchAssignedUserLocations(map);
				if (list != null) {
					int count = list.size();
					data.put("count", count);
					data.put("data", list);
				}
			}
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			//System.out.println("location== "+jsonObject(test));
			return jsonObject(jsonResponse);
		}catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		
	}
	@RequestMapping(value="/saveUserLocation.action")
	@Transactional
	private @ResponseBody String saveUserLocation(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String user=GlobalCC.CheckNullValues(request.getParameter("user"));
			String userName=GlobalCC.CheckNullValues(request.getParameter("userName"));
			List<UserLocationWrapper> list = Arrays.asList(mapper.readValue(dataDetail, UserLocationWrapper[].class));
			//delete existing approvals for the user
			UserLocationExample example= new UserLocationExample();
			UserLocationExample.Criteria creteria=example.createCriteria();
			creteria.andUslocUsrCodeEqualTo(user==null?null:Integer.parseInt(user));
			userLocationMapper.deleteByExample(example);
			
			for(int i=0;i<list.size();i++){
				UserLocation dtls=new UserLocation();
				dtls.setUslocLocCode(list.get(i).getUslocLocCode());
				dtls.setUslocUsrCode(user==null?null:Integer.parseInt(user));
				dtls.setUslocUpdatedBy(userName);
				userLocationMapper.insert(dtls);
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "User Locations updated successfully ...");
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
