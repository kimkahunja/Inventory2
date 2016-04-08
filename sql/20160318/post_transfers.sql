DROP PROCEDURE IF EXISTS inventory.post_transfer;
CREATE PROCEDURE inventory.`post_transfer`(v_type VARCHAR(5),v_product INT,v_qty DOUBLE,v_source_loc INT,v_dest_loc INT, OUT v_rtnVal VARCHAR(1000))
BEGIN
    DECLARE v_transfer_qty,v_remaining_qty DOUBLE;
    DECLARE v_loc_code  INT;
    DECLARE v_prod_description  VARCHAR(200);
	  SET autocommit=0;
    IF v_type="IN" THEN
       SET v_transfer_qty=v_qty;
       SET v_loc_code=v_dest_loc;
    ELSE
      SET  v_transfer_qty=v_qty*-1;
      SET v_loc_code=v_source_loc;
    END IF;
    -- validate qty available if the transfer type is outward
    IF v_type="OUT"  THEN
        SELECT stk_qty INTO v_remaining_qty
          FROM inv_stocks
          WHERE stk_pdt_code=v_product
          AND stk_loc_code=v_source_loc;
          IF v_remaining_qty<v_qty THEN
           SELECT pdt_description INTO v_prod_description
           FROM inv_products
           WHERE pdt_code=v_product;
           SET v_rtnVal='No enough stock for '+v_prod_description;
            signal sqlstate '45000' set message_text = v_rtnVal;
          END IF;
    END IF;
    UPDATE inv_products SET pdt_current_qty=IFNULL(pdt_current_qty,0)+v_transfer_qty
    WHERE pdt_code=v_product;
    
    UPDATE inv_stocks SET stk_qty=stk_qty+v_transfer_qty
     WHERE stk_pdt_code=v_product
      AND stk_loc_code=v_loc_code;
      
      SET v_rtnVal="S";
END;
