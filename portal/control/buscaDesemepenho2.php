<?php
$pesquisa = $_POST['pesquisa'];

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

if ($pesquisa=="0") {
  $query = "SELECT * FROM pesquisadesempenho";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else {
  $query = "SELECT * FROM pesquisadesempenho where id = '$pesquisa'";
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
