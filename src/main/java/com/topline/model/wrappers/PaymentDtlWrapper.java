package com.topline.model.wrappers;

import java.math.BigDecimal;
import java.util.Date;

import com.topline.model.PaymentDtl;

public class PaymentDtlWrapper extends PaymentDtl {
	private String _purInvono;
	private Date _purDate;
	private BigDecimal _amount;
	private BigDecimal _balance;
	public String get_purInvono() {
		return _purInvono;
	}
	public void set_purInvono(String _purInvono) {
		this._purInvono = _purInvono;
	}
	public Date get_purDate() {
		return _purDate;
	}
	public void set_purDate(Date _purDate) {
		this._purDate = _purDate;
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
