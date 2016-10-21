ALTER TABLE inventory.inv_products
 DROP FOREIGN KEY pdt_cat_code_fk,
 DROP FOREIGN KEY pdt_loc_code_fk,
 DROP FOREIGN KEY pdt_sloc_code_fk,
 DROP FOREIGN KEY pdt_unt_code_fk,
 DROP FOREIGN KEY pdt_vat_id_fk,
 CHANGE pdt_loc_code pdt_loc_code INT(11) NOT NULL,
 CHANGE pdt_cat_code pdt_cat_code INT(11) NOT NULL;
ALTER TABLE inventory.inv_products
 ADD CONSTRAINT pdt_cat_code_fk FOREIGN KEY (pdt_cat_code) REFERENCES inventory.inv_categories (cat_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_loc_code_fk FOREIGN KEY (pdt_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_sloc_code_fk FOREIGN KEY (pdt_sloc_code) REFERENCES inventory.inv_sub_locations (sloc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_unt_code_fk FOREIGN KEY (pdt_unt_code) REFERENCES inventory.inv_units (unt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT pdt_vat_id_fk FOREIGN KEY (pdt_vat_id) REFERENCES inventory.inv_vat (VAT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;
--------------------------
 
 ALTER TABLE inventory.inv_accounts
 ADD acc_qb_ref VARCHAR(200) AFTER acc_default,
 ADD acc_qb_date DATE;
