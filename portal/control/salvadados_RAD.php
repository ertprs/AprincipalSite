<?php
$nome = $_POST["nome"];
$setor = $_POST["setor"];
$cod = $_POST["cod"];
$cidade = $_POST["cidade"];
$login = $_POST["login"];
$senha = $_POST["senha"];
$email = $_POST["email"];
$fone = $_POST["fone"];
$rg = $_POST["rg"];
$admissao = $_POST["admissao"];
$demissao = $_POST["demissao"];
$cargo = $_POST["cargo"];
$foto = $_POST["foto"];
$valormeta = $_POST["valormeta"];
$nascimento = $_POST["nascimento"];
$situacao = $_POST["situacao"];
$cpf = $_POST["cpf"];
$id = $_POST["id"];


     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$sql = "UPDATE colaborador SET admissao = '$admissao', cargo = '$cargo',cidade ='$cidade',cod='$cod',cpf='$cpf',demissao='$demissao',
email='$email',fone='$fone',foto='$foto',nascimento='$nascimento',nome='$nome',rad=1,rg='$rg',senha='$senha',setor='$setor',
situacao='$situacao',user='$login',valormeta='$valormeta' WHERE id='$id'";
$insert =mysqli_query($mysqli, $sql)or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
if($insert){
  echo "1";
}else {
  echo "0";
}


?>
