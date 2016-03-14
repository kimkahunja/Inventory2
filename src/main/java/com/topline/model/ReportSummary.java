package com.topline.model;

import java.math.BigDecimal;

public class ReportSummary {
	private String label;
	private BigDecimal value;
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public BigDecimal getValue() {
		return value;
	}
	public void setValue(BigDecimal value) {
		this.value = value;
	}
}
