DROP PROCEDURE IF EXISTS inventory.post_invoice;
CREATE PROCEDURE inventory.`post_invoice`(v_inv_id INT,v_posted_by VARCHAR(50),OUT v_rtnVal VARCHAR(1000))
BEGIN
 DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
     ROLLBACK;
       SELECT 'An error has occurred';
    END;
      SET v_rtnVal='F';
      SET autocommit=0;
    BEGIN
          DECLARE v_finished INTEGER DEFAULT 0;
          DECLARE v_pdt_code,v_invd_id,v_loc_code,v_count_stock,v_stk_id INTEGER;
          DECLARE v_qty,v_remaining_qty      DOUBLE;
          DECLARE v_price,v_bp   DECIMAL(22,2);
          DECLARE v_pdt_merge_qty  VARCHAR(1);
          DECLARE v_prod_description  VARCHAR(200);
          DECLARE v_msg   VARCHAR(255);
            -- declare cursor for Purchased products list
         DECLARE prod_cursor CURSOR FOR
            SELECT invd_pdt_code,invd_qty,invd_price,invd_id,pdt_merge_qty,inv_loc_code,invd_stk_id,pdt_description
            FROM inv_invoice_dtls,inv_products,inv_invoices
            WHERE pdt_code=invd_pdt_code
            AND invd_inv_id=inv_id
            AND inv_id=v_inv_id;
         -- declare NOT FOUND handler
         DECLARE CONTINUE HANDLER
                FOR NOT FOUND SET v_finished = 1;
             OPEN prod_cursor;
              proc_loop: LOOP
                 FETCH prod_cursor INTO v_pdt_code,v_qty,v_price,v_invd_id,v_pdt_merge_qty,v_loc_code,v_stk_id,v_prod_description;
                IF v_finished = 1 THEN
                   LEAVE proc_loop;
                 END IF;
              -- Validate the quantity remaining
                SELECT stk_qty,stk_latest_price INTO v_remaining_qty,v_bp
                FROM inv_stocks
                WHERE stk_pdt_code=v_pdt_code
                AND stk_loc_code=v_loc_code;
                  -- SET v_rtnVal='v_pdt_code== '+v_pdt_code+' v_loc_code== '+v_loc_code;
                --  signal sqlstate '45000' set message_text =v_rtnVal ;
                IF v_remaining_qty<v_qty THEN
                 SET v_rtnVal='No enough stock for '+v_prod_description;
                  signal sqlstate '45000' set message_text = v_rtnVal;
                END IF;
                --  update the product quantities
               UPDATE inv_products SET pdt_current_qty=IFNULL(pdt_current_qty,0)-v_qty
               WHERE pdt_code=v_pdt_code;
               UPDATE inv_invoice_dtls SET invd_status='POSTED',invd_bp=v_bp
               WHERE invd_id=v_invd_id;
               -- update stocks
               UPDATE inv_stocks SET stk_qty=stk_qty-v_qty
               WHERE stk_pdt_code=v_pdt_code
                AND stk_loc_code=v_loc_code;
             END LOOP proc_loop;
             CLOSE prod_cursor;
           UPDATE inv_invoices SET inv_status='POSTED',inv_posted_by=v_posted_by
            WHERE inv_id=v_inv_id;           
            SET v_rtnVal='S';
           -- COMMIT;    
           END;
END;
