package com.topline.utils;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import com.topline.web.StandardJsonResponse;

public class JsonAwareLogoutSuccessHandler extends SimpleUrlLogoutSuccessHandler {
	@Autowired(required=true)
	StandardJsonResponse jsonResponse;
	
	@Autowired(required=true)
	protected ObjectMapper objectMapper;
	
	@Override
	public void onLogoutSuccess(HttpServletRequest request,
			HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		
		// If not a JSON request, use the parent handler
		if (request.getParameter("requestTransportType") == null || !request.getParameter("requestTransportType").equals("json")) {
			super.onLogoutSuccess(request, response, authentication);
        //     request.getSession().removeAttribute("USER_ID");
			return;
		}
		
		String targetUrl = super.determineTargetUrl(request, response);
		
		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(
				response);
		Writer responseWriter = responseWrapper.getWriter();
		
		jsonResponse.setSuccess(true);
		jsonResponse.addMessage("mainMessage", "Sign out Successful");
		jsonResponse.setTargetUrl(targetUrl);
		
		objectMapper.writeValue(responseWriter, jsonResponse);
		
		responseWriter.close();
	}
}
