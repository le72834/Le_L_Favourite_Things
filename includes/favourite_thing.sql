-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 15, 2020 at 12:31 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `favourite_thing`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`id`, `title`, `description`, `image`) VALUES
(1, 'Favourite Food', 'There are a lot of foods I like. It is quite difficult to think of one. So, let me talk about a popular menu in my country which is one of my favorite foods also. It is steamed/plain rice and chicken adobo. Adobo is the local name. Adobo can be beef, pork, chicken, fish or even vegetables but I like the chicken adobo particularly.', 'food.jpg'),
(2, 'Night Sky', 'When the moon had risen high in the sky, I looked up and started counting the stars. I had never seen so many stars in the sky as I did that night. They twinkled while the moon shone brightly. At that moment, I felt at peace. My mind was blank; I wasn’t thinking of anything else. All my sadness and disappointments disappeared. I was content at that moment.', 'night_sky.jpg'),
(3, 'Watching Movies', 'I like watching movies in my spare time. But there are many kinds of movies, I don\'t like all of them, I like those carry positive energy, and are beneficial to our mind and body.', 'movie_series.jpg'),
(4, 'Friend and me', 'On the first day of my spending freeze, I went shopping with my friends. I felt guilty the whole time because I wanted to enjoy my day, but I didn’t want to blow my “spend zero” budget, either. I couldn’t back out, though, because I was the one who had planned the shopping trip.', 'friend_life.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
