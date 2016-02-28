package com.topline.mappers;

import com.topline.model.PurchaseDetail;
import com.topline.model.PurchaseDetailExample;
import com.topline.model.Summary;
import com.topline.model.wrappers.PurchaseDetailWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface PurchaseDetailMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int countByExample(PurchaseDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int deleteByExample(PurchaseDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int deleteByPrimaryKey(Integer purdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int insert(PurchaseDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int insertSelective(PurchaseDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    List<PurchaseDetail> selectByExample(PurchaseDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    PurchaseDetail selectByPrimaryKey(Integer purdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int updateByExampleSelective(@Param("record") PurchaseDetail record, @Param("example") PurchaseDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int updateByExample(@Param("record") PurchaseDetail record, @Param("example") PurchaseDetailExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int updateByPrimaryKeySelective(PurchaseDetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_purchases_details
     *
     * @mbggenerated Thu Jul 23 15:43:34 EAT 2015
     */
    int updateByPrimaryKey(PurchaseDetail record);
  //add methods
    List<PurchaseDetailWrapper> fetchPurchaseDetails(Map<String,Object> map);
    List<PurchaseDetailWrapper> fetchRptPurchases(Map<String,Object> map);
    List<Summary>fetchRptPurchasesCount(Map<String,Object> map);
}