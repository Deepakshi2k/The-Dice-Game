var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var dice1src = "images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",dice1src);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var dicesrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",dicesrc2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
