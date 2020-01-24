<?php

  $id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $sql = "DELETE FROM candidatos WHERE id = '$id'";
     $x = mysqli_query($mysqli, $sql);
     if($x){echo "1";}else {
       echo "10";
     }

?>
