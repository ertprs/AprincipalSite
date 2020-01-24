<?php
  $texto = $_POST["texto"];
  $tipo = $_POST["tipo"];
  $json = $_POST["json"];
  $json = json_encode($json);
     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO indicadores (texto, categoria,conteudo)
     VALUES ('$texto', '$tipo','$json')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
