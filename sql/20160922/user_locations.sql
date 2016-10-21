CREATE TABLE `inv_user_locations` (
  `usloc_code` int(11) NOT NULL AUTO_INCREMENT,
  `usloc_loc_code` int(11) NOT NULL,
  `usloc_usr_code` int(11) NOT NULL,
  `usloc_updated_by` varchar(50) NOT NULL,
  `usloc_updated_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`usloc_code`),
  KEY `usloc_loc_fk` (`usloc_loc_code`),
  KEY `usloc_usr_fk` (`usloc_usr_code`),
  CONSTRAINT `usloc_loc_fk` FOREIGN KEY (`usloc_loc_code`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `usloc_usr_fk` FOREIGN KEY (`usloc_usr_code`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
