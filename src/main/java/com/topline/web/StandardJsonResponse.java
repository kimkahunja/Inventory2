package com.topline.web;

import java.util.HashMap;

public interface StandardJsonResponse {
	
		
	public void addMessage(String field, String message);
	
	public void addError(String field, String message);
	
	public void setSuccess(boolean success);

	/**
	 * @return the success
	 */
	public boolean isSuccess();

	/**
	 * @param targetUrl the targetUrl to set
	 */
	public void setTargetUrl(String targetUrl);

	/**
	 * @return the targetUrl
	 */
	public String getTargetUrl();
	
	/**
	 * @param messages the messages to set
	 */
	public void setMessages(HashMap<String, String> messages);

	/**
	 * @return the messages
	 */
	public HashMap<String, String> getMessages();

	/**
	 * @param errors the errors to set
	 */
	public void setErrors(HashMap<String, String> errors);

	/**
	 * @return the errors
	 */
	public HashMap<String, String> getErrors();

	/**
	 * @param data the data to set
	 */
	public void setData(HashMap<String, Object> data);
	
	/**
	 * @return the data
	 */
	public HashMap<String, Object> getData();
	
}