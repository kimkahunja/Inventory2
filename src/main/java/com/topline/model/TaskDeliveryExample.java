package com.topline.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TaskDeliveryExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:53 EAT 2016
     */
    public TaskDeliveryExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andTskIdIsNull() {
            addCriterion("tsk_id is null");
            return (Criteria) this;
        }

        public Criteria andTskIdIsNotNull() {
            addCriterion("tsk_id is not null");
            return (Criteria) this;
        }

        public Criteria andTskIdEqualTo(Integer value) {
            addCriterion("tsk_id =", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdNotEqualTo(Integer value) {
            addCriterion("tsk_id <>", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdGreaterThan(Integer value) {
            addCriterion("tsk_id >", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("tsk_id >=", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdLessThan(Integer value) {
            addCriterion("tsk_id <", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdLessThanOrEqualTo(Integer value) {
            addCriterion("tsk_id <=", value, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdIn(List<Integer> values) {
            addCriterion("tsk_id in", values, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdNotIn(List<Integer> values) {
            addCriterion("tsk_id not in", values, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdBetween(Integer value1, Integer value2) {
            addCriterion("tsk_id between", value1, value2, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskIdNotBetween(Integer value1, Integer value2) {
            addCriterion("tsk_id not between", value1, value2, "tskId");
            return (Criteria) this;
        }

        public Criteria andTskDateIsNull() {
            addCriterion("tsk_date is null");
            return (Criteria) this;
        }

        public Criteria andTskDateIsNotNull() {
            addCriterion("tsk_date is not null");
            return (Criteria) this;
        }

        public Criteria andTskDateEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_date =", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_date <>", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateGreaterThan(Date value) {
            addCriterionForJDBCDate("tsk_date >", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_date >=", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateLessThan(Date value) {
            addCriterionForJDBCDate("tsk_date <", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_date <=", value, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateIn(List<Date> values) {
            addCriterionForJDBCDate("tsk_date in", values, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("tsk_date not in", values, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tsk_date between", value1, value2, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tsk_date not between", value1, value2, "tskDate");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeIsNull() {
            addCriterion("tsk_acc_code is null");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeIsNotNull() {
            addCriterion("tsk_acc_code is not null");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeEqualTo(Integer value) {
            addCriterion("tsk_acc_code =", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeNotEqualTo(Integer value) {
            addCriterion("tsk_acc_code <>", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeGreaterThan(Integer value) {
            addCriterion("tsk_acc_code >", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("tsk_acc_code >=", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeLessThan(Integer value) {
            addCriterion("tsk_acc_code <", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeLessThanOrEqualTo(Integer value) {
            addCriterion("tsk_acc_code <=", value, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeIn(List<Integer> values) {
            addCriterion("tsk_acc_code in", values, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeNotIn(List<Integer> values) {
            addCriterion("tsk_acc_code not in", values, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeBetween(Integer value1, Integer value2) {
            addCriterion("tsk_acc_code between", value1, value2, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskAccCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("tsk_acc_code not between", value1, value2, "tskAccCode");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionIsNull() {
            addCriterion("tsk_description is null");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionIsNotNull() {
            addCriterion("tsk_description is not null");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionEqualTo(String value) {
            addCriterion("tsk_description =", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionNotEqualTo(String value) {
            addCriterion("tsk_description <>", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionGreaterThan(String value) {
            addCriterion("tsk_description >", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("tsk_description >=", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionLessThan(String value) {
            addCriterion("tsk_description <", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionLessThanOrEqualTo(String value) {
            addCriterion("tsk_description <=", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionLike(String value) {
            addCriterion("tsk_description like", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionNotLike(String value) {
            addCriterion("tsk_description not like", value, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionIn(List<String> values) {
            addCriterion("tsk_description in", values, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionNotIn(List<String> values) {
            addCriterion("tsk_description not in", values, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionBetween(String value1, String value2) {
            addCriterion("tsk_description between", value1, value2, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskDescriptionNotBetween(String value1, String value2) {
            addCriterion("tsk_description not between", value1, value2, "tskDescription");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdIsNull() {
            addCriterion("tsk_tssg_id is null");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdIsNotNull() {
            addCriterion("tsk_tssg_id is not null");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdEqualTo(Integer value) {
            addCriterion("tsk_tssg_id =", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdNotEqualTo(Integer value) {
            addCriterion("tsk_tssg_id <>", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdGreaterThan(Integer value) {
            addCriterion("tsk_tssg_id >", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("tsk_tssg_id >=", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdLessThan(Integer value) {
            addCriterion("tsk_tssg_id <", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdLessThanOrEqualTo(Integer value) {
            addCriterion("tsk_tssg_id <=", value, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdIn(List<Integer> values) {
            addCriterion("tsk_tssg_id in", values, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdNotIn(List<Integer> values) {
            addCriterion("tsk_tssg_id not in", values, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdBetween(Integer value1, Integer value2) {
            addCriterion("tsk_tssg_id between", value1, value2, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskTssgIdNotBetween(Integer value1, Integer value2) {
            addCriterion("tsk_tssg_id not between", value1, value2, "tskTssgId");
            return (Criteria) this;
        }

        public Criteria andTskCostIsNull() {
            addCriterion("tsk_cost is null");
            return (Criteria) this;
        }

        public Criteria andTskCostIsNotNull() {
            addCriterion("tsk_cost is not null");
            return (Criteria) this;
        }

        public Criteria andTskCostEqualTo(BigDecimal value) {
            addCriterion("tsk_cost =", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostNotEqualTo(BigDecimal value) {
            addCriterion("tsk_cost <>", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostGreaterThan(BigDecimal value) {
            addCriterion("tsk_cost >", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("tsk_cost >=", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostLessThan(BigDecimal value) {
            addCriterion("tsk_cost <", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostLessThanOrEqualTo(BigDecimal value) {
            addCriterion("tsk_cost <=", value, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostIn(List<BigDecimal> values) {
            addCriterion("tsk_cost in", values, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostNotIn(List<BigDecimal> values) {
            addCriterion("tsk_cost not in", values, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("tsk_cost between", value1, value2, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCostNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("tsk_cost not between", value1, value2, "tskCost");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateIsNull() {
            addCriterion("tsk_collection_date is null");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateIsNotNull() {
            addCriterion("tsk_collection_date is not null");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_collection_date =", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_collection_date <>", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateGreaterThan(Date value) {
            addCriterionForJDBCDate("tsk_collection_date >", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_collection_date >=", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateLessThan(Date value) {
            addCriterionForJDBCDate("tsk_collection_date <", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("tsk_collection_date <=", value, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateIn(List<Date> values) {
            addCriterionForJDBCDate("tsk_collection_date in", values, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("tsk_collection_date not in", values, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tsk_collection_date between", value1, value2, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskCollectionDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("tsk_collection_date not between", value1, value2, "tskCollectionDate");
            return (Criteria) this;
        }

        public Criteria andTskStatusIsNull() {
            addCriterion("tsk_status is null");
            return (Criteria) this;
        }

        public Criteria andTskStatusIsNotNull() {
            addCriterion("tsk_status is not null");
            return (Criteria) this;
        }

        public Criteria andTskStatusEqualTo(String value) {
            addCriterion("tsk_status =", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusNotEqualTo(String value) {
            addCriterion("tsk_status <>", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusGreaterThan(String value) {
            addCriterion("tsk_status >", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusGreaterThanOrEqualTo(String value) {
            addCriterion("tsk_status >=", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusLessThan(String value) {
            addCriterion("tsk_status <", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusLessThanOrEqualTo(String value) {
            addCriterion("tsk_status <=", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusLike(String value) {
            addCriterion("tsk_status like", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusNotLike(String value) {
            addCriterion("tsk_status not like", value, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusIn(List<String> values) {
            addCriterion("tsk_status in", values, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusNotIn(List<String> values) {
            addCriterion("tsk_status not in", values, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusBetween(String value1, String value2) {
            addCriterion("tsk_status between", value1, value2, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskStatusNotBetween(String value1, String value2) {
            addCriterion("tsk_status not between", value1, value2, "tskStatus");
            return (Criteria) this;
        }

        public Criteria andTskRemarksIsNull() {
            addCriterion("tsk_remarks is null");
            return (Criteria) this;
        }

        public Criteria andTskRemarksIsNotNull() {
            addCriterion("tsk_remarks is not null");
            return (Criteria) this;
        }

        public Criteria andTskRemarksEqualTo(String value) {
            addCriterion("tsk_remarks =", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksNotEqualTo(String value) {
            addCriterion("tsk_remarks <>", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksGreaterThan(String value) {
            addCriterion("tsk_remarks >", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksGreaterThanOrEqualTo(String value) {
            addCriterion("tsk_remarks >=", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksLessThan(String value) {
            addCriterion("tsk_remarks <", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksLessThanOrEqualTo(String value) {
            addCriterion("tsk_remarks <=", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksLike(String value) {
            addCriterion("tsk_remarks like", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksNotLike(String value) {
            addCriterion("tsk_remarks not like", value, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksIn(List<String> values) {
            addCriterion("tsk_remarks in", values, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksNotIn(List<String> values) {
            addCriterion("tsk_remarks not in", values, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksBetween(String value1, String value2) {
            addCriterion("tsk_remarks between", value1, value2, "tskRemarks");
            return (Criteria) this;
        }

        public Criteria andTskRemarksNotBetween(String value1, String value2) {
            addCriterion("tsk_remarks not between", value1, value2, "tskRemarks");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_task_delivery
     *
     * @mbggenerated do_not_delete_during_merge Fri Sep 02 15:48:54 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_task_delivery
     *
     * @mbggenerated Fri Sep 02 15:48:54 EAT 2016
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value) {
            super();
            this.condition = condition;
            this.value = value;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.betweenValue = true;
        }
    }
}