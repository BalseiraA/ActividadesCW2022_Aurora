-- MariaDB dump 10.19  Distrib 10.4.18-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: wikianime
-- ------------------------------------------------------
-- Server version	10.4.18-MariaDB

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
-- Table structure for table `anime`
--

DROP TABLE IF EXISTS `anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `anime` (
  `id_anime` int(10) NOT NULL AUTO_INCREMENT,
  `id_genero` int(10) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `publicacion` year(4) DEFAULT NULL,
  PRIMARY KEY (`id_anime`),
  KEY `id_genero` (`id_genero`),
  CONSTRAINT `anime_ibfk_1` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (0,1,'My Hero Academia','En un mundo en el que la mayor parte de la población nace con un Don, una habilidad extraordinaria diferente en cada cual, no tardaron en aparecer tanto villanos como héroes dispuestos a detenerlos. Con el tiempo los héroes pasaron a ser funcionarios del gobierno, estando regulados y viviendo de su trabajo, además de convertirse en objeto de admiración de muchos. Ahora, ser héroe es el sueño de la gran mayoría de niños, que esperan desde muy pequeños a que su Don se manifieste para comenzar a entrenar y soñar con convertirse en los héroes número uno',2016),
                           (1,12,'Violet Evergarden','Acabó la guerra, y Violet Evergarden busca trabajo. Marcada e incapaz de sentir emociones, acepta ser escritora de cartas para entenderse y comprender su pasado..',2018),
                           (2,17,'Death Note','Light Yagami es un excelente estudiante japonés que ha tenido una vida aburrida. Esto cambia radicalmente cuando encuentra tirado en el suelo un cuaderno conocido como Death Note (Libreta de la Muerte), un cuaderno perdido por Ryuk, un Shinigami (Dios de la muerte). Cualquier humano cuyo nombre esté escrito en el cuaderno morirá, y ahora Light ha decidido utilizar este poder para crear un mundo perfecto sin criminales. Pero cuando los criminales comienzan a morir de forma masiva, las autoridades envían al legendario detective L en busca del asesino.',2006),
                           (3,1,'Spy x Family','La División de Inteligencia de Westalis (WISE) envía a su mejor espía, \"Twilight\", en una misión ultrasecreta para vigilar los movimientos de Donovan Desmond, quien dirige el Partido Nacional por la Unidad de Ostania, responsable de bombardear los esfuerzos de paz entre ambos países.',2022),
                           (4,4,'Tensei Shitara Slime','Satoru Mikami es un hombre de 37 años que tiene un trabajo que no le gusta, sin salida y que no es feliz con la vida que lleva, pero cuando muere a manos de un ladrón y piensa que es su fin, se despierta descubriendo que se ha reencarnado en un mundo de magia y espada… ¡pero como un slime!',2017);
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animehaspersonaje`
--

