<?php
  $titulo = $_POST["titulo"];
  $img = $_POST["img"];

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
    $nome = str_replace($what, $by, $titulo);

     if (($img!=null)&&($img!="")) {
           $caminho = "../produtos/";
           $fotoaux = explode(",",$img);
         	 $img = str_replace($fotoaux[0].",", '', $img);
         	 $img = str_replace(' ', '+', $img);
         	 $data = base64_decode($img);
           $file1 = $caminho."Produto_".$nome.'.png';
         	 $success = file_put_contents($file1, $data);
           $fileaux = explode("./",$file1);
           $file1 = str_replace($fileaux[0]."./", '', $file1);
         }else {
           $file1 =0;
         }

///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO produtos (titulo, foto)
     VALUES ('$titulo', '$file1')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }

?>
