package com.topline.model;

import java.util.ArrayList;
import java.util.List;

public class ItemSwapDtlExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public ItemSwapDtlExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
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
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
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

        public Criteria andSwpdIdIsNull() {
            addCriterion("swpd_id is null");
            return (Criteria) this;
        }

        public Criteria andSwpdIdIsNotNull() {
            addCriterion("swpd_id is not null");
            return (Criteria) this;
        }

        public Criteria andSwpdIdEqualTo(Integer value) {
            addCriterion("swpd_id =", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdNotEqualTo(Integer value) {
            addCriterion("swpd_id <>", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdGreaterThan(Integer value) {
            addCriterion("swpd_id >", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("swpd_id >=", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdLessThan(Integer value) {
            addCriterion("swpd_id <", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdLessThanOrEqualTo(Integer value) {
            addCriterion("swpd_id <=", value, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdIn(List<Integer> values) {
            addCriterion("swpd_id in", values, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdNotIn(List<Integer> values) {
            addCriterion("swpd_id not in", values, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdBetween(Integer value1, Integer value2) {
            addCriterion("swpd_id between", value1, value2, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdIdNotBetween(Integer value1, Integer value2) {
            addCriterion("swpd_id not between", value1, value2, "swpdId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdIsNull() {
            addCriterion("swpd_swp_id is null");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdIsNotNull() {
            addCriterion("swpd_swp_id is not null");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdEqualTo(Integer value) {
            addCriterion("swpd_swp_id =", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdNotEqualTo(Integer value) {
            addCriterion("swpd_swp_id <>", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdGreaterThan(Integer value) {
            addCriterion("swpd_swp_id >", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("swpd_swp_id >=", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdLessThan(Integer value) {
            addCriterion("swpd_swp_id <", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdLessThanOrEqualTo(Integer value) {
            addCriterion("swpd_swp_id <=", value, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdIn(List<Integer> values) {
            addCriterion("swpd_swp_id in", values, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdNotIn(List<Integer> values) {
            addCriterion("swpd_swp_id not in", values, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdBetween(Integer value1, Integer value2) {
            addCriterion("swpd_swp_id between", value1, value2, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdSwpIdNotBetween(Integer value1, Integer value2) {
            addCriterion("swpd_swp_id not between", value1, value2, "swpdSwpId");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeIsNull() {
            addCriterion("swpd_pdt_code is null");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeIsNotNull() {
            addCriterion("swpd_pdt_code is not null");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeEqualTo(Integer value) {
            addCriterion("swpd_pdt_code =", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeNotEqualTo(Integer value) {
            addCriterion("swpd_pdt_code <>", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeGreaterThan(Integer value) {
            addCriterion("swpd_pdt_code >", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("swpd_pdt_code >=", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeLessThan(Integer value) {
            addCriterion("swpd_pdt_code <", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeLessThanOrEqualTo(Integer value) {
            addCriterion("swpd_pdt_code <=", value, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeIn(List<Integer> values) {
            addCriterion("swpd_pdt_code in", values, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeNotIn(List<Integer> values) {
            addCriterion("swpd_pdt_code not in", values, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeBetween(Integer value1, Integer value2) {
            addCriterion("swpd_pdt_code between", value1, value2, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdPdtCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("swpd_pdt_code not between", value1, value2, "swpdPdtCode");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyIsNull() {
            addCriterion("swpd_qty is null");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyIsNotNull() {
            addCriterion("swpd_qty is not null");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyEqualTo(Double value) {
            addCriterion("swpd_qty =", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyNotEqualTo(Double value) {
            addCriterion("swpd_qty <>", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyGreaterThan(Double value) {
            addCriterion("swpd_qty >", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyGreaterThanOrEqualTo(Double value) {
            addCriterion("swpd_qty >=", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyLessThan(Double value) {
            addCriterion("swpd_qty <", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyLessThanOrEqualTo(Double value) {
            addCriterion("swpd_qty <=", value, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyIn(List<Double> values) {
            addCriterion("swpd_qty in", values, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyNotIn(List<Double> values) {
            addCriterion("swpd_qty not in", values, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyBetween(Double value1, Double value2) {
            addCriterion("swpd_qty between", value1, value2, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdQtyNotBetween(Double value1, Double value2) {
            addCriterion("swpd_qty not between", value1, value2, "swpdQty");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapIsNull() {
            addCriterion("swpd_orig_swap is null");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapIsNotNull() {
            addCriterion("swpd_orig_swap is not null");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapEqualTo(String value) {
            addCriterion("swpd_orig_swap =", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapNotEqualTo(String value) {
            addCriterion("swpd_orig_swap <>", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapGreaterThan(String value) {
            addCriterion("swpd_orig_swap >", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapGreaterThanOrEqualTo(String value) {
            addCriterion("swpd_orig_swap >=", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapLessThan(String value) {
            addCriterion("swpd_orig_swap <", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapLessThanOrEqualTo(String value) {
            addCriterion("swpd_orig_swap <=", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapLike(String value) {
            addCriterion("swpd_orig_swap like", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapNotLike(String value) {
            addCriterion("swpd_orig_swap not like", value, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapIn(List<String> values) {
            addCriterion("swpd_orig_swap in", values, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapNotIn(List<String> values) {
            addCriterion("swpd_orig_swap not in", values, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapBetween(String value1, String value2) {
            addCriterion("swpd_orig_swap between", value1, value2, "swpdOrigSwap");
            return (Criteria) this;
        }

        public Criteria andSwpdOrigSwapNotBetween(String value1, String value2) {
            addCriterion("swpd_orig_swap not between", value1, value2, "swpdOrigSwap");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated do_not_delete_during_merge Fri Aug 05 14:21:27 EAT 2016
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_item_swap_dtls
     *
     * @mbggenerated Fri Aug 05 14:21:27 EAT 2016
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