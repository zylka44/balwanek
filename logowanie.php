<?php

	session_start();

	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: gra.php');
		exit();
	}

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
		<a href="index.php">Start &nbsp</a>
		|
		<a href="rejestracja.php">&nbsp Zarejestruj się</a>
	</div>
	<div id="pojemnik">
		<form action="zaloguj.php" method="post">
			Login: <input type="text" name="login" /><br />
			Hasło: <input type="password" name="haslo" /><br />
			<input style="color:gray; background: white; border-radius: 5px" type="submit" value="Zaloguj się" />
		</form>
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>
	</div>

</body>
</html>