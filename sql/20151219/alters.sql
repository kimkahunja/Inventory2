ALTER TABLE inventory.inv_purchases
 ADD pur_loc_code INT AFTER pur_posted_by;
ALTER TABLE inventory.inv_purchases
 ADD CONSTRAINT pur_loc_code_fk FOREIGN KEY (pur_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
--------------------------------------------------------------------
 ALTER TABLE inventory.inv_stocks
 DROP FOREIGN KEY stk_loc_code_fk,
 ADD stk_pdt_code INT AFTER stk_qty;
ALTER TABLE inventory.inv_stocks
 ADD CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT stk_pdt_code_fk FOREIGN KEY (stk_pdt_code) REFERENCES inventory.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
-------------------------------------------------------------
 ALTER TABLE inventory.inv_stocks
 DROP FOREIGN KEY stk_loc_code_fk,
 DROP FOREIGN KEY stk_pdt_code_fk,
 CHANGE stk_pdt_code stk_pdt_code INT(11) NOT NULL;
ALTER TABLE inventory.inv_stocks
 ADD CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT stk_pdt_code_fk FOREIGN KEY (stk_pdt_code) REFERENCES inventory.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
--------------------------------------------------------------
 ALTER TABLE inventory.user
 DROP FOREIGN KEY fk_User_Group1,
 ADD default_location INT AFTER Group_id;
ALTER TABLE inventory.user
 ADD CONSTRAINT fk_User_Group1 FOREIGN KEY (Group_id) REFERENCES inventory.groups (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
 ADD CONSTRAINT default_location_fk FOREIGN KEY (default_location) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
-------------------------------------------------------------------
 ALTER TABLE inventory.user
 DROP FOREIGN KEY fk_User_Group1,
 DROP FOREIGN KEY default_location_fk,
 CHANGE default_location default_location INT(11) NOT NULL;
ALTER TABLE inventory.user
 ADD CONSTRAINT fk_User_Group1 FOREIGN KEY (Group_id) REFERENCES inventory.groups (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
 ADD CONSTRAINT default_location_fk FOREIGN KEY (default_location) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
