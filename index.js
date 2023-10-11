const ROCK = 'rock';


function onSelect(userChoice) {
  let computerChoice = getComputerChoice()
  displayComputerChoice(computerChoice)
  evaluateGame(userChoice, computerChoice)
}

function getComputerChoice() {
  let computerChoiceNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (computerChoiceNumber === 0) {
    computerChoice = ROCK;
  } else if (computerChoiceNumber === 1) {
    computerChoice = 'scissors';
  } else {
    computerChoice = 'paper';
  }

  return computerChoice;
}

function displayComputerChoice(computerChoice) {
  let computerImage = document.createElement('img')
  computerImage.src = getComputerImage(computerChoice);
  document.getElementById('computer-choice').appendChild(computerImage)
}


function getComputerImage(computerChoice) {
  if (computerChoice === ROCK) {
    return 'images/rock.png';
  } else if (computerChoice === 'scissors') {
    return 'images/scissors.png';
  } else if (computerChoice === 'paper') {
    return 'images/paper.png'
  }
}

function evaluateGame(userChoice, computerChoice) {
  let choice;
  if (computerChoice === userChoice) {
    choice = document.getElementById('result-el').textContent = 'Draw!'
  } else if ((computerChoice === ROCK && userChoice === 'scissors') || (computerChoice === "scissors" && userChoice === 'paper') || (computerChoice === "paper" && userChoice === 'scissors')) {
    choice = document.getElementById('result-el').textContent = 'You lost';
  } else {
    choice = document.getElementById('result-el').textContent = 'You win';
  }
}

function removeAllChildren(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

function onReset() {
  const computerChoice = document.getElementById('computer-choice');
  removeAllChildren(computerChoice);
  document.getElementById('result-el').textContent = 'Let\'s play'
}
