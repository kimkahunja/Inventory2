package com.topline.model.wrappers;

import java.math.BigDecimal;

import com.topline.model.Summary;

public class InvoiceSummary extends Summary {
	private BigDecimal invdQty;

	public BigDecimal getInvdQty() {
		return invdQty;
	}

	public void setInvdQty(BigDecimal invdQty) {
		this.invdQty = invdQty;
	}
	
}
