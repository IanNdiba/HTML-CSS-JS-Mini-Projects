'use strict';

//accessing the DOM elements
const btn = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const userInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

//Random number generator
let randomNum = Math.floor(Math.random() * 20 + 1);
console.log(`The No is: ${randomNum}`);

//reset the value to zero
btnAgain.addEventListener('click', () => {
  userInput.value = '';
  message.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '';
  score.textContent = '20';

  //when again button is clicked generate another random number
  // Generate a new random number
  randomNum = Math.floor(Math.random() * 20 + 1);
  console.log('New generated No: ' + randomNum);
});

//event listener
let btnCount = 0;
btn.addEventListener('click', () => {
  //logic for the button click check
  let inputVal = parseInt(userInput.value);
  let scoreNum = parseInt(score.textContent);
  btnCount++;
  scoreNum--;
  score.textContent = scoreNum.toString();
  highscore.textContent = scoreNum.toString();

  //conditional statements checking the user input value
  if (inputVal === randomNum) {
    message.textContent = 'Correct Number!!';
    document.body.style.backgroundColor = 'green';
  } else if (inputVal < randomNum) {
    message.textContent = 'Too Low!!';
  } else if (inputVal > randomNum) {
    message.textContent = 'Too High!!';
  } else {
    console.log('Try Again');
  }

  //  TODO conditional statement for the highscore change status
  if (scoreNum.toString() > parseInt(highscore.textContent)) {
    highscore.textContent = scoreNum.toString();
  }
  console.log(typeof scoreNum, typeof highscore.textContent);
});
