const request       = require('request')
const async         = require('async')
const _             = require('lodash')
const voteGoogleUrl = 'https://www.theverge.com/polls/vote_json?poll_option=2106263&id=468817&add_cookie=0'


const voteGoogle = (callback) => {
  request(voteGoogleUrl, (error, request, body) => {
    callback(error, JSON.parse(body))
  })
}

async.times(5, (n, next) => async.forever(voteGoogle, next), (error) => {
  throw error
})
