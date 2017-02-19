const request = require('request')
const endPoints = require('./end-points')

function getNextCard (callback) {
  const {url, method} = endPoints.nextCard
  console.log('hello!')
  request(
    {
      url,
      method,
      json: true
    },
    (err, _, card) => throw new Error('foo')
  )
}

function submitCard (cardId, grade, callback) {
  const {url, method} = endPoints.submitCard
  request({
    url,
    method,
    json: {
      cardId,
      grade
    }
  })
}

module.exports = {
  getNextCard,
  submitCard
}