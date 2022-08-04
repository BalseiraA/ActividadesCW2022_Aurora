-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: equipotres
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `Evento_ID` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Materia_ID` tinyint(4) NOT NULL,
  `Usuario_ID` tinyint(4) NOT NULL,
  `Titulo` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Fecha` date NOT NULL,
  `HoraInicial` time DEFAULT NULL,
  `HoraFinal` time DEFAULT NULL,
  `Descripcion` varchar(500) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`Evento_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo` (
  `Grupo_ID` int(11) NOT NULL,
  PRIMARY KEY (`Grupo_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES (401),(402),(403),(404),(405),(406),(407),(408),(409),(410),(411),(412),(413),(414),(415),(416),(417),(451),(452),(453),(454),(455),(456),(457),(458),(459),(460),(461),(462),(463),(464),(465),(466),(501),(502),(503),(504),(505),(506),(507),(508),(509),(510),(511),(512),(513),(514),(515),(516),(517),(518),(551),(552),(553),(554),(555),(556),(557),(558),(559),(560),(561),(562),(563),(564),(601),(602),(603),(604),(605),(606),(607),(608),(609),(610),(611),(612),(613),(614),(615),(616),(617),(618),(619),(651),(652),(653),(654),(655),(656),(657),(658),(659),(660),(661),(662),(663),(664);
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiahasgrupo`
--

DROP TABLE IF EXISTS `materiahasgrupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiahasgrupo` (
  `MateriaHasGrupo_ID` tinyint(4) DEFAULT NULL,
  `Materia_ID` tinyint(4) DEFAULT NULL,
  `Grupo_ID` int(11) DEFAULT NULL,
  KEY `Grupo_ID` (`Grupo_ID`),
  CONSTRAINT `materiahasgrupo_ibfk_1` FOREIGN KEY (`Grupo_ID`) REFERENCES `grupo` (`Grupo_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiahasgrupo`
--

LOCK TABLES `materiahasgrupo` WRITE;
/*!40000 ALTER TABLE `materiahasgrupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `materiahasgrupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias` (
  `Materia_ID` tinyint(4) NOT NULL,
  `Materia` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Materia_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (0,'Todas'),(1,'Matemáticas'),(2,'Literatura'),(3,'Física'),(4,'Química'),(5,'Biología'),(6,'Historia');
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turno`
--

DROP TABLE IF EXISTS `turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turno` (
  `Turno_ID` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Grupo_ID` int(11) DEFAULT NULL,
  `TipoTurno` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Turno_ID`),
  KEY `Grupo_ID` (`Grupo_ID`),
  CONSTRAINT `turno_ibfk_1` FOREIGN KEY (`Grupo_ID`) REFERENCES `grupo` (`Grupo_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turno`
--

LOCK TABLES `turno` WRITE;
/*!40000 ALTER TABLE `turno` DISABLE KEYS */;
INSERT INTO `turno` VALUES (1,401,'matutino'),(2,402,'matutino'),(3,403,'matutino'),(4,404,'matutino'),(5,405,'matutino'),(6,406,'matutino'),(7,407,'matutino'),(8,408,'matutino'),(9,409,'matutino'),(10,410,'matutino'),(11,411,'matutino'),(12,412,'matutino'),(13,413,'matutino'),(14,414,'matutino'),(15,415,'matutino'),(16,416,'matutino'),(17,417,'matutino'),(18,451,'vespertino'),(19,452,'vespertino'),(20,453,'vespertino'),(21,454,'vespertino'),(22,455,'vespertino'),(23,456,'vespertino'),(24,457,'vespertino'),(25,458,'vespertino'),(26,459,'vespertino'),(27,460,'vespertino'),(28,461,'vespertino'),(29,462,'vespertino'),(30,463,'vespertino'),(31,464,'vespertino'),(32,465,'vespertino'),(33,501,'matutino'),(34,502,'matutino'),(35,503,'matutino'),(36,504,'matutino'),(37,505,'matutino'),(38,506,'matutino'),(39,507,'matutino'),(40,508,'matutino'),(41,509,'matutino'),(42,510,'matutino'),(43,511,'matutino'),(44,512,'matutino'),(45,513,'matutino'),(46,514,'matutino'),(47,515,'matutino'),(48,516,'matutino'),(49,517,'matutino'),(50,518,'matutino'),(51,551,'vespertino'),(52,552,'vespertino'),(53,553,'vespertino'),(54,554,'vespertino'),(55,555,'vespertino'),(56,556,'vespertino'),(57,557,'vespertino'),(58,558,'vespertino'),(59,559,'vespertino'),(60,560,'vespertino'),(61,561,'vespertino'),(62,562,'vespertino'),(63,563,'vespertino'),(64,564,'vespertino'),(66,601,'matutino'),(67,602,'matutino'),(68,603,'matutino'),(69,604,'matutino'),(70,605,'matutino'),(71,606,'matutino'),(72,607,'matutino'),(73,608,'matutino'),(74,609,'matutino'),(75,610,'matutino'),(76,611,'matutino'),(77,612,'matutino'),(78,613,'matutino'),(79,614,'matutino'),(80,615,'matutino'),(81,616,'matutino'),(82,617,'matutino'),(83,618,'matutino'),(84,619,'matutino'),(86,651,'vespertino'),(87,652,'vespertino'),(88,653,'vespertino'),(89,654,'vespertino'),(90,655,'vespertino'),(91,656,'vespertino'),(92,657,'vespertino'),(93,658,'vespertino'),(94,659,'vespertino'),(95,660,'vespertino'),(96,661,'vespertino'),(97,662,'vespertino'),(98,663,'vespertino'),(99,664,'vespertino');
/*!40000 ALTER TABLE `turno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `Usuario_ID` varchar(20) NOT NULL,
  `Turno_ID` tinyint(4) DEFAULT NULL,
  `Nombre` varchar(20) DEFAULT NULL,
  `Apellidos` varchar(30) DEFAULT NULL,
  `Correo` varchar(30) DEFAULT NULL,
  `Contrasena` varchar(20) DEFAULT NULL,
  `RFC` varchar(20) DEFAULT NULL,
  `NumCuenta` varchar(20) DEFAULT NULL,
  `NumTrabajor` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Usuario_ID`),
  KEY `Turno_ID` (`Turno_ID`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Turno_ID`) REFERENCES `turno` (`Turno_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08  2:49:46
