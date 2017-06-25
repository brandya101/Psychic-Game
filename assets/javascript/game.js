var winCount=0;
var lossCount=0;
var LeftOver=10;
var soFar=0;


var win= document.getElementById("wins")
var loss= document.getElementById("losses")
var guessLeft= document.getElementById("guessesLeft");
var guessSoFar= document.getElementById("guessesSoFar");

var str = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = str.split(""); 

document.onkeyup=function(event){
var userGuess=event.key.toLowerCase();

document.getElementById("user").innerHTML="Your Guess: " + userGuess;

var computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];

 win.innerHTML = 'Wins: ' + winCount;
 loss.innerHTML = 'Losses: ' + lossCount;
 guessLeft.innerHTML = 'Guess so far:  ' + LeftOver;
 guessSoFar.innerHTML= 'Guess so far: ' + soFar;


if (userGuess === computerGuess){
	winCount++;
	win.innerHTML= 'Wins: ' + winCount;
	document.getElementById("imageWinner").innerHTML='<img src="assets/images/images.jpeg" />';
	document.onkeyup=function(event){
		var resetButton=event.key.toLowerCase();
		if(resetButton === "r"){
			location.reload();
		}
		else{
			"Reload page to start again"
		}
	}

 }else if(userGuess !== computerGuess){
 	soFar++;
 	guessLeft.innerHTML='Guess So Far: ' + soFar;
 	LeftOver--;
 	guessLeft.innerHTML='Guess Left: ' + LeftOver;
 }
 	if(LeftOver === 0){
 		
 		location.reload();
 }
 else{
	"You did not type anything"
}

}