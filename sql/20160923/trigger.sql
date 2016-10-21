DROP TRIGGER `inventory`.`inv_defaultAcc_update_trig`;
CREATE TRIGGER `inventory`.`inv_defaultAcc_update_trig` BEFORE UPDATE
    ON inventory.inv_accounts FOR EACH ROW
BEGIN
    DECLARE v_count INT;
     DECLARE v_msg   VARCHAR(255);
     IF NEW.acc_default='Y' AND OLD.acc_default='N'  THEN
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
