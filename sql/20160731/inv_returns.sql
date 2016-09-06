CREATE TABLE `inv_returns` (
  `rtn_id` int(11) NOT NULL AUTO_INCREMENT,
  `rtn_date` date NOT NULL,
  `rtn_acc_code` int(11) NOT NULL,
  `rtn_status` varchar(20) NOT NULL DEFAULT 'PENDING',
  `rtn_captured_by` varchar(50) NOT NULL,
  `rtn_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rtn_id`),
  KEY `rtn_acc_code_fk` (`rtn_acc_code`),
  CONSTRAINT `rtn_acc_code_fk` FOREIGN KEY (`rtn_acc_code`) REFERENCES `inv_accounts` (`acc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
