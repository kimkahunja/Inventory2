package com.topline.controller;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.topline.mappers.StudentMapper;
import com.topline.web.StandardJsonResponse;

public class BaseController extends MultiActionController {
	@Autowired(required=true)
	protected StandardJsonResponse jsonResponse;
	protected final Log logger = LogFactory.getLog(getClass());
	
	public   final String  SAVED_SUCCESSFULLY ="RECORD SAVED SUCCESSFULLY";
	public   final String  UPDATED_SUCCESSFULLY ="RECORD UPDATED SUCCESSFULLY";
	public   final String  DELETED_SUCCESSFULLY ="RECORD DELETED SUCCESSFULLY";
	
	@Autowired(required=true)
	StudentMapper studentMapper;
	
	
}
