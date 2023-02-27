
const images = {
    stone: '../img/stone.png',
    scissors: '../img/scissors.png',
    paper: '../img/paper.png'
  };
  
  function getRobotChoice() {
    const choices = ['stone', 'scissors', 'paper'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function play(humanChoice) {
    const robotChoice = getRobotChoice();
  
 
    const robotChoiceElement = document.getElementById('robot-choice');
    robotChoiceElement.innerHTML = `<img src="${images[robotChoice]}" alt="${robotChoice}">`;
  
    let winner;
    if (humanChoice === 'stone') {
      if (robotChoice === 'scissors') {
        winner = 'human';
      } else if (robotChoice === 'paper') {
        winner = 'robot';
      }
    } else if (humanChoice === 'scissors') {
      if (robotChoice === 'paper') {
        winner = 'human';
      } else if (robotChoice === 'stone') {
        winner = 'robot';
      }
    } else if (humanChoice === 'paper') {
      if (robotChoice === 'stone') {
        winner = 'human';
      } else if (robotChoice === 'scissors') {
        winner = 'robot';
      }
    }
  
    const humanScoreElement = document.getElementById('human-score');
    const robotScoreElement = document.getElementById('robot-score');
    if (winner === 'human') {
      humanScoreElement.innerText = parseInt(humanScoreElement.innerText) + 1;
      displayResult("You win!");
    } else if (winner === 'robot') {
      robotScoreElement.innerText = parseInt(robotScoreElement.innerText) + 1;
      displayResult("Robot wins!");
    } else {
      displayResult("It's a tie!");
    }
  }
  
  function displayResult(result) {
    const resultElement = document.createElement('p');
    resultElement.innerText = result;
    document.body.appendChild(resultElement);
    setTimeout(() => {
      resultElement.remove();
    }, 2000);
  }
  