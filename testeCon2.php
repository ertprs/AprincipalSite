<?php

include_once 'testeCon.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

// $query = "SELECT codFunc, NomeFuncionario,NomeCompleto, Cargo, SenhaCaixa,SenhaCodBarra,CodLoja,Situacao,SenhaAgenda,MD5_SENHA from Funcionarios;";
$query = "SELECT NomeFuncionario,MD5_SENHA from Funcionarios;";
$result = mysqli_query($mysqli, $query);
$data = array();

if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_assoc($result))
{
 $data[] = $row;
}
echo json_encode($data);
}

?>
