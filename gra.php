<?php

	session_start();

	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: logowanie.php');
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
  
  	<link rel="stylesheet" type="text/css" href="index.css">
	<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
	<link rel="icon" href="favicon.ico" />

	<script src="balwanek_gra.js"></script>
</head>
<body>

	<div id="nawigacja">
		<a href="logout.php">Wyloguj się &nbsp</a>
		|
		<a href="index.php">&nbsp Start</a>
	</div>
	<div id="punkty">
		<?php

			echo '<div style="color:#f73d78; width: 1000px; margin-left: auto; margin-right: auto"><p>Obecnie masz '.$_SESSION['punkty'].' punktów!</p></div>';

		?>
	</div>
	<div>
		<?php

			echo '<div style="color:#f73d78; width: 1000px; margin-left: auto; margin-right: auto"><p>Witaj '.$_SESSION['user'].'!</p></div>';

		?>
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