<?php
$nome = $_POST["nome"];
$setor = $_POST["setor"];
$cod = $_POST["cod"];
$cidade = $_POST["cidade"];
$login = $_POST["login"];
$senha = $_POST["senha"];
$email = $_POST["email"];
$fone = $_POST["fone"];
$rad = $_POST["rad"];
$rg = $_POST["rg"];
$admissao = $_POST["admissao"];
$demissao = $_POST["demissao"];
$cargo = $_POST["cargo"];
$foto = $_POST["foto"];
$valormeta = $_POST["valormeta"];
$nascimento = $_POST["nascimento"];
$situacao = $_POST["situacao"];
$cpf = $_POST["cpf"];
$root ='""';

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();


///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO colaborador (nome, setor,cod,cidade,user,root,senha,email,rad,fone,rg,admissao,demissao,
       cargo,foto,valormeta,nascimento,situacao,cpf)
     VALUES ('$nome', '$setor', '$cod', '$cidade', '$login', '$root','$senha', '$email', '$rad', '$fone', '$rg',
       '$admissao', '$demissao', '$cargo', '$foto', '$valormeta', '$nascimento', '$situacao', '$cpf')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
