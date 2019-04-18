var tablica_z_haslami = new Array(5);
tablica_z_haslami[0] = "idzie luty podkuj buty";
tablica_z_haslami[1] = "w marcu jak w garncu";
tablica_z_haslami[2] = "Późna zima długo trzyma";
tablica_z_haslami[3] = "Jedna jaskółka wiosny nie czyni";
tablica_z_haslami[4] = "Kwiecień plecień co przeplata trochę zimy trochę lata";

function losowanie()
{
var wylosowana_liczba = Math.round(Math.random() * tablica_z_haslami.length);
wylosowane_haslo = tablica_z_haslami[wylosowana_liczba];
}

losowanie();

var haslo = wylosowane_haslo;
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)===" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function start()
{
	var tresc_diva ="";

	for (i=0;i<=34;i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+ litery[i] +'</div>';
		if ((i+1)%7===0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;

	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce,znak)
{
	if (miejsce>this.lenght-1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;

	for (i=0;i<dlugosc;i++)
	{
		if (haslo.charAt(i)===litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}

	if(trafiona===true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.color = "#eeeeee";
		document.getElementById(element).style.border = "2px solid #eeeeee";
		document.getElementById(element).style.cursor = "default";

		wypisz_haslo();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.color = "#eeeeee";
		document.getElementById(element).style.border = "2px solid #eeeeee";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");

		//skucha
		ile_skuch++;
		var obraz = "img/b"+ile_skuch+".png";
		document.getElementById("balwanek").innerHTML = '<img src="'+obraz+'"/>';
	}

	//wygrana
	if(haslo===haslo1)
	{
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło:<br>" +haslo+'<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
		document.getElementById("balwanek").innerHTML = '<img src="img/bw.png"/>';
	}

	//przegrana
	if(ile_skuch>=10)
		document.getElementById("alfabet").innerHTML = "Przegrana! Zostałeś bałwankiem. Prawidłowe hasło:<br>" +haslo+'<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'

}

function odkryj()
{
	document.getElementById("alfabet").innerHTML = "Prawidłowe hasło:<br>" +haslo+'<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
}