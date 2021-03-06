package com.topline.model;

import java.math.BigDecimal;
import java.util.Date;

public class CreditSaleDtl {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sale_dtls.crsd_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Integer crsdId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sale_dtls.crsd_crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Integer crsdCrsId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sale_dtls.crsd_inv_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Integer crsdInvId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sale_dtls.crsd_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private BigDecimal crsdAmount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_credit_sale_dtls.crsd_updated_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    private Date crsdUpdatedOn;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sale_dtls.crsd_id
     *
     * @return the value of inv_credit_sale_dtls.crsd_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Integer getCrsdId() {
        return crsdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sale_dtls.crsd_id
     *
     * @param crsdId the value for inv_credit_sale_dtls.crsd_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsdId(Integer crsdId) {
        this.crsdId = crsdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sale_dtls.crsd_crs_id
     *
     * @return the value of inv_credit_sale_dtls.crsd_crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Integer getCrsdCrsId() {
        return crsdCrsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sale_dtls.crsd_crs_id
     *
     * @param crsdCrsId the value for inv_credit_sale_dtls.crsd_crs_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsdCrsId(Integer crsdCrsId) {
        this.crsdCrsId = crsdCrsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sale_dtls.crsd_inv_id
     *
     * @return the value of inv_credit_sale_dtls.crsd_inv_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Integer getCrsdInvId() {
        return crsdInvId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sale_dtls.crsd_inv_id
     *
     * @param crsdInvId the value for inv_credit_sale_dtls.crsd_inv_id
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsdInvId(Integer crsdInvId) {
        this.crsdInvId = crsdInvId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sale_dtls.crsd_amount
     *
     * @return the value of inv_credit_sale_dtls.crsd_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public BigDecimal getCrsdAmount() {
        return crsdAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sale_dtls.crsd_amount
     *
     * @param crsdAmount the value for inv_credit_sale_dtls.crsd_amount
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsdAmount(BigDecimal crsdAmount) {
        this.crsdAmount = crsdAmount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_credit_sale_dtls.crsd_updated_on
     *
     * @return the value of inv_credit_sale_dtls.crsd_updated_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Date getCrsdUpdatedOn() {
        return crsdUpdatedOn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_credit_sale_dtls.crsd_updated_on
     *
     * @param crsdUpdatedOn the value for inv_credit_sale_dtls.crsd_updated_on
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setCrsdUpdatedOn(Date crsdUpdatedOn) {
        this.crsdUpdatedOn = crsdUpdatedOn;
    }
}