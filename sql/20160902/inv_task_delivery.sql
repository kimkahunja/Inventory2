CREATE TABLE `inv_task_delivery` (
  `tsk_id` int(11) NOT NULL AUTO_INCREMENT,
  `tsk_date` date NOT NULL,
  `tsk_acc_code` int(11) NOT NULL,
  `tsk_description` varchar(2000) NOT NULL,
  `tsk_tssg_id` int(11) NOT NULL,
  `tsk_cost` decimal(22,2) NOT NULL,
  `tsk_collection_date` date DEFAULT NULL,
  `tsk_status` varchar(20) NOT NULL DEFAULT '''PENDING''',
  `tsk_remarks` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`tsk_id`),
  KEY `tsk_acc_code_fk` (`tsk_acc_code`),
  KEY `tsk_tssg_fk` (`tsk_tssg_id`),
  CONSTRAINT `tsk_acc_code_fk` FOREIGN KEY (`tsk_acc_code`) REFERENCES `inv_accounts` (`acc_code`),
  CONSTRAINT `tsk_tssg_fk` FOREIGN KEY (`tsk_tssg_id`) REFERENCES `inv_task_assignee` (`tssg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
