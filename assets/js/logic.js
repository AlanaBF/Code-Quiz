// When I click the start button

// Then a timer starts and I am presented with a question

// When I answer a question

//Then I am presented with another question

// When I answer a question incorrectly

//Then time is subtracted from the clock

// When all questions are answered or the timer reaches 0

// Then the game is over

// WHen the game is over

// Then I can save my initials and score




// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable - starts it
  var timerInterval = setInterval(function() {
    secondsLeft--; // same as secondsLeft = secondsLeft -1 (decrementor)
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval - stops it
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();