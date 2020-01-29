<?php
include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$dia = date("d");
$mes = date("m");
$ano = date("Y");
$query = "SELECT * FROM pesquisaclima";
$result = mysqli_query($mysqli, $query);
$data = array();

if(mysqli_num_rows($result) > 0){

while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}
$max = sizeof($data);
for($i=0; $i <$max ; $i++){
    $text = $data[$i]["fim"];
    $dia2 = substr($text, 0, 2);
    $mes2 = substr($text, 3, 2);
    $ano2 = substr($text, 6, 4);
    if($dia2<$dia){
      if($mes2<=$mes){
        if($ano2<=$ano){
          unset($data[$i]);
        }
      }
    }
}
echo json_encode($data);
}else {
  echo "0";
}

?>
