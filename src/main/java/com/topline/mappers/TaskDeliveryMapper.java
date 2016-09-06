package com.topline.mappers;

import com.topline.model.TaskDelivery;
import com.topline.model.TaskDeliveryExample;
import com.topline.model.wrappers.TaskDeliveryWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface TaskDeliveryMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int countByExample(TaskDeliveryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int deleteByExample(TaskDeliveryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int deleteByPrimaryKey(Integer tskId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int insert(TaskDelivery record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int insertSelective(TaskDelivery record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    List<TaskDelivery> selectByExample(TaskDeliveryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    TaskDelivery selectByPrimaryKey(Integer tskId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int updateByExampleSelective(@Param("record") TaskDelivery record, @Param("example") TaskDeliveryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int updateByExample(@Param("record") TaskDelivery record, @Param("example") TaskDeliveryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int updateByPrimaryKeySelective(TaskDelivery record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    int updateByPrimaryKey(TaskDelivery record);
    //added objects
    List<TaskDeliveryWrapper> fetchTaskDeliveries(Map<String,Object> map);
}