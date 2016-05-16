package com.topline.model;

import java.math.BigDecimal;
import java.util.Date;

public class ProductMovement {
	private BigDecimal level;
	private String type;
	private Date transDate;
	private String transRef;
	private BigDecimal pdtCode;
	private String pdtDescription;
	private BigDecimal qty;
	private BigDecimal price;
	private BigDecimal signedQty;
	private BigDecimal acctCode;
	private String acctName;
	public BigDecimal getLevel() {
		return level;
	}
	public void setLevel(BigDecimal level) {
		this.level = level;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Date getTransDate() {
		return transDate;
	}
	public void setTransDate(Date transDate) {
		this.transDate = transDate;
	}
	public String getTransRef() {
		return transRef;
	}
	public void setTransRef(String transRef) {
		this.transRef = transRef;
	}
	public BigDecimal getPdtCode() {
		return pdtCode;
	}
	public void setPdtCode(BigDecimal pdtCode) {
		this.pdtCode = pdtCode;
	}
	public String getPdtDescription() {
		return pdtDescription;
	}
	public void setPdtDescription(String pdtDescription) {
		this.pdtDescription = pdtDescription;
	}
	public BigDecimal getQty() {
		return qty;
	}
	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public BigDecimal getSignedQty() {
		return signedQty;
	}
	public void setSignedQty(BigDecimal signedQty) {
		this.signedQty = signedQty;
	}
	public BigDecimal getAcctCode() {
		return acctCode;
	}
	public void setAcctCode(BigDecimal acctCode) {
		this.acctCode = acctCode;
	}
	public String getAcctName() {
		return acctName;
	}
	public void setAcctName(String acctName) {
		this.acctName = acctName;
	}
	
}
