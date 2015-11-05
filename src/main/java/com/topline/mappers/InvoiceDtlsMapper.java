package com.topline.mappers;

import com.topline.model.InvoiceDtls;
import com.topline.model.InvoiceDtlsExample;
import com.topline.model.wrappers.InvoiceDtlsWrapper;
import com.topline.model.wrappers.PurchaseDetailWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface InvoiceDtlsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int countByExample(InvoiceDtlsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int deleteByExample(InvoiceDtlsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int deleteByPrimaryKey(Integer invdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int insert(InvoiceDtls record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int insertSelective(InvoiceDtls record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    List<InvoiceDtls> selectByExample(InvoiceDtlsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    InvoiceDtls selectByPrimaryKey(Integer invdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int updateByExampleSelective(@Param("record") InvoiceDtls record, @Param("example") InvoiceDtlsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int updateByExample(@Param("record") InvoiceDtls record, @Param("example") InvoiceDtlsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int updateByPrimaryKeySelective(InvoiceDtls record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_invoice_dtls
     *
     * @mbggenerated Tue Oct 27 17:10:02 EAT 2015
     */
    int updateByPrimaryKey(InvoiceDtls record);
  //add methods
    List<InvoiceDtlsWrapper> fetchInvoiceDtls(Map<String,Object> map);
}