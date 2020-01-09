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
-- Estrutura da tabela `respostaclima`
--

CREATE TABLE `respostaclima` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_colaborador` varchar(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `resposta` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Extraindo dados da tabela `respostaclima`
--

INSERT INTO `respostaclima` (`id`, `id_colaborador`, `nome`, `resposta`, `id_pesquisa`, `departamento`) VALUES
(1, '1', 'Walace Rodrigues da Silva', '[\"1\",\"Não\",\"3\",\"Sim\",\"4\",\"Não\",\"5\",\"Sim\",\"5\"]', '1', 'Financeiro'),
(2, '3', 'Radson Lourenço', '[\"1\",\"Não\",\"5\",\"Não\",\"3\",\"Não\",\"5\",\"Sim\",\"1\"]', '1', 'Marketing'),
(3, '4', 'Rodolfo Augusto Geyer', '[\"4\",\"Não\",\"3\",\"Sim\",\"5\",\"Sim\",\"1\",\"Sim\",\"1\"]', '1', 'Administrativo'),
(4, '3', 'Tiago Rocha Araujo', '[\"1\",\"Não\",\"2\",\"Não\",\"3\",\"Não\",\"5\",\"Não\",\"1\"]', '1', 'Loja 02'),
(5, '6', 'Acsa Fialho', '[\"4\",\"Sim\",\"3\",\"Sim\",\"5\",\"Sim\",\"3\",\"Sim\",\"2\"]', '1', 'Logística'),
(6, '1', 'Walace Rodrigues da Silva', '[\"1\",\"Sim\",\"2\",\"Sim\",\"3\",\"Não\",\"5\",\"Sim\",\"5\"]', '5', 'Financeiro'),
(7, '3', 'Radson Lourenço', '[\"1\",\"Não\",\"4\",\"Sim\",\"2\",\"Sim\",\"5\",\"Sim\",\"1\"]', '5', 'Marketing'),
(8, '4', 'Rodolfo Augusto Geyer', '[\"3\",\"Não\",\"3\",\"Não\",\"5\",\"Sim\",\"1\",\"Sim\",\"1\"]', '5', 'Administrativo'),
(9, '3', 'Tiago Rocha Araujo', '[\"1\",\"Sim\",\"5\",\"Não\",\"3\",\"Sim\",\"5\",\"Não\",\"1\"]', '5', 'Loja 02'),
(10, '6', 'Acsa Fialho', '[\"4\",\"Sim\",\"3\",\"Sim\",\"5\",\"Sim\",\"3\",\"Sim\",\"2\"]', '5', 'Logística');

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `respostaclima`
--
ALTER TABLE `respostaclima`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
