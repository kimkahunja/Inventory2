ALTER TABLE inventory.inv_purchases_details
 DROP FOREIGN KEY purd_pdt_code_fk,
 DROP FOREIGN KEY purd_pur_id_fk,
 ADD purd_vat_inclusive VARCHAR(1) DEFAULT 'Y' AFTER purd_serialNo,
 ADD purd_vat_amt DECIMAL(14,2);
ALTER TABLE inventory.inv_purchases_details
 ADD CONSTRAINT purd_pdt_code_fk FOREIGN KEY (purd_pdt_code) REFERENCES inventory.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT purd_pur_id_fk FOREIGN KEY (purd_pur_id) REFERENCES inventory.inv_purchases (pur_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
------------------------------------------------------
 
 ALTER TABLE inventory.inv_purchases_details
 DROP FOREIGN KEY purd_pdt_code_fk,
 DROP FOREIGN KEY purd_pur_id_fk,
 ADD purd_vat_rate DECIMAL(14,2) AFTER purd_vat_amt;
ALTER TABLE inventory.inv_purchases_details
 ADD CONSTRAINT purd_pdt_code_fk FOREIGN KEY (purd_pdt_code) REFERENCES inventory.inv_products (pdt_code) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD CONSTRAINT purd_pur_id_fk FOREIGN KEY (purd_pur_id) REFERENCES inventory.inv_purchases (pur_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
------------------------------------------------------------
 ALTER TABLE inventory.inv_invoices
 DROP FOREIGN KEY inv_acc_code_fk,
 ADD inv_pay_mode VARCHAR(20) NOT NULL DEFAULT 'CASH' AFTER inv_loc_code;
ALTER TABLE inventory.inv_invoices
 ADD CONSTRAINT inv_acc_code_fk FOREIGN KEY (inv_acc_code) REFERENCES inventory.inv_accounts (acc_code) ON UPDATE RESTRICT ON DELETE RESTRICT;
