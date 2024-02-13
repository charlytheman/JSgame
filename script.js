// Game variables
let playerScore = 0;
let computerScore = 0;
let movesLeft = 5;

// DOM elements
const scoreBoard = document.querySelector('.score');
const playerCount = document.querySelector('.p-count');
const computerCount = document.querySelector('.c-count');
const options = document.querySelector('.options');
const resultText = document.querySelector('.result');
const reloadBtn = document.querySelector('.reload');
const startBtn = document.querySelector('.start-btn');
const welcomeScreen = document.querySelector('.welcome');
const gameScreen = document.querySelector('.game');

// Map of moves
const moves = {
  rock: 'Rock',
  paper: 'Paper',
  scissor: 'Scissor',
};

// Event listeners
options.addEventListener('click', playRound);
reloadBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', startGame);

// Function to play a round
function playRound(e) {
  const playerMove = e.target.classList[0];
  const computerMove = getRandomMove();

  displayMove(playerMove, computerMove);
  const result = determineWinner(playerMove, computerMove);
  updateScore(result);
  updateMovesLeft();
  checkEndGame();
}

// Function to generate a random move for the computer
function getRandomMove() {
  const movesArr = Object.keys(moves);
  const randomIndex = Math.floor(Math.random() * movesArr.length);
  return movesArr[randomIndex];
}

// Function to display player and computer moves
function displayMove(playerMove, computerMove) {
  const playerMoveText = moves[playerMove];
  const computerMoveText = moves[computerMove];

  const playerMoveElement = document.querySelector('.p-choice');
  const computerMoveElement = document.querySelector('.c-choice');

  playerMoveElement.textContent = playerMoveText;
  computerMoveElement.textContent = computerMoveText;
}

// Function to determine the winner of a round
function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'draw';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissor') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissor' && computerMove === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

// Function to update the score
function updateScore(result) {
  if (result === 'player') {
    playerScore++;
  } else if (result === 'computer') {
    computerScore++;
  }

  playerCount.textContent = playerScore;
  computerCount.textContent = computerScore;
}

// Function to update the remaining moves
function updateMovesLeft() {
  movesLeft--;
  const movesLeftElement = document.querySelector('.movesleft');
  movesLeftElement.textContent = `Rounds Left: ${movesLeft}`;
}

// Function to check if the game has ended
function checkEndGame() {
  if (movesLeft === 0) {
    options.style.pointerEvents = 'none';
    resultText.textContent = getFinalResult();
    reloadBtn.style.display = 'block';
  }
}

// Function to get the final result of the game
function getFinalResult() {
  if (playerScore > computerScore) {
    return 'Congratulations! You Win!';
  } else if (playerScore < computerScore) {
    return 'Sorry! Computer Wins!';
  } else {
    return "It's a Draw!";
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  movesLeft = 5;

  playerCount.textContent = playerScore;
  computerCount.textContent = computerScore;
  const movesLeftElement = document.querySelector('.movesleft');
  movesLeftElement.textContent = `Rounds Left: ${movesLeft}`;

  options.style.pointerEvents = 'auto';
  resultText.textContent = '';
  reloadBtn.style.display = 'none';
  const playerMoveElement = document.querySelector('.p-choice');
  const computerMoveElement = document.querySelector('.c-choice');
  playerMoveElement.textContent = '';
  computerMoveElement.textContent = '';
}

// Function to start the game
function startGame() {
  welcomeScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
}

// Show loading screen for 2.7 seconds
setTimeout(() => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none';
  const welcomeScreen = document.querySelector('.welcome');
  welcomeScreen.style.display = 'flex';
}, 2700);


setTimeout(() => {
  const welcomeScreen = document.querySelector('.welcome');
  welcomeScreen.classList.add('show');
}, 1000);

