<?php
$email = $_POST['email'];
$nome = $_POST['nome'];
$mensagem = $_POST['mensagem'];
$numeroConfirmacao = array();

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

try {
  $mensagem = "<div style='width: 100%; text-align: center;'>
  <br><h3>Email Gerado Pelo Formulario de Contato do Site.</h3></div>
  <div style='text-align:center'><strong>Nome:  </strong>".$nome."<br>
    <strong>Email: </strong>".$email."<br></div><div style='text-align:center'><h5>".$mensagem."</h5></div>";
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From: ".$nome."<".$email.">\n";
  $headers .= "X-Sender:  <ergino@aprincipal.com.br>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <".$email.">\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";
  $emailenviar = "ergino@aprincipal.com.br";

  mail($emailenviar, "SITE APRINCIPAL - EMAIL FORMULARIO", $mensagem, $headers);  //função que faz o envio do email.
  echo "1";
} catch (Exception $e) {
    echo $e;
}




?>
