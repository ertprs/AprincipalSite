
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
    <link href="../css/select.css" rel="stylesheet" type="text/css">
    <link href="../css/dataTables.bootstrap4.css" rel="stylesheet">
    <link href="../css/jquery.dataTables.min.css" rel="stylesheet">

            <script src="../control/main.js"></script>
    </head>

    <body >

          <?php
          require_once("menu2.php");
          ?>

        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">


            <div class="container-fluid">
                <div class="row">




                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div id="table">
                                  <table id="table3"  style="width:100%" class="table table-striped table-bordered" >
                                    <thead >
                                      <tr >
                                        <td>Nome</td>
                                        <td>Setor</td>
                                        <td>Nivel de Acesso</td>
                                        <td>Editar</td>
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
      <div class="modal-dialog aux" role="document">
        <div class="modal-content">
          <div class="modal-header text-center" style="display:flex;text-align:center;justify-content:center">
            <h5 class="modal-title" id="TituloModalCentralizado"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row" style="text-align: center;">

              <div class="col-3" style="text-align:left;">
                <span style="text-align: left;font-size:20px;color:#808080">Marketing</span>
                <div class="form-check" style="margin:5px" id="site">
                  <input class="form-check-input" type="checkbox" value="" onchange="check()" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Site
                  </label>
                </div>
                    <div class="form-check" style="display: none;margin-left:25px" id="site_1">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1_1">
                      <label class="form-check-label" for="defaultCheck1_1">
                        Blog
                      </label>
                    </div>
                    <div class="form-check" style="display: none;margin-left:25px"  id="site_2">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1_2">
                      <label class="form-check-label" for="defaultCheck1_2">
                        Produtos
                      </label>
                    </div>
                <div class="form-check" style="margin:5px" id="design">
                  <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck2">
                  <label class="form-check-label" for="defaultCheck2">
                    Design
                  </label>
                </div>
                    <div class="form-check" style="display: none;margin-left:25px" id="design_1">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2_1">
                      <label class="form-check-label" for="defaultCheck2_1">
                        Baby +
                      </label>
                    </div>
                    <div class="form-check" style="display: none;margin-left:25px"  id="design_2">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2_2">
                      <label class="form-check-label" for="defaultCheck2_2">
                        Vendedores
                      </label>
                    </div>
                    <div class="form-check" style="display: none;margin-left:25px"  id="design_3">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2_3">
                      <label class="form-check-label" for="defaultCheck2_3">
                        Certificado
                      </label>
                    </div>
                <div class="form-check" style="margin:5px" id="landing">
                  <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck3">
                  <label class="form-check-label" for="defaultCheck3">
                    Landing Page
                  </label>
                </div>
                  <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="landing_1">
                    <input class="form-check-input"  type="checkbox" value="" id="defaultCheck3_1">
                    <label class="form-check-label" for="defaultCheck3_1">
                      Wifi Social
                    </label>
                  </div>
              </div>

              <div class="col-3" style="text-align:left;">
                <span style="text-align: left;font-size:20px;color:#808080">RH</span>
                  <div class="form-check" style="margin:5px" id="colaborador">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck4">
                    <label class="form-check-label" for="defaultCheck4">
                      Colaboradores
                    </label>
                  </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px"  id="colaborador1">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck4_1">
                        <label class="form-check-label" for="defaultCheck4_1">
                          Cadastrar
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px"  id="colaborador2">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck4_2">
                        <label class="form-check-label" for="defaultCheck4_2">
                          Editar
                        </label>
                      </div>
                  <div class="form-check" style="margin:5px" id="forms">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck5">
                    <label class="form-check-label" for="defaultCheck5">
                      Formularios
                    </label>
                  </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="forms1">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck5_1">
                        <label class="form-check-label" for="defaultCheck5_1">
                          Clima Organizacional
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="forms2">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck5_2">
                        <label class="form-check-label" for="defaultCheck5_2">
                          Avaliação Desempenho
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="forms3">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck5_3">
                        <label class="form-check-label" for="defaultCheck5_3">
                          Outros
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="forms4">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck5_4">
                        <label class="form-check-label" for="defaultCheck5_4">
                          Departamentos
                        </label>
                      </div>

                  <div class="form-check" style="margin:5px" id="vagas">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck6">
                    <label class="form-check-label" for="defaultCheck6">
                      Gerir Vagas
                    </label>
                  </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="vagas1">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck6_1">
                        <label class="form-check-label" for="defaultCheck6_1">
                          Gerir Vagas
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="vagas2">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck6_2">
                        <label class="form-check-label" for="defaultCheck6_2">
                          Gerir Vagas
                        </label>
                      </div>
              </div>

              <div class="col-3" style="text-align:left;">
                <span style="text-align: left;font-size:20px;color:#808080">EAD</span>
                  <div class="form-check" style="margin:5px" id="Material">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck7">
                    <label class="form-check-label" for="defaultCheck7">
                      criar Material
                    </label>
                  </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="Material1">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck7_1">
                        <label class="form-check-label" for="defaultCheck7_1">
                          Criar Curso
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="Material2">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck7_2">
                        <label class="form-check-label" for="defaultCheck7_2">
                          Gerir Curso
                        </label>
                      </div>
                  <div class="form-check" style="margin:5px" id="resultados">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck8">
                    <label class="form-check-label" for="defaultCheck8">
                      Resultados
                    </label>
                  </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="resultados1">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck8_1">
                        <label class="form-check-label" for="defaultCheck8_1">
                          Geral
                        </label>
                      </div>
                      <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="resultados2">
                        <input class="form-check-input"  type="checkbox" value="" id="defaultCheck8_2">
                        <label class="form-check-label" for="defaultCheck8_2">
                          Setor
                        </label>
                      </div>
                      <div class="form-check" style="margin:5px" id="curso">
                        <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck10">
                        <label class="form-check-label" for="defaultCheck8">
                          Cursos
                        </label>
                      </div>
                          <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="curso1">
                            <input class="form-check-input"  type="checkbox" value="" id="defaultCheck10_1">
                            <label class="form-check-label" for="defaultCheck10_1">
                              Geral
                            </label>
                          </div>
                          <div class="form-check" style="display: none;margin:5px;margin-left:25px" id="curso2">
                            <input class="form-check-input"  type="checkbox" value="" id="defaultCheck10_2">
                            <label class="form-check-label" for="defaultCheck10_2">
                              Setor
                            </label>
                          </div>
                </div>

                <div class="col-3" style="text-align:left;">
                <span style="text-align: left;font-size:20px;color:#808080" >
                  Configurações</span>
                  <div class="form-check" style="margin:5px" id="config">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck9">
                    <label class="form-check-label" for="defaultCheck9">
                      Acesso
                    </label>
                  </div>
                  <div class="form-check" style="margin:5px" id="config1">
                    <input class="form-check-input" onchange="check()" type="checkbox" value="" id="defaultCheck9_1">
                    <label class="form-check-label" for="defaultCheck9_1">
                      Indicadores Gerais
                    </label>
                  </div>
              </div>
            </div>
            <br><br>
            <input type="hidden" id="id_acesso"></input>
          <div style="display:flex;justify-content:center">
            <button class="btn btn-info" style="width:10rem" onclick="SalvaAcesso()">Alterar Nivel</button>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>



    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/acesso.js"></script>
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
    <script>
    listacol();
    </script>

</body>

</html>
