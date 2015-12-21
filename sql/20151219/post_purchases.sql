DROP PROCEDURE IF EXISTS inventory.post_purchases;
CREATE PROCEDURE inventory.`post_purchases`(v_pur_id INT,OUT v_count  INT)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
     ROLLBACK;
      SELECT 'An error has occurred';
    END;
      SET v_count=0;
    BEGIN  
        
          DECLARE v_finished INTEGER DEFAULT 0;
          DECLARE v_pdt_code,v_purd_id,v_loc_code,v_count_stock INTEGER;
          DECLARE v_qty      DOUBLE;
          DECLARE v_price    DECIMAL;
          DECLARE v_pdt_merge_qty  VARCHAR(1);
            -- declare cursor for Purchased products list
         DEClARE prod_cursor CURSOR FOR 
            SELECT purd_pdt_code,purd_qty,purd_price,purd_id,pdt_merge_qty,pur_loc_code
            FROM inv_purchases_details,inv_products,inv_purchases
            WHERE pdt_code=purd_pdt_code 
            AND purd_pur_id=pur_id
            AND purd_pur_id=v_pur_id;
            
         -- declare NOT FOUND handler
         DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_finished = 1;
                
         OPEN prod_cursor;     
         proc_loop: LOOP
         
                 FETCH prod_cursor INTO v_pdt_code,v_qty,v_price,v_purd_id,v_pdt_merge_qty,v_loc_code;
                 
                 IF v_finished = 1 THEN 
                   LEAVE proc_loop;
                 END IF;
                 
                --  update the product quantities
               UPDATE inv_products SET pdt_current_qty=IFNULL(pdt_current_qty,0)+v_qty
               WHERE pdt_code=v_pdt_code;
               UPDATE inv_purchases_details SET purd_status='POSTED'
               WHERE purd_id=v_purd_id;
               -- update stocks
               IF v_pdt_merge_qty='N' THEN
                 INSERT INTO inv_stocks(stk_source_type, stk_souce_id, stk_loc_code, stk_qty,stk_pdt_code)
                 VALUES('PUR',v_purd_id,v_loc_code,v_qty,v_pdt_code);
               ELSE
                  SELECT COUNT(*) INTO v_count_stock
                  FROM inv_stocks
                  WHERE stk_pdt_code=v_pdt_code
                  AND stk_loc_code=v_loc_code;
                  IF v_count_stock=0 THEN
                    INSERT INTO inv_stocks(stk_source_type, stk_souce_id, stk_loc_code, stk_qty,stk_pdt_code)
                    VALUES('PUR',v_purd_id,v_loc_code,v_qty,v_pdt_code);
                  ELSE
                    UPDATE inv_stocks SET stk_qty=stk_qty+v_qty
                    WHERE stk_pdt_code=v_pdt_code
                    AND stk_loc_code=v_loc_code;
                  END IF;                
               END IF;
             END LOOP proc_loop;
             
             CLOSE prod_cursor;
            UPDATE inv_purchases SET pur_status='POSTED'
            WHERE pur_id=v_pur_id; 
            SET v_count=1;
            
           -- COMMIT;
    END;
END;
