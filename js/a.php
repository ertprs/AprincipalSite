<?php
$data = date("Y/m/d");
setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
date_default_timezone_set('America/Sao_Paulo');
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<title>Salgadinhos Alvorada</title>
	<meta http-equiv='cache-control' content='no-cache'>

	<meta http-equiv='expires' content='0'>

	<meta http-equiv='pragma' content='no-cache'>		<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!--===============================================================================================-->
</head>
<body>


	<div class="container-contact100">

		<div id="aviso_sabado" style="display:none">
			<img style="margin-bottom:0px;width:20rem" src="images/logo.png"/>
			<h2 style="color"> Já encerramos nossas entregas do sábado! </h2>
		</div>

		<div id="wrap-contact100" class="wrap-contact100">

			<div width="1000px">

				<img style="margin-bottom:0px;width:20rem" src="images/logo.png"/>
			</div>
			<br/>
			<H3 style="text-align:center">(94) 99274 4455</H3>
			<!-- <H3 style="text-align:center">Estamos melhorando nossos Kits para você, nosso cliente. <br/>Voltamos em breve!</H3> -->
			<form class="contact100-form validate-form">
				<!-- <span class="contact100-form-title">
				Salgadinhos Alvorada
			</span> -->
			<br/>
			<!-- <h4>O prato padrão é o prato feito com: arroz branco, feijão, salada, macarrão e churrasco</h4>
			<br/>
			<h4> O prato executivo, você escolhe os itens que quer no seu pedido, conforme o cardápio do dia. </h4>
			<br/>
			<h4>Na opção "Carne no Peso" você escolhe a quantidade em gramas de carne que deseja! Obs: apenas carne.</h4> -->
			<br/><br/>
			<div class="wrap-input100 validate-input">
				<span class="label-input100">Qual o seu nome?</span>
				<input class="input100" type="text" onkeypress='runScript(event)' onblur="salvarnome()" id="name" name="name" placeholder="Digite seu nome">
				<span class="focus-input100"></span>
			</div>


			<div class="wrap-input100 input100-select">
				<span class="label-input100">Escolha o destino de entrega</span>
				<div>
					<select class="selection-2" name="nucleo" id="nucleo" onchange="nucleos()">
						<!-- <option>Selecione a entrega</option> -->
						<option id="cn" value="Buscar no Local"> Retirar no Local</option>
						<!-- <option id="cn1" value="Cidade Nova"> Cidade Nova</option>
						<option id="cn2" value="Nova Marabá"> Nova Marabá</option>
						<option id="cn3" value="Velha Marabá"> Velha Marabá</option>
						<option id="cn4" value="Mirante do Vale"> Mirante do Vale</option> -->
					</select>

				</div>
				<span class="focus-input100"></span>
			</div>

			<div id="entrega" style="display:none">

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Qual o seu endereço?</span>
					<input class="input100" type="text" onkeypress='runScript(event)' onblur="salvarendereco()" name="endereco" id="endereco" placeholder="Ex: Rua Afro Sampaio">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Qual o seu número de casa?</span>
					<input class="input100" type="text" onkeypress='runScript(event)' onblur="salvarnumero()" name="numero_casa" id="numero_casa" placeholder="Ex: 51">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Qual o seu bairro?</span>
					<input class="input100" type="text" onkeypress='runScript(event)' onblur="salvarbairro()" name="bairro" id="bairro" placeholder="Digite seu bairro">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Algum ponto de referência?</span>
					<input class="input100" type="text" onkeypress='runScript(event)' onblur="salvarreferencia()" name="referencia" id="referencia" placeholder="Ex: Próximo ao Posto X">
					<span class="focus-input100"></span>
				</div>

			</div>

			<div class="wrap-input100 validate-input">
				<span class="label-input100">Qual o seu Telefone?</span>
				<input class="input100" type="text" onkeypress='validate(event)'  name="telefone" onblur="salvartelefone()" id="telefone" placeholder="Ex: 94991006004">
				<span class="focus-input100"></span>
			</div>

			<div class="wrap-input100 validate-input">
				<span class="label-input100">Para quando deseja o pedido?</span>
				<input class="input100" type="date"  name="data" onchange="verificar_horarios()" id="data">
				<span class="focus-input100"></span>
			</div>

			<div class="wrap-input100 input100-select" >
				<span class="label-input100"><b>Escolha o horário de retirada:</b></span>
				<div id="select_color2">
					<select class="selection-2" name="horario" id="horario" onchange="escolha_horario()">
					</select>
				</div>
			</div>

			<style>
			td{
				padding: .5rem !important;
			}
			</style>

			<!-- <h4 align="center"> Promoção de Outubro</h4> -->
			<div class="" style="padding-top:0rem; padding-bottom:2rem">

				<!-- <div>
				<img  onclick="modal_com_itens_kits('Promocoes')" style="width:100%;cursor:pointer" src="images/promocao.jpeg"/>

				<p style="margin-top:2%">Clique na imagem para ver a promoção!</p>
			</div> -->
			<br/>

			<h4 align="center"> Escolha o item que deseja:</h4>

			<table style="width:10%;" >

				<tr onclick="modal_com_itens_kits('Tortas')">
					<td><img style="width:8rem" src="images/tortas.png"/></td>
					<td style="padding:10px"> Tortas</td>
					<td></td>
				</tr>
				<tr onclick="modal_com_itens_kits('Salgados')">
					<td><img style="width:8rem" src="images/saguadin.jpg"/></td>
					<td style="padding:10px"> Centos de salgados</td>
					<td></td>
				</tr>
				<tr onclick="modal_com_itens_kits('Refrigerantes')">
					<!-- <tr > -->
					<td><img style="width:8rem" src="images/refrigerante.png"/></td>
					<td style="padding:10px"> Refrigerantes</td>
					<td></td>
				</tr>

				<tr onclick="modal_com_itens_kits('Descartaveis')">
					<!-- <tr > -->
					<td><img style="width:8rem" src="images/descartaveis.jpg"/></td>
					<td style="padding:10px"> Descartáveis</td>
					<td></td>
				</tr>

			</table>
		</div>
		<h4 align="center"> Ou escolha um kit</h4>

		<br/>
		<!-- <img style="width:20rem" src="images/kit.jpg"/> -->
		<br/>
		<!-- <p style="text-align:center"><b>OBS: Imagem meramente ilustrativa</b></p> -->

		<div class="" style="margin-left:-20px;padding-top:2rem; padding-bottom:2rem">
			<table style="width:100%; border: 0px !important" >
				<tr style="width:10%; border: 0px !important">
					<!-- <td> Kit 5P</td> -->
					<tr style="border:0px"><td onclick="modal_com_itens_kits('Kit 5 Pessoas')"><img class="imagens_botoes" style="width:20rem;cursor:pointer" src="images/5_2.jpeg"/></td></tr>
					<tr style="border:0px"><td onclick="modal_com_itens_kits('Kit 10 Pessoas')"><img class="imagens_botoes" style="width:20rem;cursor:pointer" src="images/10_2.jpeg"/></td></tr>
					<tr style="border:0px"><td onclick="modal_com_itens_kits('Kit 20 Pessoas')"><img class="imagens_botoes" style="width:20rem;cursor:pointer" src="images/20_2.jpeg"/></td></tr>
					<tr style="border:0px"><td onclick="modal_com_itens_kits('Kit Prime')"><img class="imagens_botoes" style="width:20rem;cursor:pointer" src="images/promo_prime2.jpeg"/></td></tr>
					<!-- ANTIGOS -->
					<!-- <td onclick="modal_com_itens_kits('Kit 5 Pessoas')"><img class="imagens_botoes" style="width:8rem" src="images/5_2.jpeg"/></td>
					<td onclick="modal_com_itens_kits('Kit 10 Pessoas')"><img class="imagens_botoes" style="width:8rem" src="images/10_2.jpeg"/></td>
					<td onclick="modal_com_itens_kits('Kit 20 Pessoas')"><img class="imagens_botoes" style="width:8rem" src="images/20_2.jpeg"/></td> -->
				</tr>

				<style>

				@media (max-width: 1024px) {
					.imagens_botoes {
						width: 15.5rem !important;
						cursor:pointer;
					}
				}

				@media (max-width: 1024px) {
					.imagens_botoes {
						width: 15.5rem !important;
						cursor:pointer;
					}
				}

				</style>
				<!--	<tr onclick="modal_com_itens_kits('Kit 10 Pessoas')">
				<td></td>
				<td> Kit 10 Pessoas</td>
				<td> KIT 10 Pessoas</td>
			</tr>
			<tr onclick="modal_com_itens_kits('Kit 20 Pessoas')">
			<td></td>-->
			<!-- <td> Kit 20 Pessoas</td>
			<td> KIT 20 Pessoas</td>
		</tr>-->

	</table>
