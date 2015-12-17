CREATE TABLE inventory.inv_invoice_numbers (
   vnum_loc_code INT NOT NULL,
   vnum_cur_num INT NOT NULL,
   vnum_last_update TIMESTAMP NOT NULL
) ENGINE = InnoDB ROW_FORMAT = DEFAULT;