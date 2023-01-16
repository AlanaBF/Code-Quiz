// Given I am taking a code quiz:
// When I click the Start Quiz button

function startQuiz(event) {
  event.preventDefault();
  //hide the startscreen
  var startScreen = document.getElementById(".start-screen");
  startScreen.classList.add("hide");
  //reveal the question screen
  var questionsScreen = document.getElementById(".questions");
  questionsScreen.classList.remove("hide");
  //startTimer and display the first question
  startTimer();
  displayQuestions();
}
//when the button is clicked, the time and questions will start
document.getElementById("start").addEventListener("click", startQuiz);

var timerInterval;
var secondsLeft = 80;

// The startGame function is called when the start button is clicked
// A timer starts and I am presented with a question

function startTimer() {
  timerInterval = setInterval(function () {
    //80 second countdown
    secondsLeft--; //  decrementor
    document.getElementById(".time").textContent = secondsLeft;
    if (secondsLeft === 0) {
      // if no seconds left then the quiz will end
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// display the questions
function displayQuestions(q) {
  var question = getElementById(".question");
  question.textContent = q.question;
  var answers = document.querySelectorAll("#answers");
  answers.forEach(function (element, index) {
    element.textContent = q.answers[index]
    element.addEventListener("click", function () {
      if (q.correctAnswer == index) {
        var correctAudio = new Audio("./assets/sfx/correct.wav");
        correctAudio.play();
      } else {
        secondsLeft -= 10;
        var incorrectAudio = Audio("./assets/sfx/incorrect.wav");
        incorrectAudio.play();
      }
    });
  });
}

displayQuestions(quizArray);

//When the game is over
//Then I can save my initials and score


function endQuiz() {
  let questionsScreen = document.getElementById("questions");
  questionsScreen.classList.add("hide");
  var endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = secondsLeft;

  document.getElementById("submit").addEventListener("click", saveHighScore);
  initialsInput = initialsInput.value;
}

var submitEl = document.querySelector("#submit");
var initialsInput = document.querySelector(".initials");
var highScores = document.querySelector("#scores");

function saveHighScore() {
  document.getElementById("submit").addEventListener("click", function () {
    var initials = document.getElementById("initials").value;
    var finalScore = document.getElementById("final-score").textContent;
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, finalScore })
  });
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "highscores.html";

};