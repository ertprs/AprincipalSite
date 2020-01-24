<?php
$cat = $_POST['cat'];
$id = $_POST['id'];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

if ($cat=="Todos" && $id=="Todos") {
  $query = "SELECT * FROM noticias order by id desc";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($cat=="Todos" && $id!="Todos") {
  $query = "SELECT * FROM noticias WHERE id='$id'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($cat!="Todos" && $id=="Todos"){
  $query = "SELECT * FROM noticias order by id desc WHERE categoria='$cat'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($cat!="Todos" && $id!="Todos"){
  $query = "SELECT * FROM noticias WHERE categoria='$cat' and id='$id'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}


if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_assoc($result))
{
 $data[] = $row;
}
echo json_encode($data);
}

?>