</div>

<br/>



<!-- <div class="container-contact100-form-btn">
<div class="wrap-contact100-form-btn">
<div class="contact100-form-bgbtn"></div>
<button id="botao_adicionar" class="contact100-form-btn" type="button" onclick="adicionar_pedido()">
<span>
Adicionar pedido
<i class="fa fa-plus m-l-7" aria-hidden="true"></i>
</span>
</button>
</div>
</div> -->

<div class="container-contact100-form-btn">
	<div class="wrap-contact100-form-btn">
		<div class="contact100-form-bgbtn"></div>
		<button id="botao_finalizar" class="contact100-form-btn" type="button" onclick="conferir_pedido()">
			<span>
				Ver meu carrinho!
				<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
			</span>
		</button>
	</div>
</div>
</form>
<br/>
<br/>
<p>Desenvolvido por <a href="http://www.portalctech.com.br" target='blank'><u>CTech - Desenvolvendo Soluções</u></a></p>
</div>
</div>

<!-- Modal Escolher Salgados-->
<div id="modais">

	<div class="modal fade" id="modal_escolhas" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Escolha seus itens</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div id= "modal-salgados" class="modal-body">
					<div  style="text-align: center" id="quantidade_salgados"></div>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Quantos desse pedido você gostaria??</span>
					<input class="input100" type="number" min="1" onkeypress='runScript(event)' name="quantidade_pedidos" id="quantidade_pedidos_kit" value="1">
					<span class="focus-input100"></span>
				</div>



				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha os sabores fritos:</b></span>
					<div class="table-responsive">
						<table  class="dentro" style="width:100%">
							<tr>
								<td>
									Quibe com Queijo
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad1" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad1')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad1')">+</button></td>
							</tr>
							<tr>
								<td>
									Coxinha de Frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad2" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad2')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad2')">+</button></td>
							</tr>
							<tr>
								<td>
									Bolinha de queijo Provolone
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad3" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad3')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad3')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Carne
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad4" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad4')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad4')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Presunto e Queijo
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad5" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad5')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad5')">+</button></td>
							</tr>
							<!-- <div style="display:none">
							<tr>
								<td>
									Americano de Presunto e Queijo
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad6" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad6')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad6')">+</button></td>
							</tr>
							<tr>
								<td>
									Esfirra de Carne
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad7" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad7')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad7')">+</button></td>
							</tr>
							<tr>
								<td>
									Esfirra de Frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad8" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad8')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad8')">+</button></td>
							</tr>
							<tr>
								<td>
									Pastel de Carne
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad9" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad9')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad9')">+</button></td>
							</tr>
							<tr>
								<td>
									Pastel de Frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad10" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad10')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad10')">+</button></td>
							</tr>
							<tr>
								<td>
									Mini Dog
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad11" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad11')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad11')">+</button></td>
							</tr>
							<tr>
								<td>
									Tortinha de Frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad12" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad12')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad12')">+</button></td>
							</tr>
							<tr>
								<td>
									Empadinha de frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_salgad13" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_kit_salgad13')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_kit_salgad13')">+</button></td>
							</tr>

							</div> -->

						</table>
					</div>
				</div>



				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha uma torta:</b></span>
					<div id="tortas_normais">
						<input type="radio" class="largerCheckbox" name="torta" value="Prestigio"> Prestígio </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Brigadeiro"> Brigadeiro </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Floresta Negra"> Floresta Negra </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Abacaxi Com Ameixa"> Abacaxi com Ameixa </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Nega Maluca"> Nega Maluca </input>
					</div>
					<div id="tortas_gourmet" style="display:none">
						<input type="radio" class="largerCheckbox" name="torta" value="Bombom"> Bombom </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Casadinho"> Casadinho </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Morango com Leite Ninho">Morango com Leite Ninho</input><br/>
					</div>
				</div>


				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha seus refrigerantes:</b></span>
					<div class="table-responsive">
						<table class="dentro"  id="">

							<tbody>
								<tr>
									<td>	Coca Cola		</td>
									<td><input type="number" disabled="disabled" id="cont_kit_refri1" value="0"/></td>
									<td><button class="dvm-circle" onclick="diminuir('cont_kit_refri1')">-</button></td>
									<td><button class="dvm-circle" onclick="aumentar('cont_kit_refri1')">+</button></td>
								</tr>
								<tr>
									<td>	Guarana Antártica</td>
									<td><input type="number" disabled="disabled" id="cont_kit_refri2" value="0"/></td>
									<td><button class="dvm-circle" onclick="diminuir('cont_kit_refri2')">-</button></td>
									<td><button class="dvm-circle" onclick="aumentar('cont_kit_refri2')">+</button></td>
								</tr>

								<tr>
									<td>
										Fanta Laranja
									</td>
									<td>
										<input type="number" disabled="disabled" id="cont_kit_refri3" value="0"/>
									</td>
									<td><button class="dvm-circle" onclick="diminuir('cont_kit_refri3')">-</button></td>
									<td><button class="dvm-circle" onclick="aumentar('cont_kit_refri3')">+</button></td>
								</tr>
								<tr>
									<td>										Tuchaua								</td>
									<td><input type="number" disabled="disabled" id="cont_kit_refri4" value="0"/>	</td>
									<td><button class="dvm-circle" onclick="diminuir('cont_kit_refri4')">-</button></td>
									<td><button class="dvm-circle" onclick="aumentar('cont_kit_refri4')">+</button></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<style>
				input{
					background:white;
				}
				</style>

        <div class="wrap-input100 input100-select">
    					<span class="label-input100"><b>Escolha os docinhos:</b></span>
    					<div id="doces_normais" class="table-responsive">
    						<table  class="dentro" style="width:100%">
    							<tr>
    								<td>
    									Brigadeiro
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho1" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho1')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho1')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Beijinho
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho2" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho2')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho2')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Leite Ninho
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho3" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho3')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho3')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Olho de Sogra
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho4" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho4')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho4')">+</button></td>
    							</tr>

    						</table>
    					</div>

    					<div id="doces_gourmet" style="display:none" class="table-responsive">
    						<table  class="dentro" style="width:100%">
    							<tr>
    								<td>
    									Leite ninho com Nutella
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho5" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho5')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho5')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Brigadeiro trufado
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho6" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho6')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho6')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Churros
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho7" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho7')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho7')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Casadinho
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho8" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho8')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho8')">+</button></td>
    							</tr>
    							<tr>
    								<td>
    									Uvinha
    								</td>
    								<td>
    									<input type="number" disabled="disabled" id="cont_kit_docinho9" value="0"/>
    								</td>
    								<td><button class="dvm-circle" onclick="diminuir_docinho('cont_kit_docinho9')">-</button></td>
    								<td><button class="dvm-circle" onclick="aumentar_docinho('cont_kit_docinho9')">+</button></td>
    							</tr>

    						</table>
    					</div>

    				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
				</div>
			</div>
		</div>
	</div>

	<!-- MODAIS PPROMOÇÕES -->
	<div class="modal fade" id="modal_promocoes" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Escolha seus itens</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div id= "modal-salgados" class="modal-body">
					<div  style="text-align: center" id="quantidade_salgados">A Casadinha de Outubro traz como promoção:<br/> <strong>1 (um) cento de salgados fritos<br/>1 (uma) torta pequena</strong><br/>por apenas R$ 85,00</div>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Quantos desse pedido você gostaria??</span>
					<input class="input100" type="number" min="1" onkeypress='runScript(event)' name="quantidade_pedidos" id="quantidade_pedidos_promocoes" value="1">
					<span class="focus-input100"></span>
				</div>



				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha os sabores fritos:</b></span>
					<div class="table-responsive">
						<table  class="dentro" style="width:100%">
							<tr>
								<td>
									Quibe com Queijo
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_promocao_salgad1" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado_promocao('cont_kit_promocao_salgad1')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado_promocao('cont_kit_promocao_salgad1')">+</button></td>
							</tr>
							<tr>
								<td>
									Coxinha de Frango
								</td>
								<td>
									<input type="number"  disabled="disabled" id="cont_kit_promocao_salgad2" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado_promocao('cont_kit_promocao_salgad2')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado_promocao('cont_kit_promocao_salgad2')">+</button></td>
							</tr>
							<tr>
								<td>
									Bolinha de queijo Provolone
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_promocao_salgad3" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado_promocao('cont_kit_promocao_salgad3')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado_promocao('cont_kit_promocao_salgad3')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Carne
								</td>
								<td>
									<input type="number"  disabled="disabled" id="cont_kit_promocao_salgad4" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado_promocao('cont_kit_promocao_salgad4')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado_promocao('cont_kit_promocao_salgad4')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Presunto e Queijo
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_kit_promocao_salgad5" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado_promocao('cont_kit_promocao_salgad5')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado_promocao('cont_kit_promocao_salgad5')">+</button></td>
							</tr>
						</table>
					</div>

				</div>



				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha uma torta:</b></span>
					<div>
						<input type="radio" class="largerCheckbox" name="torta" value="Prestigio"> Prestígio </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Brigadeiro"> Brigadeiro </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Floresta Negra"> Floresta Negra </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Abacaxi Com Ameixa"> Abacaxi com Ameixa </input><br/>
						<input type="radio" class="largerCheckbox" name="torta" value="Nega Maluca"> Nega Maluca </input>
					</div>
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Descartaveis-->
	<div class="modal fade" id="modal_descartaveis" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Escolha seus itens</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha seus descartáveis:</b></span>
					<div class="table-responsive">
						<table  class="dentro" style="width:100%">
							<tr>
								<td>
									Copos 200mL - 100 uni - R$ 5,00
								</td>
								<td>
									<input type="number" disabled="disabled"  id="cont_descart1" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir('cont_descart1')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar('cont_descart1')">+</button></td>
							</tr>
							<tr>
								<td>
									Garfo sobremesa - 50 uni - R$ 4,50
								</td>
							</td>
							<td>
								<input type="number" disabled="disabled"  id="cont_descart2" value="0"/>
							</td>
							<td><button class="dvm-circle" onclick="diminuir('cont_descart2')">-</button></td>
							<td><button class="dvm-circle" onclick="aumentar('cont_descart2')">+</button></td>
						</tr>

						<tr>
							<td>
								Prato - 50 uni - R$ 2,00
							</td>
						</td>
						<td>
							<input type="number"  disabled="disabled" id="cont_descart3" value="0"/>
						</td>
						<td><button class="dvm-circle" onclick="diminuir('cont_descart3')">-</button></td>
						<td><button class="dvm-circle" onclick="aumentar('cont_descart3')">+</button></td>
					</tr>
					<tr>
						<td>
							Guardanapos - 50 uni - R$ 2,50
						</td>
					</td>
					<td>
						<input type="number"  disabled="disabled" id="cont_descart4" value="0"/>
					</td>
					<td><button class="dvm-circle" onclick="diminuir('cont_descart4')">-</button></td>
					<td><button class="dvm-circle" onclick="aumentar('cont_descart4')">+</button></td>
				</tr>
			</table>
		</div>
	</div>

	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
		<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
	</div>
