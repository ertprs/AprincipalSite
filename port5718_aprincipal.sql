-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jan-2020 às 20:32
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
-- Estrutura da tabela `clientes_wifi`
--

CREATE TABLE `clientes_wifi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `data` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `climaorganizacional`
--

CREATE TABLE `climaorganizacional` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pergunta` text COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `climaorganizacional`
--

INSERT INTO `climaorganizacional` (`id`, `pergunta`, `tipo`) VALUES
(1, 'Qual o nível de satisfação que você possuí com a imagem da empresa perante a sociedade?', 'Escalonada'),
(2, 'Você se sente orgulhoso por trabalhar aqui?', 'Dicotômica'),
(4, 'Qual é o seu nível de satisfação com os meios de comunicação internos da empresa? (mural, quadro de avisos, email, etc)', 'Escalonada'),
(5, 'Você é ouvido pelo seu líder e seus pares?', 'Dicotômica'),
(6, 'Qual o seu nível de satisfação com os recursos materiais oferecidos pela empresa para desempenhar um bom trabalho?', 'Escalonada'),
(7, 'Qual o seu nível de satisfação com o ambiente de trabalho da empresa?', 'Escalonada'),
(8, 'Como você se sente em relação ao seu relacionamento profissional com os seus colegas de trabalho?', 'Escalonada'),
(9, 'Como você se sente em relação aos investimentos realizados pela empresa nos funcionários?', 'Escalonada'),
(10, 'No último ano você teve alguma oportunidade dentro da empresa de aprendizado e crescimento?', 'Dicotômica');

-- --------------------------------------------------------

--
-- Estrutura da tabela `colaborador`
--

CREATE TABLE `colaborador` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `setor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cod` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `colaborador`
--

INSERT INTO `colaborador` (`id`, `nome`, `setor`, `cod`) VALUES
(1, 'Walace Rodrigues da Silva', 'Financeiro', NULL),
(2, 'Tiago Rocha Araujo', 'Marketing', NULL),
(3, 'Radson Lourenço', 'Marketing', NULL),
(4, 'Rodolfo Augusto Geyer', 'Financeiro', NULL),
(6, 'Pablo Rodrigues', 'Financeiro', NULL),
(7, 'Acsa Fialho', 'Financeiro', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `departamento`
--

CREATE TABLE `departamento` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `outros` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `departamento`
--

INSERT INTO `departamento` (`id`, `nome`, `outros`) VALUES
(1, 'Financeiro', 'Comercial'),
(2, 'Marketing', 'Interno'),
(4, 'Administrativo', ''),
(5, 'Logística', ''),
(6, 'Loja 02', ''),
(7, 'Loja 03', ''),
(8, 'Loja 04', ''),
(9, 'Loja 05', ''),
(10, 'Loja 06', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fotos` varchar(50) NOT NULL,
  `resumo` text NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `texto` longtext NOT NULL,
  `data` varchar(20) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `noticias`
--

INSERT INTO `noticias` (`id`, `fotos`, `resumo`, `titulo`, `texto`, `data`, `autor`) VALUES
(12, 'noticias/03_01_202019_41_53Emergency.png', 'Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus.', 'Emergency Care', 'Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus.Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus.Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus.', '03_01_2020', 'Walace R.'),
(14, 'noticias/07_01_202012_25_37Noticiade.png', 'Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Num', 'Noticia de Teste - Numero 4', 'Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4Noticia de Teste - Numero 4', '07_01_2020', 'Ergino Luiz'),
(15, 'noticias/07_01_202012_30_50Noticiade.png', 'BBrcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.', 'Noticia de Teste - Numero 5', 'BBrcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.BBrcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.BBrcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.BBrcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas finibus, dolor risus mollis.', '07_01_2020', 'Ergino Luiz');

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `foto` varchar(200) NOT NULL,
  `titulo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `foto`, `titulo`) VALUES
(23, 'produtos/Produto_Produto_Teste_1.png', 'Produto Teste 1'),
(24, 'produtos/Produto_Produto_Teste_2.png', 'Produto Teste 2'),
(25, 'produtos/Produto_Produto_Teste_3.png', 'Produto Teste 3'),
(26, 'produtos/Produto_Produto_Teste_4.png', 'Produto Teste 4'),
(27, 'produtos/Produto_Produto_Teste_5.png', 'Produto Teste 5'),
(28, 'produtos/Produto_Produto_Teste_6.png', 'Produto Teste 6');

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome_completo` varchar(60) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `root` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome_completo`, `nome`, `senha`, `root`, `email`) VALUES
(1, 'Walace Rodrigues da Silva', 'wall', '7IzC0F1Zy20x8BLoTQ+QdQ==', '1', 'walace.careca87@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes_wifi`
--
ALTER TABLE `clientes_wifi`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `climaorganizacional`
--
ALTER TABLE `climaorganizacional`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes_wifi`
--
ALTER TABLE `clientes_wifi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `climaorganizacional`
--
ALTER TABLE `climaorganizacional`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `pesquisaclima`
--
ALTER TABLE `pesquisaclima`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `respostaclima`
--
ALTER TABLE `respostaclima`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
