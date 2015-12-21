package com.topline.model.wrappers;

import com.topline.model.User;

public class UserWrapper extends User {
	private String _location;

	public String get_location() {
		return _location;
	}

	public void set_location(String _location) {
		this._location = _location;
	}
	
}
