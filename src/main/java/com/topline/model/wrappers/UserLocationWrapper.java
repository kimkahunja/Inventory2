package com.topline.model.wrappers;

import com.topline.model.UserLocation;

public class UserLocationWrapper extends UserLocation {
	private String _eligible;
	private String locShtDesc;
	private String locDescription;
	
	public String getLocShtDesc() {
		return locShtDesc;
	}

	public void setLocShtDesc(String locShtDesc) {
		this.locShtDesc = locShtDesc;
	}

	public String getLocDescription() {
		return locDescription;
	}

	public void setLocDescription(String locDescription) {
		this.locDescription = locDescription;
	}

	public String get_eligible() {
		return _eligible;
	}

	public void set_eligible(String _eligible) {
		this._eligible = _eligible;
	}
	
}
