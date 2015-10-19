DROP PROCEDURE IF EXISTS inventory.get_product;
CREATE PROCEDURE inventory.`get_product`(p_search_data VARCHAR(200))
BEGIN
   DECLARE errmsg  VARCHAR(200);
   DECLARE v_length1,v_length2,v_length3 INT;
   /*SELECT LENGTH(p_search_data),LENGTH("B") ,LENGTH(REPLACE(p_search_data,'"',''))
   INTO v_length1,v_length2,v_length3
   FROM DUAL;
   SET errmsg=CONCAT('v_length1==',v_length1,'v_length2==',v_length2,'v_length3==',v_length3);
    SIGNAL SQLSTATE '45000' 
		 	SET MESSAGE_TEXT =errmsg;*/
      
   SELECT pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, 1 AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date,cat_sht_desc,loc_sht_desc,sloc_sht_desc,unt_sht_desc
		from inv_products left join inv_categories on inv_categories.cat_code = inv_products.pdt_cat_code
		left join inv_locations on inv_locations.loc_code = inv_products.pdt_loc_code
		left join inv_sub_locations on inv_sub_locations.sloc_code = inv_products.pdt_sloc_code
		left join inv_units on inv_units.unt_code = inv_products.pdt_unt_code 
     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
             );
	/* SELECT 
	    pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, 1 AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date
	    FROM inv_products
	     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
             ); */
    
END;
