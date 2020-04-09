<?php
  $id = $_POST["id"];
  $respostas = $_POST["respostas"];
$data = "";
     include_once '../connectForms.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
$respostas = json_encode($respostas,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

     $sql = "INSERT INTO respostas (id_formulario, respostas,data)
     VALUES ('$id', '$respostas','$data')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
