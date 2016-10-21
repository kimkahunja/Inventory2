package com.topline.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CreditSaleDtlExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public CreditSaleDtlExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
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
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
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

        public Criteria andCrsdIdIsNull() {
            addCriterion("crsd_id is null");
            return (Criteria) this;
        }

        public Criteria andCrsdIdIsNotNull() {
            addCriterion("crsd_id is not null");
            return (Criteria) this;
        }

        public Criteria andCrsdIdEqualTo(Integer value) {
            addCriterion("crsd_id =", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdNotEqualTo(Integer value) {
            addCriterion("crsd_id <>", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdGreaterThan(Integer value) {
            addCriterion("crsd_id >", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("crsd_id >=", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdLessThan(Integer value) {
            addCriterion("crsd_id <", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdLessThanOrEqualTo(Integer value) {
            addCriterion("crsd_id <=", value, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdIn(List<Integer> values) {
            addCriterion("crsd_id in", values, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdNotIn(List<Integer> values) {
            addCriterion("crsd_id not in", values, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdBetween(Integer value1, Integer value2) {
            addCriterion("crsd_id between", value1, value2, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdIdNotBetween(Integer value1, Integer value2) {
            addCriterion("crsd_id not between", value1, value2, "crsdId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdIsNull() {
            addCriterion("crsd_crs_id is null");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdIsNotNull() {
            addCriterion("crsd_crs_id is not null");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdEqualTo(Integer value) {
            addCriterion("crsd_crs_id =", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdNotEqualTo(Integer value) {
            addCriterion("crsd_crs_id <>", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdGreaterThan(Integer value) {
            addCriterion("crsd_crs_id >", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("crsd_crs_id >=", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdLessThan(Integer value) {
            addCriterion("crsd_crs_id <", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdLessThanOrEqualTo(Integer value) {
            addCriterion("crsd_crs_id <=", value, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdIn(List<Integer> values) {
            addCriterion("crsd_crs_id in", values, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdNotIn(List<Integer> values) {
            addCriterion("crsd_crs_id not in", values, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdBetween(Integer value1, Integer value2) {
            addCriterion("crsd_crs_id between", value1, value2, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdCrsIdNotBetween(Integer value1, Integer value2) {
            addCriterion("crsd_crs_id not between", value1, value2, "crsdCrsId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdIsNull() {
            addCriterion("crsd_inv_id is null");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdIsNotNull() {
            addCriterion("crsd_inv_id is not null");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdEqualTo(Integer value) {
            addCriterion("crsd_inv_id =", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdNotEqualTo(Integer value) {
            addCriterion("crsd_inv_id <>", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdGreaterThan(Integer value) {
            addCriterion("crsd_inv_id >", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("crsd_inv_id >=", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdLessThan(Integer value) {
            addCriterion("crsd_inv_id <", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdLessThanOrEqualTo(Integer value) {
            addCriterion("crsd_inv_id <=", value, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdIn(List<Integer> values) {
            addCriterion("crsd_inv_id in", values, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdNotIn(List<Integer> values) {
            addCriterion("crsd_inv_id not in", values, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdBetween(Integer value1, Integer value2) {
            addCriterion("crsd_inv_id between", value1, value2, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdInvIdNotBetween(Integer value1, Integer value2) {
            addCriterion("crsd_inv_id not between", value1, value2, "crsdInvId");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountIsNull() {
            addCriterion("crsd_amount is null");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountIsNotNull() {
            addCriterion("crsd_amount is not null");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountEqualTo(BigDecimal value) {
            addCriterion("crsd_amount =", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountNotEqualTo(BigDecimal value) {
            addCriterion("crsd_amount <>", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountGreaterThan(BigDecimal value) {
            addCriterion("crsd_amount >", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("crsd_amount >=", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountLessThan(BigDecimal value) {
            addCriterion("crsd_amount <", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("crsd_amount <=", value, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountIn(List<BigDecimal> values) {
            addCriterion("crsd_amount in", values, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountNotIn(List<BigDecimal> values) {
            addCriterion("crsd_amount not in", values, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("crsd_amount between", value1, value2, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("crsd_amount not between", value1, value2, "crsdAmount");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnIsNull() {
            addCriterion("crsd_updated_on is null");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnIsNotNull() {
            addCriterion("crsd_updated_on is not null");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnEqualTo(Date value) {
            addCriterion("crsd_updated_on =", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnNotEqualTo(Date value) {
            addCriterion("crsd_updated_on <>", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnGreaterThan(Date value) {
            addCriterion("crsd_updated_on >", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnGreaterThanOrEqualTo(Date value) {
            addCriterion("crsd_updated_on >=", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnLessThan(Date value) {
            addCriterion("crsd_updated_on <", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnLessThanOrEqualTo(Date value) {
            addCriterion("crsd_updated_on <=", value, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnIn(List<Date> values) {
            addCriterion("crsd_updated_on in", values, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnNotIn(List<Date> values) {
            addCriterion("crsd_updated_on not in", values, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnBetween(Date value1, Date value2) {
            addCriterion("crsd_updated_on between", value1, value2, "crsdUpdatedOn");
            return (Criteria) this;
        }

        public Criteria andCrsdUpdatedOnNotBetween(Date value1, Date value2) {
            addCriterion("crsd_updated_on not between", value1, value2, "crsdUpdatedOn");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated do_not_delete_during_merge Fri Sep 23 16:23:59 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_credit_sale_dtls
     *
     * @mbggenerated Fri Sep 23 16:23:59 EAT 2016
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