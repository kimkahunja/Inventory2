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
import com.topline.model.wrappers.MenuWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/menu")
public class MenuController extends BaseController{
	//fetch Menu
		@RequestMapping(value="/fetchMenu.action", method=RequestMethod.GET)
		private @ResponseBody
		String fetchMenu(HttpServletRequest request){
			
			String json=null;
			try{				
				
				Map<String, Object> map = new HashMap<String, Object>();		
				
				String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request.getParameter("start"));
				String userId = GlobalCC.CheckNullValues(request.getParameter("userId"));
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}
				if(userId !=null){
					map.put("userId", userId==null?null:new BigDecimal(userId));
				}
				
				List<MenuWrapper>list=menuMapper.fetchMenus(map);
				
				JSONArray arrayObj=new JSONArray();
				JSONObject myObj = new JSONObject();
				JSONObject myObjR = new JSONObject();
				if (list != null) {
					int count = list.size();
					 //loop thru the array list to populate the JSON array
		             for(int i=0;i<count;i++){
		            	 JSONArray arrayObjC=new JSONArray();
		            	 MenuWrapper menu=list.get(i);	
		            
		            	 myObj.put("id", menu.getId());
        				 myObj.put("text", menu.getText());
        				 myObj.put("iconcls", menu.getIconcls());
        				 myObj.put("parentId",menu.getParentId());
        				 myObj.put("classname", menu.getClassname());
        				 myObj.put("userId", menu.getUserId());
        				 myObj.put("leaf", false);
		            	 Integer parent_id=menu.getId();
		            	 if(parent_id!=null){
		            		 map.put("parentId", parent_id);
		            		 List<MenuWrapper>listC=menuMapper.fetchMenusC(map);
		            		 if (listC != null){
		            			 for(int j=0;j<listC.size();j++){
		            				//Create a JSON object to wrap your JSOn array and provide the root element items
		            			     
		            				 MenuWrapper menuC=listC.get(j);
		            				//this creates a JSON object from bean object
		     		                 JSONObject menuObj = JSONObject.fromObject(menuC);
		     		                  menuObj.put("leaf", true);	            				
		            		            //add to array list
		            		            arrayObjC.add(menuObj);
		            		            
		            			 }
		            			 myObj.put("items", arrayObjC);
		            		 }
		            		
		            		
		            	 }
		            	 arrayObj.add(myObj);
		                 
		             }
				}
				myObjR.put("items", arrayObj);
			   System.out.println(myObjR);
				return myObjR.toString();
			}
			catch(Exception e){
				e.printStackTrace();
				
				return json;
			}
				
		}
}
