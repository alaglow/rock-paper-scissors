const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


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
    computerChoice = SCISSORS;
  } else {
    computerChoice = PAPER;
  }

  return computerChoice;
}

function displayComputerChoice(computerChoice) {
  let computerImage = document.createElement('img')
  computerImage.id = 'computer-img'
  computerImage.src = getComputerImage(computerChoice);
  document.getElementById('computer-choice').appendChild(computerImage)
}


function getComputerImage(computerChoice) {
  if (computerChoice === ROCK) {
    return 'images/rock.png';
  } else if (computerChoice === SCISSORS) {
    return 'images/scissors.png';
  } else if (computerChoice === PAPER) {
    return 'images/paper.png'
  }
}

function evaluateGame(userChoice, computerChoice) {
  let choice;
  if (computerChoice === userChoice) {
    choice = document.getElementById('result-el').textContent = 'Draw!'
  } else if ((computerChoice === ROCK && userChoice === SCISSORS) || (computerChoice === SCISSORS && userChoice === PAPER) || (computerChoice === PAPER && userChoice === ROCK)) {
    choice = document.getElementById('result-el').textContent = 'You lost';
  } else {
    choice = document.getElementById('result-el').textContent = 'You win';
  }
  let buttons = document.getElementsByClassName("bt-cl");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
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
  document.getElementById('result-el').textContent = 'Let\'s play!'
  let buttons = document.getElementsByClassName("bt-cl");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}
