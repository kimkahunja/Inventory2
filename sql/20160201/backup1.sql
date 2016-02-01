-- MySQL dump 10.13  Distrib 5.5.8, for Win32 (x86)
--
-- Host: localhost    Database: inventory
-- ------------------------------------------------------
-- Server version	5.5.8-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin1'),(2,'others');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_accounts`
--

DROP TABLE IF EXISTS `inv_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `acc_default` varchar(1) DEFAULT 'N',
  PRIMARY KEY (`acc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_accounts`
--

LOCK TABLES `inv_accounts` WRITE;
/*!40000 ALTER TABLE `inv_accounts` DISABLE KEYS */;
INSERT INTO `inv_accounts` VALUES (1,'Default','C',NULL,NULL,NULL,NULL,NULL,NULL,'Y'),(2,'Phone World','C',NULL,NULL,NULL,NULL,NULL,NULL,'N'),(3,'Default','D',NULL,NULL,NULL,NULL,NULL,NULL,'Y');
/*!40000 ALTER TABLE `inv_accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `inventory`.`inv_defaultAcc_insert_trig` BEFORE INSERT
    ON inventory.inv_accounts FOR EACH ROW
BEGIN
     DECLARE v_count INT;
     DECLARE v_msg   VARCHAR(255);
   IF NEW.acc_default='Y' THEN
      -- check whether there exists a record of the same type whose default value has been set to Y
      SELECT COUNT(*) INTO v_count
      FROM inv_accounts 
      WHERE acc_default='Y'
      AND acc_type=NEW.acc_type;
      IF v_count<>0 THEN
      -- set msg = concat('MyTriggerError: Trying to insert a negative value in trigger_test: ', cast(new.id as char));
       --   signal sqlstate '45000' set message_text = msg;
        SET v_msg='There already exists an account set as Default...';
        signal sqlstate '45000' set message_text = v_msg;
      END IF;
  END IF;    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `inventory`.`inv_defaultAcc_update_trig` BEFORE UPDATE
    ON inventory.inv_accounts FOR EACH ROW
BEGIN
    DECLARE v_count INT;
     DECLARE v_msg   VARCHAR(255);
     IF NEW.acc_default='Y' THEN
        -- check whether there exists a record of the same type whose default value has been set to Y
        SELECT COUNT(*) INTO v_count
        FROM inv_accounts 
        WHERE acc_default='Y'
        AND acc_type=NEW.acc_type;
        IF v_count<>0 THEN
        -- set msg = concat('MyTriggerError: Trying to insert a negative value in trigger_test: ', cast(new.id as char));
         --   signal sqlstate '45000' set message_text = msg;
          SET v_msg='There already exists an account set as Default...';
          signal sqlstate '45000' set message_text = v_msg;
        END IF;
     END IF;    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view `inv_accounts_vw`
--

