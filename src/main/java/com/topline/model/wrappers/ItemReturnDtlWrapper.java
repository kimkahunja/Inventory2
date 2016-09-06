package com.topline.model.wrappers;

import java.math.BigDecimal;

import com.topline.model.ItemReturnDtl;

public class ItemReturnDtlWrapper extends ItemReturnDtl {
	private String _rtndPdtCode;
	private BigDecimal total;

	public String get_rtndPdtCode() {
		return _rtndPdtCode;
	}

	public void set_rtndPdtCode(String _rtndPdtCode) {
		this._rtndPdtCode = _rtndPdtCode;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
}
