-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2019 at 05:11 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `komoditi`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(25) NOT NULL,
  `nama` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `subject` varchar(250) NOT NULL,
  `pesan` text NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` varchar(25) NOT NULL,
  `youtube` varchar(250) NOT NULL,
  `uraian` text NOT NULL,
  `file` varchar(250) NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `informasi`
--

CREATE TABLE `informasi` (
  `id` varchar(25) NOT NULL,
  `uraian` longtext NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `informasi`
--

INSERT INTO `informasi` (`id`, `uraian`, `userId`, `createAt`, `editeAt`) VALUES
('fzk6icjya84mn7', '<h3>A. KOMODITI PANGAN STRATEGIS</h3>\n\n<p>Komoditas pangan yang disurvei dan disajikan di Pusat Informasi Harga Pangan Strategis adalah 10 komoditas pangan yang memiliki kontribusi signifikan dalam pembentukan angka inflasi (strategis), khususnya untuk inflasi volatile food, dengan rincian sebagai berikut:</p>\n\n<ol>\n	<li>Beras: terdiri dari 6 kualitas beras berdasarkan level harga yaitu 2 jenis beras kualitas biasa/bawah, 2 jenis beras kualitas sedang, dan 2 jenis beras kualitas premium. Pemilihan jenis beras berdasarkan jenis yang paling banyak dikonsumsi masyarakat di kota/kabupaten lokasi sampel. Untuk harga beras kualitas biasa/bawah tidak termasuk beras raskin/rastra. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Bawang merah: hanya mancakup 1 kualitas bawang merah yaitu lokal dengan kualitas sedang. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Bawang putih: hanya 1 kualitas bawang putih yaitu bawang putih dalam bonggol kualitas sedang. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Cabai merah: terdiri dari 2 kualitas, yaitu cabai merah besar dan cabai merah keriting kualitas segar. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Cabai rawit: terdiri dari 2 kualitas, yaitu cabai rawit merah dan rawit hijau dengan kualitas segar. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Daging sapi: terdiri dari 2 kualitas, yaitu daging sapi has luar dan has dalam dengan kualitas segar. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Daging ayam ras: hanya 1 kualitas yaitu daging ayam ras tanpa jeroan dengan kualitas segar. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Telur ayam ras: hanya 1 kualitas yaitu telur ayam kualitas segar. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Gula pasir: teridiri dari 2 kualitas, yaitu kualitas lokal/curah warna kuning dan kualitas premium. Harga yang dilaporkan adalah harga per kg.</li>\n	<li>Minyak goreng: terdiri dari 3 kualitas, yaitu 1 kualitas lokal/curah dan 2 kualitas kemasan isi ulang. Harga yang dilaporkan adalah harga per liter.</li>\n</ol>\n', 'fzk61k4jy2mnx91', '2019-07-19 14:53:51', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `kakaoa`
--

CREATE TABLE `kakaoa` (
  `id` varchar(25) NOT NULL,
  `petani` varchar(25) DEFAULT NULL,
  `pengumpul` varchar(25) DEFAULT NULL,
  `daerah` varchar(25) DEFAULT NULL,
  `pengencer` varchar(25) DEFAULT NULL,
  `minggu` varchar(25) NOT NULL,
  `bulan` varchar(25) NOT NULL,
  `tahun` varchar(25) NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kakaoa`
--

