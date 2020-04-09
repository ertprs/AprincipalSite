

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="cache-control" content="no-cache" />

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

<body onload="Init()">
  <script>
  function Init(){

    Setor();
    listaVagas();
  }
  </script>


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
                                <div class="card-title">Disponibilizar Vaga</div>
                                <br>
                                <div class="basic-form">
                                    <form id="vagas_form">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Nome da Vaga</label>
                                                <input type="text" id="nome" class="form-control" placeholder="Nome do Cargo Disponivel">
                                            </div>
                                            <div id="selectDepartamento" class="form-group col-md-6">
                                                <label>Departamento</label>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Funções</label>
                                                <textarea rows="5" type="text" id="funcoes" class="form-control" placeholder="Responsabilidades"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Requisitos</label>
                                                <textarea rows="5" type="text" id="requisitos" class="form-control" placeholder="Requisitos"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Beneficios</label>
                                                <textarea rows="5" type="text" id="beneficios" class="form-control" placeholder="Beneficios"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Carga Horaria Semanal</label>
                                                <textarea rows="5" type="text" id="jornada" class="form-control" placeholder="Jornada de Trabalho Semanal"></textarea>
                                            </div>
                                        </div>
                                        <button type="button" onclick="SalvaVaga()" class="btn btn-primary">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-title">Vagas Criadas</div>
                                <br>
                                <div class="basic-form">
                                    <div id="tableColaboradores">
                                      <table id="table1" style="width:100%" class="table table-striped table-bordered" >
                                        <thead>
                                          <tr>
                                            <td>Id</td>
                                            <td>Nome</td>
                                            <td>Estado</td>
                                            <td>Funções</td>
                                            <td>Departamento</td>
                                            <td>Requisitos</td>
                                            <td>Carga Horaria</td>
                                            <td>Beneficios</td>
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





    <div class="modal fade" id="modaledit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" style="max-width:1000px !important">
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row">
            <div class="basic-form col-11" style="margin-left:30px" >
                <form><input id="id_vaga" type="hidden"></input>
                    <div class="form-row">
                        <div class="form-group col-6" >
                          <label data-error="wrong" data-success="right" for="nome_vaga">Nome da Vaga</label>
                          <input type="text" id="nome_vaga" class="form-control validate">
                        </div>
                        <div class="col-6" id="selectModal">
                        </div>
                        <div class="form-group col-6" >
                          <label data-error="wrong" data-success="right" for="funcoes_vaga">Funções</label>
                          <textarea rows="5" type="text" id="funcoes_vaga" class="form-control validate"></textarea>
                        </div>
                        <div class="form-group col-6" >
                          <label data-error="wrong" data-success="right" for="requisitos_vaga">Requisitos</label>
                          <textarea  rows="5" type="text" id="requisitos_vaga" class="form-control validate"></textarea>
                        </div>
                        <div class="form-group col-6" >
                          <label data-error="wrong" data-success="right" for="beneficios_vaga">Beneficios</label>
                          <textarea  rows="5" type="text" id="beneficios_vaga" class="form-control validate"></textarea>
                        </div>
                        <div class="form-group col-6" >
                          <label data-error="wrong" data-success="right" for="carga_vaga">Carga Horaria Semanal</label>
                          <input type="text" id="carga_vaga" class="form-control validate">
                        </div>
                    </div>

                </form>
            </div>

          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-primary" style="width:10rem" onclick="EditaVaga()">Editar Vaga</button>
          </div>'
        </div>
      </div>
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
    <script src="../control/gerir_vagas.js"></script>
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
</body>

</html>
