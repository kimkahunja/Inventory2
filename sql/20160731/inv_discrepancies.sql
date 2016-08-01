CREATE TABLE `inv_discrepancies` (
  `dsc_id` int(11) NOT NULL AUTO_INCREMENT,
  `dsc_date` date NOT NULL,
  `dsc_status` varchar(20) NOT NULL DEFAULT 'PENDING',
  `dsc_captured_by` varchar(50) NOT NULL,
  `dsc_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dsc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
