<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="utf-8"/>
  	<title>Bałwanek</title>
	<meta name="decryption" content="Gra w bałwanka."/>
  	<meta name="keywords" content="gra w bałwanka"/>
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  
  	<link rel="stylesheet" type="text/css" href="index.css">
	<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
	<link rel="icon" href="favicon.ico" />

	<script src="balwanek.js"></script>
</head>
<body>

	<div id="nawigacja">
		<a href="logowanie.php">Moje konto &nbsp</a>
		|
		<a href="rejestracja.php">&nbsp Zarejestruj się</a>
	</div>
	<div id="pojemnik">
		<div id="plansza"></div>
		<div id="balwanek">
			<img src="img/b0.png">
		</div>
		<div id="alfabet"></div>
		<div style="clear:both;"></div>
		<div id="menu">
			<div class="inne" onclick="location.reload()">losuj inne hasło &nbsp</div>
			|
			<div class="inne" onclick="odkryj()">&nbsp odkryj hasło</div>
		</div>
	</div>

</body>
</html>