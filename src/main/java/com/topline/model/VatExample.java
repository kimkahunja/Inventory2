package com.topline.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class VatExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public VatExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
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
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
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

        public Criteria andVatIdIsNull() {
            addCriterion("VAT_ID is null");
            return (Criteria) this;
        }

        public Criteria andVatIdIsNotNull() {
            addCriterion("VAT_ID is not null");
            return (Criteria) this;
        }

        public Criteria andVatIdEqualTo(String value) {
            addCriterion("VAT_ID =", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdNotEqualTo(String value) {
            addCriterion("VAT_ID <>", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdGreaterThan(String value) {
            addCriterion("VAT_ID >", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdGreaterThanOrEqualTo(String value) {
            addCriterion("VAT_ID >=", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdLessThan(String value) {
            addCriterion("VAT_ID <", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdLessThanOrEqualTo(String value) {
            addCriterion("VAT_ID <=", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdLike(String value) {
            addCriterion("VAT_ID like", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdNotLike(String value) {
            addCriterion("VAT_ID not like", value, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdIn(List<String> values) {
            addCriterion("VAT_ID in", values, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdNotIn(List<String> values) {
            addCriterion("VAT_ID not in", values, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdBetween(String value1, String value2) {
            addCriterion("VAT_ID between", value1, value2, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatIdNotBetween(String value1, String value2) {
            addCriterion("VAT_ID not between", value1, value2, "vatId");
            return (Criteria) this;
        }

        public Criteria andVatRateIsNull() {
            addCriterion("VAT_RATE is null");
            return (Criteria) this;
        }

        public Criteria andVatRateIsNotNull() {
            addCriterion("VAT_RATE is not null");
            return (Criteria) this;
        }

        public Criteria andVatRateEqualTo(Double value) {
            addCriterion("VAT_RATE =", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateNotEqualTo(Double value) {
            addCriterion("VAT_RATE <>", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateGreaterThan(Double value) {
            addCriterion("VAT_RATE >", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateGreaterThanOrEqualTo(Double value) {
            addCriterion("VAT_RATE >=", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateLessThan(Double value) {
            addCriterion("VAT_RATE <", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateLessThanOrEqualTo(Double value) {
            addCriterion("VAT_RATE <=", value, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateIn(List<Double> values) {
            addCriterion("VAT_RATE in", values, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateNotIn(List<Double> values) {
            addCriterion("VAT_RATE not in", values, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateBetween(Double value1, Double value2) {
            addCriterion("VAT_RATE between", value1, value2, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatRateNotBetween(Double value1, Double value2) {
            addCriterion("VAT_RATE not between", value1, value2, "vatRate");
            return (Criteria) this;
        }

        public Criteria andVatDateIsNull() {
            addCriterion("VAT_DATE is null");
            return (Criteria) this;
        }

        public Criteria andVatDateIsNotNull() {
            addCriterion("VAT_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andVatDateEqualTo(Date value) {
            addCriterion("VAT_DATE =", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateNotEqualTo(Date value) {
            addCriterion("VAT_DATE <>", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateGreaterThan(Date value) {
            addCriterion("VAT_DATE >", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateGreaterThanOrEqualTo(Date value) {
            addCriterion("VAT_DATE >=", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateLessThan(Date value) {
            addCriterion("VAT_DATE <", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateLessThanOrEqualTo(Date value) {
            addCriterion("VAT_DATE <=", value, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateIn(List<Date> values) {
            addCriterion("VAT_DATE in", values, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateNotIn(List<Date> values) {
            addCriterion("VAT_DATE not in", values, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateBetween(Date value1, Date value2) {
            addCriterion("VAT_DATE between", value1, value2, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDateNotBetween(Date value1, Date value2) {
            addCriterion("VAT_DATE not between", value1, value2, "vatDate");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionIsNull() {
            addCriterion("VAT_DESCRIPTION is null");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionIsNotNull() {
            addCriterion("VAT_DESCRIPTION is not null");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionEqualTo(String value) {
            addCriterion("VAT_DESCRIPTION =", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionNotEqualTo(String value) {
            addCriterion("VAT_DESCRIPTION <>", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionGreaterThan(String value) {
            addCriterion("VAT_DESCRIPTION >", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("VAT_DESCRIPTION >=", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionLessThan(String value) {
            addCriterion("VAT_DESCRIPTION <", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionLessThanOrEqualTo(String value) {
            addCriterion("VAT_DESCRIPTION <=", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionLike(String value) {
            addCriterion("VAT_DESCRIPTION like", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionNotLike(String value) {
            addCriterion("VAT_DESCRIPTION not like", value, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionIn(List<String> values) {
            addCriterion("VAT_DESCRIPTION in", values, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionNotIn(List<String> values) {
            addCriterion("VAT_DESCRIPTION not in", values, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionBetween(String value1, String value2) {
            addCriterion("VAT_DESCRIPTION between", value1, value2, "vatDescription");
            return (Criteria) this;
        }

        public Criteria andVatDescriptionNotBetween(String value1, String value2) {
            addCriterion("VAT_DESCRIPTION not between", value1, value2, "vatDescription");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_vat
     *
     * @mbggenerated do_not_delete_during_merge Mon Sep 19 15:13:09 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_vat
     *
     * @mbggenerated Mon Sep 19 15:13:09 EAT 2016
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