INSERT INTO `kakaoa` (`id`, `petani`, `pengumpul`, `daerah`, `pengencer`, `minggu`, `bulan`, `tahun`, `userId`, `createAt`, `editeAt`) VALUES
('fzk67jkjya3tugq', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'fzk61k4jy2mnx91', '2019-07-19 12:53:30', '0000-00-00 00:00:00'),
('fzk68awjya6ezt4', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'fzk61k4jy2mnx91', '2019-07-19 14:05:56', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `pengumuman`
--

CREATE TABLE `pengumuman` (
  `id` varchar(25) NOT NULL,
  `judul` varchar(250) DEFAULT NULL,
  `isi` text NOT NULL,
  `file` varchar(255) NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengumuman`
--

INSERT INTO `pengumuman` (`id`, `judul`, `isi`, `file`, `userId`, `createAt`, `editeAt`) VALUES
('bvmmdzl9swjy9zksd4', '214440000', '12000', '1563533669209.pdf', 'fzk61k4jy2mnx91', '2019-07-19 11:22:58', '2019-07-19 11:22:58'),
('fzk64bkjy1lb4h1', 'Contoh Judul pengumuman', 'Contoh Isi Pengumuman', '1563041550289.pdf', 'i33wtesojro8e65d', '2019-07-13 18:12:30', '2019-07-13 18:12:30');

-- --------------------------------------------------------

--
-- Table structure for table `peraturan`
--

CREATE TABLE `peraturan` (
  `id` varchar(25) NOT NULL,
  `jenis` varchar(150) NOT NULL,
  `nomor` varchar(25) NOT NULL,
  `nama` text NOT NULL,
  `file` text NOT NULL,
  `tahun` varchar(6) NOT NULL,
  `status` varchar(25) NOT NULL,
  `abstrack` text NOT NULL,
  `subject` text NOT NULL,
  `pengarang` varchar(250) NOT NULL,
  `tempat_terbit` text NOT NULL,
  `sumber` text NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peraturan`
--

INSERT INTO `peraturan` (`id`, `jenis`, `nomor`, `nama`, `file`, `tahun`, `status`, `abstrack`, `subject`, `pengarang`, `tempat_terbit`, `sumber`, `userId`, `createAt`, `editeAt`) VALUES
('bvmmdzl954jy9yxqxs', 'Peraturan Bupati', '', '123214', '1563532594014.pdf', '', '', '', '', '', '', '', 'fzk61k4jy2mnx91', '2019-07-19 10:36:34', '0000-00-00 00:00:00'),
('fzk67jkjya3v7f1', 'Peraturan Daerah', '', '12000', '1563540873719.pdf', '', '', '', '', '', '', '', 'fzk61k4jy2mnx91', '2019-07-19 12:54:33', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tentang`
--

CREATE TABLE `tentang` (
  `id` varchar(25) NOT NULL,
  `uraian` longtext NOT NULL,
  `userId` varchar(25) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tentang`
--

INSERT INTO `tentang` (`id`, `uraian`, `userId`, `createAt`, `editeAt`) VALUES
('814jy9turyn', '<p>fefrfr</p>\n', 'fzk61k4jy2mnx91', '2019-07-19 08:14:17', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(25) NOT NULL,
  `nama` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `lembaga` varchar(250) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` text NOT NULL,
  `status` varchar(250) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `editeAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `lembaga`, `username`, `password`, `status`, `createAt`, `editeAt`) VALUES
('fzk61k4jy2mnx91', 'Iksan Sinatra', 'idzanuliksan@gmail.com', 'KOMINFO', 'tenyasha', '$2a$12$JUshQcBp8.zjoDUNxDtZq.pn/KFhMMyBzpx9UeptomLnWQoHB.Kdi', 'Admin ', '2019-07-14 07:18:37', '0000-00-00 00:00:00'),
('i33wtesojro8e65d', 'Kiken S Batara', 'kikensbatara@gmail.com', '', 'kikensbatara', '$2a$12$CISFRH5feO1W.xGvs.M5COLHUjOaP50V29Xn3YPoie9SdgEZ/RYTq', '', '2019-03-08 11:16:13', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `informasi`
--
ALTER TABLE `informasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kakaoa`
--
ALTER TABLE `kakaoa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengumuman`
--
ALTER TABLE `pengumuman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peraturan`
--
ALTER TABLE `peraturan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tentang`
--
ALTER TABLE `tentang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
