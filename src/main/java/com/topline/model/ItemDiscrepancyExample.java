package com.topline.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class ItemDiscrepancyExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public ItemDiscrepancyExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
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
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
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

        public Criteria andDscIdIsNull() {
            addCriterion("dsc_id is null");
            return (Criteria) this;
        }

        public Criteria andDscIdIsNotNull() {
            addCriterion("dsc_id is not null");
            return (Criteria) this;
        }

        public Criteria andDscIdEqualTo(Integer value) {
            addCriterion("dsc_id =", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdNotEqualTo(Integer value) {
            addCriterion("dsc_id <>", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdGreaterThan(Integer value) {
            addCriterion("dsc_id >", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("dsc_id >=", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdLessThan(Integer value) {
            addCriterion("dsc_id <", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdLessThanOrEqualTo(Integer value) {
            addCriterion("dsc_id <=", value, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdIn(List<Integer> values) {
            addCriterion("dsc_id in", values, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdNotIn(List<Integer> values) {
            addCriterion("dsc_id not in", values, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdBetween(Integer value1, Integer value2) {
            addCriterion("dsc_id between", value1, value2, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscIdNotBetween(Integer value1, Integer value2) {
            addCriterion("dsc_id not between", value1, value2, "dscId");
            return (Criteria) this;
        }

        public Criteria andDscDateIsNull() {
            addCriterion("dsc_date is null");
            return (Criteria) this;
        }

        public Criteria andDscDateIsNotNull() {
            addCriterion("dsc_date is not null");
            return (Criteria) this;
        }

        public Criteria andDscDateEqualTo(Date value) {
            addCriterionForJDBCDate("dsc_date =", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("dsc_date <>", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateGreaterThan(Date value) {
            addCriterionForJDBCDate("dsc_date >", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("dsc_date >=", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateLessThan(Date value) {
            addCriterionForJDBCDate("dsc_date <", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("dsc_date <=", value, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateIn(List<Date> values) {
            addCriterionForJDBCDate("dsc_date in", values, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("dsc_date not in", values, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("dsc_date between", value1, value2, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("dsc_date not between", value1, value2, "dscDate");
            return (Criteria) this;
        }

        public Criteria andDscStatusIsNull() {
            addCriterion("dsc_status is null");
            return (Criteria) this;
        }

        public Criteria andDscStatusIsNotNull() {
            addCriterion("dsc_status is not null");
            return (Criteria) this;
        }

        public Criteria andDscStatusEqualTo(String value) {
            addCriterion("dsc_status =", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusNotEqualTo(String value) {
            addCriterion("dsc_status <>", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusGreaterThan(String value) {
            addCriterion("dsc_status >", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusGreaterThanOrEqualTo(String value) {
            addCriterion("dsc_status >=", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusLessThan(String value) {
            addCriterion("dsc_status <", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusLessThanOrEqualTo(String value) {
            addCriterion("dsc_status <=", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusLike(String value) {
            addCriterion("dsc_status like", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusNotLike(String value) {
            addCriterion("dsc_status not like", value, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusIn(List<String> values) {
            addCriterion("dsc_status in", values, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusNotIn(List<String> values) {
            addCriterion("dsc_status not in", values, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusBetween(String value1, String value2) {
            addCriterion("dsc_status between", value1, value2, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscStatusNotBetween(String value1, String value2) {
            addCriterion("dsc_status not between", value1, value2, "dscStatus");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByIsNull() {
            addCriterion("dsc_captured_by is null");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByIsNotNull() {
            addCriterion("dsc_captured_by is not null");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByEqualTo(String value) {
            addCriterion("dsc_captured_by =", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByNotEqualTo(String value) {
            addCriterion("dsc_captured_by <>", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByGreaterThan(String value) {
            addCriterion("dsc_captured_by >", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByGreaterThanOrEqualTo(String value) {
            addCriterion("dsc_captured_by >=", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByLessThan(String value) {
            addCriterion("dsc_captured_by <", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByLessThanOrEqualTo(String value) {
            addCriterion("dsc_captured_by <=", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByLike(String value) {
            addCriterion("dsc_captured_by like", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByNotLike(String value) {
            addCriterion("dsc_captured_by not like", value, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByIn(List<String> values) {
            addCriterion("dsc_captured_by in", values, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByNotIn(List<String> values) {
            addCriterion("dsc_captured_by not in", values, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByBetween(String value1, String value2) {
            addCriterion("dsc_captured_by between", value1, value2, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedByNotBetween(String value1, String value2) {
            addCriterion("dsc_captured_by not between", value1, value2, "dscCapturedBy");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnIsNull() {
            addCriterion("dsc_captured_on is null");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnIsNotNull() {
            addCriterion("dsc_captured_on is not null");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnEqualTo(Date value) {
            addCriterion("dsc_captured_on =", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnNotEqualTo(Date value) {
            addCriterion("dsc_captured_on <>", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnGreaterThan(Date value) {
            addCriterion("dsc_captured_on >", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnGreaterThanOrEqualTo(Date value) {
            addCriterion("dsc_captured_on >=", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnLessThan(Date value) {
            addCriterion("dsc_captured_on <", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnLessThanOrEqualTo(Date value) {
            addCriterion("dsc_captured_on <=", value, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnIn(List<Date> values) {
            addCriterion("dsc_captured_on in", values, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnNotIn(List<Date> values) {
            addCriterion("dsc_captured_on not in", values, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnBetween(Date value1, Date value2) {
            addCriterion("dsc_captured_on between", value1, value2, "dscCapturedOn");
            return (Criteria) this;
        }

        public Criteria andDscCapturedOnNotBetween(Date value1, Date value2) {
            addCriterion("dsc_captured_on not between", value1, value2, "dscCapturedOn");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_discrepancies
     *
     * @mbggenerated do_not_delete_during_merge Mon Aug 01 16:35:05 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_discrepancies
     *
     * @mbggenerated Mon Aug 01 16:35:05 EAT 2016
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