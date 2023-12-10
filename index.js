function refreshPage(){
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].classList.add("imgShake");
document.querySelectorAll("img")[1].classList.add("imgShake");
document.getElementById("diceButton").classList.add("imgShake");
document.getElementById("diceButton").setAttribute("value","Rolling🎲");
setTimeout(function(){
document.getElementById("diceButton").setAttribute("value","Roll Dice. 🎲");
document.getElementById("diceButton").classList.remove("imgShake");
document.querySelectorAll("img")[0].classList.remove("imgShake");
document.querySelectorAll("img")[1].classList.remove("imgShake");
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
  document.getElementById("mainText").innerHTML = '  <i class="fas fa-crown"></i> Player 1 Wins!!'
}
else if (randomNumber2>randomNumber1){
document.getElementById("mainText").innerHTML = 'Player 2 Wins!! <i class="fas fa-crown"></i>'
}
else{
   document.getElementById("mainText").innerHTML = "Draw!!"
 }
	},500)
 	}
