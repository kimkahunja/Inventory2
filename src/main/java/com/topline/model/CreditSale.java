package com.topline.model;

import java.math.BigDecimal;
import java.util.Date;

public class CreditSale {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Integer crsId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_acc_code
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Integer crsAccCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_date
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Date crsDate;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private BigDecimal crsAmount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_paymode
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private String crsPaymode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_paymemo
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private String crsPaymemo;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_remarks
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private String crsRemarks;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_captured_by
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private String crsCapturedBy;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sales.crs_captured_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Date crsCapturedOn;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_id
     *
     * @return the value of inv_credit_sales.crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Integer getCrsId() {
        return crsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_id
     *
     * @param crsId the value for inv_credit_sales.crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsId(Integer crsId) {
        this.crsId = crsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_acc_code
     *
     * @return the value of inv_credit_sales.crs_acc_code
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Integer getCrsAccCode() {
        return crsAccCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_acc_code
     *
     * @param crsAccCode the value for inv_credit_sales.crs_acc_code
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsAccCode(Integer crsAccCode) {
        this.crsAccCode = crsAccCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_date
     *
     * @return the value of inv_credit_sales.crs_date
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Date getCrsDate() {
        return crsDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_date
     *
     * @param crsDate the value for inv_credit_sales.crs_date
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsDate(Date crsDate) {
        this.crsDate = crsDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_amount
     *
     * @return the value of inv_credit_sales.crs_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public BigDecimal getCrsAmount() {
        return crsAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_amount
     *
     * @param crsAmount the value for inv_credit_sales.crs_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsAmount(BigDecimal crsAmount) {
        this.crsAmount = crsAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_paymode
     *
     * @return the value of inv_credit_sales.crs_paymode
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public String getCrsPaymode() {
        return crsPaymode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_paymode
     *
     * @param crsPaymode the value for inv_credit_sales.crs_paymode
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsPaymode(String crsPaymode) {
        this.crsPaymode = crsPaymode == null ? null : crsPaymode.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_paymemo
     *
     * @return the value of inv_credit_sales.crs_paymemo
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public String getCrsPaymemo() {
        return crsPaymemo;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_paymemo
     *
     * @param crsPaymemo the value for inv_credit_sales.crs_paymemo
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsPaymemo(String crsPaymemo) {
        this.crsPaymemo = crsPaymemo == null ? null : crsPaymemo.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_remarks
     *
     * @return the value of inv_credit_sales.crs_remarks
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public String getCrsRemarks() {
        return crsRemarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_remarks
     *
     * @param crsRemarks the value for inv_credit_sales.crs_remarks
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsRemarks(String crsRemarks) {
        this.crsRemarks = crsRemarks == null ? null : crsRemarks.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_captured_by
     *
     * @return the value of inv_credit_sales.crs_captured_by
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public String getCrsCapturedBy() {
        return crsCapturedBy;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_captured_by
     *
     * @param crsCapturedBy the value for inv_credit_sales.crs_captured_by
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsCapturedBy(String crsCapturedBy) {
        this.crsCapturedBy = crsCapturedBy == null ? null : crsCapturedBy.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sales.crs_captured_on
     *
     * @return the value of inv_credit_sales.crs_captured_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Date getCrsCapturedOn() {
        return crsCapturedOn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sales.crs_captured_on
     *
     * @param crsCapturedOn the value for inv_credit_sales.crs_captured_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsCapturedOn(Date crsCapturedOn) {
        this.crsCapturedOn = crsCapturedOn;
    }
}