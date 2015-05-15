package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Categories;
import com.topline.model.CategoriesExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/Categories")
public class CategoryController extends BaseController {
	//save Category
	@RequestMapping(value="/saveCategory.action", method=RequestMethod.POST)
	private @ResponseBody StandardJsonResponse saveCategory(HttpServletRequest request){
		System.out.println("save category action...");
		try{
			
			String catCode=GlobalCC.CheckNullValues(request.getParameter("catCode"));
			String catShtDesc=GlobalCC.CheckNullValues(request.getParameter("catShtDesc"));
			String catDescription=GlobalCC.CheckNullValues(request.getParameter("catDescription"));
			
			Categories categories=new Categories();
			categories.setCatCode(catCode==null?null:Integer.parseInt(catCode));
			categories.setCatShtDesc(catShtDesc);
			categories.setCatDescription(catDescription);
			
			if (catCode == null) {				
				categoryMapper.insert(categories);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			} else {
				System.out.println("Inside update");
				categoryMapper.updateByPrimaryKey(categories);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setSuccess(true);	
			
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
	        
			return jsonResponse;
		}
		catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonResponse;
		}
		
	}
	//fetch categories
	@RequestMapping(value="/fetchCategories.action", method=RequestMethod.GET)
	private @ResponseBody
	StandardJsonResponse fetchCategories(HttpServletRequest request){
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
				data.put("total", count);
			}
			data.put("results", list);
			jsonResponse.setData(data);
			
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
	        
			return jsonResponse;
		}
		catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonResponse;	
		}
			
	}
	//delete category
	@RequestMapping(value="/deleteCategory.action")
	private @ResponseBody
	StandardJsonResponse deleteCategory(HttpServletRequest request){
		try{
			String catCode=GlobalCC.CheckNullValues(request.getParameter("catCode"));
			if(catCode!=null){
				categoryMapper.deleteByPrimaryKey(Integer.parseInt(catCode));
				jsonResponse.setSuccess(true);
				jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);
			
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
	        
			return jsonResponse;
		}
		catch (DataIntegrityViolationException ex) {
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(ex);
			jsonResponse.addMessage("message",
					"The Categories has Dependencies it cannot be Deleted");
			return jsonResponse;

		}
		catch(Exception e){
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(e.getLocalizedMessage());
			jsonResponse.addMessage(
							"message",
							e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while deleting....."
									: e.getLocalizedMessage());
			return jsonResponse;
		}
			
	}
}
