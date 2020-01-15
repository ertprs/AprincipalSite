<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Aprincipal Bebê e Mamãe</title>
    <link rel="icon" type="../image/png" sizes="16x16" href="images/favicon.png">
    <link href="../plugins/pg-calendar/css/pignose.calendar.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../plugins/chartist/css/chartist.min.css">
    <link rel="stylesheet" href="../plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css">
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

<body onload="Init()">
  <script>
  function Init(){
    listaForms();
    listaForms2();
    indTable2();
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
                <a href="../home.php">
                    <b class="logo-abbr"><h1 style="color:white">A</h1></b>
                    <span class="logo-compact"><img src="../images/logo-compact.png" alt=""></span>
                    <span class="brand-title">
                      <h2 style="color:white">APrincipal</h2>
                    </span>
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
                        <br>
                        <div class="row" style="display:flex;justify-content:center">
                          <h2  id="tema" style="margin-top: 10px;color:#808080;justify-content:center">Dashboard Geral</h2>
                        </div>
                          <div class="card-body">
                            <div class="row" style="display:flex;justify-content:space-between">
                                  <button  type="button" onclick="graficos(1)" class="btn btn-info col-xctech">Geral</button>
                                  <button  type="button" onclick="graficos(2)" class="btn btn-info col-xctech">Departamento</button>
                                  <button  type="button" onclick="graficos(3)" class="btn btn-info col-xctech">Colaboradores</button>
                                  <button  type="button" onclick="graficos(4)" class="btn btn-info col-xctech">Evolução</button>
                            </div>
                            <br>
                            <div class="row" id="filtros" style="display:flex;justify-content:space-between">
                              <button type="button" onclick="Relatorio()" class="btn btn-info col-xctech">Gerar Relatorio</button>
                              <form style="visibility: false" action="../control/GerarPDFClima.php" method="post" id="pdfClima">
                                <input name="figura1" id="figura1" type="hidden" />
                                <input name="figura2" id="figura2" type="hidden" />
                                <input name="figura3" id="figura3" type="hidden" />
                                <input name="figura4" id="figura4" type="hidden" />
                                <input name="figura5" id="figura5" type="hidden" />

                              </form>
                            </div>
                              <br>
                            <div id="tela_geral" style="display:block">
                              <hr style="border: solid 1px;color:#cec7c7">
                              <div class="basic-form" style="display:flex;justify-content:space-between" id="linha1">
                                <div id="Painel_Pizza_Clima" style="width:250px;height:250px">
                                  <canvas id="doughnut-chart"  style="width:250px;height:250px"></canvas>
                                </div>
                                <div id="Painel_Bar_Clima" style="width:250px;height:250px">
                                  <canvas id="bar-chart-horizontal"  style="width:250px;height:250px"></canvas>
                                </div>
                                <div  id="Painel_Clima" style="margin:10px">
                                  <table class="table table-bordered" style="color: black;margin-top:30px !important;border: solid 1px">
                                    <thead>
                                    <tr>
                                      <th scope="col" style="color: black;border: solid 1px">Avaliações</th>
                                      <th scope="col" style="color: black;margin: 10px;border: solid 1px;background-color:#a2eca2;">Positiva</th>
                                      <th scope="col" style="color: black;margin: 10px;border: solid 1px;background-color:#e6937a">Negativa</th>
                                      <th scope="col" style="color: black;margin: 10px;border: solid 1px;background-color:#ecec3b">Indiferente</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                      <th  style="color: black;border: solid 1px;" scope="row">Quantidade de Respostas:</th>
                                      <td style="color: black;border: solid 1px;"><h6 style="color: black;margin-top: 10px;margin-left: 10px;text-align:center" id="pos_qtn"></h6></td>
                                      <td style="color: black;border: solid 1px;"><h6 style="color: black;margin-top: 10px;margin-left: 10px;text-align:center" id="neg_qtn"></h6></td>
                                      <td style="color: black;border: solid 1px;"><h6 style="color: black;margin-top: 10px;margin-left: 10px;text-align:center" id="ind_qtn"></h6></td>
                                    </tr>
                                    <tr>
                                      <th  style="color: black;border: solid 1px;" scope="row">% De Respostas:</th>
                                      <td style="color: black;border: solid 1px;"><h5 style="color: black;margin-top: 10px;text-align:center" id="pos_qtn2"></h5></td>
                                      <td style="color: black;border: solid 1px;"><h5 style="color: black;margin-top: 10px;text-align:center" id="neg_qtn2"></h5></td>
                                      <td style="color: black;border: solid 1px;"><h5 style="color: black;margin-top: 10px;text-align:center" id="ind_qtn2"></h5></td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!-- <div id="Painel_Clima" style="width:400px;height:200px;border:solid 2px #808080;margin-top:25px">
                                  <div id="legenda" style="width:100%;height:100px;display:flex">
                                    <div style="display:flex;margin-left: 20px;margin-right: 20px;width:49%;"><h3 style="margin-top:40px">Avaliações:</h3></div>
                                    <div class="colum_ctech" style="background-color:#a2eca2;"><h4 class="colum_ctech_text">Positiva</h4></div>
                                    <div class="colum_ctech" style="fbackground-color:#e6937a;"><h4 class="colum_ctech_text">Negativa</h4></div>
                                    <div  class="colum_ctech" style="background-color:#f5e471;"><h4 class="colum_ctech_text" >Indiferente</h4></div>
                                  </div>
                                  <div id="qtn_resposta" style="width:100%;height:50px;border-top:solid 2px #808080;display:flex">
                                    <div style="display:flex;width:49%;margin:20px;"><h6>Quantidade de Respostas:</h6></div>
                                    <div class="colum_ctech"><h6 style="margin-top: 15px;margin-left: 10px;text-align:center" id="pos_qtn"></h6></div>
                                    <div class="colum_ctech"><h6 style="margin-top: 15px;margin-left: 10px;text-align:center" id="neg_qtn"></h6></div>
                                    <div  class="colum_ctech"><h6 style="margin-top: 15px;margin-left: 10px;text-align:center" id="ind_qtn"></h6></div>
                                  </div>
                                  <div id="por_resposta" style="width:100%;height:50px;border-top:solid 2px #808080;display:flex">
                                    <div style="display:flex;width:49%;margin:20px;"><h6>% De Respostas:</h6></div>
                                    <div class="colum_ctech colum_ctech2"><h5 style="margin-top: 15px;text-align:center" id="pos_qtn2"></h5></div>
                                    <div class="colum_ctech colum_ctech2"><h5 style="margin-top: 15px;text-align:center" id="neg_qtn2"></h5></div>
                                    <div  class="colum_ctech colum_ctech2"><h5 style="margin-top: 15px;text-align:center" id="ind_qtn2"></h5></div>
                                  </div>
                                </div> -->
                              </div>
                              <br>
                              <div id="ranking">
                              <hr style="border: solid 1px;color:#cec7c7">
                              <br>
                              <div   style="display:flex;justify-content:space-between">
                                  <div id="ranking_escalonada_boa"  class="col-lg-6">
                                              <div class="table-responsive">
                                                  <table class="table table-striped" id="corpo_table_ranking_bom">
                                                      <thead>
                                                          <tr style="background-color:#a2eca2">
                                                              <th style="color:black">TOP perguntas com melhores avaliações: Escalonada</th>
                                                              <th style="color:black">Satisfação</th>
                                                          </tr>
                                                      </thead>

                                                  </table>
                                              </div>
                                  </div>
                                  <div id="ranking_escalonada_ruim"  class="col-lg-6">
                                              <div class="table-responsive">
                                                  <table class="table table-striped" id="corpo_table_ranking_ruim">
                                                      <thead>
                                                          <tr style="background-color:#e6937a">
                                                              <th style="color:black">TOP perguntas com piores avaliações: Escalonada</th>
                                                              <th style="color:black">insatisfação</th>
                                                          </tr>
                                                      </thead>

                                                  </table>
                                              </div>
                                  </div>
                              </div>
                              <br>
                              <div   style="display:flex;justify-content:space-between">
                                  <div id="ranking_escalonada_boa"  class="col-lg-6">
                                              <div class="table-responsive">
                                                  <table id="corpo_table_ranking_bom2" class="table table-striped">
                                                      <thead>
                                                          <tr style="background-color:#a2eca2">
                                                              <th style="color:black">TOP perguntas com melhores avaliações: Dicotômica</th>
                                                              <th style="color:black">Satisfação</th>
                                                          </tr>
                                                      </thead>

                                                  </table>
                                              </div>
                                  </div>
                                  <div id="ranking_escalonada_ruim"  class="col-lg-6">
                                              <div class="table-responsive">
                                                  <table id="corpo_table_ranking_ruim2"class="table table-striped">
                                                      <thead>
                                                          <tr style="background-color:#e6937a">
                                                              <th style="color:black">TOP perguntas com piores avaliações: Dicotômica</th>
                                                              <th style="color:black">insatisfação</th>
                                                          </tr>
                                                      </thead>
                                                  </table>
                                              </div>
                                  </div>
                              </div>
                              <hr style="border: solid 1px;color:#cec7c7">
                              <br>
                              <div   style="display:flex;justify-content:space-between">
                                  <div  class="col-lg-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped" id="ranking2">
                                            <thead >
                                                <tr style="background-color:#a2eca2">
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px;border-left: solid 1px;border-bottom: solid 1px;" rowspan="2"><h6 style="font-weight:bold">ID</h6></th>
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px;border-bottom: solid 1px;" rowspan="2"><h6 class="aux-func" style="font-weight:bold">QUESTIONÁRIO</h6></th>
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px;" colspan="2"><h6 style="font-size:12px;font-weight:bold">DICOTÔMICA</h6></th>
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px;" colspan="5"><h6 style="font-weight:bold">ESCALONADA</h6></th>
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px; border-bottom: solid 1px" rowspan="2"><h6 style="font-weight:bold">TOTAL</h6></th>
                                                    <th style="color:black;text-align:center;border-right: solid 1px;border-top: solid 1px;" colspan="2"><h6 style="font-size:12px;font-weight:bold">SATISFEITO</h6></th>
                                                    <th style="color:black;text-align:center;border-top: solid 1px;border-right: solid 1px;" colspan="2"><h6 style="font-weight:bold;font-size:12px;">INSATISFEITO</h6></th>
                                                </tr>
                                                <tr style="background-color:#a2eca2">
                                                    <th style="color:black;text-align:center;font-size:12px;;border-bottom: solid 1px;">SIM</th>
                                                    <th style="color:black;text-align:center;font-size:12px;border-right: solid 1px;;border-bottom: solid 1px;">NÃO</th>
                                                    <th style="border-bottom: solid 1px;" class="colum_ctech_text2"><h6 class="colum_ctech_text3">MUITO SATISFEITO</h6></th>
                                                    <th style="border-bottom: solid 1px;"  class="colum_ctech_text2"><h6 class="colum_ctech_text3">SATISFEITO</h6></th>
                                                    <th  style="border-bottom: solid 1px;" class="colum_ctech_text2"><h6 class="colum_ctech_text3">INDIFERENTE</h6></th>
                                                    <th  style="border-bottom: solid 1px;" class="colum_ctech_text2"><h6 class="colum_ctech_text3">INSATISFEITO</h6></th>
                                                    <th  style="border-bottom: solid 1px;" class="colum_ctech_text2"><h6 class="colum_ctech_text3">MUITO INSATISFEITO</h6></th>
                                                    <th style="color:black;text-align:center;font-size:10px;border-bottom: solid 1px;">QTN</th>
                                                    <th style="color:black;text-align:center;font-size:10px;border-right: solid 1px;border-bottom: solid 1px;">%</th>
                                                    <th style="color:black;text-align:center;font-size:10px;border-bottom: solid 1px;">QTN</th>
                                                    <th style="color:black;text-align:center;font-size:10px;border-right: solid 1px;border-bottom: solid 1px;">%</th>
                                                </tr>
                                            </thead>

                                        </table>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div id="tela_departamento" style="display:none">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                          <div id="Painel_Dep" style="width:100%;height:400px">
                          </div>
                          <br>
                          <div id="ranking_dep" style="display:flex">
                            <div  class="col-lg-12">
                                <div class="table-responsive">
                                    <table class="table table-striped" id="top_dep">
                                        <thead>
                                            <tr style="background-color:#a2eca2">
                                                <th  class="top_col" style="border-left:solid 1px;border-top:solid 1px;" rowspan="2" colspan="2">Ranking Departamentos Com Maior Indice de Satisfação</th>
                                                <th  class="top_col" style="border-top:solid 1px;" colspan="2">NÍVEL</th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" >SIM</th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" >NÃO</th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">M. Insatisfeito</h5></th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Insatisfeito</h5></th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Indiferente</h5></th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Satisfeito</h5></th>
                                                <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">M. Satisfeito</h5></th>
                                            </tr>
                                            <tr style="background-color:#a2eca2">
                                                <th class="top_col" >SATISFAÇÃO</th>
                                                <th class="top_col" >INSATISFAÇÃO</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="ranking_dep2" style="display:flex">
                        <div  class="col-lg-12">
                            <div class="table-responsive">
                                <table class="table table-striped" id="top_dep2">
                                    <thead>
                                        <tr style="background-color:#e6937a">
                                            <th  class="top_col" style="border-left:solid 1px;border-top:solid 1px;" rowspan="2" colspan="2">Ranking Departamentos Com Maior Indice de Insatisfação</th>
                                            <th  class="top_col" style="border-top:solid 1px;" colspan="2">NÍVEL</th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" >SIM</th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" >NÃO</th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">M. Insatisfeito</h5></th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Insatisfeito</h5></th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Indiferente</h5></th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">Satisfeito</h5></th>
                                            <th class="top_col" style="border-top:solid 1px;" rowspan="2" ><h5 id="midep">M. Satisfeito</h5></th>
                                        </tr>
                                        <tr style="background-color:#e6937a">
                                            <th class="top_col" >SATISFAÇÃO</th>
                                            <th class="top_col" >INSATISFAÇÃO</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div id="tela_colaboradores" style="display:none">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                          <div id="ranking_col" style="display:flex">
                            <div  class="col-lg-6">
                                <div class="table-responsive">
                                    <table class="table table-striped" id="top_col_1">
                                        <thead>
                                            <tr style="background-color:#a2eca2">
                                                <th  class="top_col" style="border-left:solid 1px;border-top:solid 1px;" rowspan="2">TOP COLABORADORES MAIS SATISFEITOS</th>
                                                <th  class="top_col" style="border-top:solid 1px;" colspan="2">NÍVEL</th>
                                            </tr>
                                            <tr style="background-color:#a2eca2">
                                                <th class="top_col" >SATISFAÇÃO</th>
                                                <th class="top_col" >INSATISFAÇÃO</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div  class="col-lg-6">
                                <div class="table-responsive">
                                  <table class="table table-striped" id="top_col_2">
                                      <thead>
                                          <tr style="background-color:#e6937a">
                                              <th  class="top_col" style="border-left:solid 1px;border-top:solid 1px;" rowspan="2">TOP COLABORADORES MAIS INSATISFEITOS</th>
                                              <th  class="top_col" style="border-top:solid 1px;" colspan="2">NÍVEL</th>
                                          </tr>
                                          <tr style="background-color:#e6937a">
                                              <th class="top_col" >INSATISFAÇÃO</th>
                                              <th class="top_col" >SATISFAÇÃO</th>
                                          </tr>
                                      </thead>
                                  </table>
                                </div>
                            </div>
                        </div>
                        <hr style="border: solid 1px;color:#cec7c7">
                        <br>
                        <div id="individual" style="display:flex">
                          <div class="col-lg-3">
                              <div class="table-responsive">
                                  <table class="table table-striped">
                                      <thead>
                                          <tr style="background-color:#DDEBF7;text-align: center">
                                              <th style="color:black">ANALISE INDIVIDUAL POR COLABORADOR:</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td style="color:black" id="selectCol">

                                          </td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <div class="col-lg-9">
                              <div class="table-responsive">
                                  <table class="table table-striped">
                                      <thead>
                                          <tr style="background-color:#DDEBF7;text-align: center">
                                              <th style="color:black" rowspan="2"></th>
                                              <th style="color:black" colspan="4">SELECIONE AS PESQUISAS A SEREM ANALIASADAS:</th>
                                          </tr>
                                          <tr style="background-color:#DDEBF7;text-align: center">
                                              <th style="color:black" id="selectPes1">

                                              </th>
                                              <th style="color:black" id="selectPes2">

                                              </th>
                                              <th style="color:black" id="selectPes3">

                                              </th>
                                              <th style="color:black" id="selectPes4">

                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td class="indVerde">POSITIVAS</td>
                                            <td class="indVerde" id="pos1">-</td>
                                            <td class="indVerde" id="pos2">-</td>
                                            <td class="indVerde" id="pos3">-</td>
                                            <td class="indVerde" id="pos4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">NEGATIVAS</td>
                                            <td class="indVermelho" id="neg1">-</td>
                                            <td class="indVermelho" id="neg2">-</td>
                                            <td class="indVermelho" id="neg3">-</td>
                                            <td class="indVermelho" id="neg4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">SIM</td>
                                            <td class="indVerde" id="sim1">-</td>
                                            <td class="indVerde" id="sim2">-</td>
                                            <td class="indVerde" id="sim3">-</td>
                                            <td class="indVerde" id="sim4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">NÃO</td>
                                            <td class="indVermelho" id="nao1">-</td>
                                            <td class="indVermelho" id="nao2">-</td>
                                            <td class="indVermelho" id="nao3">-</td>
                                            <td class="indVermelho" id="nao4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">Muito Satisfeito(a)</td>
                                            <td class="indVerde" id="msa1">-</td>
                                            <td class="indVerde" id="msa2">-</td>
                                            <td class="indVerde" id="msa3">-</td>
                                            <td class="indVerde" id="msa4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">Satisfeito(a)</td>
                                            <td class="indVerde" id="sat1">-</td>
                                            <td class="indVerde" id="sat2">-</td>
                                            <td class="indVerde" id="sat3">-</td>
                                            <td class="indVerde" id="sat4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="ind">Indiferente</td>
                                            <td class="ind" id="ind1">-</td>
                                            <td class="ind" id="ind2">-</td>
                                            <td class="ind" id="ind3">-</td>
                                            <td class="ind" id="ind4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">Insatisfeito(a)</td>
                                            <td class="indVermelho" id="ins1">-</td>
                                            <td class="indVermelho" id="ins2">-</td>
                                            <td class="indVermelho" id="ins3">-</td>
                                            <td class="indVermelho" id="ins4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">Muito Insatisfeito(a)</td>
                                            <td class="indVermelho" id="min1">-</td>
                                            <td class="indVermelho" id="min2">-</td>
                                            <td class="indVermelho" id="min3">-</td>
                                            <td class="indVermelho" id="min4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="ind">Total de Respostas</td>
                                            <td class="ind" id="total1">-</td>
                                            <td class="ind" id="total2">-</td>
                                            <td class="ind" id="total3">-</td>
                                            <td class="ind" id="total4">-</td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                      <div id="individual2" style="display:flex">
                        <div class="col-ctech1">
                            <div class="table-responsive">
                                <table class="table table-striped" id="aux2">
                                    <thead>
                                        <tr style="background-color:#DDEBF7;text-align: center">
                                            <th style="color:black" colspan="2">QUESTIONÁRIO</th>
                                            <th style="color:black" >Pesquisa 1</th>
                                            <th style="color:black" >Pesquisa 2</th>
                                            <th style="color:black" >Pesquisa 3</th>
                                            <th style="color:black" >Pesquisa 4</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div id="tela_evolucao" style="display:none">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>

                          <div class="col-lg-12">
                              <div class="table-responsive">
                                  <table class="table table-striped">
                                      <thead>
                                          <tr style="background-color:#DDEBF7;text-align: center">
                                              <th style="color:black" rowspan="2"></th>
                                              <th style="color:black" colspan="4">SELECIONE AS PESQUISAS A SEREM ANALIASADAS:</th>
                                          </tr>
                                          <tr style="background-color:#DDEBF7;text-align: center">
                                              <th style="color:black" id="EselectPes1">

                                              </th>
                                              <th style="color:black" id="EselectPes2">

                                              </th>
                                              <th style="color:black" id="EselectPes3">

                                              </th>
                                              <th style="color:black" id="EselectPes4">

                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td class="indVerde">POSITIVAS</td>
                                            <td class="indVerde" id="Epos1">-</td>
                                            <td class="indVerde" id="Epos2">-</td>
                                            <td class="indVerde" id="Epos3">-</td>
                                            <td class="indVerde" id="Epos4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">NEGATIVAS</td>
                                            <td class="indVermelho" id="Eneg1">-</td>
                                            <td class="indVermelho" id="Eneg2">-</td>
                                            <td class="indVermelho" id="Eneg3">-</td>
                                            <td class="indVermelho" id="Eneg4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">SIM</td>
                                            <td class="indVerde" id="Esim1">-</td>
                                            <td class="indVerde" id="Esim2">-</td>
                                            <td class="indVerde" id="Esim3">-</td>
                                            <td class="indVerde" id="Esim4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">NÃO</td>
                                            <td class="indVermelho" id="Enao1">-</td>
                                            <td class="indVermelho" id="Enao2">-</td>
                                            <td class="indVermelho" id="Enao3">-</td>
                                            <td class="indVermelho" id="Enao4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">Muito Satisfeito(a)</td>
                                            <td class="indVerde" id="Emsa1">-</td>
                                            <td class="indVerde" id="Emsa2">-</td>
                                            <td class="indVerde" id="Emsa3">-</td>
                                            <td class="indVerde" id="Emsa4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVerde">Satisfeito(a)</td>
                                            <td class="indVerde" id="Esat1">-</td>
                                            <td class="indVerde" id="Esat2">-</td>
                                            <td class="indVerde" id="Esat3">-</td>
                                            <td class="indVerde" id="Esat4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="ind">Indiferente</td>
                                            <td class="ind" id="Eind1">-</td>
                                            <td class="ind" id="Eind2">-</td>
                                            <td class="ind" id="Eind3">-</td>
                                            <td class="ind" id="Eind4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">Insatisfeito(a)</td>
                                            <td class="indVermelho" id="Eins1">-</td>
                                            <td class="indVermelho" id="Eins2">-</td>
                                            <td class="indVermelho" id="Eins3">-</td>
                                            <td class="indVermelho" id="Eins4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="indVermelho">Muito Insatisfeito(a)</td>
                                            <td class="indVermelho" id="Emin1">-</td>
                                            <td class="indVermelho" id="Emin2">-</td>
                                            <td class="indVermelho" id="Emin3">-</td>
                                            <td class="indVermelho" id="Emin4">-</td>
                                        </tr>
                                        <tr>
                                            <td class="ind">Total de Respostas</td>
                                            <td class="ind" id="Etotal1">-</td>
                                            <td class="ind" id="Etotal2">-</td>
                                            <td class="ind" id="Etotal3">-</td>
                                            <td class="ind" id="Etotal4">-</td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <br>
                          <div id="graficoEvolucao">
                          </div>
                          <br>
                        </div>
                      </div>
                  </div>


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
    <img id="logo_pdf" src="../img/logo.png" style="display:none"></img>


    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/climaOrganizacional.js"></script>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
    <script type="text/javascript">
    $(function () {
        $('.selectpicker').selectpicker();
    });
    </script>
    <script src="../plugins/chart.js/Chart.bundle.min.js"></script>
    <script src="../js/plugins-init/chartjs-init.js"></script>
    <script>
    filtros();
    setTimeout(function(){ graficos();
    }, 400);
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js" integrity="sha384-THVO/sM0mFD9h7dfSndI6TS0PgAGavwKvB5hAxRRvc0o9cPLohB0wb/PTA7LdUHs" crossorigin="anonymous"></script>
    <script src="../js/html2canvas.js"></script>
    <script src="../js/html2canvas.min.js"></script>
    <script src="../js/html2canvas.svg.js"></script>
    <script src="../js/html2canvas.svg.min.js"></script>
</body>

</html>
