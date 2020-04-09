<?php
ob_start();
session_start();
  $login = $_POST["login"];
  $senha = $_POST["senha"];

  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();

  $sql = "SELECT * FROM colaborador WHERE user = '$login'";
  $result = mysqli_query($mysqli, $sql);
  $data = array();
  if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result)){
   $data[] = $row;
  }
  echo json_encode($data);
  }else {
    echo "1";
  }

    // if($senha1 == $senha){
    //         $_SESSION['login'] = $login;
    //         $_SESSION['senha'] = $senha;
    //         $_SESSION['root'] = $root;
    //         $_SESSION['gestor'] = $gestor;
    //         $_SESSION['id'] = $id;
    //         $_SESSION['setor'] = $setor;
    //           echo "1";
    //       }else{
    //           echo "0";
    //       }
ob_end_flush();
?>
