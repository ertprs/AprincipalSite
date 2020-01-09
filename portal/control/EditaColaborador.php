<?php
$nome = $_POST["nome"];
$setor = $_POST["setor"];
$id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$sql = "UPDATE colaborador SET nome = '$nome', setor = '$setor' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql);
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
