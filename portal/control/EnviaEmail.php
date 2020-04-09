<?php
$tipo = $_POST['tipo'];
$id = $_POST['id'];

include_once 'connect.php';
$conexao = new Conexao();
$mysqli = $conexao->getConexao();

$query = "SELECT email FROM candidatos where status='$tipo'";
$result = mysqli_query($mysqli, $query);
$data = array();
if(mysqli_num_rows($result) > 0){
while($row = mysqli_fetch_assoc($result)){
 $data[] = $row;
}

$data2 = join(",",$data);

try {
  $mensagem = "<div style='width: 100%; text-align: center;'><br><h3>Para redefinir sua senha clique no botão abaixo.</h3>";
  $mensagem .= "<br><br><a href='http://pumaleiloes.com.br/usuario/redefinir-senha.php?c=".$numeroConfirmacao."&email=".$email."' style=' background-color: #C63339;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;'>Definir nova senha</a></div>";//.$email;
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From:  Puma Leilões<contato@pumaleiloes.com.br>\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
  $headers .= "X-Sender:  <contato@pumaleiloes.com.br>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <contato@pumaleiloes.com.br>\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";

  mail($data2, "Puma Leilões - Redefinir senha", $mensagem, $headers);  //função que faz o envio do email.
  echo "1";
} catch (Exception $e) {
    echo $e;
}

}else {
  echo "0";
}
?>
