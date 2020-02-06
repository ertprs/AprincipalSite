<?php
  $matriz = $_POST["matriz"];
  $textos = $_POST["textos"];
  $intervalo = $_POST["intervalo"];

  include_once 'connect.php';
  $conexao = new Conexao();
  $mysqli = $conexao->getConexao();
  $matriz = (int) $matriz;
  $textos = json_encode($textos,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
  $intervalo = json_encode($intervalo,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
if ($matriz==2) {
  $sql = "UPDATE matriz SET matriz = '$matriz' , intervalos_2='$intervalo' , textos_2='$textos' WHERE id=1";
  $insert =mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
}elseif ($matriz==3) {
  $sql = "UPDATE matriz SET matriz = '$matriz' , intervalos_3='$intervalo' , textos_3='$textos' WHERE id=1";
  $insert =mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
}elseif ($matriz==4) {
  $sql = "UPDATE matriz SET matriz = '$matriz' , intervalos_4='$intervalo' , textos_4='$textos' WHERE id=1";
  $insert =mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
}

  if($insert){
    echo "1";
  }else {
    echo "0";
  }



?>
