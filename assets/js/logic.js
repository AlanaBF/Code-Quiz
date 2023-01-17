// Given I am taking a code quiz:
// When I click the Start Quiz button
var startButton = document.getElementById("start-screen");
var nextButton = document.getElementById("next-btn");
var questionScreen = document.getElementById("questions");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  //hide the startscreen
  startButton.classList.add("hide");
  //reveal the question screen
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionScreen.classList.remove("hide");
  //startTimer and display the first question
  startTimer();
  setNextQuestion();
}
//when the button is clicked, the time and questions will start

var timerInterval;
var secondsLeft = 80;

// The startGame function is called when the start button is clicked
// A timer starts and I am presented with a question

function startTimer() {
  timerInterval = setInterval(function () {
    //80 second countdown
    secondsLeft--; //  decrementor
    document.getElementById("time").textContent = secondsLeft;
    if (secondsLeft === 0) {
      // if no seconds left then the quiz will end
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function setNextQuestion() {
  resetState();
  displayQuestions(shuffledQuestions[currentQuestionIndex]);
}

// display the questions
function displayQuestions(questions) {
  questionElement.innerText = questions.question;
  questions.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);

    // if (q.correctAnswer == index) {
    //     var correctAudio = new Audio("./assets/sfx/correct.wav");
    //     correctAudio.play();
    //   } else {
    //     secondsLeft -= 10;
    //     var incorrectAudio = Audio("./assets/sfx/incorrect.wav");
    //     incorrectAudio.play();
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "End of quiz";
    startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// When the game is over
// Then I can save my initials and score


function endQuiz() {
  questionScreen.classList.add("hide");
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