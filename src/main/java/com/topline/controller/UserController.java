package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.mappers.UserMapper;
import com.topline.model.Groups;
import com.topline.model.GroupsExample;
import com.topline.model.User;
import com.topline.model.UserExample;
import com.topline.model.wrappers.MenuWrapper;
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
			UserExample example=new UserExample();
			List<User> list=userMapper.selectByExample(example);
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
				 //map.put("group",new BigDecimal(group));
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
}
