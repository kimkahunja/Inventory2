

ALTER TABLE inventory_live.inv_invoice_dtls
 DROP FOREIGN KEY invd_inv_id_fk,
 DROP FOREIGN KEY invd_pdt_code_fk,
 DROP FOREIGN KEY invd_stk_id_fk,
 CHANGE invd_stk_id invd_stk_id INT(11);
ALTER TABLE inventory_live.inv_invoice_dtls
 ADD CONSTRAINT invd_inv_id_fk FOREIGN KEY (invd_inv_id) REFERENCES inventory_live.inv_invoices (inv_id) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT invd_pdt_code_fk FOREIGN KEY (invd_pdt_code) REFERENCES inventory_live.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
------------------------------------------------------
 
 
 ALTER TABLE inventory_live.inv_transfer_dtls
 DROP FOREIGN KEY tnsfd_pdt_code_fk,
 DROP FOREIGN KEY tnsfd_stk_fk,
 DROP FOREIGN KEY tnsfd_tnsf_fk,
 CHANGE tnsfd_stk_id tnsfd_stk_id INT(11);
ALTER TABLE inventory_live.inv_transfer_dtls
 ADD CONSTRAINT tnsfd_pdt_code_fk FOREIGN KEY (tnsfd_pdt_code) REFERENCES inventory_live.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT tnsfd_tnsf_fk FOREIGN KEY (tnsfd_tnsf_id) REFERENCES inventory_live.inv_transfers (tnsf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;

 
 -----------------------------------
 truncate table inv_stocks;
 ---------------------------------------------
 ALTER TABLE inventory_live.inv_stocks
 DROP FOREIGN KEY stk_loc_code_fk,
 DROP FOREIGN KEY stk_pdt_code_fk,
 CHANGE stk_source_type stk_source_type VARCHAR(20),
 CHANGE stk_souce_id stk_souce_id INT(11),
 CHANGE stk_qty stk_qty DOUBLE NOT NULL;
ALTER TABLE inventory_live.inv_stocks
 ADD CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory_live.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT stk_pdt_code_fk FOREIGN KEY (stk_pdt_code) REFERENCES inventory_live.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
 
 -----------------------------------
 ALTER TABLE inventory_live.inv_stocks
 DROP FOREIGN KEY stk_loc_code_fk,
 DROP FOREIGN KEY stk_pdt_code_fk,
 ADD stk_latest_price DECIMAL(22,2) AFTER stk_pdt_code,
 ADD stk_aver_price DECIMAL(22,2);
ALTER TABLE inventory_live.inv_stocks
 ADD CONSTRAINT stk_loc_code_fk FOREIGN KEY (stk_loc_code) REFERENCES inventory_live.inv_locations (loc_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT stk_pdt_code_fk FOREIGN KEY (stk_pdt_code) REFERENCES inventory_live.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT;

 
