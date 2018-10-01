var userText = document.getElementById("text");
var words = ["madonna", "bieber"];
var wins = 0;
var guessRemain = 5;
var letterGuessed;

var object = {};

function randomWorld() {
  var randomWorld = words[Math.floor(Math.random() * words.length)];
  return randomWorld;
}

function dashedWord(word) {
  var amountChar = word.length;
  var dashWord = [];
  for (i = 0; i < word.length; i++) {
    dashWord[i] = "_";
  }
}
