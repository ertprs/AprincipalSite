<?php
$pesquisa = $_POST['pesquisa'];
$departamento = $_POST['departamento'];

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
if ($pesquisa=="0"&&$departamento=="0"){
  $query = "SELECT a.mt,a.mc,a.mtg,a.mcg,a.id,a.id_colaborador,a.nome,a.resposta, a.id_pesquisa,a.departamento,a.resposta2,a.id_gestor,
  a.gestor,b.id,b.indicador,b.titulos,b.indicadores
   FROM respostadesempenho as a,pesquisadesempenho as b where a.id_pesquisa=b.id";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($pesquisa=="0"&&$departamento!="0") {
  $query = "SELECT a.mt,a.mc,a.mtg,a.mcg,a.id,a.id_colaborador,a.nome,a.resposta, a.id_pesquisa,a.departamento,a.resposta2,a.id_gestor,
  a.gestor,b.id,b.indicador,b.titulos,b.indicadores
   FROM respostadesempenho as a,pesquisadesempenho as b where a.id_pesquisa=b.id and a.departamento='$departamento'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($pesquisa!="0"&&$departamento=="0") {
  $query = "SELECT a.mt,a.mc,a.mtg,a.mcg,a.id,a.id_colaborador,a.nome,a.resposta, a.id_pesquisa,a.departamento,a.resposta2,a.id_gestor,
  a.gestor,b.id,b.indicador,b.titulos,b.indicadores
   FROM respostadesempenho as a,pesquisadesempenho as b where a.id_pesquisa=b.id and  a.id_pesquisa='$pesquisa'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}else if ($pesquisa!="0"&&$departamento!="0") {
  $query = "SELECT a.mt,a.mc,a.mtg,a.mcg,a.id,a.id_colaborador,a.nome,a.resposta, a.id_pesquisa,a.departamento,a.resposta2,a.id_gestor,
  a.gestor,b.id,b.indicador,b.titulos,b.indicadores
   FROM respostadesempenho as a,pesquisadesempenho as b where a.id_pesquisa=b.id and  a.id_pesquisa='$pesquisa' and a.departamento='$departamento'";
  $result = mysqli_query($mysqli, $query);
  $data = array();
}

if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
echo json_encode($data);
}else {
  echo "0";
}

?>
