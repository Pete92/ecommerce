-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 20.10.2021 klo 10:45
-- Palvelimen versio: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `items`
--

INSERT INTO `items` (`id`, `title`, `description`, `price`, `image`) VALUES
(3, 'Sony Xperia 5 III – 5G älypuhelin', 'Sony Xperia 5 III -älypuhelin tarjoaa huipputasoista tehoa taskukoossa. Laitteen kamerat ovat suunniteltu Sonyn Alpha-kameraosaston kanssa, joka takaa niille poikkeuksellisen laadun. 120 Hz näyttö täyttää vaativienkin käyttäjien tarpeet.', 999, 'https://www.gigantti.fi/image/dv_web_D180001002854597/350985/sony-xperia-5-iii-5g-alypuhelin-vihrea.jpg?$prod_all4one$'),
(4, 'iPhone 13 mini – 5G älypuhelin 512 GB', 'iPhone 13 mini -älypuhelin tarjoaa loistavia ominaisuuksia taskukokoisessa alumiini- ja lasirungossa. Laitteessa on nopea 5G-yhteyksiä tukeva A15 Bionic -prosessori sekä mahtavat valokuvat ja videot tarjoava 12 megapikselin kaksoiskamera.', 1179, 'https://www.gigantti.fi/image/dv_web_D180001002838434/361935/iphone-13-mini-5g-alypuhelin-512-gb-tahtivalkea.jpg?$prod_all4one$'),
(5, 'Motorola Edge 20 lite - 5G älypuhelin 8/128GB', 'Motorola Edge 20 lite -älypuhelimessa on 108+8+2 megapikselin kamera, 6,7” OLED-näyttö sulavalla 90 Hz virkistystaajuudella sekä tuki 5G-yhteyksille. 5000 mAh akussa riittää virtaa kahdeksi päiväksi, ja lisäksi se tukee 30W Turbo Power -pikalatausta.', 399, 'https://www.gigantti.fi/image/dv_web_D180001002808923/330967/motorola-edge-20-lite-5g-alypuhelin-8128gb-grafiitti.jpg?$prod_all4one$'),
(6, 'Samsung Galaxy Z Fold 3 älypuhelin 12/256', 'Nauti rajattomista mahdollisuuksista Samsung Galaxy Z Fold 3 -älypuhelimen innovatiivisen muotoilun ansiosta. Se on varustettu taittuvalla rungolla, tarjoten 6,2” Dynamic AMOLED -näytön edessä sekä taittuvan 7,6” Dynamic AMOLED -näytön avattuna.', 1879, 'https://www.gigantti.fi/image/dv_web_D180001002804632/340909/samsung-galaxy-z-fold-3-alypuhelin-12256-musta.jpg?$prod_all4one$'),
(7, 'OnePlus Nord 2 5G älypuhelin 12/256GB', 'OnePlus Nord 2 5G -älypuhelimessa on 6,43\" 90 Hz -kosketusnäyttö, tekoälytehosteinen 50+8+2 Mpx kolmoiskamera, 65 W pikalatausta tukeva 4500 mAh akku ja 5G-tuki. Laitteelle luvataan 2 suurta järjestelmäpäivitystä ja tietoturvapäivitykset 3 vuodeksi.', 499, 'https://www.gigantti.fi/image/dv_web_D180001002785027/335454/oneplus-nord-2-5g-alypuhelin-12256gb-sininen.jpg?$prod_all4one$'),
(8, 'Nokia XR20 – 5G älypuhelin 4/64GB', 'Nokia XR20 -älypuhelin on kestävä ja monipuolinen apuri. Se tukee 5G-yhteyksiä, sisältää kookkaan 4 630 mAh akun langallisella ja langattomalla latauksella, sekä Zeiss Optics -kaksoiskameran. Sen runko kestää niin naarmuja, pudotuksia kuin vettäkin.', 529, 'https://www.gigantti.fi/image/dv_web_D180001002794628/340729/nokia-xr20-5g-alypuhelin-464gb-sininen.jpg?$prod_all4one$'),
(9, 'CAT S42H+ älypuhelin', 'CAT S42H+ -älypuhelin tarjoaa äärimmäistä kestävyyttä ja hygieniaa IP68-luokituksen, MIL STD-810G -suojauksen sekä bakteereita tuhoavien hopeananohiukkasten avulla. Laitteessa on myös 13 megapikselin kamera sekä suuri 4200 mAh akku.', 289, 'https://www.gigantti.fi/image/dv_web_D180001002767923/321120/cat-s42h-alypuhelin-musta.jpg?$prod_all4one$'),
(10, 'Sony Xperia 10 III - 5G älypuhelin 6/128GB', 'Sony Xperia 10 III -älypuhelimella on IP65/68-luokitus, ja sen ominaisuuksiin lukeutuu 5G-tuki, kaunis 6\" OLED-kosketusnäyttö, tekoälyavusteinen 12 + 8 + 8 megapikselin kolmoiskamera ja 4500 mAh akku kattavilla virranhallinta-asetuksilla.', 349, 'https://www.gigantti.fi/image/dv_web_D180001002765827/319847/sony-xperia-10-iii-5g-alypuhelin-6128gb-musta.jpg?$prod_all4one$'),
(11, 'Asus Zenfone 8 5G älypuhelin 8/128GB', 'Asus Zenfone 8 -älypuhelin tarjoaa mahtavan multimediakokemuksen kompaktissa paketissa. Laitteessa on Snapdragon 888 5G -prosessori, 5,92\" AMOLED-kosketusnäyttö, 64 + 12 megapikselin tuplakamera ja IP68-luokitus.', 699, 'https://www.gigantti.fi/image/dv_web_D180001002760923/316634/asus-zenfone-8-5g-alypuhelin-8128gb-musta.jpg?$prod_all4one$'),
(12, 'Samsung Galaxy A02s älypuhelin 3/32GB', 'Samsung Galaxy A02s -älypuhelin on perustason laite 6,5\" kosketusnäytöllä, 13+2+2 Mps kolmoiskameralla sekä tehokkaalla 5000 mAh akulla, joka tukee langallista 15 W pikalatausta. Sisältää myös 3,5 mm ääniliitännän.', 129, 'https://www.gigantti.fi/image/dv_web_D180001002680813/268580/samsung-galaxy-a02s-alypuhelin-332gb-musta.jpg?$prod_all4one$'),
(13, 'Nokia 5.4 älypuhelin 4/64GB', 'Nokia 5.4 -älypuhelimessa on 4000 mAh akku, jossa riittää virtaa jopa kahdeksi päiväksi. Älypuhelimen ominaisuuksiin lukeutuu myös 6,39” HD+-kosketusnäyttö, Snapdragon 662 -prosessori ja LED-salamalla varustettu 48+5+2+2 megapikselin neloiskamera.', 199, 'https://www.gigantti.fi/image/dv_web_D180001002639827/267706/nokia-54-aelypuhelin-464gb-violetti.jpg?$prod_all4one$');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
