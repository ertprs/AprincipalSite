<?php
$respostas = $_POST["respostas"];
$id = $_POST["id"];
$tecnico = $_POST["tecnico"];
$comportamental = $_POST["comportamental"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
$respostas = json_encode($respostas,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

$sql = "UPDATE respostadesempenho SET resposta2 = '$respostas', mtg='$tecnico',
 mcg='$comportamental' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
if($insert){
  echo "1";
}else {
  echo "0";
}
?>
