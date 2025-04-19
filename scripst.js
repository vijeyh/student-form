//Selecting elements

var inputBox = document.getElementById("inputBox");
var btn = document.getElementById("btn");
var guess = document.getElementById("guess");
var noofguess = 3;

//Generate random number from 1 to 5
var randomNumber = Math.floor(Math.random() * 10) + 1;
if (randomNumber > 5) {
  randomNumber = randomNumber - 5;
}

//Event handlers
function check() {
  if (inputBox.value == randomNumber) {
    alert("You got it right! Congrats");
    result.textContent = "You are right!";
  } else {
    noofguess = noofguess - 1;
    if (noofguess == 0) {
      alert("You lost! " + randomNumber);
    }
    guess.textContent = "Available guess:" + noofguess;
    result.textContent = "You are wrong!";
  }
}
