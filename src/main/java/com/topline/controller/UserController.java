package com.topline.controller;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.mappers.UserMapper;
import com.topline.model.Categories;
import com.topline.model.Groups;
import com.topline.model.GroupsExample;
import com.topline.model.PermissionsExample;
import com.topline.model.PermissionsKey;
import com.topline.model.PurchaseDetail;
import com.topline.model.User;
import com.topline.model.UserExample;
import com.topline.model.wrappers.MenuWrapper;
import com.topline.model.wrappers.UserWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/user")
public class UserController extends BaseController {
	//fetch Users
	@RequestMapping(value="/fetchUsers.action", method=RequestMethod.GET)
	private @ResponseBody String fetchUsers(HttpServletRequest request){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();
			String group = GlobalCC.CheckNullValues(request.getParameter("group"));
			//UserExample example=new UserExample();
			map.put("group", group==null?null:new BigDecimal(group));
			List<UserWrapper> list=userMapper.fetchUserDetails(map);
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);
		}catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		
	}
	//fetch groups
		@RequestMapping(value="/fetchGroups.action", method=RequestMethod.GET)
		private @ResponseBody String fetchGroups(HttpServletRequest request){
			try{
				HashMap<String, Object> data = new HashMap<String, Object>();
				
				Map<String, Object> map = new HashMap<String, Object>();
				GroupsExample example=new GroupsExample();
				List<Groups> list=groupsMapper.selectByExample(example);
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				data.put("data", list);
				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);
				System.out.println(jsonObject(jsonResponse));
				return jsonObject(jsonResponse);
			}catch(Exception e){
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
		}
		//fetch permissions
		@RequestMapping(value="/fetchPermissions.action", method=RequestMethod.GET)
		private @ResponseBody String fetchPermissions(HttpServletRequest request){
			try{
				Map<String, Object> map = new HashMap<String, Object>();
				String group = GlobalCC.CheckNullValues(request.getParameter("group"));
				 map.put("groupId",group==null?null:new BigDecimal(group));
				List<MenuWrapper>list=menuMapper.fetchParentMenus(map);
				
				JSONArray arrayObj=new JSONArray();
				JSONObject myObj = new JSONObject();
				JSONObject myObjR = new JSONObject();
				if (list != null){
					int count = list.size();
					//loop thru the array list to populate the JSON array
		             for(int i=0;i<count;i++){
		            	 JSONArray arrayObjC=new JSONArray();
		            	 MenuWrapper menu=list.get(i);	
		            	// myObj.clear();
		            	 myObj.put("id", menu.getId());
        				 myObj.put("text", menu.getText());
        				 myObj.put("iconcls", menu.getIconcls());
        				 myObj.put("parentId",menu.getParentId());
        				 myObj.put("classname", menu.getClassname());
        				 myObj.put("userId", menu.getUserId());
        				 myObj.put("leaf", false);
        				 if(menu.getUserId()==null){
        					 myObj.put("checked", false);
        				 }else{
        					 myObj.put("checked", true);
        				 }
        				 Integer parentId=menu.getId();
        				 if(parentId!=null){
        					 map.put("parentId", parentId);
        					 List<MenuWrapper>listC=menuMapper.fetchChildMenus(map);
        					 arrayObjC.clear();
        					 if(listC.size()>0){
        						 myObj.put("expanded", true);
        						 for(int j=0;j<listC.size();j++){
        							 MenuWrapper menuC=listC.get(j);
 		            				//this creates a JSON object from bean object
 		     		                 JSONObject menuObj = JSONObject.fromObject(menuC);
 		     		                  menuObj.put("leaf", true);
 		     		                 menuObj.put("expanded", false);
 		            		           
 		            		            if(menuC.getUserId()==null){
 		            		            	menuObj.put("checked", false);
 		            		            }else{
 		            		            	menuObj.put("checked", true);
 		            		            }
 		            		           //add to array list
 		            		            arrayObjC.add(menuObj);
        						 }
        						 myObj.put("children", arrayObjC);
        						 arrayObj.add(myObj);
        					 }
        					
        				 }
        				
		             }
				}
				myObjR.put("children", arrayObj);
				   System.out.println(myObjR);
					return myObjR.toString();
			}catch(Exception e){
				e.printStackTrace();
				
				return null;
			}
		}
		@RequestMapping(value="/saveGroup.action")
		private @ResponseBody String saveGroup(HttpServletRequest request){
			try{
				ObjectMapper mapper = new ObjectMapper();
				String id=GlobalCC.CheckNullValues(request.getParameter("id"));
				String name=GlobalCC.CheckNullValues(request.getParameter("name"));
				System.out.println(" id=== "+id);
				System.out.println(" name=== "+name);
				String permissions = GlobalCC.CheckNullValues(request.getParameter("permissions"));
				System.out.println(" permissions == "+permissions);
				String[] myObjects = permissions.split(",");
				System.out.println(" length=== "+myObjects.length);
				Groups group=new Groups();
				
				if(id==null||id.equalsIgnoreCase("0")){
					group.setId(null);
					group.setName(name);
					groupsMapper.save(group);
				}else{
					group.setId(Integer.parseInt(id));
					group.setName(name);
					groupsMapper.updateByPrimaryKey(group);
				}
				try{
					PermissionsExample example=new PermissionsExample();
					PermissionsExample.Criteria creteria=example.createCriteria();
					creteria.andGroupIdEqualTo(group.getId());
					permissionsMapper.deleteByExample(example);
					PermissionsKey permission=new PermissionsKey();
					for (String s: myObjects) {           
						permission.setGroupId(group.getId());
						permission.setMenuId(Integer.parseInt(s));
					    permissionsMapper.insertSelective(permission);
					    
					}
				}catch(Exception ex){
					ex.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", ex.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
				jsonResponse.setSuccess(true);	
				jsonResponse.setData(null);	        
		        return jsonObject(jsonResponse);
				
			}catch(Exception e){
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
		}
		@RequestMapping(value="/updatePassword.action")
		@Transactional
		private @ResponseBody String updatePassword(HttpServletRequest request){
			DefaultTransactionDefinition def = new DefaultTransactionDefinition();
			def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

			TransactionStatus status = txnManager.getTransaction(def);
			try{
				Map<String, Object> map = new HashMap<String, Object>();
				String userName=GlobalCC.CheckNullValues(request.getParameter("userName"));
				String password=GlobalCC.CheckNullValues(request.getParameter("password"));
				String oldPassword=GlobalCC.CheckNullValues(request.getParameter("oldPassword"));
				map.put("password", password);
				map.put("username", userName);
				map.put("oldpassword", oldPassword);
				userMapper.updatePassword(map);
				Object rtnval=map.get("rtnval");
				if(rtnval.toString().equalsIgnoreCase("S")){
					txnManager.commit(status);
					jsonResponse.addMessage("message", "Password successfully Updated...");
					jsonResponse.setSuccess(true);	
					jsonResponse.setData(null);	
				}else{
			    	txnManager.rollback(status);
			    	jsonResponse.setSuccess(false);	
					jsonResponse.setData(null);
					jsonResponse.addMessage("message", rtnval.toString());
				}    
		        return jsonObject(jsonResponse);
			}catch(Exception e){
				e.printStackTrace();
				txnManager.rollback(status);
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
		}
	//save users
		@RequestMapping(value="/saveUser.action")
		private @ResponseBody String saveUser(HttpServletRequest request){
			
			
			try{
				ObjectMapper mapper = new ObjectMapper();
				String data=GlobalCC.CheckNullValues(request.getParameter("data"));
				String pass=GlobalCC.CheckNullValues(request.getParameter("pass"));
				User user=mapper.readValue(data, User.class);
				//System.out.println(" data "+data);		
				user.setStatus("A");
				if (user.getId() == null) {	
					user.setPassword(pass);
					userMapper.insert(user);
					jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
				} else {					
					userMapper.updateByPrimaryKey(user);
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
 //inactivate user
		@RequestMapping(value="/deactivateUser.action")
		private @ResponseBody String deactivateUser(HttpServletRequest request){
			try{
				//ObjectMapper mapper = new ObjectMapper();
				Map<String, Object> map = new HashMap<String, Object>();
				String id=GlobalCC.CheckNullValues(request.getParameter("id"));				
				
				if(id==null){
					jsonResponse.addMessage("message", "User to Deactivate not Specified");
					jsonResponse.setSuccess(false);	
				}else{
					map.put("status", "I");
					map.put("id",id==null?null:new BigDecimal(id));
					userMapper.updateStatus(map);
					jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
					jsonResponse.setSuccess(true);	
				}
				
				jsonResponse.setData(null);	        
		        return jsonObject(jsonResponse);
				
			}catch(Exception e){
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
		}	
		//eligible to approve 
		@RequestMapping(value="/isEligible.action", method=RequestMethod.POST)
		private @ResponseBody
		String isEligible(HttpServletRequest request){
			try{
				HashMap<String, Object> data = new HashMap<String, Object>();
				
				Map<String, Object> map = new HashMap<String, Object>();		
				
				String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request.getParameter("start"));
				String area=GlobalCC.CheckNullValues(request.getParameter("area"));
				String userName=GlobalCC.CheckNullValues(request.getParameter("userName"));
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}
				map.put("userName", userName);
				map.put("area", area);
				String isEligible=userMapper.isEligible(map);
				if (isEligible != null) {
					int count = Integer.parseInt("1");
					data.put("count", count);
				}
				data.put("data", isEligible);
				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);
				//System.out.println(jsonObject(jsonResponse));
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
