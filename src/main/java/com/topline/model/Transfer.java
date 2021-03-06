package com.topline.model;

import java.util.Date;

public class Transfer {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_id
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private Integer tnsfId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_type
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private String tnsfType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_from_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private Integer tnsfFromLocCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_to_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private Integer tnsfToLocCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_date
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private Date tnsfDate;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_status
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private String tnsfStatus;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_captured_by
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private String tnsfCapturedBy;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_transfers.tnsf_captured_on
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    private Date tnsfCapturedOn;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_id
     *
     * @return the value of inv_transfers.tnsf_id
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public Integer getTnsfId() {
        return tnsfId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_id
     *
     * @param tnsfId the value for inv_transfers.tnsf_id
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfId(Integer tnsfId) {
        this.tnsfId = tnsfId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_type
     *
     * @return the value of inv_transfers.tnsf_type
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public String getTnsfType() {
        return tnsfType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_type
     *
     * @param tnsfType the value for inv_transfers.tnsf_type
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfType(String tnsfType) {
        this.tnsfType = tnsfType == null ? null : tnsfType.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_from_loc_code
     *
     * @return the value of inv_transfers.tnsf_from_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public Integer getTnsfFromLocCode() {
        return tnsfFromLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_from_loc_code
     *
     * @param tnsfFromLocCode the value for inv_transfers.tnsf_from_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfFromLocCode(Integer tnsfFromLocCode) {
        this.tnsfFromLocCode = tnsfFromLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_to_loc_code
     *
     * @return the value of inv_transfers.tnsf_to_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public Integer getTnsfToLocCode() {
        return tnsfToLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_to_loc_code
     *
     * @param tnsfToLocCode the value for inv_transfers.tnsf_to_loc_code
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfToLocCode(Integer tnsfToLocCode) {
        this.tnsfToLocCode = tnsfToLocCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_date
     *
     * @return the value of inv_transfers.tnsf_date
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public Date getTnsfDate() {
        return tnsfDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_date
     *
     * @param tnsfDate the value for inv_transfers.tnsf_date
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfDate(Date tnsfDate) {
        this.tnsfDate = tnsfDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_status
     *
     * @return the value of inv_transfers.tnsf_status
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public String getTnsfStatus() {
        return tnsfStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_status
     *
     * @param tnsfStatus the value for inv_transfers.tnsf_status
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfStatus(String tnsfStatus) {
        this.tnsfStatus = tnsfStatus == null ? null : tnsfStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_captured_by
     *
     * @return the value of inv_transfers.tnsf_captured_by
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public String getTnsfCapturedBy() {
        return tnsfCapturedBy;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_captured_by
     *
     * @param tnsfCapturedBy the value for inv_transfers.tnsf_captured_by
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfCapturedBy(String tnsfCapturedBy) {
        this.tnsfCapturedBy = tnsfCapturedBy == null ? null : tnsfCapturedBy.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_transfers.tnsf_captured_on
     *
     * @return the value of inv_transfers.tnsf_captured_on
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public Date getTnsfCapturedOn() {
        return tnsfCapturedOn;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_transfers.tnsf_captured_on
     *
     * @param tnsfCapturedOn the value for inv_transfers.tnsf_captured_on
     *
     * @mbggenerated Thu Feb 04 19:48:27 EAT 2016
     */
    public void setTnsfCapturedOn(Date tnsfCapturedOn) {
        this.tnsfCapturedOn = tnsfCapturedOn;
    }
}