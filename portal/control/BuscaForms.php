<?php
$id = $_POST['id'];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

$dia = date("d"); $mes = date("m"); $ano = date("Y");
$dia = $dia+1;
if ($dia<10) {
  $dia = "0".$dia;
}
$dataAtual = $ano."-".$mes."-".$dia;

$query = "SELECT * FROM pesquisaclima where fim >='$dataAtual'";
$result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
$data = array();
while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}
  $query = "SELECT * FROM respostaclima where id_colaborador ='$id'";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data2 = array();
  ///////////////////////////////////////
  while($row = mysqli_fetch_assoc($result)){
    $data2[] = $row;
  }

$max = sizeof($data);
$max2 = sizeof($data2);
$novo_vetor = array();
if ($max2==0) {
for($i=0; $i <$max ; $i++){
  array_push($novo_vetor,$data[$i]);
}
}else {

for($i=0; $i <$max ; $i++){
    $aux = 0;
  for($j=0; $j <$max2 ; $j++){
    if($data[$i]['id']!=$data2[$j]['id_pesquisa']){
      array_push($novo_vetor,$data[$i]);
      $aux =1;
    }else {
      $aux2= 0;
    }
  }
}
}
/////////////////////////////////////////////////

$query = "SELECT * FROM pesquisadesempenho where fim >='$dataAtual'";
$result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
$data = array();
while($row = mysqli_fetch_assoc($result)){
  $data[] = $row; }
  $query = "SELECT * FROM respostadesempenho where id_colaborador ='$id'";
  $result = mysqli_query($mysqli, $query) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
  $data2 = array();
  ///////////////////////////////////////
  while($row = mysqli_fetch_assoc($result)){
    $data2[] = $row; }

$max = sizeof($data);
$max2 = sizeof($data2);
if ($max2==0) {
for($i=0; $i <$max ; $i++){
  array_push($novo_vetor,$data[$i]);
}
}else {
// for($i=0; $i <$max ; $i++){
//     $aux = 0;
//   for($j=0; $j <$max2 ; $j++){
//     if($data[$i]['id']!=$data2[$j]['id_pesquisa']){
//             array_push($novo_vetor,$data[$i]);
//             $aux = 1;
//     }else {
//       $aux2= 0;
//     }
//   }
// }
$array1 = array();
$array2 = array();
for ($i=0; $i<$max ; $i++) {
  array_push($array1,$data[$i]['id']);
}
for ($i=0; $i<$max2 ; $i++) {
  array_push($array2,$data2[$i]['id_pesquisa']);
}
$result = array_values(array_diff($array1, $array2));
$max3 = sizeof($result);
if ($max3==0) {
$t = 1;
}else {
  for ($i=0; $i <$max3; $i++) {
    for ($j=0; $j <$max; $j++) {
      if ($result[$i]==$data[$j]['id']) {
        array_push($novo_vetor,$data[$j]);
      }
    }
  }
}
}
if ($max3==0) {
  echo "0";
}else {
  echo json_encode($novo_vetor);
}




?>
