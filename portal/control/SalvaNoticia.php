<?php
  $titulo = $_POST["titulo"];
  $resumo = $_POST["resumo"];
  $texto = $_POST["texto"];
  $img = $_POST["img"];
  $cat = $_POST["cat"];
  $calendario = date('d_m_Y');
  $hora = date('H_i_s');
  $nome = substr($titulo, 0, 10);
  $nome = str_replace(' ', '', $nome);
     include_once 'connect.php';
     $conexao = new Conexao();
     $mysqli = $conexao->getConexao();

     if (($img!=null)&&($img!="")) {
           $caminho = "../noticias/";
           $fotoaux = explode(",",$img);
         	 $img = str_replace($fotoaux[0].",", '', $img);
         	 $img = str_replace(' ', '+', $img);
         	 $data = base64_decode($img);
           $file1 = $caminho.$calendario.$hora.$nome.'.png';
         	 $success = file_put_contents($file1, $data);
           $fileaux = explode("./",$file1);
           $file1 = str_replace($fileaux[0]."./", '', $file1);
         }else {
           $file1 =0;
         }

///////////////////////////////////////////////////////////////////
     $sql = "INSERT INTO noticias (titulo,resumo,texto, fotos,data,categoria)
     VALUES ('$titulo', '$resumo', '$texto', '$file1','$calendario','$cat')";
     $status = mysqli_query($mysqli, $sql)  or die ("Erro ao buscar evento no banco. ".mysqli_error($mysqli));
       if ($status) {
         echo "1";
       }else {
         echo "0";
         }

?>
