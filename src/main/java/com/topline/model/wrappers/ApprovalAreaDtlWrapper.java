package com.topline.model.wrappers;

import com.topline.model.ApprovalAreaDtl;

public class ApprovalAreaDtlWrapper extends ApprovalAreaDtl {
	private String _eligible;
	private Integer appvCode;
	private String appvShtDesc;
	private String appvDescription;
	public String get_eligible() {
		return _eligible;
	}
	public void set_eligible(String _eligible) {
		this._eligible = _eligible;
	}
	public Integer getAppvCode() {
		return appvCode;
	}
	public void setAppvCode(Integer appvCode) {
		this.appvCode = appvCode;
	}
	public String getAppvShtDesc() {
		return appvShtDesc;
	}
	public void setAppvShtDesc(String appvShtDesc) {
		this.appvShtDesc = appvShtDesc;
	}
	public String getAppvDescription() {
		return appvDescription;
	}
	public void setAppvDescription(String appvDescription) {
		this.appvDescription = appvDescription;
	}
	
}
