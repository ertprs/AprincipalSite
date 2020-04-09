<?php
$id = $_POST["id"];
$cpf = $_POST["cpf"];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

$query = "SELECT * FROM candidatos where id_vaga='$id' and cpf='$cpf' order by id desc";
$result = mysqli_query($mysqli, $query);
$data = array();

if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result))
{
 $data[] = $row;
}
echo json_encode($data);
}else {
  echo "0";
}

?>
