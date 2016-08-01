CREATE TABLE `inv_discrepancies_dtls` (
  `dscd_id` int(11) NOT NULL AUTO_INCREMENT,
  `dscd_dsc_id` int(11) NOT NULL,
  `dscd_pdt_code` int(11) NOT NULL,
  `dscd_qty` double NOT NULL,
  PRIMARY KEY (`dscd_id`),
  KEY `dscd_dsc_fk` (`dscd_dsc_id`),
  KEY `dscd_pdt_fk` (`dscd_pdt_code`),
  CONSTRAINT `dscd_dsc_fk` FOREIGN KEY (`dscd_dsc_id`) REFERENCES `inv_discrepancies` (`dsc_id`),
  CONSTRAINT `dscd_pdt_fk` FOREIGN KEY (`dscd_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
