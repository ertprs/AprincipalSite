<?php

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$query = "SELECT DISTINCT categoria FROM noticias";
$result = mysqli_query($mysqli, $query);
$data = array();

if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
$data = json_encode($data);
$tam = count($data);
$array = array();
echo $tam;

 for ($i=0; $i <$tam ; $i++) {
  //array_push($array, $data[$i]=>categoria);
 }
 print_r($array);

}

?>
