CREATE TABLE `inv_man_adjustments` (
  `madj_id` int(11) NOT NULL AUTO_INCREMENT,
  `madj_date` date NOT NULL,
  `madj_remarks` varchar(300) NOT NULL,
  `madj_status` varchar(20) NOT NULL,
  `madj_captured_by` varchar(50) NOT NULL,
  `madj_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`madj_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
---------------------------------------------------------

CREATE TABLE `inv_man_adjustment_dtls` (
  `madjd_id` int(11) NOT NULL AUTO_INCREMENT,
  `madjd_madj_id` int(11) NOT NULL,
  `madjd_pdt_code` int(11) NOT NULL,
  `madjd_qty` double NOT NULL,
  PRIMARY KEY (`madjd_id`),
  KEY `madjd_madj_fk` (`madjd_madj_id`),
  KEY `madjd_pdt_fk` (`madjd_pdt_code`),
  CONSTRAINT `madjd_madj_fk` FOREIGN KEY (`madjd_madj_id`) REFERENCES `inv_man_adjustments` (`madj_id`),
  CONSTRAINT `madjd_pdt_fk` FOREIGN KEY (`madjd_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
