package com.topline.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class PaymentExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public PaymentExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
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
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
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

        public Criteria andPymtIdIsNull() {
            addCriterion("pymt_id is null");
            return (Criteria) this;
        }

        public Criteria andPymtIdIsNotNull() {
            addCriterion("pymt_id is not null");
            return (Criteria) this;
        }

        public Criteria andPymtIdEqualTo(Integer value) {
            addCriterion("pymt_id =", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdNotEqualTo(Integer value) {
            addCriterion("pymt_id <>", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdGreaterThan(Integer value) {
            addCriterion("pymt_id >", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("pymt_id >=", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdLessThan(Integer value) {
            addCriterion("pymt_id <", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdLessThanOrEqualTo(Integer value) {
            addCriterion("pymt_id <=", value, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdIn(List<Integer> values) {
            addCriterion("pymt_id in", values, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdNotIn(List<Integer> values) {
            addCriterion("pymt_id not in", values, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdBetween(Integer value1, Integer value2) {
            addCriterion("pymt_id between", value1, value2, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtIdNotBetween(Integer value1, Integer value2) {
            addCriterion("pymt_id not between", value1, value2, "pymtId");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeIsNull() {
            addCriterion("pymt_acc_code is null");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeIsNotNull() {
            addCriterion("pymt_acc_code is not null");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeEqualTo(Integer value) {
            addCriterion("pymt_acc_code =", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeNotEqualTo(Integer value) {
            addCriterion("pymt_acc_code <>", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeGreaterThan(Integer value) {
            addCriterion("pymt_acc_code >", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("pymt_acc_code >=", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeLessThan(Integer value) {
            addCriterion("pymt_acc_code <", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeLessThanOrEqualTo(Integer value) {
            addCriterion("pymt_acc_code <=", value, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeIn(List<Integer> values) {
            addCriterion("pymt_acc_code in", values, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeNotIn(List<Integer> values) {
            addCriterion("pymt_acc_code not in", values, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeBetween(Integer value1, Integer value2) {
            addCriterion("pymt_acc_code between", value1, value2, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtAccCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("pymt_acc_code not between", value1, value2, "pymtAccCode");
            return (Criteria) this;
        }

        public Criteria andPymtDateIsNull() {
            addCriterion("pymt_date is null");
            return (Criteria) this;
        }

        public Criteria andPymtDateIsNotNull() {
            addCriterion("pymt_date is not null");
            return (Criteria) this;
        }

        public Criteria andPymtDateEqualTo(Date value) {
            addCriterionForJDBCDate("pymt_date =", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("pymt_date <>", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateGreaterThan(Date value) {
            addCriterionForJDBCDate("pymt_date >", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pymt_date >=", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateLessThan(Date value) {
            addCriterionForJDBCDate("pymt_date <", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("pymt_date <=", value, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateIn(List<Date> values) {
            addCriterionForJDBCDate("pymt_date in", values, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("pymt_date not in", values, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pymt_date between", value1, value2, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("pymt_date not between", value1, value2, "pymtDate");
            return (Criteria) this;
        }

        public Criteria andPymtAmountIsNull() {
            addCriterion("pymt_amount is null");
            return (Criteria) this;
        }

        public Criteria andPymtAmountIsNotNull() {
            addCriterion("pymt_amount is not null");
            return (Criteria) this;
        }

        public Criteria andPymtAmountEqualTo(BigDecimal value) {
            addCriterion("pymt_amount =", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountNotEqualTo(BigDecimal value) {
            addCriterion("pymt_amount <>", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountGreaterThan(BigDecimal value) {
            addCriterion("pymt_amount >", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("pymt_amount >=", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountLessThan(BigDecimal value) {
            addCriterion("pymt_amount <", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("pymt_amount <=", value, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountIn(List<BigDecimal> values) {
            addCriterion("pymt_amount in", values, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountNotIn(List<BigDecimal> values) {
            addCriterion("pymt_amount not in", values, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("pymt_amount between", value1, value2, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("pymt_amount not between", value1, value2, "pymtAmount");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeIsNull() {
            addCriterion("pymt_paymode is null");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeIsNotNull() {
            addCriterion("pymt_paymode is not null");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeEqualTo(String value) {
            addCriterion("pymt_paymode =", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeNotEqualTo(String value) {
            addCriterion("pymt_paymode <>", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeGreaterThan(String value) {
            addCriterion("pymt_paymode >", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeGreaterThanOrEqualTo(String value) {
            addCriterion("pymt_paymode >=", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeLessThan(String value) {
            addCriterion("pymt_paymode <", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeLessThanOrEqualTo(String value) {
            addCriterion("pymt_paymode <=", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeLike(String value) {
            addCriterion("pymt_paymode like", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeNotLike(String value) {
            addCriterion("pymt_paymode not like", value, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeIn(List<String> values) {
            addCriterion("pymt_paymode in", values, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeNotIn(List<String> values) {
            addCriterion("pymt_paymode not in", values, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeBetween(String value1, String value2) {
            addCriterion("pymt_paymode between", value1, value2, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymodeNotBetween(String value1, String value2) {
            addCriterion("pymt_paymode not between", value1, value2, "pymtPaymode");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoIsNull() {
            addCriterion("pymt_paymemo is null");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoIsNotNull() {
            addCriterion("pymt_paymemo is not null");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoEqualTo(String value) {
            addCriterion("pymt_paymemo =", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoNotEqualTo(String value) {
            addCriterion("pymt_paymemo <>", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoGreaterThan(String value) {
            addCriterion("pymt_paymemo >", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoGreaterThanOrEqualTo(String value) {
            addCriterion("pymt_paymemo >=", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoLessThan(String value) {
            addCriterion("pymt_paymemo <", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoLessThanOrEqualTo(String value) {
            addCriterion("pymt_paymemo <=", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoLike(String value) {
            addCriterion("pymt_paymemo like", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoNotLike(String value) {
            addCriterion("pymt_paymemo not like", value, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoIn(List<String> values) {
            addCriterion("pymt_paymemo in", values, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoNotIn(List<String> values) {
            addCriterion("pymt_paymemo not in", values, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoBetween(String value1, String value2) {
            addCriterion("pymt_paymemo between", value1, value2, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtPaymemoNotBetween(String value1, String value2) {
            addCriterion("pymt_paymemo not between", value1, value2, "pymtPaymemo");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksIsNull() {
            addCriterion("pymt_remarks is null");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksIsNotNull() {
            addCriterion("pymt_remarks is not null");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksEqualTo(String value) {
            addCriterion("pymt_remarks =", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksNotEqualTo(String value) {
            addCriterion("pymt_remarks <>", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksGreaterThan(String value) {
            addCriterion("pymt_remarks >", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksGreaterThanOrEqualTo(String value) {
            addCriterion("pymt_remarks >=", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksLessThan(String value) {
            addCriterion("pymt_remarks <", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksLessThanOrEqualTo(String value) {
            addCriterion("pymt_remarks <=", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksLike(String value) {
            addCriterion("pymt_remarks like", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksNotLike(String value) {
            addCriterion("pymt_remarks not like", value, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksIn(List<String> values) {
            addCriterion("pymt_remarks in", values, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksNotIn(List<String> values) {
            addCriterion("pymt_remarks not in", values, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksBetween(String value1, String value2) {
            addCriterion("pymt_remarks between", value1, value2, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtRemarksNotBetween(String value1, String value2) {
            addCriterion("pymt_remarks not between", value1, value2, "pymtRemarks");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByIsNull() {
            addCriterion("pymt_captured_by is null");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByIsNotNull() {
            addCriterion("pymt_captured_by is not null");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByEqualTo(String value) {
            addCriterion("pymt_captured_by =", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByNotEqualTo(String value) {
            addCriterion("pymt_captured_by <>", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByGreaterThan(String value) {
            addCriterion("pymt_captured_by >", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByGreaterThanOrEqualTo(String value) {
            addCriterion("pymt_captured_by >=", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByLessThan(String value) {
            addCriterion("pymt_captured_by <", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByLessThanOrEqualTo(String value) {
            addCriterion("pymt_captured_by <=", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByLike(String value) {
            addCriterion("pymt_captured_by like", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByNotLike(String value) {
            addCriterion("pymt_captured_by not like", value, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByIn(List<String> values) {
            addCriterion("pymt_captured_by in", values, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByNotIn(List<String> values) {
            addCriterion("pymt_captured_by not in", values, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByBetween(String value1, String value2) {
            addCriterion("pymt_captured_by between", value1, value2, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedByNotBetween(String value1, String value2) {
            addCriterion("pymt_captured_by not between", value1, value2, "pymtCapturedBy");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnIsNull() {
            addCriterion("pymt_captured_on is null");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnIsNotNull() {
            addCriterion("pymt_captured_on is not null");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnEqualTo(Date value) {
            addCriterion("pymt_captured_on =", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnNotEqualTo(Date value) {
            addCriterion("pymt_captured_on <>", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnGreaterThan(Date value) {
            addCriterion("pymt_captured_on >", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnGreaterThanOrEqualTo(Date value) {
            addCriterion("pymt_captured_on >=", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnLessThan(Date value) {
            addCriterion("pymt_captured_on <", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnLessThanOrEqualTo(Date value) {
            addCriterion("pymt_captured_on <=", value, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnIn(List<Date> values) {
            addCriterion("pymt_captured_on in", values, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnNotIn(List<Date> values) {
            addCriterion("pymt_captured_on not in", values, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnBetween(Date value1, Date value2) {
            addCriterion("pymt_captured_on between", value1, value2, "pymtCapturedOn");
            return (Criteria) this;
        }

        public Criteria andPymtCapturedOnNotBetween(Date value1, Date value2) {
            addCriterion("pymt_captured_on not between", value1, value2, "pymtCapturedOn");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_payments
     *
     * @mbggenerated do_not_delete_during_merge Tue Jan 19 15:43:47 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_payments
     *
     * @mbggenerated Tue Jan 19 15:43:47 EAT 2016
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