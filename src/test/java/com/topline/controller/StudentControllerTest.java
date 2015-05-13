package com.topline.controller;

import org.codehaus.jackson.map.ObjectMapper;
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
	// private final String createJson = "{\"id\":%d,\"first\":\"%s\",\"last\":\"%s\"}";
	// private final String membersJson = "[{\"id\":1,\"first\":\"One\",\"last\":\"One\"},{\"id\":2,\"first\":\"Two\",\"last\":\"Two\"},{\"id\":3,\"first\":\"Three\",\"last\":\"Three\"}]";
	// private final String updatedMembersJson = "[{\"id\":1,\"first\":\"One\",\"last\":\"OneUpdated\"},{\"id\":2,\"first\":\"Two\",\"last\":\"Two\"},{\"id\":3,\"first\":\"Three\",\"last\":\"Three\"}]";
	 
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
	        //UserDomain user = new UserDomain();
	        //user.setFirstName("johnny");

	        //session.setAttribute("sessionParm",user);	       
	        this.mockMvc.perform(get("/signup")
	        .accept(MediaType.TEXT_HTML))	        
	        .andExpect(status().isOk())
	        .andExpect(view().name("test"));
	    }
	    @Test
	    public void createStudent() throws Exception {
	        Student studentObj= new Student();
	        studentObj.setEmailaddress("kim@gmail.com");
	        studentObj.setFirstname("first");
	        studentObj.setId((long)34);
	        studentObj.setLastname("last Name");
	        studentObj.setPassword("ammm");
	        studentObj.setUsername("meee");
	        studentObj.setDateofbirth(null);
	        
	        ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(studentObj);
	        System.out.println(json);
	        //session.setAttribute("sessionParm",user);	       
	        /*this.mockMvc.perform(post("/signup")	        		
	        .contentType(MediaType.APPLICATION_JSON)
	        .content(json))	        
	        .andExpect(status().isOk())
	        .andExpect(view().name("test"))	       
	        .andReturn(); */ 
	    	//final String media_type="application/json;charset=UTF-8";
	    	MockHttpServletRequestBuilder postRequest=post("/signup");
	    	postRequest=postRequest.param("id", "456");	
	    	postRequest=postRequest.param("dateofbirth", "01/12/2012");	
	    	postRequest=postRequest.param("emailaddress", "kimotho@topline.com");	
	    	postRequest=postRequest.param("firstname", "Kimotho");	
	    	postRequest=postRequest.param("lastname", "Kahunja");	
	    	postRequest=postRequest.param("password", "123456");	
	    	postRequest=postRequest.param("username", "kimkahunja");	
	    	//ResultActions resultActions=mockMvc.perform(postRequest);
	    	//resultActions.andDo(print());
	    	//resultActions.andExpect(content().contentType(MediaType.APPLICATION_JSON));
	    	//resultActions.andExpect(status().isOk());
	    }
	   /* @Test
	    public void testAWebFlow() throws Exception {
	     mockMvc.perform(post("/members").contentType(MediaType.APPLICATION_JSON).body(String.format(createJson, 1,"One","One").getBytes()))
	       .andExpect(status().isOk());
	     mockMvc.perform(post("/members").contentType(MediaType.APPLICATION_JSON).body(String.format(createJson, 2,"Two","Two").getBytes()))
	      .andExpect(status().isOk());
	     mockMvc.perform(post("/members").contentType(MediaType.APPLICATION_JSON).body(String.format(createJson, 3,"Three","Three").getBytes()))
	      .andExpect(status().isOk());
	     
	     
	     mockMvc.perform(get("/members").contentType(MediaType.APPLICATION_JSON))
	       .andExpect(status().isOk())
	       .andExpect(content().string(containsString(membersJson)));
	     
	     mockMvc.perform(put("/members").contentType(MediaType.APPLICATION_JSON).body(String.format(createJson, 1,"One","OneUpdated").getBytes()))
	      .andExpect(status().isOk());
	     
	     mockMvc.perform(get("/members").contentType(MediaType.APPLICATION_JSON))
	      .andExpect(status().isOk())
	      .andExpect(content().string(containsString(updatedMembersJson)));
	     
	     mockMvc.perform(get("/members/1").contentType(MediaType.APPLICATION_JSON))
	      .andExpect(status().isOk())
	      .andExpect(content().string(String.format(createJson, 1,"One","OneUpdated")));
	     
	     mockMvc.perform(delete("/members/1").contentType(MediaType.APPLICATION_JSON))
	      .andExpect(status().isOk());
	     
	     
	    }*/
	    
}
