<?php
$id = $_POST['id'];
$pagination = $_POST['pagination'];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$pagination2 = $pagination*5;

if ($id!="Todos") {
  $query = "SELECT * FROM noticias WHERE id='$id' LIMIT $pagination2";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data = array();
}else if ($id=="Todos"){
  $query = "SELECT * FROM noticias order by id desc LIMIT $pagination2";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data = array();
}

if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_assoc($result))
{
 $data[] = $row;
}
$max = sizeof($data);
$newdata = array();
for($i=0; $i<$max; $i++){
  if($i>=$pagination){
    array_push($newdata,$data[$i]);
  }
}

echo json_encode($newdata);
}

?>
