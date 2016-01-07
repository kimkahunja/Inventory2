package com.topline.model;

import java.math.BigDecimal;
import java.util.Date;

public class Products {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Integer pdtCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_sht_desc
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtShtDesc;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_description
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtDescription;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_unt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Integer pdtUntCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_loc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Integer pdtLocCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_sloc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Integer pdtSlocCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_cat_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Integer pdtCatCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_min_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Double pdtMinLevel;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_max_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Double pdtMaxLevel;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_bp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private BigDecimal pdtBp;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_sp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private BigDecimal pdtSp;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_profit_pct
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Double pdtProfitPct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_vat_id
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtVatId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_status
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtStatus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_strength
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtStrength;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_current_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Double pdtCurrentQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_amount
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private BigDecimal pdtAmount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_op_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Double pdtOpQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_delete_by
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private String pdtDeleteBy;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_products.pdt_delete_date
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    private Date pdtDeleteDate;
    private String pdtMergeQty;
    public String getPdtMergeQty() {
		return pdtMergeQty;
	}

	public void setPdtMergeQty(String pdtMergeQty) {
		this.pdtMergeQty = pdtMergeQty;
	}

	/**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_code
     *
     * @return the value of inv_products.pdt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Integer getPdtCode() {
        return pdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_code
     *
     * @param pdtCode the value for inv_products.pdt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtCode(Integer pdtCode) {
        this.pdtCode = pdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_sht_desc
     *
     * @return the value of inv_products.pdt_sht_desc
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtShtDesc() {
        return pdtShtDesc;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_sht_desc
     *
     * @param pdtShtDesc the value for inv_products.pdt_sht_desc
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtShtDesc(String pdtShtDesc) {
        this.pdtShtDesc = pdtShtDesc == null ? null : pdtShtDesc.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_description
     *
     * @return the value of inv_products.pdt_description
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtDescription() {
        return pdtDescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_description
     *
     * @param pdtDescription the value for inv_products.pdt_description
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtDescription(String pdtDescription) {
        this.pdtDescription = pdtDescription == null ? null : pdtDescription.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_unt_code
     *
     * @return the value of inv_products.pdt_unt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Integer getPdtUntCode() {
        return pdtUntCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_unt_code
     *
     * @param pdtUntCode the value for inv_products.pdt_unt_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtUntCode(Integer pdtUntCode) {
        this.pdtUntCode = pdtUntCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_loc_code
     *
     * @return the value of inv_products.pdt_loc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Integer getPdtLocCode() {
        return pdtLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_loc_code
     *
     * @param pdtLocCode the value for inv_products.pdt_loc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtLocCode(Integer pdtLocCode) {
        this.pdtLocCode = pdtLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_sloc_code
     *
     * @return the value of inv_products.pdt_sloc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Integer getPdtSlocCode() {
        return pdtSlocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_sloc_code
     *
     * @param pdtSlocCode the value for inv_products.pdt_sloc_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtSlocCode(Integer pdtSlocCode) {
        this.pdtSlocCode = pdtSlocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_cat_code
     *
     * @return the value of inv_products.pdt_cat_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Integer getPdtCatCode() {
        return pdtCatCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_cat_code
     *
     * @param pdtCatCode the value for inv_products.pdt_cat_code
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtCatCode(Integer pdtCatCode) {
        this.pdtCatCode = pdtCatCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_min_level
     *
     * @return the value of inv_products.pdt_min_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Double getPdtMinLevel() {
        return pdtMinLevel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_min_level
     *
     * @param pdtMinLevel the value for inv_products.pdt_min_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtMinLevel(Double pdtMinLevel) {
        this.pdtMinLevel = pdtMinLevel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_max_level
     *
     * @return the value of inv_products.pdt_max_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Double getPdtMaxLevel() {
        return pdtMaxLevel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_max_level
     *
     * @param pdtMaxLevel the value for inv_products.pdt_max_level
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtMaxLevel(Double pdtMaxLevel) {
        this.pdtMaxLevel = pdtMaxLevel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_bp
     *
     * @return the value of inv_products.pdt_bp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public BigDecimal getPdtBp() {
        return pdtBp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_bp
     *
     * @param pdtBp the value for inv_products.pdt_bp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtBp(BigDecimal pdtBp) {
        this.pdtBp = pdtBp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_sp
     *
     * @return the value of inv_products.pdt_sp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public BigDecimal getPdtSp() {
        return pdtSp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_sp
     *
     * @param pdtSp the value for inv_products.pdt_sp
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtSp(BigDecimal pdtSp) {
        this.pdtSp = pdtSp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_profit_pct
     *
     * @return the value of inv_products.pdt_profit_pct
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Double getPdtProfitPct() {
        return pdtProfitPct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_profit_pct
     *
     * @param pdtProfitPct the value for inv_products.pdt_profit_pct
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtProfitPct(Double pdtProfitPct) {
        this.pdtProfitPct = pdtProfitPct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_vat_id
     *
     * @return the value of inv_products.pdt_vat_id
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtVatId() {
        return pdtVatId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_vat_id
     *
     * @param pdtVatId the value for inv_products.pdt_vat_id
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtVatId(String pdtVatId) {
        this.pdtVatId = pdtVatId == null ? null : pdtVatId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_status
     *
     * @return the value of inv_products.pdt_status
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtStatus() {
        return pdtStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_status
     *
     * @param pdtStatus the value for inv_products.pdt_status
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtStatus(String pdtStatus) {
        this.pdtStatus = pdtStatus == null ? null : pdtStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_strength
     *
     * @return the value of inv_products.pdt_strength
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtStrength() {
        return pdtStrength;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_strength
     *
     * @param pdtStrength the value for inv_products.pdt_strength
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtStrength(String pdtStrength) {
        this.pdtStrength = pdtStrength == null ? null : pdtStrength.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_current_qty
     *
     * @return the value of inv_products.pdt_current_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Double getPdtCurrentQty() {
        return pdtCurrentQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_current_qty
     *
     * @param pdtCurrentQty the value for inv_products.pdt_current_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtCurrentQty(Double pdtCurrentQty) {
        this.pdtCurrentQty = pdtCurrentQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_amount
     *
     * @return the value of inv_products.pdt_amount
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public BigDecimal getPdtAmount() {
        return pdtAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_amount
     *
     * @param pdtAmount the value for inv_products.pdt_amount
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtAmount(BigDecimal pdtAmount) {
        this.pdtAmount = pdtAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_op_qty
     *
     * @return the value of inv_products.pdt_op_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Double getPdtOpQty() {
        return pdtOpQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_op_qty
     *
     * @param pdtOpQty the value for inv_products.pdt_op_qty
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtOpQty(Double pdtOpQty) {
        this.pdtOpQty = pdtOpQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_delete_by
     *
     * @return the value of inv_products.pdt_delete_by
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public String getPdtDeleteBy() {
        return pdtDeleteBy;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_delete_by
     *
     * @param pdtDeleteBy the value for inv_products.pdt_delete_by
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtDeleteBy(String pdtDeleteBy) {
        this.pdtDeleteBy = pdtDeleteBy == null ? null : pdtDeleteBy.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_products.pdt_delete_date
     *
     * @return the value of inv_products.pdt_delete_date
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public Date getPdtDeleteDate() {
        return pdtDeleteDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_products.pdt_delete_date
     *
     * @param pdtDeleteDate the value for inv_products.pdt_delete_date
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    public void setPdtDeleteDate(Date pdtDeleteDate) {
        this.pdtDeleteDate = pdtDeleteDate;
    }
}