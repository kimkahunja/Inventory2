package com.topline.model.wrappers;

import com.topline.model.Transfer;

public class TransferWrapper extends Transfer {
	private String _tnsfFromLocCode;
	private String _tnsfToLocCode;
	public String get_tnsfFromLocCode() {
		return _tnsfFromLocCode;
	}
	public void set_tnsfFromLocCode(String _tnsfFromLocCode) {
		this._tnsfFromLocCode = _tnsfFromLocCode;
	}
	public String get_tnsfToLocCode() {
		return _tnsfToLocCode;
	}
	public void set_tnsfToLocCode(String _tnsfToLocCode) {
		this._tnsfToLocCode = _tnsfToLocCode;
	}
	
}
