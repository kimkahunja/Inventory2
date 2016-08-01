CREATE TABLE `inv_item_swap` (
  `swp_id` int(11) NOT NULL AUTO_INCREMENT,
  `swp_date` date NOT NULL,
  `swp_acc_code` int(11) NOT NULL,
  `swp_status` varchar(20) NOT NULL DEFAULT 'PENDING',
  `swp_done_by` varchar(50) DEFAULT NULL,
  `swp_done_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`swp_id`),
  KEY `swp_acc_code_fk` (`swp_acc_code`),
  CONSTRAINT `swp_acc_code_fk` FOREIGN KEY (`swp_acc_code`) REFERENCES `inv_accounts` (`acc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
