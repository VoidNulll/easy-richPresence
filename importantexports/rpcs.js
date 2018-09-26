const files = require('./files')

let rpcs = []
for(let file of files) { //loops through all the profiles
  let rpc = require('../profiles/' + file)()
  rpcs.push(rpc) //Pushs the rpc
}

module.exports = rpcs;