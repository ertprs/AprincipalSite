<?php
ob_start();
session_start();

  $login = $_POST["user"];
  $senha1 = $_POST["senha1"];
  $_SESSION['login'] = $login;
  $_SESSION['senha'] = $senha1;

  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();
  $query = "SELECT * FROM usuario where nome ='$login' and senha ='$senha1'";
  $result = mysqli_query($mysqli, $query);
  $data = array();

  if(mysqli_num_rows($result) > 0)
  {
  while($row = mysqli_fetch_assoc($result))
  {
   $data[] = $row;
  }
  echo json_encode($data);
  }

  ob_end_flush();
?>
