package com.topline.model;

public class Units {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_units.unt_code
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    private Integer untCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_units.unt_sht_desc
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    private String untShtDesc;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_units.unt_description
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    private String untDescription;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_units.unt_precision
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    private Double untPrecision;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_units.unt_code
     *
     * @return the value of inv_units.unt_code
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public Integer getUntCode() {
        return untCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_units.unt_code
     *
     * @param untCode the value for inv_units.unt_code
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setUntCode(Integer untCode) {
        this.untCode = untCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_units.unt_sht_desc
     *
     * @return the value of inv_units.unt_sht_desc
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public String getUntShtDesc() {
        return untShtDesc;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_units.unt_sht_desc
     *
     * @param untShtDesc the value for inv_units.unt_sht_desc
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setUntShtDesc(String untShtDesc) {
        this.untShtDesc = untShtDesc == null ? null : untShtDesc.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_units.unt_description
     *
     * @return the value of inv_units.unt_description
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public String getUntDescription() {
        return untDescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_units.unt_description
     *
     * @param untDescription the value for inv_units.unt_description
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setUntDescription(String untDescription) {
        this.untDescription = untDescription == null ? null : untDescription.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_units.unt_precision
     *
     * @return the value of inv_units.unt_precision
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public Double getUntPrecision() {
        return untPrecision;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_units.unt_precision
     *
     * @param untPrecision the value for inv_units.unt_precision
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setUntPrecision(Double untPrecision) {
        this.untPrecision = untPrecision;
    }
}