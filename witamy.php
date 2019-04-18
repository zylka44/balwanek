<?php

	session_start();
		
	if (!isset($_SESSION['udanarejestracja']))
	{
		header('Location: logowanie.php');
		exit();
	}
	else
	{
		unset($_SESSION['udanarejestracja']);
	}

	//Usuwanie zmiennych pamiętających wartości wpisane do formularza
	if (isset($_SESSION['fr_nick'])) unset($_SESSION['fr_nick']);
	if (isset($_SESSION['fr_email'])) unset($_SESSION['fr_email']);
	if (isset($_SESSION['fr_haslo1'])) unset($_SESSION['fr_haslo1']);
	if (isset($_SESSION['fr_haslo2'])) unset($_SESSION['fr_haslo2']);
	if (isset($_SESSION['fr_regulamin'])) unset($_SESSION['fr_regulamin']);
	
	//Usuwanie błędów rejestracji
	if (isset($_SESSION['e_nick'])) unset($_SESSION['e_nick']);
	if (isset($_SESSION['e_email'])) unset($_SESSION['e_email']);
	if (isset($_SESSION['e_haslo'])) unset($_SESSION['e_haslo']);
	if (isset($_SESSION['e_regulamin'])) unset($_SESSION['e_regulamin']);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="utf-8"/>
  	<title>Bałwanek</title>
	<meta name="decryption" content="Gra w bałwanka."/>
  	<meta name="keywords" content="gra w bałwanka"/>
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  
  	<link rel="stylesheet" type="text/css" href="logowanie.css">
	<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
	<link rel="icon" href="favicon.ico" />

	<script src="balwanek.js"></script>
</head>
<body>

	<div id="nawigacja">
		<a href="logowanie.php">Zaloguj się &nbsp</a>
		|
		<a href="index.php">&nbsp Start</a>
	</div>
	<div id="pojemnik">
		Dziękujemy za rejestrację! Możesz teraz zalogować się na swoje konto.
		<br /><br />
		<a href="logowanie.php">Zaloguj się</a>
	</div>

</body>
</html>