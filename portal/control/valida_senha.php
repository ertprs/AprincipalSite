<?php
ob_start();
session_start();

  $login = $_POST["login"];
  $senha = $_POST["senha"];
  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();
  $sql = "SELECT * FROM colaborador WHERE (user = '$login')";
  $dados = mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  while($row = $dados->fetch_array(MYSQLI_ASSOC)){
      $senha1 = $row['senha'];
      $user = $row['nome'];
      $root = $row['root'];
 }
    if($senha1 == $senha){
            $_SESSION['login'] = $login;
            $_SESSION['senha'] = $senha;
            $_SESSION['root'] = $root;
              echo "1";
          }else{
              echo "0";
          }
ob_end_flush();
?>
