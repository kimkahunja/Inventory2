CREATE TABLE `inv_accounts` (
  `acc_code` int(11) NOT NULL AUTO_INCREMENT,
  `acc_name` varchar(100) NOT NULL,
  `acc_type` varchar(1) NOT NULL,
  `acc_address` varchar(100) DEFAULT NULL,
  `acc_location` varchar(100) DEFAULT NULL,
  `acc_email` varchar(40) DEFAULT NULL,
  `acc_fax` varchar(45) DEFAULT NULL,
  `acc_tel_no` varchar(45) DEFAULT NULL,
  `acc_mobile_no` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`acc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;