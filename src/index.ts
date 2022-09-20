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
let computerInput
if (random === 1) {
  computerInput = 'scissors'
} else if (random === 2) {
  computerInput = 'rock'
} else if (random === 3) {
  computerInput = 'paper'
}
if (computerInput === userLower) {
  console.log('You won aganist the computer!')
} else {
  console.log('You lost aganist the computer!')
}

console.log('\nDone.')
