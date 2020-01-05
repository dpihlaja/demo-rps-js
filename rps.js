const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
        } else {
      console.log('you literally do not know how to play this game...')
    }
  }
    
  function getComputerChoice() {
     switch (Math.floor(Math.random() * Math.floor(3))){
       case 0:
          return 'rock'
          break
       case 1:
          return 'paper'
          break
       case 2: 
          return 'scissors'
          break
       default: 
          return 'You tart muffin, how\'d you do this?'
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "DRAW"
    } else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return "Computer Paper Beats User Rock!"
        } else if (computerChoice === 'scissors') {
          return "User Rock Crushes Computer Scissors!"
        }
      }
      else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'User Paper Covers Computer Rock!'
        } else if (computerChoice === 'scissors') {
          return 'Computer Scissors Cuts User Paper!'
        }
      }
      else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer Rock Crushes User Scissors!'
        } else if (computerChoice === 'paper') {
          return 'User Scissors Cuts Computer Paper!'
        }
      }
      else if (userChoice === 'bomb') {
        return 'THE USER CHEATED AND WON!!!'
      }
    }
  }

function playGame() {
  const userChoice = getUserChoice('Rock') // user choice goes here. 
  const computerChoice = getComputerChoice()
  return determineWinner(userChoice, computerChoice)
}

console.log(playGame())