DROP TABLE IF EXISTS `inv_accounts_vw`;
/*!50001 DROP VIEW IF EXISTS `inv_accounts_vw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `inv_accounts_vw` (
  `acc_code` int(11),
  `acc_name` varchar(100),
  `acc_type` varchar(1),
  `acc_address` varchar(100),
  `acc_location` varchar(100),
  `acc_email` varchar(40),
  `acc_fax` varchar(45),
  `acc_tel_no` varchar(45),
  `acc_mobile_no` varchar(45),
  `myLevel` bigint(20)
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `inv_categories`
--

DROP TABLE IF EXISTS `inv_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_categories` (
  `cat_code` int(11) NOT NULL AUTO_INCREMENT,
  `cat_sht_desc` varchar(20) NOT NULL,
  `cat_description` varchar(100) NOT NULL,
  PRIMARY KEY (`cat_code`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_categories`
--

LOCK TABLES `inv_categories` WRITE;
/*!40000 ALTER TABLE `inv_categories` DISABLE KEYS */;
INSERT INTO `inv_categories` VALUES (2,'SAMPH','Samsung Phones'),(8,'INFXPH','Infinix Phones'),(9,'WIKOPH','WIKO Phones'),(10,'LGPH','LG Phones'),(11,'SONYPH','Sony Phones');
/*!40000 ALTER TABLE `inv_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_invoice_dtls`
--

DROP TABLE IF EXISTS `inv_invoice_dtls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_invoice_dtls` (
  `invd_id` int(11) NOT NULL AUTO_INCREMENT,
  `invd_inv_id` int(11) NOT NULL,
  `invd_pdt_code` int(11) NOT NULL,
  `invd_qty` double DEFAULT '0',
  `invd_price` decimal(22,2) DEFAULT '0.00',
  `invd_tamount` decimal(22,2) DEFAULT '0.00',
  `invd_discount` double DEFAULT '0',
  `invd_bonus` double DEFAULT '0',
  `invd_status` varchar(20) DEFAULT 'PENDING',
  `invd_bp` decimal(22,2) DEFAULT '0.00',
  `invd_stk_id` int(11) NOT NULL,
  PRIMARY KEY (`invd_id`),
  KEY `invd_inv_id_fk` (`invd_inv_id`),
  KEY `invd_pdt_code_fk` (`invd_pdt_code`),
  KEY `invd_stk_id_fk` (`invd_stk_id`),
  CONSTRAINT `invd_inv_id_fk` FOREIGN KEY (`invd_inv_id`) REFERENCES `inv_invoices` (`inv_id`),
  CONSTRAINT `invd_pdt_code_fk` FOREIGN KEY (`invd_pdt_code`) REFERENCES `inv_products` (`pdt_code`),
  CONSTRAINT `invd_stk_id_fk` FOREIGN KEY (`invd_stk_id`) REFERENCES `inv_stocks` (`stk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_invoice_dtls`
--

LOCK TABLES `inv_invoice_dtls` WRITE;
/*!40000 ALTER TABLE `inv_invoice_dtls` DISABLE KEYS */;
INSERT INTO `inv_invoice_dtls` VALUES (4,2,3,1,2300.00,0.00,0,0,'',0.00,3),(5,2,2,1,30000.00,0.00,0,0,'',0.00,2),(7,1,1,1,12000.00,0.00,0,0,'',0.00,1),(11,7,3,1,1800.78,0.00,0,0,'',0.00,6),(13,9,3,1,2400.00,0.00,0,0,'',0.00,6),(14,8,1,1,12000.00,0.00,0,0,'',0.00,4),(15,3,1,1,18300.00,0.00,0,0,'',0.00,5),(16,6,2,1,31000.00,0.00,0,0,'',0.00,7);
/*!40000 ALTER TABLE `inv_invoice_dtls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_invoice_numbers`
--

DROP TABLE IF EXISTS `inv_invoice_numbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_invoice_numbers` (
  `vnum_loc_code` int(11) NOT NULL,
  `vnum_cur_num` int(11) NOT NULL,
  `vnum_last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `vnum_loc_code_uk` (`vnum_loc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_invoice_numbers`
--

LOCK TABLES `inv_invoice_numbers` WRITE;
/*!40000 ALTER TABLE `inv_invoice_numbers` DISABLE KEYS */;
INSERT INTO `inv_invoice_numbers` VALUES (1,8,'2016-01-08 13:18:24');
/*!40000 ALTER TABLE `inv_invoice_numbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_invoices`
--

DROP TABLE IF EXISTS `inv_invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_invoices` (
  `inv_id` int(11) NOT NULL AUTO_INCREMENT,
  `inv_invono` varchar(20) DEFAULT NULL,
  `inv_refNo` varchar(50) DEFAULT NULL,
  `inv_date` date NOT NULL,
  `inv_acc_code` int(11) NOT NULL,
  `inv_user` varchar(40) DEFAULT NULL,
  `inv_status` varchar(45) DEFAULT 'PENDING',
  `inv_posted_by` varchar(45) DEFAULT NULL,
  `inv_receipt_amt` decimal(10,0) DEFAULT NULL,
  `inv_loc_code` int(11) NOT NULL,
  PRIMARY KEY (`inv_id`),
  UNIQUE KEY `inv_invono_uk` (`inv_invono`,`inv_loc_code`),
  KEY `inv_acc_code_fk` (`inv_acc_code`),
  CONSTRAINT `inv_acc_code_fk` FOREIGN KEY (`inv_acc_code`) REFERENCES `inv_accounts` (`acc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_invoices`
--

LOCK TABLES `inv_invoices` WRITE;
/*!40000 ALTER TABLE `inv_invoices` DISABLE KEYS */;
INSERT INTO `inv_invoices` VALUES (1,'1','','2016-01-02',3,'','POSTED','kimkahunja',NULL,1),(2,'2','','2016-01-02',3,'','POSTED','kimkahunja',NULL,1),(3,'3','','2016-01-03',3,'kimkahunja','POSTED','kimkahunja',NULL,1),(6,'4','','2016-01-03',3,'kimkahunja','POSTED','kimkahunja',NULL,1),(7,'5','','2016-01-05',3,'kimkahunja','PENDING',NULL,NULL,1),(8,'6X','','2016-01-08',3,'kimkahunja','POSTED','kimkahunja',NULL,1),(9,'6','','2016-01-08',3,'kimkahunja','POSTED','kimkahunja',NULL,1);
/*!40000 ALTER TABLE `inv_invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_locations`
--

DROP TABLE IF EXISTS `inv_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_locations` (
  `loc_code` int(11) NOT NULL AUTO_INCREMENT,
  `loc_sht_desc` varchar(20) NOT NULL,
  `loc_description` varchar(100) NOT NULL,
  PRIMARY KEY (`loc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_locations`
--

LOCK TABLES `inv_locations` WRITE;
/*!40000 ALTER TABLE `inv_locations` DISABLE KEYS */;
INSERT INTO `inv_locations` VALUES (1,'MAIN','Main Location'),(2,'HDH','HD Holdings'),(3,'ANEX','Anex store');
/*!40000 ALTER TABLE `inv_locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_payment_dtls`
--

DROP TABLE IF EXISTS `inv_payment_dtls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_payment_dtls` (
  `pymtd_id` int(11) NOT NULL AUTO_INCREMENT,
  `pymtd_pymt_id` int(11) NOT NULL,
  `pymtd_pur_id` int(11) NOT NULL,
  `pymtd_amount` decimal(22,2) NOT NULL,
  `pymtd_updated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pymtd_id`),
  KEY `pymtd_pymt_fk` (`pymtd_pymt_id`),
  KEY `pymtd_pur_fk` (`pymtd_pur_id`),
  CONSTRAINT `pymtd_pur_fk` FOREIGN KEY (`pymtd_pur_id`) REFERENCES `inv_purchases` (`pur_id`),
  CONSTRAINT `pymtd_pymt_fk` FOREIGN KEY (`pymtd_pymt_id`) REFERENCES `inv_payments` (`pymt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_payment_dtls`
--

LOCK TABLES `inv_payment_dtls` WRITE;
/*!40000 ALTER TABLE `inv_payment_dtls` DISABLE KEYS */;
INSERT INTO `inv_payment_dtls` VALUES (1,1,8,200.00,'2016-01-23 11:43:11'),(2,2,8,100.00,'2016-01-23 11:56:53'),(3,3,1,10000.00,'2016-01-23 11:58:52'),(4,3,7,15000.00,'2016-01-23 11:58:52');
/*!40000 ALTER TABLE `inv_payment_dtls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_payments`
--

DROP TABLE IF EXISTS `inv_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_payments` (
  `pymt_id` int(11) NOT NULL AUTO_INCREMENT,
  `pymt_acc_code` int(11) NOT NULL,
  `pymt_date` date NOT NULL,
  `pymt_amount` decimal(22,2) NOT NULL,
  `pymt_paymode` varchar(20) NOT NULL,
  `pymt_paymemo` varchar(50) DEFAULT NULL,
  `pymt_remarks` varchar(100) DEFAULT NULL,
  `pymt_captured_by` varchar(50) NOT NULL,
  `pymt_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pymt_id`),
  KEY `pymt_acc_code_fk` (`pymt_acc_code`),
  CONSTRAINT `pymt_acc_code_fk` FOREIGN KEY (`pymt_acc_code`) REFERENCES `inv_accounts` (`acc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_payments`
--

LOCK TABLES `inv_payments` WRITE;
/*!40000 ALTER TABLE `inv_payments` DISABLE KEYS */;
INSERT INTO `inv_payments` VALUES (1,2,'2016-01-23',200.00,'CASH',NULL,NULL,'kimkahunja','2016-01-23 11:43:11'),(2,2,'2016-01-23',100.00,'CASH',NULL,NULL,'kimkahunja','2016-01-23 11:56:53'),(3,1,'2016-01-23',25000.00,'CHEQUE','568644612',NULL,'kimkahunja','2016-01-23 11:58:52');
/*!40000 ALTER TABLE `inv_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_products`
--

DROP TABLE IF EXISTS `inv_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_products` (
  `pdt_code` int(11) NOT NULL AUTO_INCREMENT,
  `pdt_sht_desc` varchar(50) DEFAULT NULL,
  `pdt_description` varchar(250) NOT NULL,
  `pdt_unt_code` int(11) NOT NULL,
  `pdt_loc_code` int(11) DEFAULT NULL,
  `pdt_sloc_code` int(11) DEFAULT NULL,
  `pdt_cat_code` int(11) DEFAULT NULL,
  `pdt_min_level` double DEFAULT '0',
  `pdt_max_level` double NOT NULL DEFAULT '0',
  `pdt_bp` decimal(14,2) NOT NULL DEFAULT '0.00',
  `pdt_sp` decimal(14,2) DEFAULT '0.00',
  `pdt_profit_pct` double DEFAULT NULL,
  `pdt_vat_id` varchar(1) NOT NULL,
  `pdt_status` varchar(45) NOT NULL DEFAULT 'ACTIVE',
  `pdt_strength` varchar(20) DEFAULT NULL,
  `pdt_current_qty` double NOT NULL DEFAULT '0',
  `pdt_amount` decimal(14,2) NOT NULL DEFAULT '0.00',
  `pdt_op_qty` double DEFAULT NULL,
  `pdt_delete_by` varchar(50) DEFAULT NULL,
  `pdt_delete_date` date DEFAULT NULL,
  `pdt_merge_qty` varchar(20) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`pdt_code`),
  KEY `pdt_loc_code_fk` (`pdt_loc_code`),
  KEY `pdt_sloc_code_fk` (`pdt_sloc_code`),
  KEY `pdt_cat_code_fk` (`pdt_cat_code`),
  KEY `pdt_vat_id_fk` (`pdt_vat_id`),
  KEY `pdt_unt_code_fk` (`pdt_unt_code`),
  CONSTRAINT `pdt_cat_code_fk` FOREIGN KEY (`pdt_cat_code`) REFERENCES `inv_categories` (`cat_code`),
  CONSTRAINT `pdt_loc_code_fk` FOREIGN KEY (`pdt_loc_code`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `pdt_sloc_code_fk` FOREIGN KEY (`pdt_sloc_code`) REFERENCES `inv_sub_locations` (`sloc_code`),
  CONSTRAINT `pdt_unt_code_fk` FOREIGN KEY (`pdt_unt_code`) REFERENCES `inv_units` (`unt_code`),
  CONSTRAINT `pdt_vat_id_fk` FOREIGN KEY (`pdt_vat_id`) REFERENCES `inv_vat` (`VAT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_products`
--

LOCK TABLES `inv_products` WRITE;
/*!40000 ALTER TABLE `inv_products` DISABLE KEYS */;
INSERT INTO `inv_products` VALUES (1,'SLIDE2','Wiko Slide 2 Phone',1,1,NULL,9,0,0,12000.00,0.00,0,'A','ACTIVE','',2,0.00,NULL,NULL,NULL,'N'),(2,'XperiaZ','Sony Xperia Z Phone',1,1,NULL,11,0,0,30000.00,0.00,0,'A','ACTIVE','',1,0.00,NULL,NULL,NULL,'N'),(3,'T105','Sony T105 Phone',1,1,NULL,11,0,0,2300.00,0.00,0,'A','ACTIVE','',0,0.00,NULL,NULL,NULL,'N'),(4,'HIGHWAYW','Wiko Highway',1,1,NULL,9,0,0,19000.00,0.00,0,'A','ACTIVE','',0,0.00,NULL,NULL,NULL,'N');
/*!40000 ALTER TABLE `inv_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_purchases`
--

DROP TABLE IF EXISTS `inv_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_purchases` (
  `pur_id` int(11) NOT NULL AUTO_INCREMENT,
  `pur_invono` varchar(20) DEFAULT NULL,
  `pur_refNo` varchar(50) NOT NULL,
  `pur_date` date NOT NULL,
  `pur_acc_code` int(11) NOT NULL,
  `pur_user` varchar(40) DEFAULT NULL,
  `pur_status` varchar(45) DEFAULT 'PENDING',
  `pur_posted_by` varchar(45) DEFAULT NULL,
  `pur_loc_code` int(11) DEFAULT NULL,
  PRIMARY KEY (`pur_id`),
  KEY `pur_loc_code_fk` (`pur_loc_code`),
  CONSTRAINT `pur_loc_code_fk` FOREIGN KEY (`pur_loc_code`) REFERENCES `inv_locations` (`loc_code`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_purchases`
--

LOCK TABLES `inv_purchases` WRITE;
/*!40000 ALTER TABLE `inv_purchases` DISABLE KEYS */;
INSERT INTO `inv_purchases` VALUES (1,'3322','','2016-01-01',1,'kimkahunja','POSTED','kimkahunja',1),(4,'3444444','','2016-01-01',1,'kimkahunja','POSTED','kimkahunja',1),(5,'4534333','','2016-01-02',1,'kimkahunja','POSTED','kimkahunja',1),(6,'45000','','2016-01-03',1,'kimkahunja','POSTED','kimkahunja',1),(7,'44566','','2016-01-05',1,'kimkahunja','POSTED','kimkahunja',1),(8,'2343333','','2016-01-14',2,'kimkahunja','POSTED','kimkahunja',1),(9,'78998','','2016-01-15',1,'kimkahunja','POSTED','kimkahunja',1);
/*!40000 ALTER TABLE `inv_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_purchases_details`
--

DROP TABLE IF EXISTS `inv_purchases_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_purchases_details` (
  `purd_id` int(11) NOT NULL AUTO_INCREMENT,
  `purd_pur_id` int(11) NOT NULL,
  `purd_pdt_code` int(11) NOT NULL,
  `purd_qty` double DEFAULT '0',
  `purd_price` decimal(22,2) DEFAULT '0.00',
  `purd_tamount` decimal(22,2) DEFAULT '0.00',
  `purd_discount` double DEFAULT '0',
  `purd_bonus` double DEFAULT '0',
  `purd_status` varchar(20) DEFAULT 'PENDING',
  `purd_previous_qty` double DEFAULT '0',
  `purd_remarks` varchar(250) DEFAULT NULL,
  `purd_mtrade_price` decimal(22,2) DEFAULT NULL,
  `purd_expiry_dt` date DEFAULT NULL,
  `purd_serialNo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`purd_id`),
  KEY `purd_pdt_code_fk` (`purd_pdt_code`),
  KEY `purd_pur_id_fk` (`purd_pur_id`),
  CONSTRAINT `purd_pdt_code_fk` FOREIGN KEY (`purd_pdt_code`) REFERENCES `inv_products` (`pdt_code`),
  CONSTRAINT `purd_pur_id_fk` FOREIGN KEY (`purd_pur_id`) REFERENCES `inv_purchases` (`pur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_purchases_details`
--

LOCK TABLES `inv_purchases_details` WRITE;
/*!40000 ALTER TABLE `inv_purchases_details` DISABLE KEYS */;
INSERT INTO `inv_purchases_details` VALUES (1,1,1,1,12000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'455554889'),(2,1,2,1,30000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'675755444'),(3,4,3,1,2300.00,0.00,0,0,'POSTED',0,'',0.00,NULL,''),(4,5,1,1,12000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'3455567866'),(5,6,1,1,16000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,''),(6,6,3,1,1800.78,0.00,0,0,'POSTED',0,'',0.00,NULL,''),(7,7,2,1,30000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'8995552222'),(8,8,1,1,12000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,''),(9,9,1,1,12000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'354edrtfgyy'),(10,9,2,1,30000.00,0.00,0,0,'POSTED',0,'',0.00,NULL,'');
/*!40000 ALTER TABLE `inv_purchases_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_stocks`
--

DROP TABLE IF EXISTS `inv_stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_stocks` (
  `stk_id` int(11) NOT NULL AUTO_INCREMENT,
  `stk_source_type` varchar(20) NOT NULL,
  `stk_souce_id` int(11) NOT NULL,
  `stk_loc_code` int(11) NOT NULL,
  `stk_qty` double DEFAULT NULL,
  `stk_pdt_code` int(11) NOT NULL,
  PRIMARY KEY (`stk_id`),
  KEY `stk_loc_code_fk` (`stk_loc_code`),
  KEY `stk_pdt_code_fk` (`stk_pdt_code`),
  CONSTRAINT `stk_loc_code_fk` FOREIGN KEY (`stk_loc_code`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `stk_pdt_code_fk` FOREIGN KEY (`stk_pdt_code`) REFERENCES `inv_products` (`pdt_code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_stocks`
--

LOCK TABLES `inv_stocks` WRITE;
/*!40000 ALTER TABLE `inv_stocks` DISABLE KEYS */;
INSERT INTO `inv_stocks` VALUES (1,'PUR',1,1,0,1),(2,'PUR',2,1,0,2),(3,'PUR',3,1,0,3),(4,'PUR',4,1,0,1),(5,'PUR',5,1,0,1),(6,'PUR',6,1,0,3),(7,'PUR',7,1,0,2),(8,'PUR',8,1,1,1),(9,'PUR',9,1,1,1),(10,'PUR',10,1,1,2);
/*!40000 ALTER TABLE `inv_stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_sub_locations`
--

DROP TABLE IF EXISTS `inv_sub_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_sub_locations` (
  `sloc_code` int(11) NOT NULL AUTO_INCREMENT,
  `sloc_loc_code` int(11) NOT NULL,
  `sloc_sht_desc` varchar(20) NOT NULL,
  `sloc_description` varchar(100) NOT NULL,
  PRIMARY KEY (`sloc_code`),
  KEY `sloc_loc_code_fk` (`sloc_loc_code`),
  CONSTRAINT `sloc_loc_code_fk` FOREIGN KEY (`sloc_loc_code`) REFERENCES `inv_locations` (`loc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_sub_locations`
--

LOCK TABLES `inv_sub_locations` WRITE;
/*!40000 ALTER TABLE `inv_sub_locations` DISABLE KEYS */;
/*!40000 ALTER TABLE `inv_sub_locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_transfer_dtls`
--

DROP TABLE IF EXISTS `inv_transfer_dtls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_transfer_dtls` (
  `tnsfd_id` int(11) NOT NULL AUTO_INCREMENT,
  `tnsfd_tnsf_id` int(11) NOT NULL,
  `tnsfd_pdt_code` int(11) NOT NULL,
  `tnsfd_qty` double NOT NULL,
  `tnsfd_stk_id` int(11) NOT NULL,
  PRIMARY KEY (`tnsfd_id`),
  KEY `tnsfd_tnsf_fk` (`tnsfd_tnsf_id`),
  KEY `tnsfd_pdt_code_fk` (`tnsfd_pdt_code`),
  KEY `tnsfd_stk_fk` (`tnsfd_stk_id`),
  CONSTRAINT `tnsfd_pdt_code_fk` FOREIGN KEY (`tnsfd_pdt_code`) REFERENCES `inv_products` (`pdt_code`),
  CONSTRAINT `tnsfd_stk_fk` FOREIGN KEY (`tnsfd_stk_id`) REFERENCES `inv_stocks` (`stk_id`),
  CONSTRAINT `tnsfd_tnsf_fk` FOREIGN KEY (`tnsfd_tnsf_id`) REFERENCES `inv_transfers` (`tnsf_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_transfer_dtls`
--

LOCK TABLES `inv_transfer_dtls` WRITE;
/*!40000 ALTER TABLE `inv_transfer_dtls` DISABLE KEYS */;
/*!40000 ALTER TABLE `inv_transfer_dtls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_transfers`
--

DROP TABLE IF EXISTS `inv_transfers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_transfers` (
  `tnsf_id` int(11) NOT NULL AUTO_INCREMENT,
  `tnsf_from_loc_code` int(11) NOT NULL,
  `tnsf_to_loc_code` int(11) NOT NULL,
  `tnsf_date` date NOT NULL,
  `tnsf_status` varchar(20) NOT NULL,
  `tnsf_captured_by` varchar(50) NOT NULL,
  `tnsf_captured_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`tnsf_id`),
  KEY `tnsf_from_loc_code_fk` (`tnsf_from_loc_code`),
  KEY `tnsf_to_loc_code_fk` (`tnsf_to_loc_code`),
  CONSTRAINT `tnsf_from_loc_code_fk` FOREIGN KEY (`tnsf_from_loc_code`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `tnsf_to_loc_code_fk` FOREIGN KEY (`tnsf_to_loc_code`) REFERENCES `inv_locations` (`loc_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_transfers`
--

LOCK TABLES `inv_transfers` WRITE;
/*!40000 ALTER TABLE `inv_transfers` DISABLE KEYS */;
/*!40000 ALTER TABLE `inv_transfers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_units`
--

DROP TABLE IF EXISTS `inv_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_units` (
  `unt_code` int(11) NOT NULL AUTO_INCREMENT,
  `unt_sht_desc` varchar(20) NOT NULL,
  `unt_description` varchar(100) NOT NULL,
  `unt_precision` double NOT NULL DEFAULT '1',
  PRIMARY KEY (`unt_code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_units`
--

LOCK TABLES `inv_units` WRITE;
/*!40000 ALTER TABLE `inv_units` DISABLE KEYS */;
INSERT INTO `inv_units` VALUES (1,'PCS','Pieces',1);
/*!40000 ALTER TABLE `inv_units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_vat`
--

DROP TABLE IF EXISTS `inv_vat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_vat` (
  `VAT_ID` varchar(1) NOT NULL,
  `VAT_RATE` double NOT NULL,
  `VAT_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`VAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_vat`
--

LOCK TABLES `inv_vat` WRITE;
/*!40000 ALTER TABLE `inv_vat` DISABLE KEYS */;
INSERT INTO `inv_vat` VALUES ('A',0,NULL);
/*!40000 ALTER TABLE `inv_vat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(45) NOT NULL,
  `iconCls` varchar(15) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `className` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Menu_Menu` (`parent_id`),
  CONSTRAINT `fk_Menu_Menu` FOREIGN KEY (`parent_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'General Setups','menu_admin',NULL,NULL),(2,'Categories','menu_groups',1,'categories.list'),(3,'Locations','menu_users',1,'location.locations'),(4,'Units','menu_staticdata',1,'units.unitlist'),(6,'Products','menu_groups',1,'product.list'),(7,'Transactions','menu_groups',NULL,NULL),(8,'Purchases','menu_users',7,'purchases.purchase'),(9,'Sales','menu_staticdata',7,'invoice.invoice'),(10,'System Reports','menu_admin',NULL,NULL),(11,'Purchases Report','menu_users',10,'reports.purchases.purchase'),(12,'System Administration','menu_admin',NULL,''),(13,'Users','menu_users',12,'users'),(14,'Groups','menu_groups',12,'groups'),(16,'Product Reports','menu_staticdata',10,'reports.products.productparameters'),(17,'Sales Reports',NULL,10,'reports.invoice.invoice'),(18,'Purchase Payment','menu_groups',7,'payment.payment');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `Menu_id` int(11) NOT NULL,
  `Group_id` int(11) NOT NULL,
  PRIMARY KEY (`Menu_id`,`Group_id`),
  KEY `fk_Menu_has_Group_Group1` (`Group_id`),
  KEY `fk_Menu_has_Group_Menu1` (`Menu_id`),
  CONSTRAINT `fk_Menu_has_Group_Group1` FOREIGN KEY (`Group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Menu_has_Group_Menu1` FOREIGN KEY (`Menu_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,1),(2,1),(3,1),(4,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(16,1),(17,1),(18,1),(7,2),(9,2);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dateOfBirth` datetime NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(8) NOT NULL,
  `userName` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=457 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (456,'2012-12-01 00:00:00','kimotho@topline.com','Kimotho','Kahunja','123456','kimkahunja');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  `Group_id` int(11) NOT NULL,
  `default_location` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Group_id`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  KEY `fk_User_Group1_idx` (`Group_id`),
  KEY `default_location_fk` (`default_location`),
  CONSTRAINT `default_location_fk` FOREIGN KEY (`default_location`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `fk_User_Group1` FOREIGN KEY (`Group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kim kahunja','kimkahunja','e10adc3949ba59abbe56e057f20f883e','kim@reinvent.com',NULL,1,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'inventory'
--
/*!50003 DROP FUNCTION IF EXISTS `getAmountPaid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `getAmountPaid`(v_pur_id INT) RETURNS decimal(14,2)
BEGIN
	 DECLARE v_amount DECIMAL(14,2) DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_amount = 0;
     
       SELECT IFNULL(SUM(pymtd_amount),0) INTO v_amount
       FROM inv_payment_dtls,inv_payments
       WHERE pymt_id=pymtd_pymt_id
       AND pymtd_pur_id=v_pur_id;
    
	RETURN v_amount;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getBP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `getBP`(v_id INT,v_source_type VARCHAR(20)) RETURNS decimal(14,2)
BEGIN
	 DECLARE v_bp DECIMAL(14,2) DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_bp = 0;
     IF  v_source_type='PUR' THEN
       SELECT purd_price INTO v_bp
       FROM inv_purchases_details
       WHERE purd_id=v_id;
     END IF;
	RETURN v_bp;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getInvoiceNumber` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `getInvoiceNumber`(v_loc_code INT) RETURNS varchar(100) CHARSET latin1
BEGIN
      DECLARE v_invoiceNumber INTEGER DEFAULT 0;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_invoiceNumber = -1;
                
  	  SELECT vnum_cur_num  INTO v_invoiceNumber
          from inv_invoice_numbers
          where vnum_loc_code=v_loc_code;
      IF v_invoiceNumber=-1 THEN
        INSERT INTO inv_invoice_numbers(vnum_loc_code,vnum_cur_num,vnum_last_update)
        VALUES(v_loc_code,1,SYSDATE());
      END IF;
	RETURN v_invoiceNumber;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getProductReference` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `getProductReference`(v_id INT,v_source_type VARCHAR(20)) RETURNS varchar(70) CHARSET latin1
BEGIN
	  DECLARE v_reference VARCHAR(70);
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_reference = NULL;
     IF  v_source_type='PUR' THEN
       SELECT purd_serialNo INTO v_reference
       FROM inv_purchases_details,inv_purchases
       WHERE purd_pur_id=pur_id 
       AND purd_id=v_id;
     END IF;
	RETURN v_reference;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getPurchaseDate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 FUNCTION `getPurchaseDate`(v_id INT,v_source_type VARCHAR(20)) RETURNS date
BEGIN
	 DECLARE v_date DATE;
     DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_date = NULL;
     IF  v_source_type='PUR' THEN
       SELECT pur_date INTO v_date
       FROM inv_purchases_details,inv_purchases
       WHERE purd_pur_id=pur_id 
       AND purd_id=v_id;
     END IF;
	RETURN v_date;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `get_product`(p_search_data VARCHAR(200))
BEGIN
   DECLARE errmsg  VARCHAR(200);
   DECLARE v_length1,v_length2,v_length3 INT;
   /*SELECT LENGTH(p_search_data),LENGTH("B") ,LENGTH(REPLACE(p_search_data,'"',''))
   INTO v_length1,v_length2,v_length3
   FROM DUAL;
   SET errmsg=CONCAT('v_length1==',v_length1,'v_length2==',v_length2,'v_length3==',v_length3);
    SIGNAL SQLSTATE '45000' 
		 	SET MESSAGE_TEXT =errmsg;*/
      
   SELECT pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, 1 AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date,pdt_merge_qty,cat_sht_desc,loc_sht_desc,sloc_sht_desc,unt_sht_desc
		from inv_products left join inv_categories on inv_categories.cat_code = inv_products.pdt_cat_code
		left join inv_locations on inv_locations.loc_code = inv_products.pdt_loc_code
		left join inv_sub_locations on inv_sub_locations.sloc_code = inv_products.pdt_sloc_code
		left join inv_units on inv_units.unt_code = inv_products.pdt_unt_code 
     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(cat_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
             )
     ORDER BY pdt_description,cat_description;
	/* SELECT 
	    pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, 1 AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date
	    FROM inv_products
	     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
             ); */
    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_stocks` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `get_stocks`(p_search_data VARCHAR(200),v_loc_code INT)
BEGIN
   DECLARE errmsg  VARCHAR(200);
   DECLARE v_length1,v_length2,v_length3 INT;      
   SELECT pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, getBP(stk_souce_id,stk_source_type)AS pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, stk_qty AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date,pdt_merge_qty,cat_sht_desc,loc_sht_desc,sloc_sht_desc,unt_sht_desc,
        stk_id AS stockId,getPurchaseDate(stk_souce_id,stk_source_type)AS purchase_date,
        getProductReference(stk_souce_id,stk_source_type)AS prod_reference
		from inv_products left join inv_categories on inv_categories.cat_code = inv_products.pdt_cat_code
		left join inv_locations on inv_locations.loc_code = inv_products.pdt_loc_code
		left join inv_sub_locations on inv_sub_locations.sloc_code = inv_products.pdt_sloc_code
		left join inv_units on inv_units.unt_code = inv_products.pdt_unt_code 
    inner join inv_stocks on stk_pdt_code=pdt_code
     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(cat_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR REPLACE(UPPER(p_search_data),'"','') IS NULL
             )
     AND stk_loc_code=v_loc_code
     AND stk_qty>0
     ORDER BY pdt_description,purchase_date;
	/* SELECT 
	    pdt_code, pdt_sht_desc, pdt_description, pdt_unt_code, pdt_loc_code, pdt_sloc_code, 
		    pdt_cat_code, pdt_min_level, pdt_max_level, pdt_bp, pdt_sp, pdt_profit_pct, pdt_vat_id, 
		    pdt_status, pdt_strength, 1 AS pdt_current_qty, pdt_amount, pdt_op_qty, pdt_delete_by, 
		    pdt_delete_date
	    FROM inv_products
	     WHERE ((UPPER(pdt_sht_desc) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
              OR (UPPER(pdt_description) LIKE CONCAT('%',REPLACE(UPPER(p_search_data),'"',''),'%'))
             ); */
    
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_invoice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `post_invoice`(v_inv_id INT,v_posted_by VARCHAR(50),OUT v_count  INT)
BEGIN
  
	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
     ROLLBACK;
      SELECT 'An error has occurred';
    END;
      SET v_count=0;
    BEGIN  
        
          DECLARE v_finished INTEGER DEFAULT 0;
          DECLARE v_pdt_code,v_invd_id,v_loc_code,v_count_stock,v_stk_id INTEGER;
          DECLARE v_qty,v_remaining_qty      DOUBLE;
          DECLARE v_price    DECIMAL;
          DECLARE v_pdt_merge_qty  VARCHAR(1);
          DECLARE v_prod_description  VARCHAR(200);
          DECLARE v_msg   VARCHAR(255);
            -- declare cursor for Purchased products list
         DEClARE prod_cursor CURSOR FOR 
            SELECT invd_pdt_code,invd_qty,invd_price,invd_id,pdt_merge_qty,inv_loc_code,invd_stk_id,pdt_description
            FROM inv_invoice_dtls,inv_products,inv_invoices
            WHERE pdt_code=invd_pdt_code 
            AND invd_inv_id=inv_id
            AND inv_id=v_inv_id;
        
         -- declare NOT FOUND handler
         DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_finished = 1;
                
         OPEN prod_cursor;     
         proc_loop: LOOP
          
                 FETCH prod_cursor INTO v_pdt_code,v_qty,v_price,v_invd_id,v_pdt_merge_qty,v_loc_code,v_stk_id,v_prod_description;
                 
                 IF v_finished = 1 THEN 
                   LEAVE proc_loop;
                 END IF;
              -- Validate the quantity remaining
                SELECT stk_qty INTO v_remaining_qty
                FROM inv_stocks
                WHERE stk_id=v_stk_id;
                IF v_remaining_qty<v_qty THEN                 
                 SET v_msg='No enough stock for '+v_prod_description;
                  signal sqlstate '45000' set message_text = v_msg;
                END IF;
                --  update the product quantities
               UPDATE inv_products SET pdt_current_qty=IFNULL(pdt_current_qty,0)-v_qty
               WHERE pdt_code=v_pdt_code;
              
               -- update stocks
               UPDATE inv_stocks SET stk_qty=stk_qty-v_qty
               WHERE stk_id=v_stk_id;
             END LOOP proc_loop;
             
             CLOSE prod_cursor;
           UPDATE inv_invoices SET inv_status='POSTED',inv_posted_by=v_posted_by
            WHERE inv_id=v_inv_id;
            
            SET v_count=1;
            
           -- COMMIT;
    END;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `post_purchases` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `post_purchases`(v_pur_id INT,v_posted_by VARCHAR(50),OUT v_count  INT)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
     ROLLBACK;
      SELECT 'An error has occurred';
    END;
      SET v_count=0;
    BEGIN  
        
          DECLARE v_finished INTEGER DEFAULT 0;
          DECLARE v_pdt_code,v_purd_id,v_loc_code,v_count_stock INTEGER;
          DECLARE v_qty      DOUBLE;
          DECLARE v_price    DECIMAL;
          DECLARE v_pdt_merge_qty  VARCHAR(1);
            -- declare cursor for Purchased products list
         DEClARE prod_cursor CURSOR FOR 
            SELECT purd_pdt_code,purd_qty,purd_price,purd_id,pdt_merge_qty,pur_loc_code
            FROM inv_purchases_details,inv_products,inv_purchases
            WHERE pdt_code=purd_pdt_code 
            AND purd_pur_id=pur_id
            AND purd_pur_id=v_pur_id;
            
         -- declare NOT FOUND handler
         DECLARE CONTINUE HANDLER 
                FOR NOT FOUND SET v_finished = 1;
                
         OPEN prod_cursor;     
         proc_loop: LOOP
         
                 FETCH prod_cursor INTO v_pdt_code,v_qty,v_price,v_purd_id,v_pdt_merge_qty,v_loc_code;
                 
                 IF v_finished = 1 THEN 
                   LEAVE proc_loop;
                 END IF;
                 
                --  update the product quantities
               UPDATE inv_products SET pdt_current_qty=IFNULL(pdt_current_qty,0)+v_qty
               WHERE pdt_code=v_pdt_code;
               UPDATE inv_purchases_details SET purd_status='POSTED'
               WHERE purd_id=v_purd_id;
               -- update stocks
               IF v_pdt_merge_qty='N' THEN
                 INSERT INTO inv_stocks(stk_source_type, stk_souce_id, stk_loc_code, stk_qty,stk_pdt_code)
                 VALUES('PUR',v_purd_id,v_loc_code,v_qty,v_pdt_code);
               ELSE
                  SELECT COUNT(*) INTO v_count_stock
                  FROM inv_stocks
                  WHERE stk_pdt_code=v_pdt_code
                  AND stk_loc_code=v_loc_code;
                  IF v_count_stock=0 THEN
                    INSERT INTO inv_stocks(stk_source_type, stk_souce_id, stk_loc_code, stk_qty,stk_pdt_code)
                    VALUES('PUR',v_purd_id,v_loc_code,v_qty,v_pdt_code);
                  ELSE
                    UPDATE inv_stocks SET stk_qty=stk_qty+v_qty
                    WHERE stk_pdt_code=v_pdt_code
                    AND stk_loc_code=v_loc_code;
                  END IF;                
               END IF;
             END LOOP proc_loop;
             
             CLOSE prod_cursor;
            UPDATE inv_purchases SET pur_status='POSTED',pur_posted_by=v_posted_by
            WHERE pur_id=v_pur_id; 
            SET v_count=1;
            
           -- COMMIT;
    END;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `inv_accounts_vw`
--

/*!50001 DROP TABLE IF EXISTS `inv_accounts_vw`*/;
/*!50001 DROP VIEW IF EXISTS `inv_accounts_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `inv_accounts_vw` AS select `inv_accounts`.`acc_code` AS `acc_code`,`inv_accounts`.`acc_name` AS `acc_name`,`inv_accounts`.`acc_type` AS `acc_type`,`inv_accounts`.`acc_address` AS `acc_address`,`inv_accounts`.`acc_location` AS `acc_location`,`inv_accounts`.`acc_email` AS `acc_email`,`inv_accounts`.`acc_fax` AS `acc_fax`,`inv_accounts`.`acc_tel_no` AS `acc_tel_no`,`inv_accounts`.`acc_mobile_no` AS `acc_mobile_no`,2 AS `myLevel` from `inv_accounts` union all select NULL AS `NULL`,'All' AS `All`,'D' AS `D`,NULL AS `acc_address`,NULL AS `acc_location`,NULL AS `acc_email`,NULL AS `acc_fax`,NULL AS `acc_tel_no`,NULL AS `acc_mobile_no`,1 AS `myLevel` union all select NULL AS `NULL`,'All' AS `All`,'C' AS `C`,NULL AS `acc_address`,NULL AS `acc_location`,NULL AS `acc_email`,NULL AS `acc_fax`,NULL AS `acc_tel_no`,NULL AS `acc_mobile_no`,1 AS `myLevel` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-01 18:00:24