</div>
</div>
</div>


<!-- Modal Escolher Torta-->
<div class="modal fade" id="modal_torta" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Escolha sua torta</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div id= "modal-torta" class="modal-body">
				<div  style="text-align: center" id="quantidade_salgados"></div>
			</div>

			<div class="wrap-input100 input100-select">
				<span class="label-input100"><b>Escolha uma torta:</b></span>
				<div>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Prestigio"> Prestígio </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Brigadeiro"> Brigadeiro </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Floresta Negra"> Floresta Negra </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Abacaxi Com Ameixa"> Abacaxi com Ameixa </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Nega Maluca"> Nega Maluca </input>
				</div>
			</div>

			<div class="wrap-input100 input100-select">
				<span class="label-input100"><b>Tortas Gourmet:</b></span>
				<div>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Bombom"> Bombom </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Casadinho"> Casadinho </input><br/>
					<input type="radio" class="largerCheckbox" onclick="mudar_precos_tortas()" name="torta" value="Morango com Leite Ninho">Morango com Leite Ninho</input><br/>
				</div>
			</div>
			<div class="wrap-input100 input100-select">
				<span class="label-input100">Qual o tamanho da torta?</span>
				<div>
					<select class="selection-2" name="tamanho_torta" id="tamanho_torta">
						<option>Selecione o tamanho</option>
						<option value="PP;"> PP - R$ 40,00c</option>
						<option value="Pequena;"> Pequena - R$ 70,00<b></b></option>
						<option value="Média;"> Média - R$ 130,00</option>
						<option value="Grande;"> Grande - R$ 180,00</option>					</select>

					</div>
					<span class="focus-input100"></span>
				</div>
				<div class="wrap-input100 validate-input">
					<span class="label-input100">Quantos desse pedido você gostaria??</span>
					<input class="input100" type="number" min="1" onkeypress='runScript(event)' name="quantidade_pedidos_tortas" id="quantidade_pedidos_tortas" value="1">
					<span class="focus-input100"></span>
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
				</div>
			</div>
		</div>
	</div>


	<!-- Modal Escolher Salgados-->
	<div class="modal fade" id="modal_salgado" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Escolha seus salgados</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div id= "modal-torta" class="modal-body">
					<div  style="text-align: center" id="quantidade_salgados"></div>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Quantos centos desse pedido você gostaria??</span>
					<input class="input100" type="number" min="1" onkeypress='runScript(event)' onblur="quantidade_sabores()" name="quantidade_pedidos_salgadinhos" id="quantidade_pedidos_salgadinhos" value="1">
					<span class="focus-input100"></span>
				</div>

				<div id="mostrar_quantidade_sabores">Escolha até 100 salgados</div>
				<br/>


				<div class="wrap-input100 input100-select">
					<span class="label-input100"><b>Escolha os sabores fritos:</b></span>
					<div class="table-responsive">
						<table  class="dentro" style="width:100%">
							<tr>
								<td>
									Quibe com Queijo
								</td>
								<td>
									<input type="number"   disabled="disabled"  id="cont_salgad1" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad1')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad1')">+</button></td>
							</tr>
							<tr>
								<td>
									Coxinha de Frango
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad2" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad2')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad2')">+</button></td>
							</tr>
							<tr>
								<td>
									Bolinha de queijo Provolone
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad3" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad3')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad3')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Carne
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad4" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad4')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad4')">+</button></td>
							</tr>
							<tr>
								<td>
									Risoli de Presunto e Queijo
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad5" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad5')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad5')">+</button></td>
							</tr>
							<tr>
								<td>
									Americano de Presunto e Queijo
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad6" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad6')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad6')">+</button></td>
							</tr>
							<tr>
								<td>
									Esfirra de Carne
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad7" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad7')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad7')">+</button></td>
							</tr>
							<tr>
								<td>
									Esfirra de Frango
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad8" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad8')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad8')">+</button></td>
							</tr>
							<tr>
								<td>
									Pastel de Carne
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad9" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad9')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad9')">+</button></td>
							</tr>
							<tr>
								<td>
									Pastel de Frango
								</td>
								<td>
									<input type="number"   disabled="disabled" id="cont_salgad10" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad10')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad10')">+</button></td>
							</tr>
							<tr>
								<td>
									Mini Dog
								</td>
								<td>
									<input type="number"  disabled="disabled" id="cont_salgad11" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad11')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad11')">+</button></td>
							</tr>
							<tr>
								<td>
									Tortinha de Frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_salgad12" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad12')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad12')">+</button></td>
							</tr>
							<tr>
								<td>
									Empadinha de frango
								</td>
								<td>
									<input type="number" disabled="disabled" id="cont_salgad13" value="0"/>
								</td>
								<td><button class="dvm-circle" onclick="diminuir_salgado('cont_salgad13')">-</button></td>
								<td><button class="dvm-circle" onclick="aumentar_salgado('cont_salgad13')">+</button></td>
							</tr>
						</table>
					</div>

				</div>


				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
				</div>
			</div>
		</div>
	</div>


	<!-- Modal Escolher Salgados
	<div class="modal fade" id="modal_salgado_assado" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
	<div class="modal-content">
	<div class="modal-header">
	<h5 class="modal-title" id="exampleModalLongTitle">Escolha seu salgado assado</h5>
	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	<span aria-hidden="true">&times;</span>
