var winCount=0;
var lossCount=0;
var LeftOver=10;
var soFar=0;


var win= document.getElementById("wins")
var loss= document.getElementById("losses")
var guessLeft= document.getElementById("guessesLeft");
var guessSoFar= document.getElementById("guessesSoFar");

//Create letter array, make spaces on each letter(I was a bit lazy)
var alphaArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//Hiding Picture
// function hidePicture(){
// 	document.getElementById("imageWinner").style.display="none";
// }

//Displays Image
var winnerImage=function(){
	document.getElementById("imageWinner").innerHTML='<img src="assets/images/images.jpeg" />';
}

//function to return 0 and 10 to counters LeftOver and SoFar
var resetSoFar=function(){
	soFar=0;
}

var resetLeft=function(){
	LeftOver=10;
}

var computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];

//On letter press display the game and start guessing
document.onkeyup=function(event){
var userGuess=event.key.toLowerCase();

//displays user's guess
document.getElementById("user").innerHTML="Your Guess: " + userGuess;


//Get id's and replace with appropriate text
 win.innerHTML = 'Wins: ' + winCount;
 loss.innerHTML = 'Losses: ' + lossCount;
 guessLeft.innerHTML = 'Guess LeftOver:  ' + LeftOver;
 guessSoFar.innerHTML= 'Guess so far: ' + soFar;


if(computerGuess === userGuess){
	winCount++;
	if(winCount===10){
		winnerImage();
	}
} 
else if(computerGuess !== userGuess){
	console.log("this works");
	LeftOver--;
	soFar++;
	if(LeftOver === 0){
	resetLeft();
	resetSoFar();
	lossCount++;
	}

}


// start of an if loop to see if user guessed right letter
// if (userGuess === randomNumber()){
// 	winCount++;
// 	win.innerHTML= 'Wins: ' + winCount;
// 	winnerImage();


//  }else if(userGuess !== randomNumber()){
//  	soFar++;
//  	guessLeft.innerHTML='Guess So Far: ' + soFar;
//  	LeftOver--;
//  	guessLeft.innerHTML='Guess Left: ' + LeftOver;
//  	}
 
//  else{
// 	"You did not type anything"
// }
}

