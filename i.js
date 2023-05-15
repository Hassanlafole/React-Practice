const choices = ['rock', 'paper', 'scissors'];
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', play);
});

function play(e) {
  const playerSelection = e.target.id;
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  playerChoice.innerHTML = `You chose: ${playerSelection}`;
  computerChoice.innerHTML = `Computer chose: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    result.innerHTML = 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result.innerHTML = 'You win!';
  } else {
    result.innerHTML = 'You lose!';
  }
}
