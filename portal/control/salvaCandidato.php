<?php
  $id = $_POST["id"];
  $nome = $_POST["nome"];
  $cpf= $_POST["cpf"];
  $endereco = $_POST["endereco"];
  $escolaridade = $_POST["escolaridade"];
  $edital1 = $_POST["curriculo"];
  $email = $_POST["email"];

     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();
     $what = array( 'ä','ã','à','á','â','ê','ë','è','é','ï','ì','í','ö','õ','ò','ó','ô','ü','ù','ú','û','À',
     'Á','É','Í','Ó','Ú','ñ','Ñ','ç','Ç',' ','-','(',')',',',';',':','|','!',
     '"','#','$','%','&','/','=','?','~','^','>','<','ª','º' );
       // matriz de saída
     $by   = array( 'a','a','a','a','a','e','e','e','e','i','i','i','o','o','o','o','o','u','u','u','u','A','A',
     'E','I','O','U','n','n','c','C','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_',
     '_','_','_','_' );
     $nome_do_PDF = str_replace($what, $by, $nome);

     /////Tratamento de Arquivo de base 64 para PDF 1////////////////
     if (($edital1!=null)&&($edital1!="")) {
           $caminhoPDF = "../curriculos/";
           $edital = explode(",",$edital1);
           $edital1 = str_replace($edital[0].",", '', $edital1);
           $edital1 = str_replace(' ', '+', $edital1);
           $dataPDF = base64_decode($edital1);
           $filePDF1 = $caminhoPDF.$nome_do_PDF.'.pdf';
           $success = file_put_contents($filePDF1, $dataPDF);
           $filePDF = explode("./",$filePDF1);
           $filePDF1 = str_replace($filePDF[0]."./", '', $filePDF1);
         }else {
           $filePDF1 = 0;
         }
     ///////////////////////////////////////////////////////////////////
     $etapa = "1";
///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO candidatos (nome, cpf,endereco,escolaridade,curriculo,email,id_vaga,etapa)
     VALUES ('$nome', '$cpf', '$endereco', '$escolaridade', '$filePDF1', '$email', '$id','$etapa')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }
?>
