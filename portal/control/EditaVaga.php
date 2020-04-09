<?php
$nome = $_POST["nome"];
$setor = $_POST["setor"];
$funcoes = $_POST["funcoes"];
$requisitos = $_POST["requisitos"];
$beneficios = $_POST["beneficios"];
$carga = $_POST["carga"];
$id = $_POST["id"];


     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$sql = "UPDATE vagas SET nome = '$nome', departamento = '$setor',funcoes ='$funcoes',
requisitos='$requisitos', beneficios = '$beneficios', carga='$carga' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql)or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
