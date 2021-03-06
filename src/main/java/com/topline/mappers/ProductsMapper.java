package com.topline.mappers;

import com.topline.model.ProductMovement;
import com.topline.model.Products;
import com.topline.model.ProductsExample;
import com.topline.model.wrappers.ProductWrapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface ProductsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int countByExample(ProductsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int deleteByExample(ProductsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int deleteByPrimaryKey(Integer pdtCode);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int insert(Products record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int insertSelective(Products record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    List<Products> selectByExample(ProductsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    Products selectByPrimaryKey(Integer pdtCode);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int updateByExampleSelective(@Param("record") Products record, @Param("example") ProductsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int updateByExample(@Param("record") Products record, @Param("example") ProductsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int updateByPrimaryKeySelective(Products record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table inv_products
     *
     * @mbggenerated Mon Jul 06 15:36:49 EAT 2015
     */
    int updateByPrimaryKey(Products record);
    
    
  //added methods
    List<ProductWrapper> fetchProducts(Map<String,Object> map);
    List<ProductsMapper> fetchTransProduct(Map<String,Object> map);
    List<ProductWrapper> fetchStocks(Map<String,Object> map);
    List<ProductMovement> fetchProductMovement(Map<String,Object> map);
}