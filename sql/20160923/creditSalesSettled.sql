CREATE FUNCTION inventory.`creditSaleSettled`(v_inv_id INT) RETURNS decimal(14,2)
BEGIN
	 DECLARE v_amount DECIMAL(14,2) DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_amount = 0;
     
       SELECT IFNULL(SUM(crsd_amount),0) INTO v_amount
       FROM inv_credit_sale_dtls, inv_credit_sales
       WHERE crs_id=crsd_crs_id
       AND crsd_inv_id=v_inv_id;
    
	RETURN v_amount;
END;