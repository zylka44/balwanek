var sentences = new Array(5);
sentences[0] = "idzie luty podkuj buty";
sentences[1] = "w marcu jak w garncu";
sentences[2] = "Późna zima długo trzyma";
sentences[3] = "Jedna jaskółka wiosny nie czyni";
sentences[4] = "Kwiecień plecień co przeplata trochę zimy trochę lata";

function rand() {
	var rand_number = Math.floor(Math.random() * sentences.length);
	rand_sentence = sentences[rand_number];
}

rand();

var sentence = rand_sentence;
sentence = sentence.toUpperCase();

var s_length = sentence.length;
var how_many_mistakes = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var sentence1 = "";

for (i = 0; i < s_length; i++) {
	if (sentence.charAt(i) === " ") sentence1 = sentence1 + " ";
	else sentence1 = sentence1 + "-";
}

function write_sentence() {
	document.getElementById("plansza").innerHTML = sentence1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";

function start() {
	var div_letter = "";

	for (i = 0; i <= 34; i++) {
		var element = "lit" + i;
		div_letter = div_letter + '<div class="litera" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
		if ((i + 1) % 7 === 0) div_letter = div_letter + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = div_letter;

	write_sentence();
}

String.prototype.setLetter = function (position, letter) {
	if (position > this.lenght - 1) return this.toString();
	else return this.substr(0, position) + letter + this.substr(position + 1);
}

function check(number) {
	var good_letter = false;

	for (i = 0; i < s_length; i++) {
		if (sentence.charAt(i) === letters[number]) {
			sentence1 = sentence1.setLetter(i, letters[number]);
			good_letter = true;
		}
	}

	if (good_letter === true) {
		yes.play();
		var element = "lit" + number;
		document.getElementById(element).style.color = "#eeeeee";
		document.getElementById(element).style.border = "2px solid #eeeeee";
		document.getElementById(element).style.cursor = "default";

		write_sentence();
	}
	else {
		var element = "lit" + number;
		document.getElementById(element).style.color = "#eeeeee";
		document.getElementById(element).style.border = "2px solid #eeeeee";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");

		//skucha
		how_many_mistakes++;
		var obraz = "img/b" + how_many_mistakes + ".png";
		document.getElementById("balwanek").innerHTML = '<img src="' + obraz + '"/>';
	}

	//wygrana
	if (sentence === sentence1) {
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło:<br>" + sentence + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
		document.getElementById("balwanek").innerHTML = '<img src="img/bw.png"/>';
	}

	//przegrana
	if (how_many_mistakes >= 10)
		document.getElementById("alfabet").innerHTML = "Przegrana! Zostałeś bałwankiem. Prawidłowe hasło:<br>" + sentence + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'

}

function odkryj() {
	document.getElementById("alfabet").innerHTML = "Prawidłowe hasło:<br>" + sentence + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
}