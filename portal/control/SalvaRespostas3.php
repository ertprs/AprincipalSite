<?php
$respostas = $_POST["respostas"];
$id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
$respostas = json_encode($respostas,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$sql = "UPDATE respostadesempenho SET resposta2 = '$respostas' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql);
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
