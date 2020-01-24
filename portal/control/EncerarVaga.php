<?php
  $state = "0";
  $id = $_POST["id"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $sql = "UPDATE vagas SET state = '$state' WHERE id='$id'";
     $insert =mysqli_query($mysqli, $sql);
     if($insert){
       echo "1";
     }else {
       echo "0";
     }

?>
