CREATE TABLE `inv_returns` (
  `rtn_id` int(11) NOT NULL AUTO_INCREMENT,
  `rtn_date` date NOT NULL,
  `rtn_status` varchar(20) NOT NULL DEFAULT 'PENDING',
  `rtn_captured_by` varchar(50) NOT NULL,
  `rtn_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rtn_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
