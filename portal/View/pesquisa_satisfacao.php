
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
        <link href="../css/vagas.css" rel="stylesheet">
</head>
<body >
                  <?php
                  require_once("menu2.php");
                  ?>

        <div class="content-body">
            <div class="container-fluid">
              <div id="titulo" class="card-title">Gerenciar Pesquisa de Satisfação</div>
                <div class="row">
                    <div style="display:block" class="col-lg-12" id="BannerPesquisas">
                    </div>
                    <div style="display:none" class="col-lg-12" id="BannerPesquisaAberta">
                      <div class="col-sm-12">
                        <div class="bloco_vaga">
                          <i class="fa fa-reply icon_Pesquisa" onclick="BuscaPesquisas()" style="color: rgba(249, 29, 129, 0.8); margin: 5px; text-align: start;"></i>
                          <div class="card_vaga">
                                  <div class="card-body">
                                      <div class="basic-form">
                                          <div id="tableColaboradores">
                                            <table id="table1" style="width:100%" class="table table-striped table-bordered" >
                                              <thead>
                                                <tr>
                                                  <td>Titulo</td>
                                                  <td>Tipo</td>
                                                  <td>M. Sat.</td>
                                                  <td>Sat.</td>
                                                  <td>Reg.</td>
                                                  <td>Ins.</td>
                                                  <td>M. Ins.</td>
                                                  <td>Check</td>
                                                  <td>Sim</td>
                                                  <td>Não</td>
                                                  <td>Texto</td>
                                                </tr>
                                              </thead>
                                              <tbody>
                                              </tbody>
                                            </table>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row" id="graficos">
                                  </div>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="copyright">
                <p>Desenvolvido Por <a href="https://www.portalctech.com.br">CTECH</a> 2020</p>
            </div>
        </div>
    </div>



    <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="TituloModalCentralizado">Link Para Compartilhamento</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="text_forms">
      </div>
      <div class="modal-footer">
        <button type="button" onclick="copy()" class="btn btn-primary">Copiar Link</button>
      </div>
    </div>
  </div>
</div>


    <script src="../plugins/common/common.min.js"></script>
    <script src="../js/custom.min.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/gleek.js"></script>
    <script src="../js/styleSwitcher.js"></script>
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
    <script src="../control/forms/forms.js"></script>
    <script src="../js/bootstrap/popper.js"></script>
    <script src="../js/bootstrap/popper.min.js"></script>
    <script src="../js/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../js/bootstrap/bootstrap-select.js"></script>
    <script src="../plugins/chart.js/Chart.bundle.min.js"></script>
    <script src="../js/plugins-init/chartjs-init.js"></script>

    <script >
      BuscaPesquisas();
    </script>
  </body>

</html>
