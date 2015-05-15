package com.topline.controller;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableWebMvc
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({ "classpath:config/springConfig.xml" })
public class CategoryControllerTest {
	@Autowired 
	 WebApplicationContext wac; 
	    @Autowired 
	    MockHttpSession session;
	    @Autowired 
	    MockHttpServletRequest request;

	    private MockMvc mockMvc;

	    @Before
	    public void setup() {
	        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	    }
	    @Test
	    public void insertCategory() throws Exception{
	    	MockHttpServletRequestBuilder postRequest=post("/Categories/saveCategory.action");
	    	//postRequest=postRequest.param("catCode", null);
	    	postRequest=postRequest.param("catShtDesc", "TEST");
	    	postRequest=postRequest.param("catDescription", "TEST DESCRIPTION");
	    	ResultActions resultActions=mockMvc.perform(postRequest);
	    }
	    @Test
	    public void updateCategory() throws Exception{
	    	MockHttpServletRequestBuilder postRequest=post("/Categories/saveCategory.action");
	    	postRequest=postRequest.param("catCode", "1");
	    	postRequest=postRequest.param("catShtDesc", "TEST");
	    	postRequest=postRequest.param("catDescription", "TEST DESCRIPTION");
	    	ResultActions resultActions=mockMvc.perform(postRequest);
	    }
	    @Test
	    public void fetchCategories() throws Exception {
	        	       
	        this.mockMvc.perform(get("/Categories/fetchCategories.action")
	        .accept(MediaType.TEXT_HTML))	        
	        .andExpect(status().isOk())
	        .andExpect(view().name("test"));
	    }
	    @Test
	    public void deleteCategory() throws Exception{
	    	MockHttpServletRequestBuilder postRequest=post("/Categories/deleteCategory.action");
	    	postRequest=postRequest.param("catCode", "1");
	    	ResultActions resultActions=mockMvc.perform(postRequest);
	    }
}
