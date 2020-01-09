<?php
$filtrosDepartamento = $_POST['filtrosDepartamento'];
$filtrosPesquisa = $_POST['filtrosPesquisa'];

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

if ($filtrosDepartamento=="0" && $filtrosPesquisa=="0") {
  $query = "SELECT * FROM respostaclima";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($filtrosDepartamento!="0" && $filtrosPesquisa=="0") {
  $query = "SELECT * FROM respostaclima WHERE departamento='$filtrosDepartamento'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($filtrosDepartamento=="0" && $filtrosPesquisa!="0") {
  $query = "SELECT id FROM pesquisaclima WHERE indicador ='$filtrosPesquisa'";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data2 = array();
  if(mysqli_num_rows($result) > 0)
  {while($row = mysqli_fetch_assoc($result))
   { $data2 = $row["id"];}
  }
  $query = "SELECT * FROM respostaclima WHERE id_pesquisa='$data2'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($filtrosDepartamento!="0" && $filtrosPesquisa!="0") {
  $query = "SELECT id FROM pesquisaclima WHERE indicador ='$filtrosPesquisa'";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data2 = array();
  if(mysqli_num_rows($result) > 0)
  {while($row = mysqli_fetch_assoc($result))
   { $data2 = $row["id"];}
  }
  $query = "SELECT * FROM respostaclima WHERE (id_pesquisa='$data2' and departamento='$filtrosDepartamento')";
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
}else {
  $data = "0";
  echo json_encode($data);
}

?>
