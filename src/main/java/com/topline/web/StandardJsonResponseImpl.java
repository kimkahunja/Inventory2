package com.topline.web;

import java.util.HashMap;

public class StandardJsonResponseImpl implements StandardJsonResponse {
	
private boolean success = false;
	
	private HashMap<String, String> messages = new HashMap<String, String>();
	
	private HashMap<String, String> errors = new HashMap<String, String>();
	
	private HashMap<String, Object> data = new HashMap<String, Object>();
	
	private String targetUrl;
		
	public void addMessage(String field, String message){
		messages.put(field, message);
	}
	
	public void addError(String field, String message){
		errors.put(field, message);
	}
	
	/**
	 * @param success the success to set
	 */
	public void setSuccess(boolean success) {
		this.success = success;
	}

	/**
	 * @return the success
	 */
	public boolean isSuccess() {
		return success;
	}

	/**
	 * @param targetUrl the targetUrl to set
	 */
	public void setTargetUrl(String targetUrl) {
		this.targetUrl = targetUrl;
	}

	/**
	 * @return the targetUrl
	 */
	public String getTargetUrl() {
		return targetUrl;
	}

	/**
	 * @param messages the messages to set
	 */
	public void setMessages(HashMap<String, String> messages) {
		this.messages = messages;
	}

	/**
	 * @return the messages
	 */
	public HashMap<String, String> getMessages() {
		return messages;
	}

	/**
	 * @param errors the errors to set
	 */
	public void setErrors(HashMap<String, String> errors) {
		this.errors = errors;
	}

	/**
	 * @return the errors
	 */
	public HashMap<String, String> getErrors() {
		return errors;
	}

	public HashMap<String, Object> getData() {
		return data;
	}

	public void setData(HashMap<String, Object> data) {
		this.data = data;
	}
}
