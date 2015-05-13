package com.topline.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import com.topline.model.Student;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(loader = WebContextLoader.class, value = {
		"classpath:config/springConfig.xml"})

public class StudentControllerTest_bak {
	private static Log logger = LogFactory
			.getLog(StudentControllerTest_bak.class);

	MockHttpServletRequest requestMock;
	MockHttpServletResponse responseMock;
	RequestMappingHandlerAdapter handlerAdapter;
	ObjectMapper mapper;
	Student student;

	@Autowired
	StudentController studentController;


	@Before
	public void setUp() {
		requestMock = new MockHttpServletRequest();
		requestMock.setContentType(MediaType.APPLICATION_JSON_VALUE);
		requestMock.setAttribute(HandlerMapping.INTROSPECT_TYPE_LEVEL_MAPPING, Boolean.FALSE);
		
		responseMock = new MockHttpServletResponse();

		handlerAdapter = new RequestMappingHandlerAdapter();
		
		mapper = new ObjectMapper();
		student = new Student();
	}
	@Test
	public void testFetchList() throws Exception {
		Student loanRequest1 = new Student();		

		requestMock.setMethod("GET");
	    requestMock.setRequestURI("/signup");

	}
}