</button>
</div>
<div id= "modal-torta" class="modal-body">
<div  style="text-align: center" id="quantidade_salgados"></div>
</div>

<div class="wrap-input100 input100-select">
<span class="label-input100"><b>Escolha até 4 sabores assados:</b></span>
<div>
<input type="checkbox" id="assado1" class="largerCheckbox"   onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Americano de Presunto e Queijo"> <span onClick="document.getElementById('assado1').click()" >Americano de Presunto e Queijo </span> </input><br/>
<input type="checkbox" id="assado2" class="largerCheckbox"  onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Esfirra de carne"><span onClick="document.getElementById('assado2').click()" > Esfirra de carne </span></input><br/>
<input type="checkbox" id="assado3" class="largerCheckbox"  onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Esfirra de Frango"><span onClick="document.getElementById('assado3').click()" > Esfirra de Frango </span></input><br/>
<input type="checkbox" id="assado4" class="largerCheckbox"  onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Pastel de Carne"><span onClick="document.getElementById('assado4').click()" > Pastel de Carne</span> </input><br/>
<input type="checkbox" id="assado5" class="largerCheckbox"  onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Pastel de Fragno"><span onClick="document.getElementById('assado5').click()" > Pastel de Fragno</span> </input><br/>
<input type="checkbox" id="assado6" class="largerCheckbox" onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Mini dog"><span onClick="document.getElementById('assado6').click()" > Mini dog</span> </input><br/>
<input type="checkbox" id="assado7" class="largerCheckbox" onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Tortinha de Frango "><span onClick="document.getElementById('assado7').click()" > Tortinha de Frango  </span></input><br/>
<input type="checkbox" id="assado8" class="largerCheckbox" onclick="contar_checks_assados(event)"  name="salgadinhoassado" value="Empada de Frango"><span onClick="document.getElementById('assado8').click()" > Empada de Frango</span> </input>
</div>
</div>

