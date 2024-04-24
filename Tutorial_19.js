
var ourChoice = parseInt(Math.random() * 100);

function checkGuess() {
  var userGuess = parseInt(document.getElementById("guess").value)

  var resultDiv = document.getElementById("result");

  if (userGuess > ourChoice) {
    resultDiv.innerHTML = "Your guess is higher than my number";
    resultDiv.style.color = "red";
  }

  if (userGuess < ourChoice) {
    resultDiv.innerHTML = "Your guess is lower than my number";
    resultDiv.style.color = "blue";
  }

  if (userGuess == ourChoice) {
    resultDiv.innerHTML = "Yes! you guessed it right!";
    resultDiv.style.color = "green";
  }
}