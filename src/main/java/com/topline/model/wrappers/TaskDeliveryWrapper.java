package com.topline.model.wrappers;

import com.topline.model.TaskDelivery;

public class TaskDeliveryWrapper extends TaskDelivery {
	private String _tskAccCode;
	private String _tskTssgId;
	public String get_tskAccCode() {
		return _tskAccCode;
	}
	public void set_tskAccCode(String _tskAccCode) {
		this._tskAccCode = _tskAccCode;
	}
	public String get_tskTssgId() {
		return _tskTssgId;
	}
	public void set_tskTssgId(String _tskTssgId) {
		this._tskTssgId = _tskTssgId;
	}
	
}
