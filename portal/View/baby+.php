<?php
session_start();
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true)){
  unset($_SESSION['login']);
  unset($_SESSION['senha']);
  unset($_SESSION['root']);
  header('location:../index.php');
}else if (($_SESSION['root'] == "4")||($_SESSION['root'] == "2")) {
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

    <link href="../css/baby.css" rel="stylesheet">
    <link href="../css/uploadimagens.css" rel="stylesheet">
    <link href="../css/cropper.css" rel="stylesheet">
    <link href="../css/bootstrap.css" rel="stylesheet" type="text/css">

            <script src="../control/main.js"></script>
    </head>
<body onload="Init()">
  <script>
  function Init(){
    cod();
    valida(<?php echo $root?>);
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
                                <div class="card-title">Gerar Cartão Baby+</div>
                                <br>
                                <div class="basic-form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Nome</label>
                                                <input type="text" id="nome" class="form-control" placeholder="Insira o Nome" maxlength="25" onblur="gerarCard()">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Codigo</label>
                                                <input type="text" id="codigo" class="form-control" placeholder="codigo" maxlength="4" onblur="gerarCard()">
                                            </div>
                                        </div>
                                        <div class="form-row" style="display:flex;justify-content:center">
                                          <div class="row img_class col-10" style="display:flex;justify-content:center">
                                            <div id="rowImagemPrincipalY"  style="display:flex;">
                                              <div class="form-group col-6">
                                                <div class="labelFormInputInterno form-label-group">
                                                  <input accept="image/png, image/jpeg, image/jpg" type="file" id="fotoPrincipalY" name="fotoPrincipalY" class="form-control" required="required" onchange="carregaImagemPreviewY(this)"/>
                                                  <label id="labelFotoPrincipalY" class="labelFotoPrincipalY" for="fotoPrincipalY">Clique Aqui e Insira Uma Foto - Max 4MB</label>
                                                  <label id="labelFotoPrincipal2Y">
                                                    <label id="labelFotoPrincipal2InternaY" class="labelFotoPrincipalY" for="fotoPrincipalY"> Deseja Trocar de Imagem?</label>
                                                  </label>
                                                </div>
                                              </div>
                                              <div id="divPreviewFotoPrincipalY" class="form-group col-6">
                                                <img id="previewFotoPrincipalY" class="previewFoto" src="" alt="">
                                              </div>
                                              <div id="previewFotoPrincipalNaoCarregadoY"  class="labelFormInputInterno form-group col-12">
                                                Sem Nenhuma Foto
                                              </div>
                                            </div>
                                            <input type="hidden" id="foto11"></input>
                                          </div>
                                        </div>

                                        <div class="card-body" id="card" style="justify-content:center;display:flex">
                                          <div id="cardAp">
                                            <div class="card-body">
                                              <div style="justify-content:center;display:flex;margin-top:10px;">
                                                <img class="card-title" style="width:25%" src="../img/baby.png"></img>
                                              </div>
                                              <br>
                                              <div style="display:flex;margin-top:5px;justify-content:space-between">
                                                <div class="col-10">
                                                  <b class="card-text" id="nome_card" style="font-weight: bold;margin-left:10px;margin-top:15px">ERGINO FERREIRA</b>
                                                  <div style="display:flex">
                                                    <div style="display:block;margin-top:5px">
                                                      <b class="card-text" style="font-weight: bold;color:red;font-size:20px !important;margin-left:10px" id="cod_card">0000</b>
                                                      <br>
                                                      <svg id="codBarras"></svg>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-2" style="margin-top:45px">
                                                  <img class="card-title logoAp" src="../img/logo.png"></img>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="card-body" id="buttons" style="justify-content:center;display:flex">
                                          <a class="btn btn-primary btn-circle btn-lg" style="margin-right:5px" onclick="gerar()" style="cursor:pointer">
                                            <i style="color:white" class="fa fa-download"></i>
                                          </a>
                                          <a class="btn btn-dark btn-circle btn-lg" onclick="refresh()" style="cursor:pointer">
                                            <i style="color:white"  class="fa fa-times" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                    </form>
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

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalCroppImagem" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="modalCroppImagem" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <label class="labelTitulo">Ajuste a imagem</label>
            <div class="divImagemCropped">
              <img id="image" src="">
            </div>
            <div class="divBotaoModalCropp">
              <a onclick="$('#modalCroppImagem').modal('hide'); cropper.destroy();" class=" btn btn-primary genric-btn danger radius">Cancelar</a>
              <a onclick="cropImagem()" class="btn btn-primary  genric-btn primary radius">Pronto</a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/Colaborador.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>

    <script src="../js/jquery/jquery.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/baby.js"></script>
    <script src="../js/jquery.mask.js"></script>
    <script src="../js/canvasjs.min.js"></script>
    <script src="../js/html2canvas.js"></script>
    <script src="../js/html2canvas.min.js"></script>
    <script src="../js/html2canvas.svg.js"></script>
    <script src="../js/html2canvas.svg.min.js"></script>
    <script src="../js/uploadimagens.js"></script>
    <script src="../js/cropper.js"></script>
    <script src="../js/FileSaver.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jsbarcode/3.6.0/JsBarcode.all.min.js"></script>

</body>

</html>