<div class="wrap-input100 validate-input">
<span class="label-input100">Quantos desse pedido você gostaria??</span>
<input class="input100" type="number" min="1" onkeypress='runScript(event)' name="quantidade_pedidos_assados" id="quantidade_pedidos_assados" value="1">
<span class="focus-input100"></span>
</div>

<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar ao carrinho!</button>
</div>
</div>
</div>
</div>
-->

<!-- Modal Escolher refrigerante-->
<div class="modal fade" id="modal_refrigerante" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Escolha seus refrigerantes</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div id= "modal-torta" class="modal-body">
				<div  style="text-align: center" id="quantidade_refrigerantes"></div>
			</div>

			<div class="wrap-input100 input100-select">
				<span class="label-input100"><b>Escolha seus refrigerantes:</b></span>
				<div class="table-responsive">
					<table  class="dentro" style="width:100%">
						<tr>
							<td>
								Coca Cola
							</td>
							<td>
								<input type="number"  disabled="disabled" id="cont_refri1" value="0"/>
							</td>
							<td><button class="dvm-circle" onclick="diminuir('cont_refri1')">-</button></td>
							<td><button class="dvm-circle" onclick="aumentar('cont_refri1')">+</button></td>
						</tr>
						<tr>
							<td>
								Guaraná Antartica
							</td>
							<td>
								<input type="number" disabled="disabled" id="cont_refri2" value="0"/>
							</td>
							<td><button class="dvm-circle" onclick="diminuir('cont_refri2')">-</button></td>
							<td><button class="dvm-circle" onclick="aumentar('cont_refri2')">+</button></td>
						</tr>
						<tr>
							<td>
								Fanta Laranja
							</td>
						</td>
						<td>
							<input type="number" disabled="disabled" id="cont_refri3" value="0"/>
						</td>
						<td><button class="dvm-circle" onclick="diminuir('cont_refri3')">-</button></td>
						<td><button class="dvm-circle" onclick="aumentar('cont_refri3')">+</button></td>
					</tr>
					<tr>
						<td>
							Tuchaua
						</td>
					</td>
					<td>
						<input type="number" disabled="disabled" id="cont_refri4" value="0"/>
					</td>
					<td><button class="dvm-circle" onclick="diminuir('cont_refri4')">-</button></td>
					<td><button class="dvm-circle" onclick="aumentar('cont_refri4')">+</button></td>
				</tr>
			</table>
		</div>
	</div>

	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
		<button type="button" class="btn btn-primary" id="butao_enviar" onclick="adicionar_pedido()">Adicionar Pedido!</button>
	</div>
