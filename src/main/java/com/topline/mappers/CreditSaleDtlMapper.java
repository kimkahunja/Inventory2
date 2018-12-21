package com.topline.mappers;

import com.topline.model.CreditSaleDtl;
import com.topline.model.CreditSaleDtlExample;
import com.topline.model.wrappers.CreditSaleDtlWrapper;
import com.topline.model.wrappers.PaymentDtlWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface CreditSaleDtlMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int countByExample(CreditSaleDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int deleteByExample(CreditSaleDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int deleteByPrimaryKey(Integer crsdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int insert(CreditSaleDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int insertSelective(CreditSaleDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    List<CreditSaleDtl> selectByExample(CreditSaleDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    CreditSaleDtl selectByPrimaryKey(Integer crsdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int updateByExampleSelective(@Param("record") CreditSaleDtl record, @Param("example") CreditSaleDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int updateByExample(@Param("record") CreditSaleDtl record, @Param("example") CreditSaleDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int updateByPrimaryKeySelective(CreditSaleDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    int updateByPrimaryKey(CreditSaleDtl record);
    List<CreditSaleDtlWrapper> fetchCreditSaleDtls(Map<String,Object> map);
}