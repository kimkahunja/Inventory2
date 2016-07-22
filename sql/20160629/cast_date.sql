DROP FUNCTION IF EXISTS inventory.cast_date;
CREATE FUNCTION inventory.`cast_date`(v_string_date VARCHAR(50)) RETURNS date
BEGIN
	 DECLARE v_date DATE;
   SELECT CAST(DATE_FORMAT(STR_TO_DATE(v_string_date,'%d/%m/%Y'),'%Y/%m/%d') AS DATE) INTO v_date
   FROM DUAL;
	RETURN v_date;
END;
