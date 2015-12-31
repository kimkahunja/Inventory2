package com.topline.mappers;

import com.topline.model.Groups;
import com.topline.model.GroupsExample;
import com.topline.model.Purchase;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface GroupsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int countByExample(GroupsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int deleteByExample(GroupsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int insert(Groups record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int insertSelective(Groups record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    List<Groups> selectByExample(GroupsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    Groups selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int updateByExampleSelective(@Param("record") Groups record, @Param("example") GroupsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int updateByExample(@Param("record") Groups record, @Param("example") GroupsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int updateByPrimaryKeySelective(Groups record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table groups
     *
     * @mbggenerated Mon Jun 01 16:50:34 EAT 2015
     */
    int updateByPrimaryKey(Groups record);
    
    int save(Groups record);  
}