<?php
  $exc = $_POST["exc"];
  $bom = $_POST["bom"];
  $reg = $_POST["reg"];
  $ins = $_POST["ins"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
$exc = json_encode($exc,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$bom = json_encode($bom,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$reg = json_encode($reg,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$ins = json_encode($ins,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

$sql = "UPDATE percentual_indicadores SET exc = '$exc',bom = '$bom',reg = '$reg',ins = '$ins' WHERE id=1";
$insert =mysqli_query($mysqli, $sql);
if($insert){
  echo "1";
}else {
  echo "0";
}
?>
