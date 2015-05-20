package com.topline.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController extends BaseController {
	@RequestMapping("/index.action")
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	String now = (new java.util.Date()).toString();
    	Map<String, Object> myModel = new HashMap<String, Object>();    
		String path = request.getSession().getServletContext()
				.getInitParameter("jsBasePath");		
		myModel.put("path", path);
        return new ModelAndView("index","user",myModel);
    }
}
