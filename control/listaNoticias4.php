<?php
$cat = $_POST['cat'];

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

  $query = "SELECT * FROM noticias WHERE categoria='$cat'";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data = array();

if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_assoc($result))
{
 $data[] = $row;
}
echo json_encode($data);
}

?>
