var randomnumber1 = Math.floor(Math.random() * 6) + 1; // from 1- 6

var randomDiceImage = "dice" + randomnumber1 + ".png"; // image/dice1.png - imagedice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomnumber2 = Math.floor(Math.random() * 6) + 1; // from 1- 6

var randomDiceImage =  "dice" + randomnumber2 + ".png"; // image/dice1.png - imagedice6.png

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins ❗ ";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "❗ Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw !";
}
