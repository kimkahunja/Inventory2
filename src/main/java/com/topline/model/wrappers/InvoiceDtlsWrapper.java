package com.topline.model.wrappers;

import java.util.Date;

import com.topline.model.InvoiceDtls;

public class InvoiceDtlsWrapper extends InvoiceDtls {
	private String _purdPdtCode;
	private String invInvono;
	private Date invDate;
	private Integer invAccCode;
	private String _purAccCode;
	 private String _postable;
	public String get_purdPdtCode() {
		return _purdPdtCode;
	}

	public void set_purdPdtCode(String _purdPdtCode) {
		this._purdPdtCode = _purdPdtCode;
	}

	public String getInvInvono() {
		return invInvono;
	}

	public void setInvInvono(String invInvono) {
		this.invInvono = invInvono;
	}

	public Date getInvDate() {
		return invDate;
	}

	public void setInvDate(Date invDate) {
		this.invDate = invDate;
	}

	public Integer getInvAccCode() {
		return invAccCode;
	}

	public void setInvAccCode(Integer invAccCode) {
		this.invAccCode = invAccCode;
	}

	public String get_purAccCode() {
		return _purAccCode;
	}

	public void set_purAccCode(String _purAccCode) {
		this._purAccCode = _purAccCode;
	}

	public String get_postable() {
		return _postable;
	}

	public void set_postable(String _postable) {
		this._postable = _postable;
	}
	
}
