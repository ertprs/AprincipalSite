<?php
$pergunta = $_POST["pergunta"];
$tipo = $_POST["tipo"];
$id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$sql = "UPDATE climaorganizacional SET pergunta = '$pergunta', tipo = '$tipo' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql);
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
