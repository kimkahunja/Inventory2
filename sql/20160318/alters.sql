ALTER TABLE inventory.user
 DROP FOREIGN KEY default_location_fk,
 DROP FOREIGN KEY fk_User_Group1,
 ADD status VARCHAR(1) DEFAULT 'A' AFTER default_location;
ALTER TABLE inventory.user
 ADD CONSTRAINT default_location_fk FOREIGN KEY (default_location) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT fk_User_Group1 FOREIGN KEY (Group_id) REFERENCES inventory.groups (id) ON UPDATE NO ACTION ON DELETE NO ACTION;
------------------------------------------------------
 
 ALTER TABLE inventory.user
 DROP FOREIGN KEY default_location_fk,
 DROP FOREIGN KEY fk_User_Group1,
 CHANGE email email VARCHAR(100);
ALTER TABLE inventory.user
 ADD CONSTRAINT default_location_fk FOREIGN KEY (default_location) REFERENCES inventory.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT fk_User_Group1 FOREIGN KEY (Group_id) REFERENCES inventory.groups (id) ON UPDATE NO ACTION ON DELETE NO ACTION;
