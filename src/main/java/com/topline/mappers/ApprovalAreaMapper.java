package com.topline.mappers;

import com.topline.model.ApprovalArea;
import com.topline.model.ApprovalAreaExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ApprovalAreaMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int countByExample(ApprovalAreaExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int deleteByExample(ApprovalAreaExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int deleteByPrimaryKey(Integer appvCode);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int insert(ApprovalArea record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int insertSelective(ApprovalArea record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    List<ApprovalArea> selectByExample(ApprovalAreaExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    ApprovalArea selectByPrimaryKey(Integer appvCode);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int updateByExampleSelective(@Param("record") ApprovalArea record, @Param("example") ApprovalAreaExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int updateByExample(@Param("record") ApprovalArea record, @Param("example") ApprovalAreaExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int updateByPrimaryKeySelective(ApprovalArea record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_approval_areas
     *
     * @mbggenerated Sun Aug 14 22:31:54 EAT 2016
     */
    int updateByPrimaryKey(ApprovalArea record);
}