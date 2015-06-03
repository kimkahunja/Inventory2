package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;










import com.topline.model.Menu;
import com.topline.model.MenuExample;
import com.topline.model.wrappers.MenuWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/menu")
public class MenuController extends BaseController{
	//fetch Menu
		@RequestMapping(value="/fetchMenu.action", method=RequestMethod.POST)
		private @ResponseBody
		String fetchMenu(HttpServletRequest request){
			BigDecimal user_id=new BigDecimal("1");
			String json=null;
			try{
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
				if(user_id !=null){
					map.put("userId", user_id);
				}
				
				List<MenuWrapper>list=menuMapper.fetchMenus(map);
				
				JSONArray arrayObj=new JSONArray();
				JSONObject myObj = new JSONObject();
				JSONObject myObj2 = new JSONObject();
				if (list != null) {
					int count = list.size();
					 //loop thru the array list to populate the JSON array
		             for(int i=0;i<count;i++){
		            	 JSONArray arrayObjC=new JSONArray();
		            	 MenuWrapper menu=list.get(i);	
		            	//this creates a JSON object from bean object
		                 JSONObject menuObj = JSONObject.fromObject(menu);
		               //  arrayObj.add(menuObj);
		            	 Integer parent_id=menu.getId();
		            	 if(parent_id!=null){
		            		 map.put("parentId", parent_id);
		            		 List<MenuWrapper>listC=menuMapper.fetchMenusC(map);
		            		 if (listC != null){
		            			 for(int j=0;j<listC.size();j++){
		            				//Create a JSON object to wrap your JSOn array and provide the root element items
		            			     JSONObject myObjC = new JSONObject();
		            				 MenuWrapper menuC=listC.get(j); 
		            				 myObjC.put("id", menuC.getId());
		            				 myObjC.put("text", menuC.getText());
		            				 myObjC.put("iconcls", menuC.getIconcls());
		            				 myObjC.put("parentId", menuC.getParentId());
		            				 myObjC.put("classname", menuC.getClassname());
		            				 myObjC.put("userId", menuC.getUserId());		            				
		            		            //add to array list
		            		            arrayObjC.add(myObjC);
		            		            
		            			 }
		            			 myObj.put("items3", arrayObjC);
		            		 }
		            		
		            		
		            	 }
		            	 myObj2.put("kim", menuObj);
		            	 myObj2.put("ttest",myObj);
		                 arrayObj.add(myObj2) ;
		             }
				}
				data.put("items", arrayObj);
				System.out.println("kkkk "+data.toString());
				return json;
			}
			catch(Exception e){
				e.printStackTrace();
				//jsonResponse.setData(null);
				//jsonResponse.setSuccess(false);
				//jsonResponse.addMessage("message", e.getLocalizedMessage());
				
				//return jsonObject(jsonResponse);
				return json;
			}
				
		}
}
