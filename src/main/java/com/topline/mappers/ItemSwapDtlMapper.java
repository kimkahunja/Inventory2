package com.topline.mappers;

import com.topline.model.ItemSwapDtl;
import com.topline.model.ItemSwapDtlExample;
import com.topline.model.wrappers.ItemSwapDtlWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface ItemSwapDtlMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int countByExample(ItemSwapDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int deleteByExample(ItemSwapDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int deleteByPrimaryKey(Integer swpdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int insert(ItemSwapDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int insertSelective(ItemSwapDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    List<ItemSwapDtl> selectByExample(ItemSwapDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    ItemSwapDtl selectByPrimaryKey(Integer swpdId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int updateByExampleSelective(@Param("record") ItemSwapDtl record, @Param("example") ItemSwapDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int updateByExample(@Param("record") ItemSwapDtl record, @Param("example") ItemSwapDtlExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int updateByPrimaryKeySelective(ItemSwapDtl record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    int updateByPrimaryKey(ItemSwapDtl record);
    //add methods
    List<ItemSwapDtlWrapper> fetchSwapItems(Map<String,Object> map);
}