</div>
</div>
</div>
<!-- Modal Finalizar Pedido -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Confirmar pedidos</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>

				</button>
			</div>
			<div id= "modal-body" class="modal-body">
				<div  style="text-align: center" id="valor_final"></div>
			</div>
			<div class="wrap-input100 input100-select">
				<span class="label-input100"><b>Escolha a forma de pagamento:</b></span>
				<div>
					<select class="selection-2" name="forma_pagamento" id="forma_pagamento" onchange="troco()">
						<option value="Dinheiro">Dinheiro</option>
						<option value="Cartão">Cartão </option>
					</select>
				</div>
			</div>


			<div class="wrap-input100 validate-input" id="troco">
				<span class="label-input100">Precisará de quanto de troco?</span>
				<input type="text" class="input100"  onkeypress='runScript(event)' name="valor_troco"  id="valor_troco" placeholder="Ex: 6 reais"></input>
				<span class="focus-input100"></span>
			</div>

			<div class="modal-footer">

				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
				<button type="button" class="btn btn-primary" id="butao_enviar" onclick="salvar_pedido()">Finalizar pedido!</button>
			</div>
		</div>
	</div>
</div>

<!-- Modal Mensagems-->
<div class="modal fade" id="modal_alerta" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Alerta!</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div id= "modal-torta" class="modal-body">
				<div  style="text-align: center" id="mensagem"><h2></h2></div>
			</div>


			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
			</div>
		</div>
	</div>
