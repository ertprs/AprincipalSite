<?php
if( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ) {
    header("Location: http://www.aprincipalbb.com.br/portal/");
}
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>A Principal - Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--==============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/sweetalert2.css">
	<link rel="stylesheet" type="text/css" href="css/sweetalert2.min.css">

<!--===============================================================================================-->
</head>
<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img style="border-radius: 200px" src="img/logo.png" alt="IMG">
				</div>
				<form class="login100-form validate-form" id="ValidaSenha" method="POST">
					<span class="login100-form-title">
						Sistema Interno APrincipal!
					</span>
						<?php
						if(isset($_SESSION['nao_autorizado'])){
						?>
						<div class="text-center p-t-12">
							<p> ERRO: Usuário ou senha invalidos</p></div>
						<?php
						}
						unset($_SESSION['nao_autorizado']);
					?>
					<div class="wrap-input100 validate-input" data-validate = "Insira um email válido">
						<input class="input100" type="text" id="login" name="login" placeholder="Login">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Senha é necessária">
						<input class="input100" type="password" id="senha" name="senha" placeholder="Senha">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
          <div class="container-login100-form-btn">
						<button type="button" onclick="Valida_Senha()" class="login100-form-btn">
							Login </button>
					</div>
          <div style="text-align:center">
            <a class="link_cad" href="page-register.html">Cadastre-Se</a>
          </div>
					<div class="text-center p-t-12">
					</div>
					<div class="text-center p-t-136">
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/tilt/tilt.jquery.min.js"></script>
	<script >
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<script src="js/aes.js"></script>
	<script src="js/sha256.js"></script>
	<script src="https://cdn.rawgit.com/CryptoStore/crypto-js/3.1.2/build/components/pad-nopadding-min.js"></script>
	<script src="control/valida_senha.js"></script>
	<script src="js/sweetalert2.all.min.js"></script>
	<script src="js/sweetalert2.all.js"></script>
	<script src="js/sweetalert2.js"></script>
	<script src="js/sweetalert2.min.js"></script>
	<script src="http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/md5.js"></script>



</body>
</html>
