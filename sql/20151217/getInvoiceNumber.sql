DROP FUNCTION IF EXISTS inventory.getInvoiceNumber;
CREATE FUNCTION inventory.`getInvoiceNumber`(v_loc_code INT) RETURNS varchar(100) CHARSET latin1
BEGIN
      DECLARE v_invoiceNumber INTEGER DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_invoiceNumber = 1;
  	  SELECT vnum_cur_num+1  INTO v_invoiceNumber
          from inv_invoice_numbers
          where vnum_loc_code=v_loc_code;
	RETURN v_invoiceNumber;
END;
