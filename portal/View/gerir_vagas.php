

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
                                                <textarea type="text" id="funcoes" class="form-control" placeholder="Responsabilidades"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Requisitos</label>
                                                <textarea type="text" id="requisitos" class="form-control" placeholder="Requisitos"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Beneficios</label>
                                                <textarea type="text" id="beneficios" class="form-control" placeholder="Beneficios"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Carga Horaria Semanal</label>
                                                <textarea type="text" id="jornada" class="form-control" placeholder="Jornada de Trabalho Semanal"></textarea>
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
