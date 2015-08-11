package com.topline.utils;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import com.topline.web.StandardJsonResponse;

public class JsonAwareAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {
	@Autowired(required=true)
	StandardJsonResponse jsonResponse;
	
	@Autowired(required=true)
	protected ObjectMapper objectMapper;
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {

		// If not a JSON request, use the parent handler
		if (!request.getParameter("requestTransportType").equals("json")) {
			super.onAuthenticationFailure(request, response, exception);

			return;
		}
		
		logger.info("Sending back login failure json response", exception);
		
		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
		Writer responseWriter = responseWrapper.getWriter();
		
		jsonResponse.setSuccess(false);
		jsonResponse.addMessage("mainMessage", "Please make sure you have entered the correct email and password");
		jsonResponse.addError("mainError", exception.getMessage());
		jsonResponse.setTargetUrl("");
		
		objectMapper.writeValue(responseWriter, jsonResponse);
		
		responseWriter.close();
	}
}
