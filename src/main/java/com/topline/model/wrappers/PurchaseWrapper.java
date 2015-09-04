package com.topline.model.wrappers;

import com.topline.model.Purchase;

public class PurchaseWrapper extends Purchase {
	private String _purAccCode;

	public String get_purAccCode() {
		return _purAccCode;
	}

	public void set_purAccCode(String _purAccCode) {
		this._purAccCode = _purAccCode;
	}
}
