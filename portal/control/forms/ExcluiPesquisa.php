<?php

  $id = $_POST["id"];

     include_once '../connectForms.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $sql = "DELETE FROM perguntas WHERE id = '$id'";
     $x = mysqli_query($mysqli, $sql);
     if($x){echo "1";}else {
       echo "10";
     }

?>
