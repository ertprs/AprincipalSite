
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
        <link href="../css/vagas.css" rel="stylesheet">

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
                          <div style="display:flex">
                            <a href="#" style="margin:10px" onclick="menu(1)" class="btn btn-primary">vagas Abertas</a>
                            <a href="#" style="margin:10px" onclick="menu(2)" class="btn btn-primary">Historico de Vagas</a>
                          </div>
                            <div class="card-body">
                              <div id="titulo" class="card-title">Gerenciar Vagas Abertas</div>
                                <div id="VagasAbertas">

                                </div>
                                <div class="row" id="vaga">
                                  <div style="display:flex;margin-left:20px;margin-right:20px;margin-bottom:10px">
                                    <input style="margin-right:10px" class="col-3 form-control" type="text" id="depVaga" readonly>
                                    <input class="col-8 form-control" type="text" id="horaVaga" readonly>
                                  </div>
                                  <div style="display:flex;margin-left:20px;margin-right:20px;margin-bottom:10px">
                                    <input style="margin-right:10px" class="col-2 form-control" type="text" id="cidadeVaga" readonly>
                                    <input class="col-9 form-control" type="text" id="enderecoVaga" readonly>
                                  </div>
                                  <h5><i id="icon_vaga"  style="margin-right:5px" class="fa fa-plus-square" onclick="abre_vaga()" aria-hidden="true"></i>Descrição</h5>
                                  <div style="display:none" id="menu_vaga">
                                    <div style="margin-left:20px;margin-right:20px;margin-bottom:10px">
                                      <h6>Funções:</h6>
                                      <textarea style="height:120px" class="col-12 form-control" type="text" id="funcVaga" readonly></textarea>
                                    </div>
                                    <div style="margin-left:20px;margin-right:20px;margin-bottom:10px">
                                      <h6>Requisitos:</h6>
                                      <textarea  style="height:120px" class="col-12 form-control" type="text" id="reqVaga" readonly></textarea>
                                    </div>
                                    <div style="margin-left:20px;margin-right:20px;margin-bottom:10px">
                                      <h6>Beneficios:</h6>
                                      <textarea  style="height:120px" class="col-12 form-control" type="text" id="benVaga" readonly></textarea>
                                    </div>
                                  </div>
                                  <br>
                                  <h5><i id="icon_vaga2" style="margin-right:5px" class="fa fa-minus-square" onclick="fecha_vaga2()" aria-hidden="true"></i>Candidaturas</h5>
                                  <div style="display:block" id="menu_vaga2">
                                    <div class="card-body">
                                        <div class="basic-form">
                                            <div id="tableColaboradores">
                                              <table id="table1" style="width:100%" class="table table-striped table-bordered" >
                                                <thead>
                                                  <tr>
                                                    <td>Id</td>
                                                    <td>Nome</td>
                                                    <td>CPF</td>
                                                    <td>Endereço</td>
                                                    <td>Escolaridade</td>
                                                    <td>Etapa</td>
                                                    <td>Curriculo</td>
                                                    <td>Abrir Progresso</td>
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
                                <div class="row" id="VagasHistorico">
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

        <!-- Large modal -->

        <div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="TituloModalCentralizado">Modal Header</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <div class="progress" style="height:30px !important;margin:20px;">
                  <div id="barra_prog" class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%;">
                  &nbsp;25% de Progresso
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-6">
                    <label data-error="wrong" data-success="right" for="cpf_modal">CPF</label>
                    <input type="text" id="cpf_modal" class="form-control validate" readonly></input>
                  </div>
                  <div class="col-6">
                    <label data-error="wrong" data-success="right" for="escolaridade_modal">Escolaridade</label>
                    <input type="text" id="escolaridade_modal" class="form-control validate" readonly></input>
                  </div>
                  <div class="col-11">
                    <label data-error="wrong" data-success="right" for="endereco_modal">Endereço</label>
                    <input type="text" id="endereco_modal" class="form-control validate" readonly></input>
                  </div>
                  <div class="col-1">
                    <label data-error="wrong" data-success="right" for="endereco_modal">Curriculo</label>
                    <a id="btn_cur" style="color:white !important" class="btn btn-info fa fa-download" type="button"></a>
                  </div>
                </div>
                <div class="form-row" style="margin:20px">
                  <input  type="hidden" id="id_can">
                  <input  type="hidden" id="id_vaga">
                  <div class="form-check form-check-inline">
                    <input onchange="Captura(this.value)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="1">
                    <label class="form-check-label" for="inlineRadio1">Enviou Curriculo</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input onchange="Captura(this.value)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2">
                    <label class="form-check-label" for="inlineRadio2">Avaliamos Curriculo</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input onchange="Captura(this.value)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3">
                    <label class="form-check-label" for="inlineRadio3">Fez Entrevista</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input onchange="Captura(this.value)" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4">
                    <label class="form-check-label" for="inlineRadio4">Aprovado</label>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" onclick="SalvaEtapa()">Salvar</button>
              </div>
            </div>
          </div>
        </div>
            <!-- Modal Login -->
            <!-- <div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header text-center">
                    <h5 class="modal-title" id="TituloModalCentralizado">Título do modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="progress" style="height:30px !important;margin:20px;">
                    <div id="barra_prog" class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%;">
                    &nbsp;25% de Progresso
                    </div>
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
            </div> -->




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
    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
    <script src="../control/ver_vagas.js"></script>
    <script src="../js/sweetalert2.all.min.js"></script>
    <script src="../js/sweetalert2.all.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/sweetalert2.min.js"></script>
    <!-- DataTable -->
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
    <script>
      menu("1");
      listaVagas();
    </script>

</body>

</html>
