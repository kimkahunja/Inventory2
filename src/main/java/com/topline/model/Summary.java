package com.topline.model;

import java.math.BigDecimal;

public class Summary {
	private BigDecimal myCount;
	private BigDecimal mySummary;
	public BigDecimal getMyCount() {
		return myCount;
	}
	public void setMyCount(BigDecimal myCount) {
		this.myCount = myCount;
	}
	public BigDecimal getMySummary() {
		return mySummary;
	}
	public void setMySummary(BigDecimal mySummary) {
		this.mySummary = mySummary;
	}
}
