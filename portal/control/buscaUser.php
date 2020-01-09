<?php
ob_start();
session_start();

  $login = $_POST["login"];
  $senha = $_POST["senha"];
  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();
  $sql = "SELECT * FROM usuario WHERE (nome = '$login')";
  $dados = mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  while($row = $dados->fetch_array(MYSQLI_ASSOC)){
      $senha1 = $row['senha'];
      $user = $row['usuario'];
      $root = $row['root'];
 }
 echo $senha1;
    if($senha1 == $senha){
            $_SESSION['login'] = $login;
            $_SESSION['senha'] = $senha;
            $_SESSION['root'] = $root;
            if ($root="0") {
              header('Location: ../init.php');
              exit();
            }
            if ($root="1") {
              header('Location: ../home.php');
              exit();
            }
          }else{
              echo "0";
              header('Location: ../index.php');
              exit();
          }
ob_end_flush();
?>
