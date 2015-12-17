ALTER TABLE inventory.inv_accounts
 ADD acc_default VARCHAR(1) DEFAULT 'N' AFTER acc_mobile_no;
------------------------------------------------------------------
 DROP TRIGGER `inventory`.`inv_defaultAcc_insert_trig`;
CREATE TRIGGER `inventory`.`inv_defaultAcc_insert_trig` BEFORE INSERT
    ON inventory.inv_accounts FOR EACH ROW
BEGIN
     DECLARE v_count INT;
     DECLARE v_msg   VARCHAR(255);
   IF NEW.acc_default='Y' THEN
      -- check whether there exists a record of the same type whose default value has been set to Y
      SELECT COUNT(*) INTO v_count
      FROM inv_accounts 
      WHERE acc_default='Y'
      AND acc_type=NEW.acc_type;
      IF v_count<>0 THEN
      -- set msg = concat('MyTriggerError: Trying to insert a negative value in trigger_test: ', cast(new.id as char));
       --   signal sqlstate '45000' set message_text = msg;
        SET v_msg='There already exists an account set as Default...';
        signal sqlstate '45000' set message_text = v_msg;
      END IF;
  END IF;    
END;

----------------------------------------------------------------------------------------------------7
DROP TRIGGER `inventory`.`inv_defaultAcc_update_trig`;
CREATE TRIGGER `inventory`.`inv_defaultAcc_update_trig` BEFORE UPDATE
    ON inventory.inv_accounts FOR EACH ROW
BEGIN
    DECLARE v_count INT;
     DECLARE v_msg   VARCHAR(255);
     IF NEW.acc_default='Y' THEN
        -- check whether there exists a record of the same type whose default value has been set to Y
        SELECT COUNT(*) INTO v_count
        FROM inv_accounts 
        WHERE acc_default='Y'
        AND acc_type=NEW.acc_type;
        IF v_count<>0 THEN
        -- set msg = concat('MyTriggerError: Trying to insert a negative value in trigger_test: ', cast(new.id as char));
         --   signal sqlstate '45000' set message_text = msg;
          SET v_msg='There already exists an account set as Default...';
          signal sqlstate '45000' set message_text = v_msg;
        END IF;
     END IF;    
END;
-------------------------------------------------------
ALTER TABLE inventory.inv_products
 DROP FOREIGN KEY pdt_cat_code_fk,
 DROP FOREIGN KEY pdt_loc_code_fk,
 DROP FOREIGN KEY pdt_sloc_code_fk,
 DROP FOREIGN KEY pdt_unt_code_fk,
 DROP FOREIGN KEY pdt_vat_id_fk,
 ADD pdt_merge_qty VARCHAR(20) NOT NULL DEFAULT 'N' AFTER pdt_delete_date;
ALTER TABLE inventory.inv_products
 ADD CONSTRAINT pdt_cat_code_fk FOREIGN KEY (pdt_cat_code) REFERENCES inventory.inv_categories (cat_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_loc_code_fk FOREIGN KEY (pdt_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_sloc_code_fk FOREIGN KEY (pdt_sloc_code) REFERENCES inventory.inv_sub_locations (sloc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_unt_code_fk FOREIGN KEY (pdt_unt_code) REFERENCES inventory.inv_units (unt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_vat_id_fk FOREIGN KEY (pdt_vat_id) REFERENCES inventory.inv_vat (VAT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;
-----------------------------------------------------------------
CREATE TABLE inventory.inv_stocks (
   stk_id INT AUTO_INCREMENT NOT NULL,
   stk_source_type VARCHAR(20) NOT NULL,
   stk_souce_id INT NOT NULL,
   stk_loc_code INT NOT NULL,
  CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
  PRIMARY KEY (stk_id)
) ENGINE = InnoDB ROW_FORMAT = DEFAULT;
------------------------------------------------------------------------
ALTER TABLE inventory.inv_purchases_details
 DROP FOREIGN KEY purd_pdt_code_fk,
 DROP FOREIGN KEY purd_pur_id_fk,
 ADD purd_serialNo VARCHAR(100) AFTER purd_expiry_dt;
ALTER TABLE inventory.inv_purchases_details
 ADD CONSTRAINT purd_pdt_code_fk FOREIGN KEY (purd_pdt_code) REFERENCES inventory.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT purd_pur_id_fk FOREIGN KEY (purd_pur_id) REFERENCES inventory.inv_purchases (pur_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
--------------------------------------------------------------------------------
ALTER TABLE inventory.inv_stocks
 DROP FOREIGN KEY stk_loc_code_fk,
 ADD stk_qty DOUBLE AFTER stk_loc_code;
ALTER TABLE inventory.inv_stocks
 ADD CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT;

