package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.topline.model.wrappers.UserWrapper;
import com.topline.utils.GlobalCC;

@Controller
public class LoginController extends BaseController {
	@RequestMapping("/login.action")
	private @ResponseBody String login(HttpServletRequest request, HttpServletResponse response){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();			
			
			String user=GlobalCC.CheckNullValues(request.getParameter("user"));
			String password=GlobalCC.CheckNullValues(request.getParameter("password"));
			//validate whether User exist
			map.put("username", user);
			map.put("password", null);
			map.put("status", "A");
			BigDecimal userCount=userMapper.countUsers(map);
			int res;
			 res = userCount.compareTo(new BigDecimal("1"));
			if(res==-1){
				jsonResponse.addMessage("message", "User "+user+" is not available...");
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				 //return jsonObject(jsonResponse);
			}
			else if(res==1) {
				jsonResponse.addMessage("message", "Multiple Users available...");
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				 //return jsonObject(jsonResponse);
			}
			else{
				// validate whether correct Password has been provided...
				map.clear();
				map.put("username", user);
				map.put("password", password);
				BigDecimal userPassCheck=userMapper.countUsers(map);
				int resP;
				resP = userPassCheck.compareTo(new BigDecimal("1"));
				if(resP==-1){
					jsonResponse.addMessage("message", "Wrong Password Provided...");
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					// return jsonObject(jsonResponse);
				}else if(resP==0){
					List<UserWrapper>list=userMapper.fetchUserDetails(map);
					if (list != null) {
						int count = list.size();
						data.put("count", count);
					}
					data.put("data", list);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					jsonResponse.addMessage("message", "Login Successful...");
					System.out.println(jsonObject(jsonResponse));
					//return jsonObject(jsonResponse);
				}
				
			}
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
