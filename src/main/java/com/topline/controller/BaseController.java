package com.topline.controller;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.topline.mappers.CategoriesMapper;
import com.topline.mappers.LocationsMapper;
import com.topline.mappers.ProductsMapper;
import com.topline.mappers.StudentMapper;
import com.topline.mappers.SubLocationsMapper;
import com.topline.mappers.UnitsMapper;
import com.topline.mappers.VatMapper;
import com.topline.model.wrappers.SubLocationWrapper;
import com.topline.web.StandardJsonResponse;

public class BaseController extends MultiActionController {
	@Autowired(required=true)
	protected StandardJsonResponse jsonResponse;
	protected final Log logger = LogFactory.getLog(getClass());
	
	public   final String  SAVED_SUCCESSFULLY ="Record Successfully Saved...";
	public   final String  UPDATED_SUCCESSFULLY ="Record Successfully Updated...";
	public   final String  DELETED_SUCCESSFULLY ="Record Successfully Deleted...";
	
	@Autowired(required=true)
	StudentMapper studentMapper;
	@Autowired(required=true)
	CategoriesMapper categoryMapper;
	@Autowired(required=true)
	LocationsMapper  locationMapper;
	@Autowired(required=true)
	ProductsMapper productMapper;
	@Autowired(required=true)
	SubLocationsMapper subLocationMapper;
	@Autowired(required=true)
	UnitsMapper unitMapper;
	@Autowired(required=true)
	VatMapper vatMapper;
}
