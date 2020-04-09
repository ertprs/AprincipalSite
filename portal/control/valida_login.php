<?php
ob_start();
session_start();
  $login = $_POST["login"];
  $senha = $_POST["senha"];
  $root = $_POST["rootCTECH"];
  $gestor = $_POST["gestor"];
  $id = $_POST["id"];
  $setor = $_POST["setor"];
  $senhaCRIPTOGRAFADA = $_POST["senhaCRIPTOGRAFADA"];

  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();

    if($senha == $senhaCRIPTOGRAFADA){
            $_SESSION['login'] = $login;
            $_SESSION['senha'] = $senha;
            $_SESSION['root'] = $root;
            $_SESSION['gestor'] = $gestor;
            $_SESSION['id'] = $id;
            $_SESSION['setor'] = $setor;
              echo "1";
          }else{
              echo "0";
          }
ob_end_flush();
?>
