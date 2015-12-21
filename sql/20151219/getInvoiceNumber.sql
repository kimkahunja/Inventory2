DROP FUNCTION IF EXISTS inventory.getInvoiceNumber;
CREATE FUNCTION inventory.`getInvoiceNumber`(v_loc_code INT) RETURNS varchar(100) CHARSET latin1
BEGIN
      DECLARE v_invoiceNumber INTEGER DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_invoiceNumber = 1;
                
  	  SELECT vnum_cur_num  INTO v_invoiceNumber
          from inv_invoice_numbers
          where vnum_loc_code=v_loc_code;
      IF v_invoiceNumber=1 THEN
        INSERT INTO inv_invoice_numbers(vnum_loc_code,vnum_cur_num,vnum_last_update)
        VALUES(v_loc_code,v_invoiceNumber,SYSDATE());
      END IF;
	RETURN v_invoiceNumber;
END;
