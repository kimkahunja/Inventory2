package com.topline.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;




import com.topline.model.Menu;
import com.topline.model.MenuExample;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/menu")
public class MenuController extends BaseController{
	//fetch Menu
		@RequestMapping(value="/fetchMenu.action", method=RequestMethod.GET)
		private @ResponseBody
		String fetchMenu(HttpServletRequest request){
			
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
				MenuExample menuExample=new MenuExample();
				menuExample.createCriteria().
				List<Menu>list=menuMapper.selectByExample(menuExample);
				
				
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				data.put("data", list);
				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);
				
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