</div>

<!-- RESETAR MODAIS -->
</div>



<div class="modal fade" id="modalFinalizando" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Pedido Realizado!</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<div id= "modal-body" class="modal-body">
				<div  style="text-align: center" id="valor_final">
					Seu Pedido foi realizado com sucesso!
					<div id="alerta"></div>
					<div id="tempo"></div>
				</br>
				Fique atento ao seu celular pois podemos ligar.</BR>

			</div>
		</div>

		<div style="text-align:center" class="modal-footer">
			A Zulma Gourmet agradece!
		</div>
	</div>
</div>
</div>

<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/bootstrap/js/popper.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/select2/select2.min.js"></script>
<script>
$(".selection-2").select2({
	minimumResultsForSearch: 20,
	dropdownParent: $('#dropDownSelect1')
});
</script>
<!--===============================================================================================-->
<script src="vendor/daterangepicker/moment.min.js"></script>
<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
<script src="js/main.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script>


$(document).ready(function() {
	$('#example2').DataTable();
	var d = new Date();
	var  dia_atual = d.getDay();
	var  hora_atual = d.getHours();

	if(dia_atual == 6 && hora_atual >= 11 ){
			document.getElementById("wrap-contact100").style.display = "none";
			document.getElementById("aviso_sabado").style.display = "block";

	}
	checar_horas();

	document.getElementById("name").value = localStorage.getItem("nome");
	document.getElementById("telefone").value = localStorage.getItem("telefone");
	document.getElementById("numero_casa").value = localStorage.getItem("numero");
	document.getElementById("endereco").value = localStorage.getItem("endereco");
	document.getElementById("referencia").value = localStorage.getItem("referencia");
	document.getElementById("bairro").value = localStorage.getItem("bairro");



	$('#nome').on("keyup", function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$('#telefone').on("keyup", function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();												      }
		});
		$('#endereco').on("keyup", function(e) {
			if (e.keyCode == 13) {
				e.preventDefault();												      }
			});
			$('#bairro').on("keyup", function(e) {
				if (e.keyCode == 13) {
					e.preventDefault();												      }
				});
				$('#valor_troco').on("keyup", function(e) {
					if (e.keyCode == 13) {
						e.preventDefault();												      }
					});

					$('#numero_casa').on("keyup", function(e) {
						if (e.keyCode == 13) {
							e.preventDefault();												      }
						});

						$('#observacao').on("keyup", function(e) {
							if (e.keyCode == 13) {
								e.preventDefault();												      }
							});

							$('#gramas_carne').on("keyup", function(e) {
								if (e.keyCode == 13) {
									e.preventDefault();												      }
								});

								$('#referencia').on("keyup", function(e) {
									if (e.keyCode == 13) {
										e.preventDefault();												      }
									});
								});


								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}

								gtag('js', new Date());
								gtag('config', 'UA-23581568-13');

								/*
								$(document).ready(function() {

								var today = new Date();
								var dy = today.getDate();
								var mt = today.getMonth()+1;
								var yr = today.getFullYear();

								var dia = yr+"/"+mt+"/"+dy;
								var div = document.getElementById("cardapio");
								$.ajax({
								url: "Control/buscarPedidos.php",
								dataType: "json",
								data: {
								data: dia
							},
							success: function( data ) {


							var div2 = document.createElement("div");
							div2.className = "wrap-input100 input100-select";
							var span = document.createElement("span");
							span.className="label-input100";
							var div3 = document.createElement("div");
							var select = document.createElement("select");
							select.className = "selection-2";

							var span2 = document.createElement("span");
							span2.innerHTML= "Qual o que vc quer?";
							span2.className="focus-input100"
							for(var i=0; i<data.length;i++){
							var option = document.createElement("option");
							option.value = data[i].nome_item;
							option.text = data[i].nome_item;
							select.add(option);
						}
						div3.append(select);

						div2.append(span);
						div2.append(div3);
						div.append(div2);

					}});


				});
				*/
				function teste(){
					alert("ae");
				}
				function validate(evt) {
					var theEvent = evt || window.event;

					// Handle paste
					if (theEvent.type === 'paste') {
						key = event.clipboardData.getData('text/plain');
					} else {
						// Handle key press
						var key = theEvent.keyCode || theEvent.which;
						key = String.fromCharCode(key);
					}
					var regex = /[0-9]|\./;
					if( !regex.test(key) ) {
						theEvent.returnValue = false;
						if(theEvent.preventDefault) theEvent.preventDefault();
					}
				}

				function runScript(e) {
					//See notes about 'which' and 'key'
					if (e.keyCode == 13) {
						e.preventDefault();
					}
				}

				function salvarnome(){
					var nome = document.getElementById("name").value;
					localStorage.setItem("nome", nome);
				}
				function salvartelefone(){
					var telefone = document.getElementById("telefone").value;
					localStorage.setItem("telefone", telefone);
				}
				function salvarbairro(){
					var bairro = document.getElementById("bairro").value;
					localStorage.setItem("bairro", bairro);
				}
				function salvarnumero(){
					var numero = document.getElementById("numero_casa").value;
					localStorage.setItem("numero", numero);
				}
				function salvarendereco(){
					var endereco = document.getElementById("endereco").value;
					localStorage.setItem("endereco", endereco);
				}
				function salvarreferencia(){
					var referencia = document.getElementById("referencia").value;
					localStorage.setItem("referencia", referencia);
				}

				</script>

			</body>
			</html>
