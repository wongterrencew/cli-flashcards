const rl = require('readline-sync')
const client = require('../../lib/client')
const serverLauncher = require('../../lib/server-launcher')

function handler (deck) {
  serverLauncher.launch(() => practiceDeck(deck))
}

function practiceDeck (deck) {
  client.getNextCard((err, card) => {
    const {sideA, sideB} = card
    if (err) {
      console.log(err)
      return
    }

    rl.question(`${sideA}`)
    console.log(`${sideB}`)
    const response = rl.question('Did you get it correct (y/n)? ')
    process.exit()
  })
}

module.exports = {
  command: 'practice',
  desc: 'Practice flashcards',
  builder: {
    deck: {
      describe: 'Specify a deck(s) of flashcards to practice',
      type: 'array',
      choices: ['spanish']
    }
  },
  handler: ({deck}) => handler(deck)
}