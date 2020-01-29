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
  <link href="../css/desempenho.css" rel="stylesheet">

          <script src="../control/main.js"></script>
  </head>

  <body onload="valida(<?php echo $root?>)">
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
                                  <button  type="button" onclick="graficos(7)" class="btn btn-info col-xctech2">Matriz</button>
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
                          <div class="card-body">
                              <div class="card-title">Criar Indicadores</div>
                              <br>
                              <div class="basic-form">
                                  <form>
                                      <div class="form-row">
                                          <div class="form-group col-md-6">
                                              <label>Titulo</label>
                                              <input type="text" id="texto_indicador" class="form-control" placeholder="Insira o Texto Aqui..."></input>
                                          </div>
                                          <div class="form-group col-md-6">
                                              <label>Tipo</label>
                                              <select id="tipo_indicador" class="form-control">
                                              <option value="1">Competencia Gestor</option>
                                              <option value="2">Competencia Não Gestor</option>
                                              <option value="3">Potencial Gestor</option>
                                              <option value="4">Potencial Não Gestor</option>
                                            </select>
                                          </div>
                                      </div>
                                      <button type="button" onclick="SalvaIndicador()" class="btn btn-info">Salvar Indicadores</button>
                                  </form>
                              </div>
                          </div>

                          <div class="card-body">
                            <div class="card-title">Grupos de Indicadores de Competencia de Gestores</div>
                              <br>
                              <div class="basic-form">
                                <div id="table">
                                  <table id="table3"  style="width:100%" class="table table-striped table-bordered" >
                                    <thead >
                                      <tr >
                                        <td>Id</td>
                                        <td>Indicador</td>
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
                          <div class="card-body">
                            <div class="card-title">Grupos de Indicadores de Competencia de Não Gestores</div>
                              <br>
                              <div class="basic-form">
                                <div id="table">
                                  <table id="table5"  style="width:100%" class="table table-striped table-bordered" >
                                    <thead >
                                      <tr >
                                        <td>Id</td>
                                        <td>Indicador</td>
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
                          <hr style="border: solid 1px;color:#cec7c7">

                          <div class="card-body">
                            <div class="card-title">Níveis da Escala - Avaliação de Competências</div>
                            <button type="button" onclick="SalvaNiveis()" class="btn btn-info">Salvar Niveis</button>
                            <br><br>
                            <table class="table" style="border:solid 1px">
                              <thead class="thead-dark">
                                <tr>
                                  <th scope="col" colspan="2">Notas:</th>
                                  <th scope="col" colspan="2">Nível</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><input class="limite" id="exc_min"></input></td>
                                  <td><input class="limite" id="exc_max"></input></td>
                                  <td style="background-color:#4CAF50;color:white">Excelente</td>
                                  <td><textarea class="texto_limite" id="exc_text"></textarea></td>
                                </tr>
                                <tr>
                                  <td><input class="limite" id="bom_min"></td>
                                  <td><input class="limite" id="bom_max"></td>
                                  <td style="background-color:#99ffcc;color:black">Bom</td>
                                  <td><textarea class="texto_limite" id="bom_text"></textarea></td>
                                </tr>
                                <tr>
                                  <td><input class="limite" id="reg_min"></td>
                                  <td><input class="limite" id="reg_max"></td>
                                  <td style="background-color:#ffff99;color:black">Regular</td>
                                  <td><textarea class="texto_limite" id="reg_text"></textarea></td>
                                </tr>
                                <tr>
                                  <td><input class="limite" id="ins_min"></td>
                                  <td><input class="limite" id="ins_max"></td>
                                  <td style="background-color:#ff5050;color:black">Insatisfatório</td>
                                  <td><textarea class="texto_limite" id="ins_text"></textarea></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                        <div id="tela_forms" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_matriz" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">


                            <div class="form-group col-6">
                              <label for="tam_matriz">Tamanho da Matriz</label>
                              <select class="form-control" id="tam_matriz" onchange="MudaMatriz()">
                                <option value="0">Selecione</option>
                                <option value="2">2x2</option>
                                <option value="3">3x3</option>
                                <option value="4">4x4</option>
                              </select>
                            </div>


                          <br>
                          <div  id="matriz4">
                            <table class="table">
                              <tr>
                                <th rowspan="6"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td class="table_matriz">Alto (8 a 10)</td>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"  id="bl1c1" class="bloco_matriz3">Demissão</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="bl1c2" class="bloco_matriz3">Demissão</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)"   id="bl1c3" class="bloco_matriz3">Feedback Positivo</td>
                                <td style="background-color:rgb(153, 255, 204,0.8)"   id="bl1c4" class="bloco_matriz3">Promoção</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Médio Alto (6 a 7)</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="bl2c1" class="bloco_matriz3">Demissão</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="bl2c2" class="bloco_matriz3">Demissão</td>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl2c3" class="bloco_matriz3">Feedback Construtivo</td>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl2c4" class="bloco_matriz3">Feedback Positivo</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Médio Baixo (4 a 5)</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="bl3c1" class="bloco_matriz3">Demissão</td>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"  id="bl3c2" class="bloco_matriz3">Demissão</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)" id="bl3c3" class="bloco_matriz3">Treinamentos</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)"   id="bl3c4" class="bloco_matriz3">Treinamentos</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Baixo (1 a 3)</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="bl4c1" class="bloco_matriz3">Demissão</td>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"  id="bl4c2" class="bloco_matriz3">Demissão</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)" id="bl4c3" class="bloco_matriz3">Advertência</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)" id="bl4c4" class="bloco_matriz3">Treinamentos</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz">Baixo (1 a 3)</td>
                                <td class="table_matriz">Médio Baixo (4 a 5)</td>
                                <td class="table_matriz">Médio Alto (6 a 7)</td>
                                <td class="table_matriz">Alto (8 a 10)</td>
                              </tr>
                              <tr>
                                <th colspan="5"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                            <br>
                            <!-- <table class="table">
                             <thead class="thead-dark">
                               <tr>
                                 <th >ID</th>
                                 <th >Orientação</th>
                               </tr>
                             </thead>
                            <tbody>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"   id="bl1c1x">A-B</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.8)"  id="bl1c2x">A-MB</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(255, 255, 153, 0.5)"  id="bl1c3x">A-MA</td>
                                <td>Feedback Positivo</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgb(153, 255, 204,0.8)"  id="bl1c4x">A-A</td>
                                <td>Promoção</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.8)"  id="bl2c1x">MA-B</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.8)"  id="bl2c2x">MA-MB</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(255, 255, 153, 0.5)"  id="bl2c3x">MA-MA</td>
                                <td>Feedback Construtivo</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(255, 255, 153, 0.5)"  id="bl2c4x">MA-A</td>
                                <td>Feedback Positivo</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.8)"  id="bl3c1x">MB-B</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"   id="bl3c2x">MB-MB</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl3c3x">MB-MA</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl3c4x">MB-A</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"  id="bl4c1x">B-B</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.8)"  id="bl4c2x">B-MB</td>
                                <td>Demissão</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl4c3x">B-MA</td>
                                <td>Advertência</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="bl4c4x">B-A</td>
                                <td>Treinamentos</td>
                              </tr>
                            </tbody>
                            </table> -->
                          </div>
                          <div  id="matriz3">
                            <table class="table">
                              <tr>
                                <th rowspan="5"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td class="table_matriz">Alto (8 a 10)</td>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="al1c1" class="bloco_matriz">Treinamentos</td>
                                <td style="background-color:rgb(153, 255, 204,0.5)"   id="al1c2" class="bloco_matriz">Aumentar Desafios</td>
                                <td style="background-color:rgb(153, 255, 204,0.8)"   id="al1c3" class="bloco_matriz">Promover</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Médio (6 a 7)</td>
                                <td style="background-color:rgba(220, 80, 80, 0.4)"   id="al2c1" class="bloco_matriz">Realocar</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)"   id="al2c2" class="bloco_matriz">Treinamentos</td>
                                <td  style="background-color:rgb(153, 255, 204,0.5)"  id="al2c3" class="bloco_matriz">Aumentar Desafios</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Baixo (1 a 5)</td>
                                <td style="background-color:rgba(220, 80, 80, 0.8)"   id="al3c1" class="bloco_matriz">Demissão</td>
                                <td  style="background-color:rgba(220, 80, 80, 0.4)"  id="al3c2" class="bloco_matriz">Realocar</td>
                                <td style="background-color:rgba(255, 255, 153, 0.5)"   id="al3c3" class="bloco_matriz">Treinamentos</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz">Baixo (1 a 5)</td>
                                <td class="table_matriz">Médio (6 a 7)</td>
                                <td class="table_matriz">Alto (8 a 10)</td>
                              </tr>
                              <tr>
                                <th colspan="4"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                            <br>
                            <!-- <table class="table">
                             <thead class="thead-dark">
                               <tr>
                                 <th >ID</th>
                                 <th >Orientação</th>
                               </tr>
                             </thead>
                            <tbody>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"   id="al1c1x">A-B</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgb(153, 255, 204,0.5)"  id="al1c2x">A-M</td>
                                <td>Aumentar Desafios</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgb(153, 255, 204,0.8)"  id="al1c3x">A-A</td>
                                <td>Promover</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.4)"  id="al2c1x">M-B</td>
                                <td>Realocar</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(255, 255, 153, 0.5)"  id="al2c2x">M-M</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgb(153, 255, 204,0.5)"  id="al2c3x">M-A</td>
                                <td>Aumentar Desafios</td>
                              </tr>
                              <tr>
                                <td   style="background-color:rgba(220, 80, 80, 0.8)"  id="al3c1x">B-B</td>
                                <td>Demitir</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.4)"   id="al3c2x">B-M</td>
                                <td>Realocar</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="al3c3x">B-A</td>
                                <td>Treinamentos</td>
                              </tr>
                            </tbody>
                            </table> -->
                          </div>
                          <div  id="matriz2">
                            <table class="table">
                              <tr>
                                <th rowspan="4"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td class="table_matriz">Alto (7 a 10)</td>
                                <td id="l1c1" style="background-color:rgba(255, 255, 153, 0.5)" class="bloco_matriz2">Treinamentos</td>
                                <td id="l1c2" style="background-color:rgb(153, 255, 204,0.5)" class="bloco_matriz2">Promover</td>
                              </tr>
                              <tr>
                                <td class="table_matriz">Baixo (1 a 6)</td>
                                <td id="l2c1" style="background-color:rgba(220, 80, 80, 0.4)"  class="bloco_matriz2">Demissão</td>
                                <td id="l2c2" style="background-color:rgba(255, 255, 153, 0.5)"  class="bloco_matriz2">Treinamentos</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz">Baixo (1 a 6)</td>
                                <td class="table_matriz">Alto (7 a 10)</td>
                              </tr>
                              <tr>
                                <th colspan="3"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                            <br>
                            <!-- <table class="table">
                             <thead class="thead-dark">
                               <tr>
                                 <th >ID</th>
                                 <th >Orientação</th>
                               </tr>
                             </thead>
                            <tbody>
                              <tr>
                                <td style="background-color:rgba(255, 255, 153, 0.5)"   id="l1c1x">A-B</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgb(153, 255, 204,0.5)"  id="l1c2x">A-A</td>
                                <td>Aumentar Desafios</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(220, 80, 80, 0.4)"  id="l2c1x">B-B</td>
                                <td>Treinamentos</td>
                              </tr>
                              <tr>
                                <td  style="background-color:rgba(255, 255, 153, 0.5)"  id="l2c2x">B-A</td>
                                <td>Treinamentos</td>
                              </tr>
                            </tbody>
                            </table> -->

                            <form class="row">
                              <div class="form-group col-4">
                                <label for="l1c1INPUT">Alta Tecnica e Baixo Comportamento</label>
                                <input type="text" class="form-control" id="l1c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l1c1COR">COR</label>
                                <select class="form-control" id="l1c1COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="l1c2INPUT">Alta Tecnica e Alto Comportamento</label>
                                <input type="text" class="form-control" id="l1c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l1c2COR">COR</label>
                                <select class="form-control" id="l1c1COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="l2c1INPUT">Baixa Tecnica e Baixo Comportamento</label>
                                <input type="text" class="form-control" id="l2c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l1c2COR">COR</label>
                                <select class="form-control" id="l2c1COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="l2c2INPUT">Baixa Tecnica e Alto Comportamento</label>
                                <input type="text" class="form-control" id="l2c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l1c2COR">COR</label>
                                <select class="form-control" id="l2c2COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="intervalo_2_baixo">Intervalo Baixo Inicio</label>
                                <input type="number" class="form-control" id="intervalo_2_baixoi">
                              </div>
                              <div class="form-group col-3">
                                <label for="intervalo_2_alto">Intervalo Baixo Fim</label>
                                <input type="number" class="form-control" id="intervalo_2_baixof">
                              </div>
                              <div class="form-group col-3">
                                <label for="intervalo_2_baixo">Intervalo Alto Inicio</label>
                                <input type="number" class="form-control" id="intervalo_2_altoi" >
                              </div>
                              <div class="form-group col-3">
                                <label for="intervalo_2_alto">Intervalo Alto Fim</label>
                                <input type="number" class="form-control" id="intervalo_2_altof">
                              </div>
                            </form>
                          </div>
                          <br>
                          <button  type="button" onclick="SalvaMatriz()" class="col-4 btn btn-info">Salva Matriz</button>
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
            <h5 class="modal-title" id="TituloModalCentralizado">Título do modal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3" style="display:flex;justify-content:space-between">
            <div class="col-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Titulo</label>
              <input type="text" id="titulo_interno" class="form-control validate" placeholder="Insira o Titulo Aqui..."></input>
            </div>
            <div class="col-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Texto</label>
              <textarea type="text" id="texto_interno" class="form-control validate" placeholder="Insira o Texto Aqui..."></textarea>
            </div>
          </div>
          <div style="display:flex;justify-content:center">
            <button class="btn btn-info" style="width:10rem" onclick="SalvaConteudo()">Salvar Sub Indicador</button>
          </div>
          <hr style="border: solid 1px;color:#cec7c7">
          <div class="modal-body mx-3">
            <div id="table_indicador">

            </div>
          </div>

          <input type="hidden" id="id_indicador" class="form-control validate">
          <div class="modal-footer d-flex justify-content-center">

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
    <script src="../control/matriz.js"></script>
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
    graficos("1");
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js" integrity="sha384-THVO/sM0mFD9h7dfSndI6TS0PgAGavwKvB5hAxRRvc0o9cPLohB0wb/PTA7LdUHs" crossorigin="anonymous"></script>
    <script src="../js/html2canvas.js"></script>
    <script src="../js/html2canvas.min.js"></script>
    <script src="../js/html2canvas.svg.js"></script>
    <script src="../js/html2canvas.svg.min.js"></script>
</body>

</html>
