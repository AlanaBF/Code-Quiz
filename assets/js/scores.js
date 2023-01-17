// JavaScript code for the high scores HTML page.
// Even listener that loads the DOM content
document.addEventListener("DOMContentLoaded", function () {
  // Get high scores from local storage
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Get high scores list element
  let highScoresList = document.getElementById("highscores");

  // Loop over scores and add to list
  for (let i = 0; i < highScores.length; i++) {
    let userInformation = highScores[i];
    // creates a list element
    let li = document.createElement("li");
    // interpolation of intials and final score so that they can be appended to the high score list
    li.textContent = `${userInformation.initials} - ${userInformation.finalScore}`;
    highScoresList.appendChild(li);
  }

  // Clears high scores on the click of the Clear Highscores button 
  document.getElementById("clear").addEventListener("click", function () {
    // Clears the high scores from local storage
    localStorage.removeItem("highScores");

    // Clears high scores list
    highScoresList.innerHTML = "";
  });
});