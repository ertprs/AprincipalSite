<?php

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

$query = "SELECT nome FROM departamento";
$result = mysqli_query($mysqli, $query);
$data = array();

if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
$novoArray = array();
for ($i=0; $i < count($data); $i++) {
  array_push($novoArray,$data[$i]['nome']);
}
echo json_encode($novoArray);
}

?>
