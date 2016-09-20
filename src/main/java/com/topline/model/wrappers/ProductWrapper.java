package com.topline.model.wrappers;

import java.math.BigDecimal;
import java.util.Date;

import com.topline.model.Products;

public class ProductWrapper extends Products {
	private String _pdtUntCode;  
	private String _pdtLocCode;
	private String _pdtSlocCode;
	private String _pdtVatId;
	private String _pdtCatCode; 
	private Date purchaseDate;
	private String stkId; 
	private String prodReference;
	private BigDecimal _vatRate;
	
	public BigDecimal get_vatRate() {
		return _vatRate;
	}
	public void set_vatRate(BigDecimal _vatRate) {
		this._vatRate = _vatRate;
	}
	public String getProdReference() {
		return prodReference;
	}
	public void setProdReference(String prodReference) {
		this.prodReference = prodReference;
	}
	public String getStkId() {
		return stkId;
	}
	public void setStkId(String stkId) {
		this.stkId = stkId;
	}
	public Date getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}	
	public String get_pdtUntCode() {
		return _pdtUntCode;
	}
	public void set_pdtUntCode(String _pdtUntCode) {
		this._pdtUntCode = _pdtUntCode;
	}
	public String get_pdtLocCode() {
		return _pdtLocCode;
	}
	public void set_pdtLocCode(String _pdtLocCode) {
		this._pdtLocCode = _pdtLocCode;
	}
	public String get_pdtSlocCode() {
		return _pdtSlocCode;
	}
	public void set_pdtSlocCode(String _pdtSlocCode) {
		this._pdtSlocCode = _pdtSlocCode;
	}
	public String get_pdtVatId() {
		return _pdtVatId;
	}
	public void set_pdtVatId(String _pdtVatId) {
		this._pdtVatId = _pdtVatId;
	}
	public String get_pdtCatCode() {
		return _pdtCatCode;
	}
	public void set_pdtCatCode(String _pdtCatCode) {
		this._pdtCatCode = _pdtCatCode;
	}
	
}
