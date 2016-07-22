package com.topline.model.wrappers;

import java.util.Date;

import com.topline.model.TransferDtl;

public class TransferDtlWrapper extends TransferDtl {
	private String _tnsfdPdtCode;
	private String _tnsfFromLocCode;
	private String _tnsfToLocCode;
	private String tnsfType;
	private Date tnsfDate;
	private String tnsfStatus;
	public String get_tnsfdPdtCode() {
		return _tnsfdPdtCode;
	}

	public void set_tnsfdPdtCode(String _tnsfdPdtCode) {
		this._tnsfdPdtCode = _tnsfdPdtCode;
	}

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

	public String getTnsfType() {
		return tnsfType;
	}

	public void setTnsfType(String tnsfType) {
		this.tnsfType = tnsfType;
	}

	public Date getTnsfDate() {
		return tnsfDate;
	}

	public void setTnsfDate(Date tnsfDate) {
		this.tnsfDate = tnsfDate;
	}

	public String getTnsfStatus() {
		return tnsfStatus;
	}

	public void setTnsfStatus(String tnsfStatus) {
		this.tnsfStatus = tnsfStatus;
	}
	
}
