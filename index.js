// alert("working");
var randomNumber1 = Math.floor((Math.random()*6)+1);
// var diceImages = (["images/dice1.png","images/dice2.png", "images/dice3.png","images/dice4.png", "images/dice5.png","images/dice6.png"]);
// document.setElementByClass(".img1").src = diceImages[randomNumber1];
var randomImage1 = "images/dice" + randomNumber1 + ".png";
// var randomImage2 = "images/" + randomImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2)

// function winner(){
if(randomNumber1>randomNumber2){
  document.getElementById("mainText").innerHTML = '  <i class="fas fa-crown"></i> Player 1 Wins!!'
}
else if (randomNumber2>randomNumber1){
document.getElementById("mainText").innerHTML = 'Player 2 Wins!! <i class="fas fa-crown"></i>'
}
else{
   document.getElementById("mainText").innerHTML = "Draw!!"
 }

 function refreshPage(){
 		// if(confirm("Are you sure, want to refresh?")){
 			location.reload();
 		// }
 	}
