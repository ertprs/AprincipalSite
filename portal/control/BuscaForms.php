<?php
$id = $_POST['id'];
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$dia = date("d");
$mes = date("m");
$ano = date("Y");
$query = "SELECT * FROM pesquisaclima union all SELECT * FROM pesquisadesempenho";
$result = mysqli_query($mysqli, $query);
$data = array();
if(mysqli_num_rows($result) > 0){

while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}

$max = sizeof($data);
$novo_vetor = array();
for($i=0; $i <$max ; $i++){
    $text = $data[$i]["fim"];
    $dia2 = substr($text, 0, 2);
    $mes2 = substr($text, 3, 2);
    $ano2 = substr($text, 6, 4);
    $dataFim = $ano2.$mes2.$dia2;
    $dataAtual = $ano.$mes.$dia;
        if($dataFim>$dataAtual){
          array_push($novo_vetor,$data[$i]);
        }
}
$query = "SELECT a.id,a.verifica,b.id_colaborador
FROM pesquisadesempenho as a INNER JOIN respostadesempenho as b on a.id = b.id_pesquisa where b.id_colaborador='$id' union all
SELECT a.id,a.verifica,b.id_colaborador
FROM pesquisaclima as a INNER JOIN respostaclima as b on a.id = b.id_pesquisa where b.id_colaborador='$id' ";
$result2 = mysqli_query($mysqli, $query);
$data2 = array();
if(mysqli_num_rows($result2) > 0){

while($row2 = mysqli_fetch_assoc($result2)){
  $data2[] = $row2;
}
$max = sizeof($novo_vetor);
$max2 = sizeof($data2);
$novo_vetor2 = array();

// print_r($data2[0]["id"]);
// print_r($data2[0]["verifica"]);
// print_r($data[0]["id"]);
// print_r($data[0]["verifica"]);
print_r($novo_vetor);
for ($i=0; $i <$max2; $i++) {
  for ($j=0; $j <$max; $j++) {
    if(($data2[$i]["id"]==$novo_vetor[$j]["id"])&&($data2[$i]["verifica"]==$novo_vetor[$j]["verifica"])){
      $X = $i+1;
    }else {
      array_push($novo_vetor2,$novo_vetor[$j]);
      $j =$max+2;
    }
  }
}
print_r($novo_vetor2);
}

}else {
  echo "0";
}

?>
