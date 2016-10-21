package com.topline.model.wrappers;

import java.math.BigDecimal;
import java.util.Date;

import com.topline.model.CreditSaleDtl;

public class CreditSaleDtlWrapper extends CreditSaleDtl {
	private String _invInvono;
	private String _invRefno;
	private Date _invDate;
	private BigDecimal _amount;
	private BigDecimal _balance;
	public String get_invInvono() {
		return _invInvono;
	}
	public void set_invInvono(String _invInvono) {
		this._invInvono = _invInvono;
	}
	public String get_invRefno() {
		return _invRefno;
	}
	public void set_invRefno(String _invRefno) {
		this._invRefno = _invRefno;
	}
	public Date get_invDate() {
		return _invDate;
	}
	public void set_invDate(Date _invDate) {
		this._invDate = _invDate;
	}
	public BigDecimal get_amount() {
		return _amount;
	}
	public void set_amount(BigDecimal _amount) {
		this._amount = _amount;
	}
	public BigDecimal get_balance() {
		return _balance;
	}
	public void set_balance(BigDecimal _balance) {
		this._balance = _balance;
	}
	
}
