<?php
  $nome = $_POST["nome"];
  $setor = $_POST["setor"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();


///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO colaborador (nome, setor)
     VALUES ('$nome', '$setor')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
