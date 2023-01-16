// Description: This file contains the JavaScript code for the high scores page.

document.addEventListener("DOMContentLoaded", function () {
    // Get high scores from local storage
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Sort scores in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    // Get high scores list element
    let highScoresList = document.getElementById("highscores");
  
    // Loop over scores and add to list
    for (let i = 0; i < highScores.length; i++) {
      let secondsLeft = highScores[i];
  
      let li = document.createElement("li");
      li.textContent = `${secondsLeft.initials} - ${secondsLeft.secondsLeft}`;
      highScoresList.appendChild(li);
    }
  console.log(highScores);
    // Handle clear high scores button click
    document.getElementById("clear").addEventListener("click", function () {
      // Clear high scores from local storage
      localStorage.removeItem("highScores");
  
      // Clear high scores list
      highScoresList.innerHTML = "";
    });
  });