<?php
session_start();
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true)){
  unset($_SESSION['login']);
  unset($_SESSION['senha']);
  unset($_SESSION['id']);
  unset($_SESSION['gestor']);
  unset($_SESSION['setor']);

  header('location:../index.php');
}
$logado = $_SESSION['login'];
$senha = $_SESSION['senha'];
$gestor = $_SESSION['gestor'];
$id = $_SESSION['id'];
$setor = $_SESSION['setor'];

?>
<input id="login_user" type="hidden" value="<?php echo $logado?>"></input>
<input id="senha_user" type="hidden" value="<?php echo $senha?>"></input>
<input id="gestor" type="hidden" value="<?php echo $gestor?>"></input>

<div id="preloader">
    <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
        </svg>
    </div>
</div>
<!--*******************
    Preloader end
********************-->


<!--**********************************
    Main wrapper start
***********************************-->
<div id="main-wrapper">

    <!--**********************************
        Nav header start
    ***********************************-->
    <div class="nav-header">
        <div class="brand-logo">
            <a href="home.php" style="justify-content: center;display: flex;">
              <img class="logo_apbbmm" src="images/logo.png" alt="">
            </a>
        </div>
    </div>
    <!--**********************************
        Nav header end
    ***********************************-->

    <!--**********************************
        Header start
    ***********************************-->
    <div class="header">
        <div class="header-content clearfix">

            <div class="nav-control">
                <div class="hamburger">
                    <span class="toggle-icon"><i class="icon-menu"></i></span>
                </div>
            </div>
            <!-- <div class="header-left">
                <div class="input-group icons">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
                    </div>
                    <input type="search" class="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard">
                    <div class="drop-down animated flipInX d-md-none">
                        <form action="#">
                            <input type="text" class="form-control" placeholder="Search">
                        </form>
                    </div>
                </div>
            </div> -->
            <div class="header-right">
                <ul class="clearfix">
                    <li class="icons dropdown">
                        <div class="user-img c-pointer position-relative"   data-toggle="dropdown">
                            <span class="activity active"></span>
                            <img src="images/user/1.png" height="40" width="40" alt="">
                        </div>
                        <div class="drop-down dropdown-profile animated fadeIn dropdown-menu">
                            <div class="dropdown-content-body">
                                <ul>
                                    <li>
                                        <a href="app-profile.html"><i class="icon-user"></i> <span>Profile</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void()">
                                            <i class="icon-envelope-open"></i> <span>Inbox</span> <div class="badge gradient-3 badge-pill gradient-1">3</div>
                                        </a>
                                    </li>

                                    <hr class="my-2">
                                    <li>
                                        <a href="page-lock.html"><i class="icon-lock"></i> <span>Lock Screen</span></a>
                                    </li>
                                    <li><a href="page-login.html"><i class="icon-key"></i> <span>Logout</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!--**********************************
        Header end ti-comment-alt
    ***********************************-->

    <!--**********************************
        Sidebar start
    ***********************************-->

    <div class="nk-sidebar">
        <div class="nk-nav-scroll">
            <ul class="metismenu" id="menu">
              <li id="cabecalho_marketing" style="display:none" class="nav-label">Marketing</li>
              <li  id="asite" style="display:none">
                  <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i class="icon-user menu-icon"></i> <span class="nav-text">Site</span>
                  </a>
                  <ul aria-expanded="false">
                    <li id="asite1"  style="display:none"><a href="./View/blog.php">Blog</a></li>
                    <li id="asite2"  style="display:none"><a href="./View/produtos.php">Produtos</a></li>

                  </ul>
              </li>
                <li  id="adesign" style="display:none">
                  <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i class="icon-user menu-icon"></i> <span class="nav-text">Cartões</span>
                  </a>
                  <ul aria-expanded="false">
                      <li id="adesign1"    style="display:none"><a href="./View/baby+.php">baby +</a></li>
                      <li id="adesign2"    style="display:none"><a href="./View/cartao_vendedores.php">Vendedores</a></li>
                      <li id="adesign3"    style="display:none"><a href="./View/cartao_vendedores.php">Certificado</a></li>
                  </ul>
              </li>
              <li  id="alanding" style="display:none">

                  <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i class="icon-user menu-icon"></i> <span class="nav-text">Landing Pages</span>
                  </a>
                  <ul aria-expanded="false">
                      <li id="alanding1"   style="display:none"><a href="./View/baby+.php">Wifi Social</a></li>
                      <li id="alanding2"   style="display:none"><a href="./View/pesquisa_satisfacao.php">Link de Satisfação</a></li>
                  </ul>
              </li>
              <li  id="cabecalho_rh"class="nav-label"  style="display:none">RH</li>
              <li id="acolaborador"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-user menu-icon"></i> <span class="nav-text">Colaboradores</span>
                    </a>
                    <ul aria-expanded="false">
                        <li  id="acolaborador1"   style="display:none"><a href="./View/cadastrar_colaborador.php">Cadastrar</a></li>
                        <li  id="acolaborador2"   style="display:none"><a href="./View/editar_colaborador.php">Editar</a></li>
                    </ul>
                </li>
                    <li id="aforms"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-graph menu-icon"></i> <span class="nav-text">Formulario</span>
                    </a>
                    <ul aria-expanded="false">
                        <li id="aforms1"   style="display:none"><a href="./View/climaOrganizacional.php">Clima Organizacional</a></li>
                        <li id="aforms2"   style="display:none"><a href="./View/AvaliacaoDesempenho.php">Avaliação de Desempenho</a></li>
                        <li id="aforms3"   style="display:none"><a href="./View/chart-chartjs.html">Outros</a></li>
                        <li   style="display:none"><a href="./View/chart-chartist.html">Novo Formulario</a></li>
                        <li id="aforms4"   style="display:none"><a href="./View/departamentos.php">Departamentos</a></li>
                    </ul>
                </li>
                <li id="avagas"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-user menu-icon"></i> <span class="nav-text">Gerir Vagas</span>
                    </a>
                    <ul aria-expanded="false">
                        <li id="avagas1"   style="display:none"><a href="./View/gerir_vagas.php">Criar Vaga</a></li>
                        <li id="avagas2"   style="display:none"><a href="./View/ver_vagas.php">Ver Candidaturas</a></li>
                    </ul>
                </li>
                <li id="cabecalho_ead" class="nav-label"  style="display:none">EAD</li>
                <li id="amaterial"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-user menu-icon"></i> <span class="nav-text">Criar Material</span>
                    </a>
                    <ul aria-expanded="false">
                        <li id="amaterial1"    style="display:none"><a href="./View/laborador.php">Criar Curso</a></li>
                        <li id="amaterial2"   style="display:none" ><a href="./View/ecodor.php">Gerir Curso</a></li>
                    </ul>
                </li>
                <li id="aresultados"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-graph menu-icon"></i> <span class="nav-text">Resultados</span>
                    </a>
                    <ul aria-expanded="false">
                        <li  id="aresultados1"   style="display:none"><a href="./View/aborador.php">Geral</a></li>
                        <li  id="aresultados2"   style="display:none"><a href="./View/chart-morris.html">Setor</a></li>
                    </ul>
                </li>
                <li id="acurso"  style="display:none">
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-graph menu-icon"></i> <span class="nav-text">Cursos</span>
                    </a>
                    <ul aria-expanded="false">
                        <li id="acurso1"   style="display:none"><a href="./View/cadastrolaborador.php">Geral</a></li>
                        <li id="acurso2"   style="display:none"><a href="./View/chart-morris.html">Setor</a></li>
                    </ul>
                </li>
                <li id="cabecalho_configuracao" class="nav-label"  style="display:none">Configurações</li>
                <li id="aconfig"  style="display:none">
                    <a class="has-arrow"  href="./View/acesso.php" aria-expanded="false">
                        <i class="icon-user menu-icon"></i> <span class="nav-text">Acesso</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>

    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>

    <script>

  $.ajax({
    url: "control/buscaRoot.php",
    type: "POST",
    dataType: "json",
    data:{id:<?php echo $id?>},
    success: function(data2) {
      var  data = JSON.parse(data2[0].root);


    data.map(function(item,index){
    if (item.site1=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("asite").style.display = "block"
      document.getElementById("asite1").style.display = "block"
    }
    if (item.site2=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("asite").style.display = "block"
      document.getElementById("asite2").style.display = "block"
    }
    if (item.design_1=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("adesign").style.display = "block"
      document.getElementById("adesign1").style.display = "block"
    }
    if (item.design_2=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("adesign").style.display = "block"
      document.getElementById("adesign2").style.display = "block"
    }
    if (item.design_3=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("adesign").style.display = "block"
      document.getElementById("adesign3").style.display = "block"
    }

    if (item.landing_1=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("alanding").style.display = "block"
      document.getElementById("alanding1").style.display = "block"
    }
    if (item.landing_2=="true") {
      document.getElementById("cabecalho_marketing").style.display = "block"
      document.getElementById("alanding").style.display = "block"
      document.getElementById("alanding2").style.display = "block"
    }
    if (item.colaborador1=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("acolaborador").style.display = "block"
      document.getElementById("acolaborador1").style.display = "block"
    }
    if (item.colaborador2=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("acolaborador").style.display = "block"
      document.getElementById("acolaborador2").style.display = "block"
    }

    if (item.forms1=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("aforms").style.display = "block"
      document.getElementById("aforms1").style.display = "block"
    }
    if (item.forms2=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("aforms").style.display = "block"
      document.getElementById("aforms2").style.display = "block"
    }
    if (item.forms3=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("aforms").style.display = "block"
      
    }
    if (item.forms4=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("aforms").style.display = "block"
      document.getElementById("aforms4").style.display = "block"
    }

    if (item.vagas1=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"
      document.getElementById("avagas").style.display = "block"
      document.getElementById("avagas1").style.display = "block"
    }
    if (item.vagas2=="true") {
      document.getElementById("cabecalho_rh").style.display = "block"

      document.getElementById("avagas").style.display = "block"
      document.getElementById("avagas2").style.display = "block"
    }

    if (item.material1=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("amaterial").style.display = "block"
      document.getElementById("amaterial1").style.display = "block"
    }
    if (item.material2=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("amaterial").style.display = "block"
      document.getElementById("amaterial2").style.display = "block"}

    if (item.resultados1=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("aresultados").style.display = "block"
      document.getElementById("aresultados1").style.display = "block"
    }
    if (item.resultados2=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("aresultados").style.display = "block"
      document.getElementById("aresultados2").style.display = "block"
    }
    if (item.curso1=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("acurso").style.display = "block"
      document.getElementById("acurso1").style.display = "block"
    }
    if (item.curso2=="true") {
      document.getElementById("cabecalho_ead").style.display = "block"
      document.getElementById("acurso").style.display = "block"
      document.getElementById("acurso2").style.display = "block"
    }
    if (item.config=="true") {

      document.getElementById("cabecalho_configuracao").style.display = "block"
      document.getElementById("aconfig").style.display = "block"
    }


    });
  }});
    </script>
