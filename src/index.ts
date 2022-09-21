/**
 * The program plays rock paper scissors with the computer
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const userInput = prompt('Enter the selection (rock,paper,scissors): ')
const random = Math.floor(Math.random() * 3 + 1)
const userLower = userInput.toLowerCase()
let computerInput = 'invalid'
if (random === 1) {
  computerInput = 'scissors'
} else if (random === 2) {
  computerInput = 'rock'
} else if (random === 3) {
  computerInput = 'paper'
}
console.log(`The computer guessed ${computerInput}.`)

switch (computerInput) {
  case 'rock':
    if (userLower === 'rock') {
      console.log('You tie with the computer!')
    } else if (userLower === 'paper') {
      console.log('You win aganist the computer!')
    } else if (userLower === 'scissors') {
      console.log('You lost against the computer!')
    } else {
      console.log('Invalid input.')
    }
    break
  case 'paper':
    if (userLower === 'rock') {
      console.log('You lost with the computer!')
    } else if (userLower === 'paper') {
      console.log('You tie with the computer!')
    } else if (userLower === 'scissors') {
      console.log('You win against the computer!')
    } else {
      console.log('Invalid input.')
    }
    break
  case 'scissors':
    if (userLower === 'rock') {
      console.log('You win against the computer!')
    } else if (userLower === 'paper') {
      console.log('You lose against the computer!')
    } else if (userLower === 'scissors') {
      console.log('You tie with the computer!')
    } else {
      console.log('Invalid input.')
    }
    break
}
console.log('\nDone.')
