CREATE TABLE `inv_purchases` (
  `pur_id` int(11) NOT NULL AUTO_INCREMENT,
  `pur_invono` varchar(20) DEFAULT NULL,
  `pur_refNo` varchar(50) NOT NULL,
  `pur_date` date NOT NULL,
  `pur_acc_code` int(11) NOT NULL,
  `pur_user` varchar(40) DEFAULT NULL,
  `pur_status` varchar(45) DEFAULT 'PENDING',
  `pur_posted_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
CREATE TABLE `inv_purchases_details` (
  `purd_id` int(11) NOT NULL AUTO_INCREMENT,
  `purd_pur_id` int(11) NOT NULL,
  `purd_pdt_code` int(11) NOT NULL,
  `purd_qty` double DEFAULT '0',
  `purd_price` decimal(22,2) DEFAULT '0.00',
  `purd_tamount` decimal(22,2) DEFAULT '0.00',
  `purd_discount` double DEFAULT '0',
  `purd_bonus` double DEFAULT '0',
  `purd_status` varchar(20) DEFAULT 'PENDING',
  `purd_previous_qty` double DEFAULT '0',
  `purd_remarks` varchar(250) DEFAULT NULL,
  `purd_mtrade_price` decimal(22,2) DEFAULT NULL,
  `purd_expiry_dt` date DEFAULT NULL,
  PRIMARY KEY (`purd_id`),
  KEY `purd_pdt_code_fk` (`purd_pdt_code`),
  KEY `purd_pur_id_fk` (`purd_pur_id`),
  CONSTRAINT `purd_pdt_code_fk` FOREIGN KEY (`purd_pdt_code`) REFERENCES `inv_products` (`pdt_code`),
  CONSTRAINT `purd_pur_id_fk` FOREIGN KEY (`purd_pur_id`) REFERENCES `inv_purchases` (`pur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
