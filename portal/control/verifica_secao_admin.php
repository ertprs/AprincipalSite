<?php


function check_session(){
    $explodido = explode("/", $_SERVER['PHP_SELF']);
    $pagina = end($explodido);
    session_start();
    if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true)){
        unset($_SESSION['login']);
        unset($_SESSION['senha']);
        if($pagina != "index.php"){
            header ('location:index.php');
        }
    }else if($pagina == "index.php"){
        header ('location:index.php');
    }
}

?>
