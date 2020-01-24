<?php
  $etapa = $_POST["etapa"];
  $id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $sql = "UPDATE candidatos SET etapa = '$etapa' WHERE id='$id'";
     $insert =mysqli_query($mysqli, $sql);
     if($insert){
       echo "1";
     }else {
       echo "0";
     }

?>
