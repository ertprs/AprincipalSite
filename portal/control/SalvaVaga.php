<?php
  $nome = $_POST["nome"];
  $setor = $_POST["setor"];
  $funcoes = $_POST["funcoes"];
  $requisitos = $_POST["requisitos"];
  $beneficios = $_POST["beneficios"];
  $jornada = $_POST["jornada"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $sql = "SELECT endereco,cidade FROM departamento WHERE (nome = '$setor')";
     $dados = mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
     while($row = $dados->fetch_array(MYSQLI_ASSOC)){
         $endereco = $row['endereco'];
         $cidade = $row['cidade'];
    }

$state = "1";
///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO vagas (nome,departamento,funcoes,requisitos,beneficios,carga,endereco,cidade,state)
     VALUES ('$nome', '$setor', '$funcoes', '$requisitos', '$beneficios', '$jornada', '$endereco', '$cidade','$state')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
      }
?>
