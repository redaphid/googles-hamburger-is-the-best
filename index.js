const request       = require('request')
const async         = require('async')
const _             = require('lodash')
const voteGoogleUrl = 'https://www.theverge.com/polls/vote_json?poll_option=2106263&id=468817&add_cookie=0'


const voteGoogle = (callback) => {
  request(voteGoogleUrl, (error, request, body) => {
    try {
      callback(error, JSON.parse(body))
    } catch(error) {
      callback(error)
    }
  })
}

const voteGoogleForever = (callback) => {
  console.log('Voting Google forever')
  async.times(3, (n, next) => async.forever(voteGoogle, next), callback)
}

const voteGoogleForeverForever = () => {
  voteGoogleForever( (error) =>{
    console.log('Had to slow down. Trying again in 30 seconds')
    setTimeout(voteGoogleForeverForever, 30000)
  })
}

voteGoogleForeverForever()
