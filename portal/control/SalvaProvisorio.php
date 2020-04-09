<?php
$gestor = $_POST["gestor"];
$naogestor = $_POST["naogestor"];
$titulogestor = $_POST["titulogestor"];
$titulonaogestor = $_POST["titulonaogestor"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$gestor =  json_encode($gestor,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$naogestor =  json_encode($naogestor,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$titulogestor =  json_encode($titulogestor,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$titulonaogestor =  json_encode($titulonaogestor,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$sql = "UPDATE provisorio SET gestor = '$gestor', naogestor = '$naogestor',titulosgestor ='$titulogestor',titulosnaogestor='$titulonaogestor' WHERE id=1";
$insert =mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
