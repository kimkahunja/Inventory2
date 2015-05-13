package com.topline.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Categories;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/Categories")
public class CategoryController extends BaseController {
	//save Category
	@RequestMapping(value="/saveCategory.action", method=RequestMethod.POST)
	private @ResponseBody StandardJsonResponse saveCategory(HttpServletRequest request){
		try{
			String catCode=GlobalCC.CheckNullValues(request.getParameter("catCode"));
			String catShtDesc=GlobalCC.CheckNullValues(request.getParameter("catShtDesc"));
			String catDescription=GlobalCC.CheckNullValues(request.getParameter("catDescription"));
			Categories categories=new Categories();
			categories.setCatCode(catCode);
		}
		catch(Exception e){
			
		}
		return jsonResponse;
	}
	//fetch categories
	@RequestMapping(value="/fetchCategories.action", method=RequestMethod.GET)
	private @ResponseBody
	StandardJsonResponse fetchCategories(HttpServletRequest request){
		return jsonResponse;	
	}
	//delete category
	@RequestMapping(value="/deleteCategory.action")
	private @ResponseBody
	StandardJsonResponse deleteCategory(HttpServletRequest request){
		return jsonResponse;	
	}
}
