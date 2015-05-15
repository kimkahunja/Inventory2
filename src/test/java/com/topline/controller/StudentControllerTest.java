package com.topline.controller;

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

import com.topline.model.Student;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@EnableWebMvc
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({ "classpath:config/springConfig.xml" })
public class StudentControllerTest {

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
	    public void fetchList() throws Exception {
	        	       
	        this.mockMvc.perform(get("/signup")
	        .accept(MediaType.TEXT_HTML))	        
	        .andExpect(status().isOk())
	        .andExpect(view().name("test"));
	    }
	    @Test
	    public void createStudent() throws Exception {	        
	       
	    	MockHttpServletRequestBuilder postRequest=post("/signup");
	    	postRequest=postRequest.param("id", "456");	
	    	postRequest=postRequest.param("dateofbirth", "01/12/2012");	
	    	postRequest=postRequest.param("emailaddress", "kimotho@topline.com");	
	    	postRequest=postRequest.param("firstname", "Kimotho");	
	    	postRequest=postRequest.param("lastname", "Kahunja");	
	    	postRequest=postRequest.param("password", "123456");	
	    	postRequest=postRequest.param("username", "kimkahunja");	
	    	ResultActions resultActions=mockMvc.perform(postRequest);
	    	//resultActions.andDo(print());
	    	//resultActions.andExpect(content().contentType(MediaType.APPLICATION_JSON));
	    	//resultActions.andExpect(status().isOk());
	    }
	  
	    
}
