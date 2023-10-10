 /* co trzeba zrobić:
 - po wciśnięciu przycisku powinien wyświetlać się konkretny obrazek
 - komputer powinien losować obrazek
 - warunek kto wygral*/


function getUserChoice() { 
  //prompt
    return choice;
  } 
  
  function getComputerChoice() { 
    let computerChoiceNumber = Math.floor(Math.random() * 3); // 0, 1, 2
    let computerChoice;
    if (computerChoiceNumber === 0) {
      computerChoice = 'Kamień'; 
    } else if (computerChoiceNumber === 1) {
      computerChoice = 'Nożyce';
    } else {
      computerChoice = 'Papier';
    }
    
    console.log("Komputer wybrał " + computerChoice);
    return computerChoice;
  }
  
  function evaluateGame (userChoice, computerChoice) {
    let choice;
    if (computerChoice === userChoice){
      choice = 'Remis';
    } else if ((computerChoice === "Kamień" && userChoice === 'Nożyce') || (computerChoice === "Nożyce" && userChoice === 'Papier') || (computerChoice === "Papier" && userChoice === 'Kamień')){
      choice = 'Przegrałeś';
    } else {
      choice = 'Wygrałeś';
    } 
    console.log(choice);
  }
  
  function gra() {
    let userChoice = getUserChoice(); // userChoice -> "Papier"
    let computerChoice = getComputerChoice(); // computerChoice -> "Kamień"
    evaluateGame(userChoice, computerChoice); 
  }
  
  gra();