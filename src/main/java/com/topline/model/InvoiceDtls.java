package com.topline.model;

import java.math.BigDecimal;

public class InvoiceDtls {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Integer invdId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_inv_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Integer invdInvId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_pdt_code
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Integer invdPdtCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_qty
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Double invdQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_price
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private BigDecimal invdPrice;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_tamount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private BigDecimal invdTamount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_discount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Double invdDiscount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_bonus
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private Double invdBonus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_status
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private String invdStatus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_invoice_dtls.invd_bp
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    private BigDecimal invdBp;
    private String _purdPdtCode;
    private BigDecimal total;
    
    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_id
     *
     * @return the value of inv_invoice_dtls.invd_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Integer getInvdId() {
        return invdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_id
     *
     * @param invdId the value for inv_invoice_dtls.invd_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdId(Integer invdId) {
        this.invdId = invdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_inv_id
     *
     * @return the value of inv_invoice_dtls.invd_inv_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Integer getInvdInvId() {
        return invdInvId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_inv_id
     *
     * @param invdInvId the value for inv_invoice_dtls.invd_inv_id
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdInvId(Integer invdInvId) {
        this.invdInvId = invdInvId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_pdt_code
     *
     * @return the value of inv_invoice_dtls.invd_pdt_code
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Integer getInvdPdtCode() {
        return invdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_pdt_code
     *
     * @param invdPdtCode the value for inv_invoice_dtls.invd_pdt_code
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdPdtCode(Integer invdPdtCode) {
        this.invdPdtCode = invdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_qty
     *
     * @return the value of inv_invoice_dtls.invd_qty
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Double getInvdQty() {
        return invdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_qty
     *
     * @param invdQty the value for inv_invoice_dtls.invd_qty
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdQty(Double invdQty) {
        this.invdQty = invdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_price
     *
     * @return the value of inv_invoice_dtls.invd_price
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public BigDecimal getInvdPrice() {
        return invdPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_price
     *
     * @param invdPrice the value for inv_invoice_dtls.invd_price
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdPrice(BigDecimal invdPrice) {
        this.invdPrice = invdPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_tamount
     *
     * @return the value of inv_invoice_dtls.invd_tamount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public BigDecimal getInvdTamount() {
        return invdTamount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_tamount
     *
     * @param invdTamount the value for inv_invoice_dtls.invd_tamount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdTamount(BigDecimal invdTamount) {
        this.invdTamount = invdTamount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_discount
     *
     * @return the value of inv_invoice_dtls.invd_discount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Double getInvdDiscount() {
        return invdDiscount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_discount
     *
     * @param invdDiscount the value for inv_invoice_dtls.invd_discount
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdDiscount(Double invdDiscount) {
        this.invdDiscount = invdDiscount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_bonus
     *
     * @return the value of inv_invoice_dtls.invd_bonus
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public Double getInvdBonus() {
        return invdBonus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_bonus
     *
     * @param invdBonus the value for inv_invoice_dtls.invd_bonus
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdBonus(Double invdBonus) {
        this.invdBonus = invdBonus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_status
     *
     * @return the value of inv_invoice_dtls.invd_status
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public String getInvdStatus() {
        return invdStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_status
     *
     * @param invdStatus the value for inv_invoice_dtls.invd_status
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdStatus(String invdStatus) {
        this.invdStatus = invdStatus == null ? null : invdStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_invoice_dtls.invd_bp
     *
     * @return the value of inv_invoice_dtls.invd_bp
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public BigDecimal getInvdBp() {
        return invdBp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_invoice_dtls.invd_bp
     *
     * @param invdBp the value for inv_invoice_dtls.invd_bp
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    public void setInvdBp(BigDecimal invdBp) {
        this.invdBp = invdBp;
    }

	public String get_purdPdtCode() {
		return _purdPdtCode;
	}

	public void set_purdPdtCode(String _purdPdtCode) {
		this._purdPdtCode = _purdPdtCode;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
    
}