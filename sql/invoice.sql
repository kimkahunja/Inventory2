CREATE TABLE `inv_invoices` (
  `inv_id` int(11) NOT NULL AUTO_INCREMENT,
  `inv_invono` varchar(20) DEFAULT NULL,
  `inv_refNo` varchar(50) DEFAULT NULL,
  `inv_date` date NOT NULL,
  `inv_acc_code` int(11) NOT NULL,
  `inv_user` varchar(40) DEFAULT NULL,
  `inv_status` varchar(45) DEFAULT 'PENDING',
  `inv_posted_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`inv_id`),
  KEY `inv_acc_code_fk` (`inv_acc_code`),
  CONSTRAINT `inv_acc_code_fk` FOREIGN KEY (`inv_acc_code`) REFERENCES `inv_accounts` (`acc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
---------------------------------------------------

CREATE TABLE `inv_invoice_dtls` (
  `invd_id` int(11) NOT NULL AUTO_INCREMENT,
  `invd_inv_id` int(11) NOT NULL,
  `invd_pdt_code` int(11) NOT NULL,
  `invd_qty` double DEFAULT '0',
  `invd_price` decimal(22,2) DEFAULT '0.00',
  `invd_tamount` decimal(22,2) DEFAULT '0.00',
  `invd_discount` double DEFAULT '0',
  `invd_bonus` double DEFAULT '0',
  `invd_status` varchar(20) DEFAULT 'PENDING',
  `invd_bp` decimal(22,2) DEFAULT '0.00',
  PRIMARY KEY (`invd_id`),
  KEY `invd_inv_id_fk` (`invd_inv_id`),
  KEY `invd_pdt_code_fk` (`invd_pdt_code`),
  CONSTRAINT `invd_inv_id_fk` FOREIGN KEY (`invd_inv_id`) REFERENCES `inv_invoices` (`inv_id`),
  CONSTRAINT `invd_pdt_code_fk` FOREIGN KEY (`invd_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

