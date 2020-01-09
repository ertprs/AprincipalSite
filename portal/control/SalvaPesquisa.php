<?php
  $indicador = $_POST["indicador"];
  $responsavel = $_POST["responsavel"];
  $inicio = $_POST["inicio"];
  $fim = $_POST["fim"];
  $json = $_POST["json"];
  $json2 = "1";

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();


///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO pesquisaclima (indicador, responsavel, inicio, fim, setores,respostas)
     VALUES ('$indicador', '$responsavel', '$inicio', '$fim', '$json', '$json2')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
