CREATE TABLE `inv_item_swap_dtls` (
  `swpd_id` int(11) NOT NULL AUTO_INCREMENT,
  `swpd_swp_id` int(11) NOT NULL,
  `swpd_pdt_code` int(11) NOT NULL,
  `swpd_qty` double NOT NULL,
  PRIMARY KEY (`swpd_id`),
  KEY `swpd_swp_fk` (`swpd_swp_id`),
  KEY `swpd_pdt_code_fk` (`swpd_pdt_code`),
  CONSTRAINT `swpd_swp_fk` FOREIGN KEY (`swpd_swp_id`) REFERENCES `inv_item_swap` (`swp_id`),
  CONSTRAINT `swpd_pdt_code_fk` FOREIGN KEY (`swpd_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
