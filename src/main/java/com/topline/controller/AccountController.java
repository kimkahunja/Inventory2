package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Account;
import com.topline.model.AccountExample;
import com.topline.model.Categories;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/account")
public class AccountController extends BaseController {
	// fetch accounts
	@RequestMapping(value = "/fetchAccounts.action", method = RequestMethod.GET)
	private @ResponseBody String fetchAccounts(HttpServletRequest request) {
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
			if(type=="A"){
				type=null;
			}else if(type==null){
				type="D";
			}
			
			if(!(type.equalsIgnoreCase("A"))){
				System.out.println("INSIDE==="+type);
				map.put("type",type);
			}
			
			List<Account>list=accountMapper.fetchAccountsM(map);
			//AccountExample accountExample= new AccountExample();
			//List<Account>list=accountMapper.selectByExample(accountExample);
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
	//fetch accounts for reports
	@RequestMapping(value = "/fetchAccountsRPT.action", method = RequestMethod.GET)
	private @ResponseBody String fetchAccountsRPT(HttpServletRequest request) {
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
			map.put("type", type==null?"D":type);
			
			List<Account>list=accountMapper.fetchAccounts(map);
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
	//save Account
		@RequestMapping(value="/saveAccount.action")
		private @ResponseBody String saveAccount(HttpServletRequest request){
			
			
			try{
				ObjectMapper mapper = new ObjectMapper();
				String data=GlobalCC.CheckNullValues(request.getParameter("data"));
				Account account=mapper.readValue(data, Account.class);
				//System.out.println(" data "+data);		
				
				if (account.getAccCode() == null) {				
					accountMapper.insert(account);
					jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
				} else {
					//System.out.println("Inside account update");
					accountMapper.updateByPrimaryKey(account);
					jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
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
