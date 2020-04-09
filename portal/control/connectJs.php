<?php

define('HOST', '162.241.102.227');
define('USUARIO', 'aprincip_admin');
define('SENHA','BBMM@bbmm@123');
define('DB', 'aprincip_aprincipal');
$opcoes = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8');
$conexao = new PDO("mysql:host=".HOST."; dbname=".DB, USUARIO, SENHA, $opcoes);
