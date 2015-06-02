package com.topline.controller;


import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.topline.mappers.CategoriesMapper;
import com.topline.mappers.GroupsMapper;
import com.topline.mappers.LocationsMapper;
import com.topline.mappers.MenuMapper;
import com.topline.mappers.PermissionsMapper;
import com.topline.mappers.ProductsMapper;
import com.topline.mappers.StudentMapper;
import com.topline.mappers.SubLocationsMapper;
import com.topline.mappers.UnitsMapper;
import com.topline.mappers.UserMapper;
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
	
	@Autowired(required=true)
	UserMapper userMapper;
	@Autowired(required=true)
	GroupsMapper groupsMapper;
	@Autowired(required=true)
	MenuMapper menuMapper;
	@Autowired(required=true)
	PermissionsMapper permissionsMapper;
	public String jsonObject(StandardJsonResponse jsonResponse){
		String json=null;
		ObjectMapper mapper = new ObjectMapper();
        try {
			json = mapper.writeValueAsString(jsonResponse);
		} catch (JsonGenerationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return json;
	}
}
