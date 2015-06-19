package com.topline.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;






import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import sun.misc.IOUtils;

import com.topline.model.Categories;
import com.topline.model.CategoriesExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/Categories")
public class CategoryController extends BaseController {
	//save Category
	@RequestMapping(value="/saveCategory.action")
	private @ResponseBody String saveCategory(HttpServletRequest request){
		
		
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			Categories categories=mapper.readValue(data, Categories.class);
			//System.out.println(" data "+data);		
			
			if (categories.getCatCode() == null) {				
				categoryMapper.insert(categories);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			} else {
				System.out.println("Inside update");
				categoryMapper.updateByPrimaryKey(categories);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
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
	//fetch categories
	@RequestMapping(value="/fetchCategories.action", method=RequestMethod.GET)
	private @ResponseBody
	String fetchCategories(HttpServletRequest request){
		
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
			CategoriesExample categoriesExample=new CategoriesExample();
			List<Categories>list=categoryMapper.selectByExample(categoriesExample);
			
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			System.out.println(jsonObject(jsonResponse));
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
	//delete category
	@RequestMapping(value="/deleteCategory.action")
	private @ResponseBody
	String deleteCategory(HttpServletRequest request){
		
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			Categories categories=mapper.readValue(data, Categories.class);
			
			if(categories.getCatCode()!=null){
				categoryMapper.deleteByPrimaryKey(categories.getCatCode());
				jsonResponse.setSuccess(true);
				jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);
		

			return jsonObject(jsonResponse);
		}
		catch (DataIntegrityViolationException ex) {
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(ex);
			jsonResponse.addMessage("message",
					"The Category has Dependencies it cannot be Deleted");

			return jsonObject(jsonResponse);

		}
		catch(Exception e){
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(e.getLocalizedMessage());
			jsonResponse.addMessage(
							"message",
							e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while deleting....."
									: e.getLocalizedMessage());

			return jsonObject(jsonResponse);
		}
			
	}
}
