package com.topline.model.wrappers;

import java.math.BigDecimal;
import java.util.Date;

import com.topline.model.PurchaseDetail;

public class PurchaseDetailWrapper extends PurchaseDetail {
private String _purdPdtCode;
private String purInvono;
private Date purDate;
private BigDecimal purAccCode;
private String _purAccCode;
public String get_purdPdtCode() {
	return _purdPdtCode;
}

public void set_purdPdtCode(String _purdPdtCode) {
	this._purdPdtCode = _purdPdtCode;
}

public String getPurInvono() {
	return purInvono;
}

public void setPurInvono(String purInvono) {
	this.purInvono = purInvono;
}

public Date getPurDate() {
	return purDate;
}

public void setPurDate(Date purDate) {
	this.purDate = purDate;
}

public BigDecimal getPurAccCode() {
	return purAccCode;
}

public void setPurAccCode(BigDecimal purAccCode) {
	this.purAccCode = purAccCode;
}

public String get_purAccCode() {
	return _purAccCode;
}

public void set_purAccCode(String _purAccCode) {
	this._purAccCode = _purAccCode;
}

}
