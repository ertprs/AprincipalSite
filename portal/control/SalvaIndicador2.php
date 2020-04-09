<?php
  $titulo = $_POST['titulo'];
  $id = $_POST['id'];
  $id_new = $_POST['id_new'];
     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
$query = "SELECT * FROM indicadores where indicador='$id'";
$result = mysqli_query($mysqli, $query);
$data = array();
if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
$max = sizeof($data);
for ($i=0; $i <$max ; $i++) {
  $texto =  $data[$i]["texto"];
  $categoria =  $data[$i]["categoria"];
  $conteudo = $data[$i]["conteudo"];
  $sql = "INSERT INTO indicadores (texto, categoria,conteudo,indicador,nome_indicador)
  VALUES ('$texto', '$categoria','$conteudo','$id_new','$titulo')";
  $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
}
if ($status) {
  echo "1";
}else {
  echo "0";
  }
}



?>
