<?php
  $nome = $_POST["nome"];
  $data = date('d/m/Y');
  $telefone = $_POST["telefone"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();


///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO clientes_wifi (nome, data,telefone)
     VALUES ('$nome', '$data', '$telefone')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
