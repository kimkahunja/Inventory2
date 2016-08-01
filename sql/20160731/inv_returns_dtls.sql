CREATE TABLE `inv_returns_dtls` (
  `rtnd_id` int(11) NOT NULL AUTO_INCREMENT,
  `rtnd_rtn_id` int(11) NOT NULL,
  `rtnd_pdt_code` int(11) NOT NULL,
  `rtnd_qty` double NOT NULL,
  `rtnd_price` decimal(22,2) NOT NULL,
  PRIMARY KEY (`rtnd_id`),
  KEY `rtnd_rtn_fk` (`rtnd_rtn_id`),
  KEY `rtnd_pdt_fk` (`rtnd_pdt_code`),
  CONSTRAINT `rtnd_rtn_fk` FOREIGN KEY (`rtnd_rtn_id`) REFERENCES `inv_returns` (`rtn_id`),
  CONSTRAINT `rtnd_pdt_fk` FOREIGN KEY (`rtnd_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
