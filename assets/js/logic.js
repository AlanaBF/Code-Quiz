// Variables
var startButton = document.getElementById("start-screen");
var nextButton = document.getElementById("next-btn");
var questionScreen = document.getElementById("questions");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");

var shuffledQuestions, currentQuestionIndex;

// Given I am taking a code quiz:
// When I click the Start Quiz button the time and questions will start
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // Hides the startscreen
  startButton.classList.add("hide");
  // Shuffles the questions so they come up in a random order
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  // Reveals the question screen
  questionScreen.classList.remove("hide");
  // Calls the startTimer and set the next question to action
  startTimer();
  setNextQuestion();
};

// Variables needed for the start timer function
var timerInterval;
var secondsLeft = 80;

// Function for the countdown timer displayed in top right hand corner
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
};

// Listens for the next button to be clicked
nextButton.addEventListener("click", () => {
  // When clicked it will increment through to the next question
  currentQuestionIndex++;
  // Next question is called
  setNextQuestion();
});

function setNextQuestion() {
  // Reset state is called so that all the possible answer options are reset ready for the next question
  resetState();
  // Display the questions is called to cycle through the randomly ordered questions
  displayQuestions(shuffledQuestions[currentQuestionIndex]);
};

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    // Removes all the children (the answer options) ready for the next questions set of poosible answers
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

// Displays the questions
function displayQuestions(questions) {
  // The questions array and the question in the array
  questionElement.innerText = questions.question;
  // The questions array and the possible answer options within the array
  questions.answers.forEach(answer => {
    // A button created within the DOM to be able to select the user answer on a click
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    // If the correct answer it sets a correct answer data value to it
    if (answer.correctAnswer) {
      button.dataset.correct = answer.correctAnswer;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
};

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  if (correct) {
    // If the correct answer is selected it plays a sound
    var correctAudio = new Audio("./assets/sfx/correct.wav");
    correctAudio.play();
    alert("Well done, correct answer!")
  } else {
    // If a wrong answer is selected a different sound plays and 10 seconds is removed from the time
    secondsLeft -= 10;
    var incorrectAudio = new Audio("./assets/sfx/incorrect.wav");
    incorrectAudio.play();
    alert("Uh oh, wrong answer. -10 seconds off the clock")
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // If there are still questions to be answered the next button can be clicked
    nextButton.classList.remove("hide");
  } else {
    // If there are no more questions the quiz will end and the timer will stop
    clearInterval(timerInterval);
    endQuiz();
  }
};

// When the game is over
// Then I can save my initials and score

function endQuiz() {
  // Question screen will be hidden and the end screen will show
  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  // Final score which is equal to the seconds left will be shown
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = secondsLeft;
  // When initials are submitted, they will be saved as a value with the high score
  document.getElementById("submit").addEventListener("click", saveHighScore);
  initialsInput = initialsInput.value;
};

var submitEl = document.querySelector("#submit");
var initialsInput = document.querySelector(".initials");
var highScores = document.querySelector("#scores");

function saveHighScore() {

  var initials = document.getElementById("initials").value;
  var finalScore = document.getElementById("final-score").textContent;
  // High score and initials will be saved in local storage an empty array
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // The initials and high score are pushed to the empty array
  highScores.push({ initials, finalScore })
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "highscores.html";
};