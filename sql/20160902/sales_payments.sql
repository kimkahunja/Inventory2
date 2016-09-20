CREATE TABLE `inv_sale_payment` (
  `spymt_id` int(11) NOT NULL AUTO_INCREMENT,
  `spymt_inv_id` int(11) NOT NULL,
  `spymt_total` decimal(10,0) NOT NULL,
  `spymt_payMode` varchar(20) NOT NULL,
  `spymt_payMethod` varchar(20) NOT NULL,
  `spymt_reference` varchar(50) DEFAULT NULL,
  `spymt_amount_given` decimal(10,0) DEFAULT NULL,
  `spymt_change` decimal(10,0) DEFAULT NULL,
  `spymt_done_by` varchar(50) NOT NULL,
  `spymt_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`spymt_id`),
  UNIQUE KEY `spymt_inv_uk` (`spymt_inv_id`),
  CONSTRAINT `spymt_inv_fk` FOREIGN KEY (`spymt_inv_id`) REFERENCES `inv_invoices` (`inv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
