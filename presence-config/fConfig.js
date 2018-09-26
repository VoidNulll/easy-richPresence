const config = require('./config')

const rpcs = require('../importantexports/rpcs')

const timer = []

const name = []

let rpcnames = []

if(!config.richpres.clientId || config.richpres.clientId == '') { //If there is no clientId
    console.log("(Error) I need a clientId!");
    process.exit()
}
if(Number(config.richpres.timer) < 1500) { //If the timer is below 1500
    console.log('(Warn) Heads up: The timer can not be below 1500, but i have set it for you')
    timer.push(1500)
} else {
    timer.push(config.richpres.timer)
}

if(!config.richpres.name) {//If there is no name
    console.log('(Error) I need a profile name to start')
    process.exit()
} else {
    for(let rpc of rpcs) {
        if(rpc.name == config.richpres.name) {
            name.push(rpc.name)
        } else {
            rpcnames.push(rpc.name)
        }
    };
    if(rpcnames.length == rpcs.length) { //If the rpcnames length equals the rp;cs length
        console.log('(Error) The name you put in the config file was invalid (I couldnt find any profiles with that name attached)') //Inform the user
        process.exit() //Exit the app
    }
}

let fConfig = {
    name: name[0], //The name that is going to be used
    timer: timer[0], //The timer that is going to be used to make the presence update (in milliseconds)
    clientId: config.richpres.clientId, //The clientId
    prompt: config.richpres.prompt //True or false value for the prompt
}

module.exports = fConfig;