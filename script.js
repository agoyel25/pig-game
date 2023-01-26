'use strict';
//const rand = Math.floor(Math.random() * 7);

//selecting items
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const diceel = document.querySelector('.dice');
const btnNEw = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//start
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

btnNEw.addEventListener('click', function () {
  score0el.textContent = 0;
  score1el.textContent = 0;
  diceel.classList.add('hidden');
  let currentScore = 0;
  let activePlayer = 0;
  const scores = [0, 0];
});

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//function rand(){
//    return Math.floor(Math.random() * 7);
//}

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const rand = Math.trunc(Math.random() * 6) + 1;
    //2. Displaying a dice
    diceel.classList.remove('hidden');
    diceel.src = `dice-${rand}.png`;

    //3. checking if =1

    if (rand !== 1) {
      //add a dice to current score
      currentScore = currentScore + rand;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to nexxt player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check the winner
  }
  if (scores[activePlayer] >= 10) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else {
    switchPlayer();
  }
});