DROP TABLE IF EXISTS `animehaspersonaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animehaspersonaje` (
  `id_ahp` int(10) NOT NULL AUTO_INCREMENT,
  `id_anime` int(10) DEFAULT NULL,
  `id_personaje` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_ahp`),
  KEY `id_anime` (`id_anime`),
  KEY `id_personaje` (`id_personaje`),
  CONSTRAINT `animehaspersonaje_ibfk_1` FOREIGN KEY (`id_anime`) REFERENCES `anime` (`id_anime`),
  CONSTRAINT `animehaspersonaje_ibfk_2` FOREIGN KEY (`id_personaje`) REFERENCES `personaje` (`id_personaje`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animehaspersonaje`
--

LOCK TABLES `animehaspersonaje` WRITE;
/*!40000 ALTER TABLE `animehaspersonaje` DISABLE KEYS */;
INSERT INTO `animehaspersonaje` VALUES (0,0,0),
                                       (1,0,1),
                                       (2,0,2),
                                       (3,0,3),
                                       (4,0,4),
                                       (5,1,5),
                                       (6,1,6),
                                       (7,1,7),
                                       (8,2,8),
                                       (9,2,9),
                                       (10,2,10),
                                       (11,2,11),
                                       (12,3,12),
                                       (13,3,13),
                                       (14,3,14),
                                       (15,4,15),
                                       (16,4,16),
                                       (17,4,17),
                                       (18,4,18),
                                       (19,4,19);
/*!40000 ALTER TABLE `animehaspersonaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genero` (
  `id_genero` int(10) NOT NULL AUTO_INCREMENT,
  `genero` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_genero`),
  UNIQUE KEY `genero` (`genero`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (10,'Acción'),
                            (9,'Aventura'),
                            (11,'Comedia'),
                            (19,'Deportes'),
                            (12,'Drama'),
                            (13,'Fantasía'),
                            (8,'Gore'),
                            (4,'Isekai'),
                            (7,'Iyashikei'),
                            (3,'Josei'),
                            (6,'Kodomomuke'),
                            (14,'Misterio'),
                            (18,'Parodia'),
                            (15,'Romance'),
                            (1,'Shonen'),
                            (2,'Shoujo'),
                            (5,'Slice of life'),
                            (17,'Suspenso'),
                            (16,'Terror'),
                            (21,'Tragedia'),(
                              20,'Vampiros');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagen` (
  `id_imagen` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) NOT NULL,
  PRIMARY KEY (`id_imagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
INSERT INTO `imagen` VALUES (0, './statics/img/izuku.png'),
                            (1, './statics/img/toshinari.png'),
                            (2, './statics/img/katsuki.png'),
                            (3, './statics/img/shoto.png'),
                            (4, './statics/img/ochako.png'),
                            (5, './statics/img/violet.png'),
                            (6, './statics/img/gilbert.png'),
                            (7, './statics/img/claudia.png'),
                            (8, './statics/img/light.png'),
                            (9, './statics/img/misa.png'),
                            (10, './statics/img/L.png'),
                            (11, './statics/img/riuk.png'),
                            (12, './statics/img/loid.png'),
                            (13, './statics/img/Yor.png'),
                            (14, './statics/img/anya.png'),
                            (15, './statics/img/Rimuru.png'),
                            (16, './statics/img/shuna.png'),
                            (17, './statics/img/shizue.png'),
                            (18, './statics/img/Diablo.png'),
                            (19, './statics/img/benimaru.png');
                            
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaje`
--

DROP TABLE IF EXISTS `personaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personaje` (
  `id_personaje` int(10) NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) DEFAULT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `alias` varchar(250) DEFAULT NULL,
  `edad` int(5) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `interesAmoroso` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_personaje`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaje`
--

LOCK TABLES `personaje` WRITE;
/*!40000 ALTER TABLE `personaje` DISABLE KEYS */;
INSERT INTO `personaje` VALUES (0,'Masculino','Izuku Midoriya','Deku',16,'Vivo',NULL),
                               (1,'Masculino','Toshinori Yagi','All Might',NULL,'Vivo',NULL),
                               (2,'Masculino','Katsuki Bakugo','Dynamight, Kacchan',17,'Vivo',NULL),
                               (3,'Masculino','Shoto Todoroki',NULL,17,'Vivo',NULL),
                               (4,'Femenino','Ochaco Uraraka','Uravity',16,'Viva',NULL),
                               (5,'Femenino','Violet Evergarden','Violet',14,'Viva','Gilbert Bougainvillea'),
                               (6,'Masculino','Gilbert Bougainvillea','Gilbert',29,'Vivo','Violet Evergarden'),
                               (7,'Masculino','Claudia Hodgins','Claude',30,'Vivo',NULL),
                               (8,'Masculino','Light Yagami','Kira',27,'Muerto','Misa Amane'),
                               (9,'Masculino','Misa Amane','Kira',24,'Muerto','Light Yagami'),
                               (10,'Masculino','L','L',25,'Muerto',NULL),
                               (11,'Masculino','Ryuk','Ryuk',10000,'Vivo',NULL),
                               (12,'Masculino','Loyd Forger','Twilight',30,'Vivo','Yor Briar'),
                               (13,'Femenino','Yor Briar','Thorn Princess',27,'Vivo','Loyd Forger'),
                               (14,'Femenino','Anya Forger','Anya',6,'Vivo',NULL),
                               (15,'Masculino','Rimuru Tempest','Rimuru',37,'Vivo',NULL),
                               (16,'Femenino','Shuna','Shuna',17,'Vivo','Rimuru'),
                               (17,'Femenino','Shizue Izawa','Shizu',70,'Muerto','Rimuru'),
                               (18,'Masculino','Diablo','Diablo',1000,'Vivo',NULL),
                               (19,'Masculino','Benimaru','Benimaru',20,'Vivo',NULL);
/*!40000 ALTER TABLE `personaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personajehasimagen`
--

DROP TABLE IF EXISTS `personajehasimagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personajehasimagen` (
  `id_phi` int(11) NOT NULL AUTO_INCREMENT,
  `id_imagen` int(11) NOT NULL,
  `id_personaje` int(11) NOT NULL,
  PRIMARY KEY (`id_phi`),
  KEY `id_imagen` (`id_imagen`),
  KEY `id_personaje` (`id_personaje`),
  CONSTRAINT `personajehasimagen_ibfk_1` FOREIGN KEY (`id_imagen`) REFERENCES `imagen` (`id_imagen`),
  CONSTRAINT `personajehasimagen_ibfk_2` FOREIGN KEY (`id_personaje`) REFERENCES `personaje` (`id_personaje`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personajehasimagen`
--

LOCK TABLES `personajehasimagen` WRITE;
/*!40000 ALTER TABLE `personajehasimagen` DISABLE KEYS */;
INSERT INTO `personajehasimagen` VALUES(0,0,0),
                              (1,1,1),
                              (2,2,2),
                              (3,3,3),
                              (4,4,4),
                              (5,5,5),
                              (6,6,6),
                              (7,7,7),
                              (8,8,8),
                              (9,9,9),
                              (10,10,10),
                              (11,11,11),
                              (12,12,12),
                              (13,13,13),
                              (14,14,14),
                              (15,15,15),
                              (16,16,16),
                              (17,17,17),
                              (18,18,18),
                              (19,19,19);
/*!40000 ALTER TABLE `personajehasimagen` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-24 21:33:50
