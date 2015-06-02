-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: localhost    Database: inventory
-- ------------------------------------------------------
-- Server version	5.6.17

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_categories`
--

LOCK TABLES `inv_categories` WRITE;
/*!40000 ALTER TABLE `inv_categories` DISABLE KEYS */;
INSERT INTO `inv_categories` VALUES (2,'TEST','TEST DESCRIPTIONWWWJJJ'),(8,'TEST 2','JJJJJHDDDD'),(9,'TEST 3','JJJJUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
/*!40000 ALTER TABLE `inv_categories` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_locations`
--

LOCK TABLES `inv_locations` WRITE;
/*!40000 ALTER TABLE `inv_locations` DISABLE KEYS */;
/*!40000 ALTER TABLE `inv_locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inv_products`
--

DROP TABLE IF EXISTS `inv_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inv_products` (
  `PDT_CODE` int(11) NOT NULL,
  `PDT_SHT_DESC` varchar(50) DEFAULT NULL,
  `PDT_DESCRIPTION` varchar(250) NOT NULL,
  `PDT_LOC_CODE` int(11) DEFAULT NULL,
  `PDT_SLOC_CODE` int(11) DEFAULT NULL,
  `PDT_CAT_CODE` int(11) DEFAULT NULL,
  `PDT_MIN_LEVEL` double DEFAULT '0',
  `PDT_MAX_LEVEL` double NOT NULL DEFAULT '0',
  `PDT_BP` decimal(14,2) NOT NULL DEFAULT '0.00',
  `PDT_SP` decimal(14,2) DEFAULT '0.00',
  `PDT_PROFIT_PCT` double DEFAULT NULL,
  `PDT_VAT_ID` varchar(1) NOT NULL,
  `PDT_STATUS` varchar(45) NOT NULL DEFAULT 'ACTIVE',
  `PDT_STRENGTH` varchar(20) DEFAULT NULL,
  `PDT_CURRENT_QTY` double NOT NULL DEFAULT '0',
  `PDT_AMOUNT` decimal(14,2) NOT NULL DEFAULT '0.00',
  `PDT_OP_QTY` double DEFAULT NULL,
  `PDT_DELETE_BY` varchar(50) DEFAULT NULL,
  `PDT_DELETE_DATE` date DEFAULT NULL,
  PRIMARY KEY (`PDT_CODE`),
  KEY `PDT_LOC_CODE_FK` (`PDT_LOC_CODE`),
  KEY `PDT_SLOC_CODE_FK` (`PDT_SLOC_CODE`),
  KEY `PDT_CAT_CODE_FK` (`PDT_CAT_CODE`),
  KEY `PDT_VAT_ID_FK` (`PDT_VAT_ID`),
  CONSTRAINT `PDT_CAT_CODE_FK` FOREIGN KEY (`PDT_CAT_CODE`) REFERENCES `inv_categories` (`cat_code`),
  CONSTRAINT `PDT_LOC_CODE_FK` FOREIGN KEY (`PDT_LOC_CODE`) REFERENCES `inv_locations` (`loc_code`),
  CONSTRAINT `PDT_SLOC_CODE_FK` FOREIGN KEY (`PDT_SLOC_CODE`) REFERENCES `inv_sub_locations` (`sloc_code`),
  CONSTRAINT `PDT_VAT_ID_FK` FOREIGN KEY (`PDT_VAT_ID`) REFERENCES `inv_vat` (`VAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_products`
--

LOCK TABLES `inv_products` WRITE;
/*!40000 ALTER TABLE `inv_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `inv_products` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inv_units`
--

LOCK TABLES `inv_units` WRITE;
/*!40000 ALTER TABLE `inv_units` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'menu1','menu_admin',NULL,NULL),(2,'menu11','menu_groups',1,'groups'),(3,'menu12','menu_users',1,'users'),(4,'staticData','menu_staticdata',NULL,NULL),(5,'actors','menu_actor',4,'actorsgrid'),(6,'categories','menu_category',4,'categoriesgrid'),(7,'languages','menu_language',4,'languagesgrid'),(8,'cities','menu_city',4,'citiesgrid'),(9,'countries','menu_country',4,'countriesgrid'),(10,'cms','menu_cms',NULL,NULL),(11,'films','menu_films',10,'filmsgrid'),(12,'customer','menu_customer',10,NULL),(13,'business','menu_business',10,NULL),(14,'reports','menu_reports',NULL,NULL),(15,'salesfilmcategory','menu_salesfilmc',14,'salesfilmcategory'),(16,'mailclient','menu_mailclient',NULL,NULL),(17,'mail','menu_mail',16,'mailcontainer');
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
INSERT INTO `permissions` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(14,1),(15,1),(16,1),(17,1);
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
  PRIMARY KEY (`id`,`Group_id`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  KEY `fk_User_Group1_idx` (`Group_id`),
  CONSTRAINT `fk_User_Group1` FOREIGN KEY (`Group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kim kahunja','kim','e10adc3949ba59abbe56e057f20f883e','kim@reinvent.com',NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-02 19:02:31
