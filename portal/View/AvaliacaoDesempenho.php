

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

  <body>

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
                          <div class="row">
                            <div class="col-4" id="div_chart"></div>
                            <div class="col-4" id="div_charthorizontal"></div>
                            <div class="col-4" id="select_geral">
                            </div>


                          </div><br>
                          <h3 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Matriz de Desempenho</h3>
                          <br>
                          <div id="matriz_desempenho_4" class="row" style="display:none;border: solid 1px #808080">
                            <table class="table" >
                              <tr>
                                <th rowspan="6" style="vertical-align: middle;"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td  class="table_matriz" id="alto_matriz4_dash"></td>
                                <td  class="matriz_desempenho_dash" id="m41" style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m42"  style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m43" style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m44" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz" id="medioalto_matriz4_dash"></td>
                                <td class="matriz_desempenho_dash" id="m45" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m46" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m47" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m48" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="mediobaixo_matriz4_dash"></td>
                                <td class="matriz_desempenho_dash" id="m49" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m410" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m411" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m412" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz" id="baixo_matriz4_dash"></td>
                                <td class="matriz_desempenho_dash" id="m413" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m414" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m415" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m416" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz"  id="baixo_matriz4_dash1"></td>
                                <td class="table_matriz"  id="mediobaixo_matriz4_dash1"></td>
                                <td class="table_matriz"  id="medioalto_matriz4_dash1"></td>
                                <td class="table_matriz"  id="alto_matriz4_dash1"></td>
                              </tr>
                              <tr>
                                <th colspan="5"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                          </div>
                          <div id="matriz_desempenho_3" class="row"  style="display:none;border: solid 1px #808080">
                            <table class="table">
                              <tr>
                                <th rowspan="6"  style="vertical-align: middle;"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td  class="table_matriz" id="alto_matriz3_dash"></td>
                                <td  class="matriz_desempenho_dash" id="m31" style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m32" style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m33" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz" id="medio_matriz3_dash"></td>
                                <td class="matriz_desempenho_dash" id="m34" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m35" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m36" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="baixo_matriz3_dash"></td>
                                <td class="matriz_desempenho_dash" id="m37" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m38" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m39" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz"  id="baixo_matriz3_dash1"></td>
                                <td class="table_matriz"  id="medio_matriz3_dash1"></td>
                                <td class="table_matriz"  id="alto_matriz3_dash1"></td>
                              </tr>
                              <tr>
                                <th colspan="5"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                          </div>
                          <div id="matriz_desempenho_2" class="row"  style="display:none;border: solid 1px #808080">
                            <table class="table">
                              <tr>
                                <th rowspan="6"  style="vertical-align: middle;"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td  class="table_matriz" id="alto_matriz2_dash"></td>
                                <td  class="matriz_desempenho_dash" id="m21" style="border: solid 1px;"></td>
                                <td  class="matriz_desempenho_dash" id="m22" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="baixo_matriz2_dash"></td>
                                <td class="matriz_desempenho_dash" id="m23" style="border: solid 1px;"></td>
                                <td class="matriz_desempenho_dash" id="m24" style="border: solid 1px;"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz"  id="baixo_matriz2_dash1"></td>
                                <td class="table_matriz"  id="alto_matriz2_dash1"></td>
                              </tr>
                              <tr>
                                <th colspan="5"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                          </div>
                          <div class="basic-form" style="margin-top:100px">
                            <h3 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Gestores</h3>
                            <div id="indicadores_gestores" class="col-12">
                              <div class="col-12" style="display:flex">
                                <div class="basic-form" style="width:50%">
                                  <h5 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Habilidades Comportamentais</h5>
                                  <table id="table11" style="width:100%" class="table table-striped table-bordered" >
                                    <thead>
                                      <tr>
                                        <td>Id</td>
                                        <td>Titulo</td>
                                        <td>Media</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                  </table>
                                </div>
                                <div style="width:50%;margin-top:50px">
                                  <canvas id="radar-chart">
                                  </canvas>
                                </div>
                              </div>
                              <div class="col-12" style="display:flex">
                                <div class="basic-form" style="width:50%">
                                  <h5 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Habilidades Tecnicas</h5>
                                      <table id="table22" style="width:100%" class="table table-striped table-bordered" >
                                        <thead>
                                          <tr>
                                            <td>Id</td>
                                            <td>Titulo</td>
                                            <td>Media</td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                      </table>
                                </div>
                                <div style="width:50%;margin-top:50px">
                                  <canvas id="radar-chart2">
                                  </canvas>
                                </div>
                              </div>
                            </div>
                            <hr style="border: solid 1px #808080; margin:50px">
                            <h3 style="margin-top: 100px;text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Não Gestores</h3>
                            <div id="indicadores_naogestores">
                              <div class="col-12" style="display:flex">
                                <div class="basic-form" style="width:50%">
                                  <h5 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Habilidades Comportamentais</h5>
                                      <table id="table33" style="width:100%" class="table table-striped table-bordered" >
                                        <thead>
                                          <tr>
                                            <td>Id</td>
                                            <td>Titulo</td>
                                            <td>Media</td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                      </table>
                                </div>
                                <div style="width:50%;margin-top:50px">
                                  <canvas id="radar-chart3">
                                  </canvas>
                                </div>
                              </div>
                              <div class="col-12" style="display:flex">
                                <div class="basic-form" style="width:50%">
                                  <h5 style="text-align: center;justify-content: center;display: flex;margin-top: 10px;color:#808080;">Habilidades Tecnicas</h5>
                                      <table id="table44" style="width:100%" class="table table-striped table-bordered" >
                                        <thead>
                                          <tr>
                                            <td>Id</td>
                                            <td>Titulo</td>
                                            <td>Media</td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                      </table>
                                </div>
                                <div style="width:50%;margin-top:50px">
                                  <canvas id="radar-chart4">
                                  </canvas>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div id="tela_departamento" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                          <div class="col-12" style="display:flex">
                            <div class="col-8" id="div_chart2">
                            </div>
                            <div class="col-4" id="select_geral2">
                            </div>
                          </div>
                          <div class="col-12 row">
                            <div class="col-12" id="div_chart3">
                            </div>
                            <div class="col-12" id="div_chart4">
                            </div>
                          </div>

                        </div>
                        <div id="tela_colaborador" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                          <div class="col-12" style="display:flex">
                            <div class="col-8" id="div_chart10">
                            </div>
                            <div class="col-4" id="select_geral3">
                            </div>
                          </div>
                        </div>
                        <div id="tela_evolucao" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                        </div>
                        <div id="tela_indicador" style="display:block">
                          <hr style="border: solid 1px;color:#cec7c7">
                          <br>
                          <div class="card-body">
                            <input type="hidden" id="id_new" class="form-control"></input>

                              <div id="aleatorio">
                              </div>
                              <div class="form-group col-md-2">
                                <button type="button" onclick="SalvaBase()" class="btn btn-info">Criar Nova Base</button>
                              </div>
                              <br>
                              <hr style="border: solid 1px;color:#cec7c7">
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
                          <div class="basic-form">
                              <form>
                                  <div class="form-row">
                                      <div class="form-group col-md-12">
                                        <h3 style="color:#212121">Editar Base de Indicadores Selecionados</h3>
                                      </div>
                                      <br>
                                      <div class="form-group col-md-6">
                                          <label>Titulo</label>
                                          <input type="text" id="texto_indicador" class="form-control" placeholder="Insira o Texto Aqui..."></input>
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label>Tipo</label>
                                          <select id="tipo_indicador" class="form-control">
                                          <option value="1">Competencia Comportamental Gestor</option>
                                          <option value="2">Competencia Comportamental Não Gestor</option>
                                          <option value="3">Competencia Tecnica Gestor</option>
                                          <option value="4">Competencia Tecnica Não Gestor</option>
                                        </select>
                                      </div>
                                  </div>
                                  <button type="button" onclick="SalvaIndicador()" class="btn btn-info">Salvar Indicadores</button>
                              </form>
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

                              <div class="card-body">
                                  <div style="justify-content:space-between;display:flex">
                                    <div class="card-title">Gerenciar Pesquisas de Desempenho</div>
                                  </div>
                                  <div class="basic-form" id="modalepesquisa">
                                    <div class="modal-body mx-3 row" >
                                      <div class="md-form col-6" style="margin-bottom:10px">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Nome da Pesquisa</label>
                                        <input type="text" id="indicador" class="form-control validate" placeholder="descrição"></input>
                                      </div>
                                      <div class="md-form col-6" style="margin-bottom:10px">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Responsavel</label>
                                        <input type="text" id="responsavel" class="form-control validate" placeholder="Nome"></input>
                                      </div>
                                      <div class="md-form col-6" id="aux">
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
                                      <div class="md-form col-6" style="display:flex">
                                        <div class="md-form col-6">
                                          <label data-error="wrong" data-success="right" for="defaultForm-email">Inicio</label>
                                          <input type="date" id="data_init" class="form-control validate" placeholder="Nome"></input>
                                        </div>
                                        <div class="md-form col-6">
                                          <label data-error="wrong" data-success="right" for="defaultForm-email">Final</label>
                                          <input type="date" id="data_end" class="form-control validate" placeholder="Nome"></input>
                                        </div>
                                      </div>
                                      <div class="col-12" id="aux99">

                                      </div>
                                    </div>



                                    <div class="modal-footer d-flex justify-content-center">
                                      <button type="button" onclick="IniciarPesquisa()" class="btn btn-info">Iniciar Pesquisa</button>
                                    </div>
                                  </div>

                                  <br><br>
                                  <div class="basic-form">
                                    <div id="tableFormularios">
                                      <table id="table_forms" style="width:100%" class="table table-striped table-bordered" >
                                        <thead>
                                          <tr>
                                            <td>Id</td>
                                            <td>Indicador</td>
                                            <td>Base de Indicadores</td>
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
                                <td class="table_matriz" id="alto_matriz4">Alto (8 a 10)</td>
                                <td  id="bl1c1" class="bloco_matriz3">Demissão</td>
                                <td  id="bl1c2" class="bloco_matriz3">Demissão</td>
                                <td  id="bl1c3" class="bloco_matriz3">Feedback Positivo</td>
                                <td  id="bl1c4" class="bloco_matriz3">Promoção</td>
                              </tr>
                              <tr>
                                <td class="table_matriz" id="medioa_matriz4">Médio Alto (6 a 7)</td>
                                <td  id="bl2c1" class="bloco_matriz3">Demissão</td>
                                <td  id="bl2c2" class="bloco_matriz3">Demissão</td>
                                <td  id="bl2c3" class="bloco_matriz3">Feedback Construtivo</td>
                                <td  id="bl2c4" class="bloco_matriz3">Feedback Positivo</td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="mediob_matriz4">Médio Baixo (4 a 5)</td>
                                <td  id="bl3c1" class="bloco_matriz3">Demissão</td>
                                <td  id="bl3c2" class="bloco_matriz3">Demissão</td>
                                <td  id="bl3c3" class="bloco_matriz3">Treinamentos</td>
                                <td  id="bl3c4" class="bloco_matriz3">Treinamentos</td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="baixo_matriz4">Baixo (1 a 3)</td>
                                <td  id="bl4c1" class="bloco_matriz3">Demissão</td>
                                <td  id="bl4c2" class="bloco_matriz3">Demissão</td>
                                <td  id="bl4c3" class="bloco_matriz3">Advertência</td>
                                <td  id="bl4c4" class="bloco_matriz3">Treinamentos</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz" id="baixo_matriz44">Baixo (1 a 3)</td>
                                <td class="table_matriz" id="mediob_matriz44">Médio Baixo (4 a 5)</td>
                                <td class="table_matriz" id="medioa_matriz44">Médio Alto (6 a 7)</td>
                                <td class="table_matriz" id="alto_matriz44">Alto (8 a 10)</td>
                              </tr>
                              <tr>
                                <th colspan="5"><h4 style="text-align: center;">Competências Comportamentais</h4></th>
                              </tr>
                            </table>
                            <br>
                            <form >
                              <div class="row">
                              <div class="form-group col-4">
                                <label for="bl1c1INPUT">Alta Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl1c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl1c1COR">COR</label>
                                <select class="form-control" id="bl1c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl1c2INPUT">Alto Tec. e Media Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl1c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl1c2COR">COR</label>
                                <select class="form-control" id="bl1c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl1c3INPUT">Alto Tec. e Media Alto Comp.</label>
                                <input type="text" class="form-control" id="bl1c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl1c3COR">COR</label>
                                <select class="form-control" id="bl1c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl1c4INPUT">Alta Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="bl1c4INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl1c4COR">COR</label>
                                <select class="form-control" id="bl1c4COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>
                            <hr style="border: solid 1px;color:#cec7c7">

                            <div class="row">
                              <div class="form-group col-4">
                                <label for="bl2c1INPUT">Medio Alto Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl2c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl2c1COR">COR</label>
                                <select class="form-control" id="bl2c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl2c2INPUT">Medio Alto Tec. e Medio Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl2c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl2c2COR">COR</label>
                                <select class="form-control" id="bl2c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl2c3INPUT">Medio Alto Tec. e Medio Alto Comp.</label>
                                <input type="text" class="form-control" id="bl2c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl2c3COR">COR</label>
                                <select class="form-control" id="bl2c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl2c4INPUT">Medio Alto Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="bl2c4INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl2c4COR">COR</label>
                                <select class="form-control" id="bl2c4COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>
                            <hr style="border: solid 1px;color:#cec7c7">

                            <div class="row">
                              <div class="form-group col-4">
                                <label for="bl3c1INPUT">Medio Baixo Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl3c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl3c1COR">COR</label>
                                <select class="form-control" id="bl3c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl3c2INPUT">Medio Baixo Tec. e Medio Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl3c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl3c2COR">COR</label>
                                <select class="form-control" id="bl3c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl3c3INPUT">Medio Baixo Tec. e Medio Alto Comp.</label>
                                <input type="text" class="form-control" id="bl3c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl3c3COR">COR</label>
                                <select class="form-control" id="bl3c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl3c4INPUT">Medio Baixo Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="bl3c4INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl3c4COR">COR</label>
                                <select class="form-control" id="bl3c4COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>
                            <hr style="border: solid 1px;color:#cec7c7">
                              <div class="row">
                              <div class="form-group col-4">
                                <label for="bl4c1INPUT">Baixo Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl4c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl4c1COR">COR</label>
                                <select class="form-control" id="bl4c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl4c2INPUT">Baixo Tec. e Medio Baixo Comp.</label>
                                <input type="text" class="form-control" id="bl4c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl4c2COR">COR</label>
                                <select class="form-control" id="bl4c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl4c3INPUT">Baixo Tec. e Medio Alto Comp.</label>
                                <input type="text" class="form-control" id="bl4c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl4c3COR">COR</label>
                                <select class="form-control" id="bl4c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="bl4c4INPUT">Baixo Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="bl4c4INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="bl4c4COR">COR</label>
                                <select class="form-control" id="bl4c4COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>
                            <hr style="border: solid 1px;color:#cec7c7">
                              <div class="row">

                              <br>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_baixoi">Int. Baixo Inicio</label>
                                <input type="number" class="form-control" id="bintervalo_4_baixoi">
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_baixof">Int. Baixo Fim</label>
                                <input type="number" class="form-control" id="bintervalo_4_baixof">
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_mediobi">Int. Medio Baixo Inicio</label>
                                <input type="number" class="form-control" id="bintervalo_4_mediobi" >
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_mediobf">Int. Medio Baixo Fim</label>
                                <input type="number" class="form-control" id="bintervalo_4_mediobf">
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_medioai">Int. Medio Alto Inicio</label>
                                <input type="number" class="form-control" id="bintervalo_4_medioai" >
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_medioaf">Int. Medio Alto Fim</label>
                                <input type="number" class="form-control" id="bintervalo_4_medioaf">
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_altoi">Int. Alto Inicio</label>
                                <input type="number" class="form-control" id="bintervalo_4_altoi" >
                              </div>
                              <div class="form-group col-3">
                                <label for="bintervalo_4_altof">Int. Alto Fim</label>
                                <input type="number" class="form-control" id="bintervalo_4_altof">
                              </div>
                            </div>
                            </form>
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
                                <td class="table_matriz"  id="alto_matriz3"></td>
                                <td  id="al1c1" class="bloco_matriz"></td>
                                <td  id="al1c2" class="bloco_matriz"></td>
                                <td  id="al1c3" class="bloco_matriz"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="medio_matriz3"></td>
                                <td   id="al2c1" class="bloco_matriz"></td>
                                <td   id="al2c2" class="bloco_matriz"></td>
                                <td   id="al2c3" class="bloco_matriz"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz"  id="baixo_matriz3"></td>
                                <td    id="al3c1" class="bloco_matriz"></td>
                                <td    id="al3c2" class="bloco_matriz"></td>
                                <td    id="al3c3" class="bloco_matriz"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz"  id="baixo_matriz33"></td>
                                <td class="table_matriz"  id="medio_matriz33"></td>
                                <td class="table_matriz"  id="alto_matriz33"></td>
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
                            <form >

                                <div class="row">
                              <div class="form-group col-3">
                                <label for="al1c1INPUT">Alta Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="al1c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al1c1COR">COR</label>
                                <select class="form-control" id="al1c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al1c2INPUT">Media Tec. e Medio Comp.</label>
                                <input type="text" class="form-control" id="al1c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al1c2COR">COR</label>
                                <select class="form-control" id="al1c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al1c3INPUT">Alta Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="al1c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al1c3COR">COR</label>
                                <select class="form-control" id="al1c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al2c1INPUT">Medio Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="al2c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al2c1COR">COR</label>
                                <select class="form-control" id="al2c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al2c2INPUT">Medio Tec. e Medio Comp.</label>
                                <input type="text" class="form-control" id="al2c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al2c2COR">COR</label>
                                <select class="form-control" id="al2c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al2c3INPUT">Medio Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="al2c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al2c3COR">COR</label>
                                <select class="form-control" id="al2c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al3c1INPUT">Baixo Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="al3c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al3c1COR">COR</label>
                                <select class="form-control" id="al3c1COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al3c2INPUT">Baixo Tec. e Medio Comp.</label>
                                <input type="text" class="form-control" id="al3c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al3c2COR">COR</label>
                                <select class="form-control" id="al3c2COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-3">
                                <label for="al3c3INPUT">Baixo Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="al3c3INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-1">
                                <label for="al3c3COR">COR</label>
                                <select class="form-control" id="al3c3COR">
                                  <option value="0"></option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>
                              <br>
                              <hr style="border: solid 1px;color:#cec7c7">
                              <div class="row">
                              <div class="form-group col-2">
                                <label for="aintervalo_3_baixoi">Intervalo Baixo Inicio</label>
                                <input type="number" class="form-control" id="aintervalo_3_baixoi">
                              </div>
                              <div class="form-group col-2">
                                <label for="aintervalo_3_baixof">Intervalo Baixo Fim</label>
                                <input type="number" class="form-control" id="aintervalo_3_baixof">
                              </div>
                              <div class="form-group col-2">
                                <label for="aintervalo_3_medioi">Intervalo Medio Inicio</label>
                                <input type="number" class="form-control" id="aintervalo_3_medioi" >
                              </div>
                              <div class="form-group col-2">
                                <label for="aintervalo_3_mediof">Intervalo Medio Fim</label>
                                <input type="number" class="form-control" id="aintervalo_3_mediof">
                              </div>
                              <div class="form-group col-2">
                                <label for="aintervalo_3_altoi">Intervalo Alto Inicio</label>
                                <input type="number" class="form-control" id="aintervalo_3_altoi" >
                              </div>
                              <div class="form-group col-2">
                                <label for="aintervalo_3_altof">Intervalo Alto Fim</label>
                                <input type="number" class="form-control" id="aintervalo_3_altof">
                              </div>
                            </div>
                            </form>



                          </div>
                          <div  id="matriz2">
                            <table class="table">
                              <tr>
                                <th rowspan="4"><h4 class="t_vertical">Competências Técnicas</h4></th>
                                <td class="table_matriz" id="alto_matriz2"></td>
                                <td id="l1c1" class="bloco_matriz2"></td>
                                <td id="l1c2" class="bloco_matriz2"></td>
                              </tr>
                              <tr>
                                <td class="table_matriz" id="baixo_matriz2"></td>
                                <td id="l2c1"  class="bloco_matriz2"></td>
                                <td id="l2c2"  class="bloco_matriz2"></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td class="table_matriz" id="baixo_matriz22"></td>
                                <td class="table_matriz" id="alto_matriz22"></td>
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

                            <form>
                              <div class="row">
                              <div class="form-group col-4">
                                <label for="l1c1INPUT">Alta Tec. e Baixo Comp.</label>
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
                                <label for="l1c2INPUT">Alta Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="l1c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l1c2COR">COR</label>
                                <select class="form-control" id="l1c2COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                              <div class="form-group col-4">
                                <label for="l2c1INPUT">Baixa Tec. e Baixo Comp.</label>
                                <input type="text" class="form-control" id="l2c1INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l2c1COR">COR</label>
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
                                <label for="l2c2INPUT">Baixa Tec. e Alto Comp.</label>
                                <input type="text" class="form-control" id="l2c2INPUT" placeholder="Insira o Texto Descritivo">
                              </div>
                              <div class="form-group col-2">
                                <label for="l2c2COR">COR</label>
                                <select class="form-control" id="l2c2COR">
                                  <option value="0">Selecione</option>
                                  <option value="rgba(220, 80, 80, 0.8)" style="background-color:rgba(220, 80, 80, 0.8)">Vermelho Escuro</option>
                                  <option value="rgba(220, 80, 80, 0.4)" style="background-color:rgba(220, 80, 80, 0.4)">Vermelho Claro</option>
                                  <option value="rgba(255, 255, 153, 0.5)" style="background-color:rgba(255, 255, 153, 0.5)">Amarelo</option>
                                  <option value="rgb(153, 255, 204,0.5)" style="background-color:rgb(153, 255, 204,0.5)">Verde Claro</option>
                                  <option value="rgb(153, 255, 204,0.8)" style="background-color:rgb(153, 255, 204,0.8)">Verde Escuro</option>
                                </select>
                              </div>
                            </div>

                              <hr style="border: solid 1px;color:#cec7c7">
                              <div class="row">
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

    <!-- Modal Login -->
    <div class="modal fade" id="modaledit2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" id="TituloModalCentralizado2">Título do modal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3" style="display:flex;justify-content:space-between">
            <div class="col-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Titulo</label>
              <input type="text" id="titulo_interno2" class="form-control validate" placeholder="Insira o Titulo Aqui..."></input>
            </div>
            <div class="col-6">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Texto</label>
              <textarea type="text" id="texto_interno2" class="form-control validate" placeholder="Insira o Texto Aqui..."></textarea>
            </div>
          </div>
          <div style="display:flex;justify-content:center">
            <button class="btn btn-info" style="width:10rem" onclick="SalvaConteudo2()">Salvar Sub Indicador</button>
          </div>
          <hr style="border: solid 1px;color:#cec7c7">
          <div class="modal-body mx-3">
            <div id="table_indicador2">

            </div>
          </div>

          <input type="hidden" id="id_indicador2" class="form-control validate">
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
    <script src="../control/AvaliacaoDesempenhoGeral.js"></script>
    <script src="../control/AvaliacaoDesempenhoCol.js"></script>
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
