package com.topline.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.util.StringUtils;

import com.topline.web.StandardJsonResponse;

public class JsonAwareAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
	private boolean useReferer;
	private RequestCache requestCache = new HttpSessionRequestCache();
	SavedRequest savedRequest;
	
	@Autowired(required=true)
	StandardJsonResponse jsonResponse;
	
	@Autowired(required=true)
	protected ObjectMapper objectMapper;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws ServletException, IOException {

		// If not a JSON request, use the parent handler
		if (request.getParameter("requestTransportType") == null || !request.getParameter("requestTransportType").equals("json")) {
			super.onAuthenticationSuccess(request, response, authentication);
         
			return;
		}
		// request.getSession().setAttribute("COMPANY_ID",Integer.parseInt( request.getParameter("companyId")));
		savedRequest = requestCache.getRequest(request, response);
		
		String  targetUrl = determineTargetUrl(request, response);
		logger.debug("Sending back success json response with targetURL: " + targetUrl);
		
		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
		Writer responseWriter = responseWrapper.getWriter();
		
		jsonResponse.setSuccess(true);
		jsonResponse.addMessage("mainMessage", "Sign In Successful");
		jsonResponse.setTargetUrl(targetUrl);
		
		objectMapper.writeValue(responseWriter, jsonResponse);
		
		responseWriter.close();
	}
	
	@Override
	protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response) {
        if (isAlwaysUseDefaultTargetUrl()) {
            return getDefaultTargetUrl();
        }

        // Check for the parameter and use that if available
        String targetUrl = request.getParameter(getTargetUrlParameter());

        if (StringUtils.hasText(targetUrl)) {
            try {
                targetUrl = URLDecoder.decode(targetUrl, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                throw new IllegalStateException("UTF-8 not supported. Shouldn't be possible");
            }

            logger.debug("Found targetUrlParameter in request: " + targetUrl);

            return targetUrl;
        }
        
        //Use saved URL
        if(savedRequest != null && StringUtils.hasText(savedRequest.getRedirectUrl())) {
        	String target = savedRequest.getRedirectUrl().toLowerCase();
        	//only requests with extension html, htm or no extension should be used as targets after successful login
        	if((target.indexOf(".html") > 0) || (target.indexOf(".htm") > 0) || (target.indexOf(".") == -1  )){
	        	targetUrl = savedRequest.getRedirectUrl();
	        	return targetUrl;
        	}
        }
        
        //Use URL for referrer
        if (useReferer && !StringUtils.hasLength(targetUrl)) {
            targetUrl = request.getHeader("Referer");
            logger.debug("Using Referer header: " + targetUrl);
        }    
        	
        if (!StringUtils.hasText(targetUrl)) {
            targetUrl = getDefaultTargetUrl();
            logger.debug("Using default Url: " + targetUrl);
        }

        return targetUrl;
    }
	@Override
	public void setRequestCache(RequestCache requestCache) {
		this.requestCache = requestCache;
	}
	
	/**
	 * @return the useReferer
	 */
	public boolean isUseReferer() {
		return useReferer;
	}

	/**
	 * @param useReferer the useReferer to set
	 */
	@Override
	public void setUseReferer(boolean useReferer) {
		this.useReferer = useReferer;
	}
}
