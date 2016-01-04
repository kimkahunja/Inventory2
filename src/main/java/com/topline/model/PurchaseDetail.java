package com.topline.model;

import java.math.BigDecimal;
import java.util.Date;

public class PurchaseDetail {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Integer purdId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_pur_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Integer purdPurId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_pdt_code
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Integer purdPdtCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Double purdQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private BigDecimal purdPrice;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_tamount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private BigDecimal purdTamount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_discount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Double purdDiscount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_bonus
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Double purdBonus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_status
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private String purdStatus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_previous_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Double purdPreviousQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_remarks
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private String purdRemarks;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_mtrade_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private BigDecimal purdMtradePrice;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_purchases_details.purd_expiry_dt
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private Date purdExpiryDt;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_id
     *
     * @return the value of inv_purchases_details.purd_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    private String _purdPdtCode;
    private BigDecimal total;
    private String purdSerialNo;
    public String getPurdSerialNo() {
		return purdSerialNo;
	}

	public void setPurdSerialNo(String purdSerialNo) {
		this.purdSerialNo = purdSerialNo;
	}

	public Integer getPurdId() {
        return purdId;
    }

    public String get_purdPdtCode() {
		return _purdPdtCode;
	}

	public void set_purdPdtCode(String _purdPdtCode) {
		this._purdPdtCode = _purdPdtCode;
	}

	/**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_id
     *
     * @param purdId the value for inv_purchases_details.purd_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdId(Integer purdId) {
        this.purdId = purdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_pur_id
     *
     * @return the value of inv_purchases_details.purd_pur_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Integer getPurdPurId() {
        return purdPurId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_pur_id
     *
     * @param purdPurId the value for inv_purchases_details.purd_pur_id
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdPurId(Integer purdPurId) {
        this.purdPurId = purdPurId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_pdt_code
     *
     * @return the value of inv_purchases_details.purd_pdt_code
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Integer getPurdPdtCode() {
        return purdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_pdt_code
     *
     * @param purdPdtCode the value for inv_purchases_details.purd_pdt_code
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdPdtCode(Integer purdPdtCode) {
        this.purdPdtCode = purdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_qty
     *
     * @return the value of inv_purchases_details.purd_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Double getPurdQty() {
        return purdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_qty
     *
     * @param purdQty the value for inv_purchases_details.purd_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdQty(Double purdQty) {
        this.purdQty = purdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_price
     *
     * @return the value of inv_purchases_details.purd_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public BigDecimal getPurdPrice() {
        return purdPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_price
     *
     * @param purdPrice the value for inv_purchases_details.purd_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdPrice(BigDecimal purdPrice) {
        this.purdPrice = purdPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_tamount
     *
     * @return the value of inv_purchases_details.purd_tamount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public BigDecimal getPurdTamount() {
        return purdTamount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_tamount
     *
     * @param purdTamount the value for inv_purchases_details.purd_tamount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdTamount(BigDecimal purdTamount) {
        this.purdTamount = purdTamount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_discount
     *
     * @return the value of inv_purchases_details.purd_discount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Double getPurdDiscount() {
        return purdDiscount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_discount
     *
     * @param purdDiscount the value for inv_purchases_details.purd_discount
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdDiscount(Double purdDiscount) {
        this.purdDiscount = purdDiscount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_bonus
     *
     * @return the value of inv_purchases_details.purd_bonus
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Double getPurdBonus() {
        return purdBonus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_bonus
     *
     * @param purdBonus the value for inv_purchases_details.purd_bonus
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdBonus(Double purdBonus) {
        this.purdBonus = purdBonus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_status
     *
     * @return the value of inv_purchases_details.purd_status
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public String getPurdStatus() {
        return purdStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_status
     *
     * @param purdStatus the value for inv_purchases_details.purd_status
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdStatus(String purdStatus) {
        this.purdStatus = purdStatus == null ? null : purdStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_previous_qty
     *
     * @return the value of inv_purchases_details.purd_previous_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Double getPurdPreviousQty() {
        return purdPreviousQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_previous_qty
     *
     * @param purdPreviousQty the value for inv_purchases_details.purd_previous_qty
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdPreviousQty(Double purdPreviousQty) {
        this.purdPreviousQty = purdPreviousQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_remarks
     *
     * @return the value of inv_purchases_details.purd_remarks
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public String getPurdRemarks() {
        return purdRemarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_remarks
     *
     * @param purdRemarks the value for inv_purchases_details.purd_remarks
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdRemarks(String purdRemarks) {
        this.purdRemarks = purdRemarks == null ? null : purdRemarks.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_mtrade_price
     *
     * @return the value of inv_purchases_details.purd_mtrade_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public BigDecimal getPurdMtradePrice() {
        return purdMtradePrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_mtrade_price
     *
     * @param purdMtradePrice the value for inv_purchases_details.purd_mtrade_price
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdMtradePrice(BigDecimal purdMtradePrice) {
        this.purdMtradePrice = purdMtradePrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_purchases_details.purd_expiry_dt
     *
     * @return the value of inv_purchases_details.purd_expiry_dt
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public Date getPurdExpiryDt() {
        return purdExpiryDt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_purchases_details.purd_expiry_dt
     *
     * @param purdExpiryDt the value for inv_purchases_details.purd_expiry_dt
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    public void setPurdExpiryDt(Date purdExpiryDt) {
        this.purdExpiryDt = purdExpiryDt;
    }

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
}