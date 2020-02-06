<?php
  $id = $_POST["id"];
  $login = $_POST["login"];
  $senha = $_POST["senha"];
  $gestor = $_POST["gestor"];
  $respostas = $_POST["respostas"];


     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
///////////////////////////////////////////////////////////////////
     $sql = "SELECT * FROM colaborador WHERE (user = '$login') and senha ='$senha'";
     $dados = mysqli_query($mysqli, $sql) or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
     while($row = $dados->fetch_array(MYSQLI_ASSOC)){
         $id_colaborador = $row['id'];
         $nome = $row['nome'];
         $departamento = $row['setor'];
         $id_supervisor = $row['id_supervisor'];
     }

 $respostas = json_encode($respostas,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

  $sql = "INSERT INTO respostadesempenho (id_colaborador, nome,id_pesquisa,resposta,departamento,id_gestor)
  VALUES ('$id_colaborador', '$nome', '$id', '$respostas', '$departamento','$id_supervisor')";
  $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
    if ($status) {
      echo "1";
    }else {
      echo "0";
      }

///////////////////////////////////////////////////////////////////

?>
