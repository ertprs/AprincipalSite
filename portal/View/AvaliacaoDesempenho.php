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
    <link href="../css/select.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../js/bootstrap/bootstrap-select.css">



<body >

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
                <a href="../home.php">
                    <b class="logo-abbr"><h1 style="color:white">A</h1></b>
                    <span class="logo-compact"><img src="../images/logo-compact.png" alt=""></span>
                    <span class="brand-title">
                      <h2 style="color:white">APrincipal</h2>
                    </span>
                </a>
            </div>
        </div>

        <div class="header">
            <div class="header-content clearfix">

                <div class="nav-control">
                    <div class="hamburger">
                        <span class="toggle-icon"><i class="icon-menu"></i></span>
                    </div>
                </div>

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

        <div class="nk-sidebar">
            <div class="nk-nav-scroll">
                <ul class="metismenu" id="menu">
                  <li class="nav-label">Marketing</li>
                  <li>
                      <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                          <i class="icon-user menu-icon"></i> <span class="nav-text">Site</span>
                      </a>
                      <ul aria-expanded="false">
                        <li><a href="blog.php">Blog</a></li>
                        <li><a href="produtos.php">Produtos</a></li>
                      </ul>
                  </li>
                  <li>
                      <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                          <i class="icon-user menu-icon"></i> <span class="nav-text">Cartões</span>
                      </a>
                      <ul aria-expanded="false">
                          <li><a href="baby+.php">baby +</a></li>
                          <li><a href="cartao_vendedores.php">Vendedores</a></li>
                      </ul>
                  </li>
                  <li>
                      <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                          <i class="icon-user menu-icon"></i> <span class="nav-text">Landing Pages</span>
                      </a>
                      <ul aria-expanded="false">
                          <li><a href="baby+.php">Wifi Social</a></li>
                      </ul>
                  </li>
                    <li class="nav-label">RH</li>
                    <li>
                        <a class="has-arrow" href="excluir_colaborador.php" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Colaboradores</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="cadastrar_colaborador.php">Cadastrar</a></li>
                            <li><a href="editar_colaborador.php">Editar</a></li>
                        </ul>
                    </li>
                    <li>
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
                    <li>
                        <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Gerir Vagas</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="aborador.php">Criar Vaga</a></li>
                            <li><a href="ediador.php">Ver Candidaturas</a></li>
                        </ul>
                    </li>
                    <li class="nav-label">EAD</li>
                    <li>
                        <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i class="icon-user menu-icon"></i> <span class="nav-text">Material</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="laborador.php">Criar Curso</a></li>
                            <li><a href="ecodor.php">Gerir Curso</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i class="icon-graph menu-icon"></i> <span class="nav-text">Resultados</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="aborador.php">Geral</a></li>
                            <li><a href="chart-morris.html">Setor</a></li>
                        </ul>
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
                        <div class="row" style="display:flex;justify-content:center">
                          <h2  id="tema" style="margin-top: 10px;color:#808080;justify-content:center"></h2>
                        </div>
                          <div class="card-body">
                            <div class="row" style="display:flex;justify-content:space-between">
                                  <button  type="button" onclick="graficos(1)" class="btn btn-info col-xctech2">Geral</button>
                                  <button  type="button" onclick="graficos(2)" class="btn btn-info col-xctech2">Departamentos</button>
                                  <button  type="button" onclick="graficos(3)" class="btn btn-info col-xctech2">Colaborador</button>
                                  <button  type="button" onclick="graficos(4)" class="btn btn-info col-xctech2">Evolução</button>
                                  <button  type="button" onclick="graficos(5)" class="btn btn-info col-xctech2">Indicadores</button>
                                  <button  type="button" onclick="graficos(6)" class="btn btn-info col-xctech2">Formulários</button>
                            </div>
                            <br>
                            <div class="row" id="filtros" style="display:flex;justify-content:space-between">
                              <button type="button" onclick="Relatorio()" class="btn btn-info col-xctech">Gerar Relatorio</button>
                            </div>
                              <br>
                        <div id="tela_geral" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_departamento" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_colaborador" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_evolucao" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_indicador" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-title">Criar Pergunta</div>
                                        <br>
                                        <div class="basic-form">
                                            <form>
                                                <div class="form-row">
                                                    <div class="form-group col-md-8">
                                                        <label>Pergunta</label>
                                                        <textarea type="text" id="pergunta" class="form-control" placeholder="Insira o Texto Aqui..."></textarea>
                                                    </div>
                                                    <div id="selectTIPO" class="form-group col-md-4">
                                                        <label>Setor</label>
                                                        <select id="inputTipo" class="form-control">
                                                          <option value="0">Escolha</option>
                                                          <option value="Escalonada">Escalonada</option>
                                                          <option value="Dicotômica">Dicotômica</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <button type="button" onclick="SalvaPergunta()" class="btn btn-info">Cadastrar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tela_forms" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>

                      </div>
                  </div>


                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                              <div class="card-title">Perguntas</div>
                                <br>
                                <div class="basic-form">
                                  <div id="table">
                                    <table id="table3" style="width:100%" class="table table-striped table-bordered" >
                                      <thead>
                                        <tr>
                                          <td>Id</td>
                                          <td>Pergunta</td>
                                          <td>Tipo</td>
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
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                              <div style="justify-content:space-between;display:flex">
                                <div class="card-title">Pesquisas</div>
                                <button type="button" onclick="InitPesquisa()" class="btn btn-info">Iniciar Pesquisa</button>
                              </div>
                                <div class="basic-form">
                                  <div id="table">
                                    <table id="table4" style="width:100%" class="table table-striped table-bordered" >
                                      <thead>
                                        <tr>
                                          <td>Id</td>
                                          <td>Indicador</td>
                                          <td>Setores</td>
                                          <td>Inicio</td>
                                          <td>Fim</td>
                                          <td>Responsavel</td>
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
              <label data-error="wrong" data-success="right" for="defaultForm-email">Pergunta</label>
              <textarea type="text" id="pergunta2" class="form-control validate" placeholder="Insira o Texto Aqui..."></textarea>
            </div>
            <div class="md-form mb-4">
              <label data-error="wrong" data-success="right" for="defaultForm-pass">Tipo</label>
              <select id="inputTipo2" class="form-control validate">
                <option value="Escalonada">Escalonada</option>
                <option value="Dicotômica">Dicotômica</option>
              </select>
            </div>
          </div>
          <input type="hidden" id="id" class="form-control validate">
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-info" style="width:10rem" onclick="EditaPergunta()">Editar</button>
          </div>'
        </div>
      </div>
    </div>


    <!-- Modal Login -->
    <div class="modal fade" id="modalepesquisa" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4>Iniciar Pesquisa</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3" >
            <div class="md-form mb-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Indicador</label>
              <input type="text" id="indicador" class="form-control validate" placeholder="descrição"></input>
            </div>
            <br>
            <div class="md-form mb-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Responsavel</label>
              <input type="text" id="responsavel" class="form-control validate" placeholder="Nome"></input>
            </div>
            <br>
            <div class="md-form mb-6" id="aux">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Setores</label>
               <select id="multiselect" multiple  class="selectpicker w-100">
                 <option>Todos</option>
                  <option>Financeiro</option>
                  <option>Marketing</option>
                  <option>Administrativo</option>
                  <option>Logística</option>
                  <option>Loja 02</option>
                  <option>Loja 03</option>
                  <option>Loja 04</option>
                  <option>Loja 05</option>
                  <option>Loja 06</option>
              </select>
            </div>
            <br>
            <div class="md-form mb-6" style="display:flex">
              <div class="md-form col-6">
                <label data-error="wrong" data-success="right" for="defaultForm-email">Inicio</label>
                <input type="date" id="data_init" class="form-control validate" placeholder="Nome"></input>
              </div>
              <div class="md-form col-6">
                <label data-error="wrong" data-success="right" for="defaultForm-email">Final</label>
                <input type="date" id="data_end" class="form-control validate" placeholder="Nome"></input>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-info" style="width:10rem" onclick="IniciarPesquisa()">Iniciar Pesquisa</button>
          </div>
        </div>
      </div>
    </div>



    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/AvaliacaoDesempenho.js"></script>
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
    <script src="../js/bootstrap/popper.js"></script>
    <script src="../js/bootstrap/popper.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/bootstrap/bootstrap-select.js"></script>
    <script type="text/javascript">
    $(function () {
        $('.selectpicker').selectpicker();
    });
    </script>

    <script src="../plugins/chart.js/Chart.bundle.min.js"></script>
    <script src="../js/plugins-init/chartjs-init.js"></script>
    <script>
    graficos("1");
    </script>
</body>

</html>
