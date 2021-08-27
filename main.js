const dicePlayer1 = Math.floor(Math.random() * 6) + 1;
const dicePlayer2 = Math.floor(Math.random() * 6) + 1;
const diceImage1 = document.querySelector('.img1');
const diceImage2 = document.querySelector('.img2');
const textPlayerWin = document.querySelector('h1');

diceImage1.setAttribute('src', `images/dice${dicePlayer1}.png`);
diceImage2.setAttribute('src', `images/dice${dicePlayer2}.png`);

if (dicePlayer1 === dicePlayer2) {
  textPlayerWin.textContent = 'Draw!';
} else if (dicePlayer1 > dicePlayer2) {
  textPlayerWin.textContent = '🚩Player 1 Wins!';
} else {
  textPlayerWin.textContent = 'Player 2 Wins!🚩';
}