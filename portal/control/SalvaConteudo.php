<?php
  $texto = $_POST["texto"];
  $titulo = $_POST["titulo"];
  $id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
$sql = "SELECT conteudo FROM indicadores WHERE (id = '$id')";
$dados = mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
while($row = $dados->fetch_array(MYSQLI_ASSOC)){
    $json = $row['conteudo'];
}

$json = json_decode($json);
///////////////////////////////////////////////////////////////////
array_push($json,array("titulo"=>$titulo,"texto"=>$texto));
$json = json_encode($json,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

$sql = "UPDATE indicadores SET conteudo = '$json' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql);
if($insert){
  echo "1";
}else {
  echo "0";
}
?>
