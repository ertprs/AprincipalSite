<?php
$id = $_POST["id"];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
if ($id=="0") {
  $query = "SELECT * FROM indicadores";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else {
  $query = "SELECT * FROM indicadores where indicador='$id'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}

if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
echo json_encode($data);
}

?>
