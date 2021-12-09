-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-12-2021 a las 07:53:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `goluukdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_gender` int(11) DEFAULT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `lastname`, `phone`, `avatar`, `age`, `id_user`, `id_gender`, `id_status`) VALUES
(1, 'Dany', 'Carrillo', 999999999, 'http://avatar.com', 28, 1, 2, 1),
(2, 'Daniel', 'Jara', 999999999, 'http://avatar.com', 28, 2, 2, 1),
(3, 'dany', 'Jara', 900000000, 'http://avatar.com', 28, 3, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer_movie`
--

CREATE TABLE `customer_movie` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_status` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genders`
--

CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genders`
--

INSERT INTO `genders` (`id`, `description`) VALUES
(1, 'femenino'),
(2, 'masculino'),
(3, 'otros'),
(4, 'Lgtb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `description`) VALUES
(1, 'acción'),
(2, 'comedia'),
(3, 'drama'),
(4, 'suspenso'),
(5, 'terror'),
(6, 'Suspenso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL,
  `premiere_date` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `image_url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `id_genre`, `id_status`, `premiere_date`, `created`, `modified`, `image_url`) VALUES
(1, 'Robo perfecto', 'Película de acción ...', 1, 1, '2020-12-12 00:00:00', NULL, NULL, ''),
(2, 'Rambo 1', 'Rambo se encuentra en una misión', 1, 1, '2020-12-12 00:00:00', NULL, NULL, ''),
(3, 'Locos de amor 1', 'Comedia de amor', 1, 2, '2019-12-12 00:00:00', '2021-12-09 00:44:57', '2021-12-09 00:44:57', 'https://url.com.pe'),
(4, 'Locos de amor 2', 'Comedia de amor version 2', 1, 2, '2020-12-12 00:00:00', '2021-12-09 05:51:03', '2021-12-09 05:51:03', 'https://url.com.pe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `description`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `description`) VALUES
(1, 'activo'),
(2, 'inactivo'),
(3, 'bloqueado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `recover_url` varchar(200) DEFAULT NULL,
  `id_role` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `recover_url`, `id_role`, `id_status`, `created`, `modified`) VALUES
(1, 'dany_188_10@hotmail.com', '$2b$10$QFjRDiTemC3tnUKHRyVIFu2JCTrdB4PTXx2I/pNG4Bumlh8Hzi9IO', NULL, 1, 1, '2021-12-09 03:51:12', '2021-12-09 03:51:12'),
(2, 'dcarrillo@hdtic.com', '$2b$10$j1FdVfYttz9uFi9ZrpXyfuT9/Gt3C4rv0NovLStkMhLxykS61i0Se', NULL, 2, 1, '2021-12-09 05:31:11', '2021-12-09 05:31:11'),
(3, 'dany@hotmail.com', '$2b$10$5vEcIebpTXfNH1Rz9.zAo.MLuNaqWzgCsXc9lJOCrYzaDSLsEZyce', NULL, 1, 3, '2021-12-09 06:16:27', '2021-12-09 06:16:27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_gender` (`id_gender`),
  ADD KEY `customer_FK` (`id_user`),
  ADD KEY `customer_FK_1` (`id_status`);

--
-- Indices de la tabla `customer_movie`
--
ALTER TABLE `customer_movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_movie` (`id_movie`),
  ADD KEY `customer_movie_FK` (`id_customer`);

--
-- Indices de la tabla `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_genre` (`id_genre`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `customer_movie`
--
ALTER TABLE `customer_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customer_FK` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `customer_FK_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `customers_ibfk_2` FOREIGN KEY (`id_gender`) REFERENCES `genders` (`id`);

--
-- Filtros para la tabla `customer_movie`
--
ALTER TABLE `customer_movie`
  ADD CONSTRAINT `customer_movie_FK` FOREIGN KEY (`id_customer`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `customer_movie_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `customer_movie_ibfk_3` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
