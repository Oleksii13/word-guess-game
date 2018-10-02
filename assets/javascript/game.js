var userText = document.getElementById("text");
var words = ["hitler", "kungfury","hackerman","barbariana","treciracop","thor"];
var wins = 0;
var guessRemain = 5;
var letterGuess = "";
var letterSmall = "";

var imageArray = ["assets/images/hitlerSmall.jpg","assets/images/kungfurySmall.jpg","assets/images/hackermanSmall.jpg",
  "assets/images/barbarianaSmall.jpg","assets/images/treciracopSmall.jpg","assets/images/thorSmall.jpg"];

  var myImage=document.getElementById("image");

var word = randomWord();
var dashWord = dashedWord(word);




screenText();

document.onkeyup = press;

function press(event) {
  var choose = event.key;
  guessed(choose);

  if (guessRemain > 0) {
    screenText();
    var winner = dashWord.indexOf("_");
    if (winner == -1) {
      wins++;
      word = randomWord();
      dashWord = dashedWord(word);
      letterGuess = "";
      letterSmall = "";
      guessRemain = 5;
      screenText();
    }
  } else if (guessRemain == 0) {
    word = randomWord();
    dashWord = dashedWord(word);
    letterGuess = "";
    letterSmall = "";
    guessRemain = 5;
    screenText();
  }
}

function randomWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
 var imageIndex=words.indexOf(randomWord);
 myImage.setAttribute("src",imageArray[imageIndex]);
 
  randomWord=randomWord.split("")
  return randomWord;
}

function dashedWord(word) {
  var dashWord = [];
  for (i = 0; i < word.length; i++) {
    dashWord[i] = "_";
  }
  return dashWord;
}

function guessed(choose) {
  var check = letterSmall.indexOf(choose);

  if (check == -1) {
    letterSmall = letterSmall.concat(choose, " ");
    var upperChoose = choose.toUpperCase();
    letterGuess = letterGuess.concat(upperChoose, " ");
    indexFunct(choose);
  }
}

function indexFunct(choose) {
  var index = word.indexOf(choose);

  if (index >= 0) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == choose) {
        dashWord[i] = choose;
        word[i] = " ";
      }
    }
  } else {
    guessRemain--;
  }
}

function screenText() {
  userText.innerHTML =
    "<h1>Press any key to get started!</h1><br><p>Wins: " +
    wins +
    "</p><br><p>Guess Remaining: " +
    guessRemain +
    "</p><br><p>Letters guessed: " +
    letterGuess +
    "</p><br><p>The word is: " +
    dashWord +
    "</p><br><p></p>";
}
