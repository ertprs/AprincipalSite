<?php
  $pergunta = $_POST["pergunta"];
  $tipo = $_POST["tipo"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();


///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO climaOrganizacional (pergunta, tipo)
     VALUES ('$pergunta', '$tipo')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
