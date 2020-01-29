<?php
session_start();
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true)){
  unset($_SESSION['login']);
  unset($_SESSION['senha']);
  unset($_SESSION['root']);
  header('location:../index.php');
}else if (($_SESSION['root'] == "4")||($_SESSION['root'] == "3")) {
  $logado = $_SESSION['login'];
  $root = $_SESSION['root'];
}else {
  unset($_SESSION['login']);
  unset($_SESSION['senha']);
  unset($_SESSION['root']);
  header('location:../index.php');
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Aprincipal Bebê e Mamãe</title>
    <!-- Favicon icon -->
    <link rel="icon" type="../image/png" sizes="16x16" href="images/favicon.png">
    <!-- Pignose Calender -->
    <link href="../plugins/pg-calendar/css/pignose.calendar.min.css" rel="stylesheet">
    <!-- Chartist -->
    <link rel="stylesheet" href="../plugins/chartist/css/chartist.min.css">
    <link rel="stylesheet" href="../plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css">
    <!-- Custom Stylesheet -->
    <link href="../css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.css">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert2.min.css">
    <link href="../css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <link href="../css/buttons.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/select.dataTables.min.css" rel="stylesheet" type="text/css">
    <link href="../css/dataTables.bootstrap4.css" rel="stylesheet">
    <link href="../css/jquery.dataTables.min.css" rel="stylesheet">
    <script src="../control/main.js"></script>
  </head>

<body onload="Init()">
  <script>
  function Init(){
    valida(<?php echo $root?>);
    listaDepartamentos();
  }
  </script>


      <!--*******************
          Preloader start
      ********************-->
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
                  <a href="../home.php" style="justify-content: center;display: flex;">
                    <img class="logo_apbbmm" src="../images/logo.png" alt="">
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
                                  <img src="../images/user/1.png" height="40" width="40" alt="">
                              </div>
                              <div class="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                  <div class="dropdown-content-body">
                                      <ul>
                                          <li>
                                              <a href="../app-profile.html"><i class="icon-user"></i> <span>Profile</span></a>
                                          </li>
                                          <li>
                                              <a href="javascript:void()">
                                                  <i class="icon-envelope-open"></i> <span>Inbox</span> <div class="badge gradient-3 badge-pill gradient-1">3</div>
                                              </a>
                                          </li>

                                          <hr class="my-2">
                                          <li>
                                              <a href="../page-lock.html"><i class="icon-lock"></i> <span>Lock Screen</span></a>
                                          </li>
                                          <li><a href="../page-login.html"><i class="icon-key"></i> <span>Logout</span></a></li>
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
                    <li  id="marketing1" style="display:none">
                        <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Site</span>
                        </a>
                        <ul aria-expanded="false">
                          <li><a href="blog.php">Blog</a></li>
                          <li><a href="produtos.php">Produtos</a></li>

                        </ul>
                    </li>
                      <li  id="marketing2" style="display:none">
                        <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Cartões</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="baby+.php">baby +</a></li>
                            <li><a href="cartao_vendedores.php">Vendedores</a></li>
                        </ul>
                    </li>
                    <li  id="marketing3" style="display:none">

                        <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Landing Pages</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="baby+.php">Wifi Social</a></li>
                        </ul>
                    </li>
                    <li  id="cabecalho_rh"class="nav-label"  style="display:none">RH</li>
                    <li id="rh1"  style="display:none">
                          <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                              <i class="icon-user menu-icon"></i> <span class="nav-text">Colaboradores</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="cadastrar_colaborador.php">Cadastrar</a></li>
                              <li><a href="editar_colaborador.php">Editar</a></li>
                          </ul>
                      </li>
                          <li id="rh2"  style="display:none">
                          <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                              <i class="icon-graph menu-icon"></i> <span class="nav-text">Formulario</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="climaOrganizacional.php">Clima Organizacional</a></li>
                              <li><a href="AvaliacaoDesempenho.php">Avaliação de Desempenho</a></li>
                              <li><a href="chart-chartjs.html">Outros</a></li>
                              <li><a href="chart-chartist.html">Novo Formulario</a></li>
                              <li><a href="departamentos.php">Departamentos</a></li>
                          </ul>
                      </li>
                      <li id="rh3"  style="display:none">
                          <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                              <i class="icon-user menu-icon"></i> <span class="nav-text">Gerir Vagas</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="gerir_vagas.php">Criar Vaga</a></li>
                              <li><a href="ver_vagas.php">Ver Candidaturas</a></li>
                          </ul>
                      </li>
                      <li id="cabecalho_ead" class="nav-label"  style="display:none">EAD</li>
                      <li id="ead1"  style="display:none">
                          <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                              <i class="icon-user menu-icon"></i> <span class="nav-text">Material</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="laborador.php">Criar Curso</a></li>
                              <li><a href="ecodor.php">Gerir Curso</a></li>
                          </ul>
                      </li>
                      <li id="ead2"  style="display:none">
                          <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                              <i class="icon-graph menu-icon"></i> <span class="nav-text">Resultados</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="aborador.php">Geral</a></li>
                              <li><a href="chart-morris.html">Setor</a></li>
                          </ul>
                      </li>
                      <li id="ead3"  style="display:none">
                          <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                              <i class="icon-graph menu-icon"></i> <span class="nav-text">Cursos</span>
                          </a>
                          <ul aria-expanded="false">
                              <li><a href="./View/cadastrolaborador.php">Geral</a></li>
                              <li><a href="./chart-morris.html">Setor</a></li>
                          </ul>
                      </li>
                      <li id="cabecalho_configuracao" class="nav-label"  style="display:none">Configurações</li>
                      <li id="configuracao1"  style="display:none">
                          <a class="has-arrow"  href="./View/acesso.php" aria-expanded="false">
                              <i class="icon-user menu-icon"></i> <span class="nav-text">Acesso</span>
                          </a>
                      </li>

                  </ul>
              </div>
          </div>
        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">


            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Cadastrar Departamentos</div>
                                <br>
                                <div class="basic-form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Nome do Departamento</label>
                                                <input id="nome" type="text" class="form-control" placeholder="Departamento">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Outras informações</label>
                                                <input id="outros" type="text" class="form-control" placeholder="Outras Informações">
                                            </div>
                                        </div>
                                        <button type="button" onclick="SalvaDepartamento()" class="btn btn-primary">Cadastrar Departamento</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">Gerenciar Departamentos</div>
                                <br>
                                <div class="basic-form">
                                  <div id="tableDepartamentos">
                                    <table id="table2" style="width:100%" class="table table-striped table-bordered" >
                                      <thead>
                                        <tr>
                                          <td>Id</td>
                                          <td>Nome</td>
                                          <td>Informações</td>
                                          <td>Editar</td>
                                          <td>Excluir</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- #/ container -->
        </div>
        <!--**********************************
            Content body end
        ***********************************-->


        <!--**********************************
            Footer start
            ***********************************-->
            <div class="footer">
                <div class="copyright">
                    <p>Desenvolvido Por <a href="https://www.portalctech.com.br">CTECH</a> 2020</p>
                </div>
            </div>
        <!--**********************************
            Footer end
        ***********************************-->
    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->

    <!-- Modal Login -->
    <div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3" >
            <div class="md-form mb-5">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Nome</label>
              <input type="text" id="nome2" class="form-control validate">
            </div>
            <div class="md-form mb-4">
              <label data-error="wrong" data-success="right" for="defaultForm-pass">Outros</label>
              <input type="text" id="outros" class="form-control validate">
            </div>
          </div>
          <input type="hidden" id="id" class="form-control validate">
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-primary" style="width:10rem" onclick="EditaDEP()">Editar</button>
          </div>'
        </div>
      </div>
    </div>



    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/Departamento.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>
    <script src="../js/jquery-3.3.1.js"></script>
    <script src="../js/jquery.dataTables.min.js"></script>
    <script src="../js/dataTables.buttons.min.js"></script>
    <script src="../js/buttons.flash.min.js"></script>
    <script src="../js/jszip.min.js"></script>
    <script src="../js/pdfmake.min.js"></script>
    <script src="../js/vfs_fonts.js"></script>
    <script src="../js/buttons.html5.min.js"></script>
    <script src="../js/buttons.print.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>
