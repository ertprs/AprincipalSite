-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jan-2020 às 21:11
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `port5718_aprincipal`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pesquisaclima`
--

CREATE TABLE `pesquisaclima` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `indicador` varchar(50) NOT NULL,
  `respostas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Extraindo dados da tabela `pesquisaclima`
--

INSERT INTO `pesquisaclima` (`id`, `indicador`, `respostas`, `responsavel`, `inicio`, `fim`, `setores`, `perguntas`) VALUES
(1, 'pesquisa teste', '1', 'Samara', '20/12/2019', '06/01/2020', '\"Todos\"', NULL),
(5, 'pesquisa 2 - TESTE', '1', 'Samara', '09/01/2020', '09/01/2020', '\"Todos\"', NULL);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pesquisaclima`
--
ALTER TABLE `pesquisaclima`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
