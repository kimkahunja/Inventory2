DROP PROCEDURE IF EXISTS inventory.post_adjustment;
CREATE PROCEDURE inventory.`post_adjustment`(v_pdt_code INT,v_qty DOUBLE,v_location INT,OUT v_rtnVal VARCHAR(1000))
BEGIN
    DECLARE v_prod_description  VARCHAR(400);
      DECLARE v_count_stock INTEGER;
	  
      SET autocommit = 0;
      
    SELECT COUNT(*) INTO v_count_stock
      FROM inv_stocks
      WHERE stk_pdt_code=v_pdt_code
      AND stk_loc_code=v_location;
    IF v_count_stock=0 THEN
      SELECT pdt_description INTO v_prod_description
      FROM inv_products
      WHERE pdt_code=v_pdt_code;
           
     SET v_rtnVal = CONCAT('Stock not updated before...',v_prod_description);
      
         -- signal sqlstate '45000' set message_text = v_prod_description; -- 'Stock not updated before';
    ELSE
      UPDATE inv_products SET pdt_current_qty=v_qty
       WHERE pdt_code=v_pdt_code;
       
    UPDATE inv_stocks SET stk_qty=v_qty
     WHERE stk_pdt_code=v_pdt_code
      AND stk_loc_code=v_location;
      
      SET v_rtnVal="S";
    END IF;
     
END;
