package com.topline.model;

import java.util.ArrayList;
import java.util.List;

public class CategoriesExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public CategoriesExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
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
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
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

        public Criteria andCatCodeIsNull() {
            addCriterion("cat_code is null");
            return (Criteria) this;
        }

        public Criteria andCatCodeIsNotNull() {
            addCriterion("cat_code is not null");
            return (Criteria) this;
        }

        public Criteria andCatCodeEqualTo(Integer value) {
            addCriterion("cat_code =", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeNotEqualTo(Integer value) {
            addCriterion("cat_code <>", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeGreaterThan(Integer value) {
            addCriterion("cat_code >", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("cat_code >=", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeLessThan(Integer value) {
            addCriterion("cat_code <", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeLessThanOrEqualTo(Integer value) {
            addCriterion("cat_code <=", value, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeIn(List<Integer> values) {
            addCriterion("cat_code in", values, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeNotIn(List<Integer> values) {
            addCriterion("cat_code not in", values, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeBetween(Integer value1, Integer value2) {
            addCriterion("cat_code between", value1, value2, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("cat_code not between", value1, value2, "catCode");
            return (Criteria) this;
        }

        public Criteria andCatShtDescIsNull() {
            addCriterion("cat_sht_desc is null");
            return (Criteria) this;
        }

        public Criteria andCatShtDescIsNotNull() {
            addCriterion("cat_sht_desc is not null");
            return (Criteria) this;
        }

        public Criteria andCatShtDescEqualTo(String value) {
            addCriterion("cat_sht_desc =", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescNotEqualTo(String value) {
            addCriterion("cat_sht_desc <>", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescGreaterThan(String value) {
            addCriterion("cat_sht_desc >", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescGreaterThanOrEqualTo(String value) {
            addCriterion("cat_sht_desc >=", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescLessThan(String value) {
            addCriterion("cat_sht_desc <", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescLessThanOrEqualTo(String value) {
            addCriterion("cat_sht_desc <=", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescLike(String value) {
            addCriterion("cat_sht_desc like", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescNotLike(String value) {
            addCriterion("cat_sht_desc not like", value, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescIn(List<String> values) {
            addCriterion("cat_sht_desc in", values, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescNotIn(List<String> values) {
            addCriterion("cat_sht_desc not in", values, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescBetween(String value1, String value2) {
            addCriterion("cat_sht_desc between", value1, value2, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatShtDescNotBetween(String value1, String value2) {
            addCriterion("cat_sht_desc not between", value1, value2, "catShtDesc");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionIsNull() {
            addCriterion("cat_description is null");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionIsNotNull() {
            addCriterion("cat_description is not null");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionEqualTo(String value) {
            addCriterion("cat_description =", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionNotEqualTo(String value) {
            addCriterion("cat_description <>", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionGreaterThan(String value) {
            addCriterion("cat_description >", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("cat_description >=", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionLessThan(String value) {
            addCriterion("cat_description <", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionLessThanOrEqualTo(String value) {
            addCriterion("cat_description <=", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionLike(String value) {
            addCriterion("cat_description like", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionNotLike(String value) {
            addCriterion("cat_description not like", value, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionIn(List<String> values) {
            addCriterion("cat_description in", values, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionNotIn(List<String> values) {
            addCriterion("cat_description not in", values, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionBetween(String value1, String value2) {
            addCriterion("cat_description between", value1, value2, "catDescription");
            return (Criteria) this;
        }

        public Criteria andCatDescriptionNotBetween(String value1, String value2) {
            addCriterion("cat_description not between", value1, value2, "catDescription");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_categories
     *
     * @mbggenerated do_not_delete_during_merge Wed May 13 15:02:10 EAT 2015
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table inv_categories
     *
     * @mbggenerated Wed May 13 15:02:10 EAT 2015
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