<?php
  $indicador = $_POST["indicador"];
  $responsavel = $_POST["responsavel"];
  $inicio = $_POST["inicio"];
  $fim = $_POST["fim"];
  $json = $_POST["json"];
  $base = $_POST["base"];
  $baseNome = $_POST["baseNome"];
  $json2 = "1";
  $json3 = "";

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

$aux2 = "DESEMPENHO";
///////////////////////////////////////////////////////////////////
$indicadores = array();
$titulos = array();
$query = "SELECT * FROM indicadores where indicador ='$base'";
$result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
$data2 = array();
if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}
}else {
  $data = "0";
  echo json_encode($data);
}
///////////////////////////////////////
$max = sizeof($data); $cont =0;
for ($i=0; $i <$max ; $i++) {
  $titulos[$i] = [$data[$i]['texto'],$data[$i]['categoria']];
  $aux = $data[$i]['conteudo'];
  $aux = json_decode($aux);
  $max2 = sizeof($aux);
  for ($j=0; $j <$max2 ; $j++) {
      $indicadores[$cont] = [$data[$i]['categoria'],$data[$i]['texto'],$aux[$j]->titulo,$aux[$j]->texto];
      $cont = $cont +1;
  }
}
$titulos =  json_encode($titulos,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$indicadores =  json_encode($indicadores,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
     $sql = "INSERT INTO pesquisadesempenho (indicador, responsavel, inicio, fim, setores,respostas,perguntas,verifica,titulos,indicadores)
     VALUES ('$indicador', '$responsavel', '$inicio', '$fim', '$json', '$baseNome','$json','$aux2','$titulos','$indicadores')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
