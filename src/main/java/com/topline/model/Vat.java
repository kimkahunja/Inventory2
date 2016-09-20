package com.topline.model;

import java.util.Date;

public class Vat {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_vat.VAT_ID
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    private String vatId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_vat.VAT_RATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    private Double vatRate;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_vat.VAT_DATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    private Date vatDate;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_vat.VAT_DESCRIPTION
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    private String vatDescription;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_vat.VAT_ID
     *
     * @return the value of inv_vat.VAT_ID
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public String getVatId() {
        return vatId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_vat.VAT_ID
     *
     * @param vatId the value for inv_vat.VAT_ID
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setVatId(String vatId) {
        this.vatId = vatId == null ? null : vatId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_vat.VAT_RATE
     *
     * @return the value of inv_vat.VAT_RATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public Double getVatRate() {
        return vatRate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_vat.VAT_RATE
     *
     * @param vatRate the value for inv_vat.VAT_RATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setVatRate(Double vatRate) {
        this.vatRate = vatRate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_vat.VAT_DATE
     *
     * @return the value of inv_vat.VAT_DATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public Date getVatDate() {
        return vatDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_vat.VAT_DATE
     *
     * @param vatDate the value for inv_vat.VAT_DATE
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setVatDate(Date vatDate) {
        this.vatDate = vatDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_vat.VAT_DESCRIPTION
     *
     * @return the value of inv_vat.VAT_DESCRIPTION
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public String getVatDescription() {
        return vatDescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_vat.VAT_DESCRIPTION
     *
     * @param vatDescription the value for inv_vat.VAT_DESCRIPTION
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setVatDescription(String vatDescription) {
        this.vatDescription = vatDescription == null ? null : vatDescription.trim();
    }
}