package com.topline.model;

public class ItemSwapDtl {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_item_swap_dtls.swpd_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    private Integer swpdId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_item_swap_dtls.swpd_swp_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    private Integer swpdSwpId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_item_swap_dtls.swpd_pdt_code
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    private Integer swpdPdtCode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_item_swap_dtls.swpd_qty
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    private Double swpdQty;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column inv_item_swap_dtls.swpd_orig_swap
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    private String swpdOrigSwap;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_item_swap_dtls.swpd_id
     *
     * @return the value of inv_item_swap_dtls.swpd_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public Integer getSwpdId() {
        return swpdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_item_swap_dtls.swpd_id
     *
     * @param swpdId the value for inv_item_swap_dtls.swpd_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setSwpdId(Integer swpdId) {
        this.swpdId = swpdId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_item_swap_dtls.swpd_swp_id
     *
     * @return the value of inv_item_swap_dtls.swpd_swp_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public Integer getSwpdSwpId() {
        return swpdSwpId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_item_swap_dtls.swpd_swp_id
     *
     * @param swpdSwpId the value for inv_item_swap_dtls.swpd_swp_id
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setSwpdSwpId(Integer swpdSwpId) {
        this.swpdSwpId = swpdSwpId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_item_swap_dtls.swpd_pdt_code
     *
     * @return the value of inv_item_swap_dtls.swpd_pdt_code
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public Integer getSwpdPdtCode() {
        return swpdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_item_swap_dtls.swpd_pdt_code
     *
     * @param swpdPdtCode the value for inv_item_swap_dtls.swpd_pdt_code
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setSwpdPdtCode(Integer swpdPdtCode) {
        this.swpdPdtCode = swpdPdtCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_item_swap_dtls.swpd_qty
     *
     * @return the value of inv_item_swap_dtls.swpd_qty
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public Double getSwpdQty() {
        return swpdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_item_swap_dtls.swpd_qty
     *
     * @param swpdQty the value for inv_item_swap_dtls.swpd_qty
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setSwpdQty(Double swpdQty) {
        this.swpdQty = swpdQty;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column inv_item_swap_dtls.swpd_orig_swap
     *
     * @return the value of inv_item_swap_dtls.swpd_orig_swap
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public String getSwpdOrigSwap() {
        return swpdOrigSwap;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column inv_item_swap_dtls.swpd_orig_swap
     *
     * @param swpdOrigSwap the value for inv_item_swap_dtls.swpd_orig_swap
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setSwpdOrigSwap(String swpdOrigSwap) {
        this.swpdOrigSwap = swpdOrigSwap == null ? null : swpdOrigSwap.trim();
    }
}