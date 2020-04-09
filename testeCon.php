<?php

class Conexao
 {
    // private $usuario = "aprincip_ctech";
    // private $senha = "1pirulito*";
    // private $caminho = "162.241.102.227";
    // private $banco = "aprincip_aprincipal";
    // private $mysqli;
    private $usuario = "sa";
    private $senha = "Ap01!";
    private $caminho = "170.238.74.48:51433";
    private $banco = "servidorsql";
    private $mysqli;

   function __construct()
   {
     $this->mysqli = new mysqli("$this->caminho", "$this->usuario", "$this->senha", "$this->banco");
     mysqli_set_charset($this->mysqli, 'utf8');
   }

   public function getConexao(){
     return $this->mysqli;
   }
 }


  class ConexaoPDO
  {
    public static function getConexao(){
    define('HOST', 'localhost');
    define('USUARIO', 'root');
    define('SENHA','');
    define('DB', 'port5718_aprincipal');
    define('PORT', '3308');

      $opcoes = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8');
      $conexao = new PDO("mysql:host=".HOST.";port=' . PORT . ';dbname=".DB, USUARIO, SENHA, $opcoes);
      return $conexao;
    }
  }

?>
