package com.topline.controller;

import java.io.IOException;



import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
	@RequestMapping("/login.action")
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		Logger logger=Logger.getLogger(getClass());
    	String now = (new java.util.Date()).toString();

		String path = request.getSession().getServletContext()
				.getInitParameter("jsBasePath");
		
		//logger.debug("BRRRRRRRRRRRRRRRRRRRRR"+now);

		Map<String, Object> myModel = new HashMap<String, Object>();
		myModel.put("now", now);
		myModel.put("path", path);
        return new ModelAndView("login_test", myModel);
    }
}
