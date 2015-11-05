package com.topline.model.wrappers;

import com.topline.model.Invoice;

public class InvoiceWrapper extends Invoice {
	private String _purAccCode;

	public String get_purAccCode() {
		return _purAccCode;
	}

	public void set_purAccCode(String _purAccCode) {
		this._purAccCode = _purAccCode;
	}
	
}
