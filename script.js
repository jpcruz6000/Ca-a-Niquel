var myVar;
var isCliked = false;
var tempo = 3;
chance = 0;
pot = 0;
jPot = document.getElementById("jackpot");
jPot.innerHTML = "JackPot: $"+pot+"!";
credito = document.getElementById("cred");
mostrar = document.getElementById("msg");
son = document.getElementById('aud');
songm = document.getElementById('audgm');
soncoin = document.getElementById('audcoin');
sonwin = document.getElementById('audwin');
sonmain = document.getElementById('audmain');

var inicio = testa();

function coinPay(a) {
chance += a;
soncoin.play();
credito = document.getElementById("cred");
credito.innerHTML = chance+" créditos!";
alert("Você recarregou $"+a+" créditos!");		
};
function testa() {	
credito.innerHTML = "Você tem "+chance.toFixed(2)+" créditos!";
//var li = document.getElementById("btn");
//li.addEventListener("click", function(event) {
	if (isCliked == true) {
		console.log(chance);
		var btn = document.getElementById("btn");
		btn.style.backgroundColor = "red";
		btn.disabled = false;
		clearTimeout(myVar);
		linha = setLinha();
		son.pause();
		isCliked = false;
	}else {
		if (chance <= 0) {
		chance = 0;
		sonmain.play();
		mostrar.innerHTML = "GAME OVER!";
		credito.innerHTML = "Você tem "+chance.toFixed(2)+" créditos!";
		alert("Insira Créditos!");
		}else { 
		var btn = document.getElementById("btn");
		btn.style.backgroundColor = "grey";
		btn.disabled = true;
		sonmain.pause();
		var jg = jogar();
		var setPremio = flipPremio();
		son.play();
		isCliked = true;
		temp = setTempo();
		} 
	}
//})			
};
function setPot() {
pot += chance/100;
mais = chance/100;
jPot.innerHTML = "JackPot: $"+pot.toFixed(2)+"!";
credito.innerHTML = "Você tem "+chance.toFixed(2)+" créditos!";
mostrar.innerHTML = "Adicionou mais $ "+mais.toFixed(2);
sonwin.play();
};
function verFiguras(figura) {
	if (faceP == figura) {
			chance += pot*4;
			alert("JackPot! Você acabou de receber mais "+(pot*4).toFixed(2)+" Créditos!");
			pot = 0;
	}else {
		if (figura == 0){
			chance += 5;
		}else if (figura == 1){
			chance += 10;
		}else if (figura == 2){
			chance += 15;
		}else if (figura == 3){
			chance += 20;
		}else if (figura == 4){
			chance += 25;
		}else if (figura == 5){
			chance += 50;
		}else if (figura == 6){
			chance += 100;
		}else if (figura == 7){
			chance += 125;
		}else if (figura == 8){
			chance += 150;
		}else {
		
		}
	}	
};
function flipPremio() {
var facesP = ['img/star.svg','img/seven.svg','img/spade.svg','img/aple.svg','img/bell.svg','img/jota.svg','img/queen.svg','img/king.svg','img/bar.svg'];
elemPremio = document.getElementById("Premio");
faceP = Math.floor(Math.random()*9);
elemPremio.src = facesP[faceP];
};
function jogar() {
var faces = ['img/star.svg','img/seven.svg','img/spade.svg','img/aple.svg','img/bell.svg','img/jota.svg','img/queen.svg','img/king.svg','img/bar.svg'];
elem1 = document.getElementById("myimg0");
elem2 = document.getElementById("myimg1");
elem3 = document.getElementById("myimg2");
elem4 = document.getElementById("myimg3");
elem5 = document.getElementById("myimg4");
elem6 = document.getElementById("myimg5");
elem7 = document.getElementById("myimg6");
elem8 = document.getElementById("myimg7");
elem9 = document.getElementById("myimg8");

face = Math.floor(Math.random()*9);
face1 = Math.floor(Math.random()*9);
face2 = Math.floor(Math.random()*9);
face3 = Math.floor(Math.random()*9);
face4 = Math.floor(Math.random()*9);
face5 = Math.floor(Math.random()*9);
face6 = Math.floor(Math.random()*9);
face7 = Math.floor(Math.random()*9);
face8 = Math.floor(Math.random()*9);

elem1.src = faces[face];
elem2.src = faces[face1];
elem3.src = faces[face2];
elem4.src = faces[face3];
elem5.src = faces[face4];
elem6.src = faces[face5];
elem7.src = faces[face6];
elem8.src = faces[face7];
elem9.src = faces[face8];

elem1.style.borderRadius = "50%";
elem2.style.borderRadius = "50%";
elem3.style.borderRadius = "50%";
elem4.style.borderRadius = "50%";
elem5.style.borderRadius = "50%";
elem6.style.borderRadius = "50%";
elem7.style.borderRadius = "50%";
elem8.style.borderRadius = "50%";
elem9.style.borderRadius = "50%";

elem1.style.boxShadow = "none";
elem2.style.boxShadow = "none";
elem3.style.boxShadow = "none";
elem4.style.boxShadow = "none";
elem5.style.boxShadow = "none";
elem6.style.boxShadow = "none";
elem7.style.boxShadow = "none";
elem8.style.boxShadow = "none";
elem9.style.boxShadow = "none";

myVar = setTimeout(jogar, 200);
	
};
function setTempo() {
var cronometro = setInterval(function() {

	tempo -= 1;

	if(tempo < 0) {
		clearInterval(cronometro);			
        test = testa();
	}
}, 1000);
};
function setLinha() {
	if ((face == face1 && face1 == face2)||(face3 == face4 && face4 == face5)||
		(face6 == face7 && face7 == face8)||(face == face3 && face3 == face6)||
		(face1 == face4 && face4 == face7)||(face2 == face5 && face5 == face8)||
		(face == face4 && face4 == face8)||(face2 == face4 && face4 == face6)){
		if (face == face1 && face1 == face2) {
			var fig = verFiguras(face);
			elem1.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
			elem2.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
			elem3.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";			
			var pots = setPot();
		}
		if (face3 == face4 && face4 == face5) {
				var fig = verFiguras(face3);
				elem4.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem5.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem6.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";				
				var pots = setPot();
			}
		if (face6 == face7 && face7 == face8) {
				var fig = verFiguras(face6);
				elem7.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem8.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem9.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";				
				var pots = setPot();
			}
		if (face == face3 && face3 == face6) {
				var fig = verFiguras(face);
				elem1.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem4.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem7.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";				
				var pots = setPot();
			}
		if (face1 == face4 && face4 == face7) {
				var fig = verFiguras(face1);
				elem2.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem5.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem8.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				var pots = setPot();
			}
		if (face2 == face5 && face5 == face8) {
				var fig = verFiguras(face2);
				elem3.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem6.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem9.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";	
				var pots = setPot();
			}
		if (face == face4 && face4 == face8) {
				var fig = verFiguras(face);
				elem1.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem5.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem9.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";				
				var pots = setPot();
			}
		if (face2 == face4 && face4 == face6) {
				var fig = verFiguras(face2);
				elem3.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem5.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				elem7.style.boxShadow = "0 0 4px 2px rgba(0, 140, 186, 0.5)";
				var pots = setPot();
			}
	}else {
			chance -= 5;
			credito.innerHTML = "Você tem "+chance.toFixed(2)+" créditos!";
			mostrar.innerHTML = "Boa sorte!";
			songm.play();
		}
};