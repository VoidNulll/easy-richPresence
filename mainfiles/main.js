// Require all needed things
const rpc = require('./rpc')
const fConfig = require('../presence-config/fConfig')
const clientId = fConfig.clientId
const setActivity = require('../importantexports/setActivity')
let name = []

name.push(fConfig.name)

/**
*Edits an array
*@param {array} arrayName Name of the array you want to edit.
*@param {string} pushing Stuff to push to the array
*/

function arrayMachine (arrayName, pushing) {
  for (i in arrayName) {
    arrayName.pop()
  }
  if (arrayName.length == 0) {
    arrayName.push(pushing)
  } else {

  }
}

let backupname = []
backupname.push(name[0])

let rpcs = require('../importantexports/rpcs') // Require rpc profiles

const rpcname = []
let rpc1 = []
for (let rpc2 of rpcs) { // Loops through the rpcs
  if (rpc2.name == name[0]) { // Checks for the rpc name
    rpc1.push(rpc2) // Pushes the rpc to rpc1 if the rpc name equals name[0]
    rpcname.push(rpc2.name)
  }
}

if (fConfig.prompt !== 'true') { // Checks if the prompt is not true
  rpc.on('ready', () => {
    console.log('ready')
    setActivity({ // Set the activity
      state: rpc1[0].state,
      details: rpc1[0].details,
      largeImg: rpc1[0].assets.large.icon,
      SmallImg: rpc1[0].assets.small.icon,
      LargeImgTxt: rpc1[0].assets.large.txt,
      SmallImgTxt: rpc1[0].assets.small.txt
    })
  })
} else { // if the prompt is not set to true, do this
  const readline = require('readline') // Require readline api

  const filenames = require('../importantexports/filenames')// Get all of the filenames

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Would you like to set your profile (set), clear your activity (clear/c), or exit the app (exit/e)? '
  })
  rpc.on('ready', () => { //
    console.log('ready')
    setActivity({ // Set the activitu
      state: rpc1[0].state,
      details: rpc1[0].details,
      largeImg: rpc1[0].assets.large.icon,
      SmallImg: rpc1[0].assets.small.icon,
      LargeImgTxt: rpc1[0].assets.large.txt,
      SmallImgTxt: rpc1[0].assets.small.txt
    })
    rl.prompt()// Start the prompt
  })

  rl.on('line', (line) => { // readline line event
    if (line == 'exit' || line == 'e') {
      rl.question('Are you sure you want to exit? (y/yes)(n/no) ', (answer) => { // Question the user
        if (answer.match(/^y(es)?$/i)) process.exit()// Exit the process
        else if (answer.match(/^n(o)?$/i)) console.log('Ok, i will not exit')
        else console.log('Thats not a option, i have no exited the application')
        rl.prompt()// Show the prompt
      })
    } else if (line == 'set') {
      rl.question(`Which of these would you like to set your profile to? Here are your options: ${filenames.join(', ')}. `, (answer) => { // Ask the user what profile they would like to set
        if (filenames.includes(answer)) { // Makes sure the answer is a valid profile name
          arrayMachine(name, answer)
          console.log('Your profile has been set to: ' + answer) // Tell the user it was a success
          rl.prompt()// Show the prompt
        } else { // If the answer is not a valid profile
          console.log('That is not a profile i recognize.') // Tell the user that the answer is not a valid profile
          rl.prompt()// Show the prompt
        }
      })
    } else if (line == 'clear' || line == 'c') {
      rl.question('Are you sure you want to clear your activity? (y/yes)(n/no) ', (answer) => { // Ask them if they want to clear the activity
        if (answer.match(/^y(es)?$/i)) rpc.clearActivity() // Clear the activity if the answer is y/yes
        else if (answer.match(/^n(o)?$/i)) console.log('I have not cleared your activity!') // It tells the user that the app has not cleared the users activity

        rl.prompt() // Show the prompt
      })
    } else {
      console.log('Thats not a option!') // Tell them that what they are trying to is not a option that the app recognizes.
      rl.prompt()
    }
    rl.prompt()
  })
}

/**
 * Sets the owners rich presence
 */

function richPresReset () {
  if (rpcname[0] !== name[0] && backupname[0] !== name[0]) { // If stuff
    for (let rpc2 of rpcs) { // For of rpcs (array of all rpc profiles)
      if (rpc2.name == name[0]) {
        arrayMachine(backupname, name[0])
        arrayMachine(rpc1, rpc2)// Function to update arrays
        setActivity({// Function to update the users activity
          state: rpc1[0].state,
          details: rpc1[0].details,
          largeImg: rpc1[0].assets.large.icon,
          SmallImg: rpc1[0].assets.small.icon,
          LargeImgTxt: rpc1[0].assets.large.txt,
          SmallImgTxt: rpc1[0].assets.small.txt
        })
      }
    }
  } else if (name[0] == backupname[0] && name[0] !== rpcname[0]) { // If stuff
    arrayMachine(rpcname, name[0]) // edit rpcname array
  }
}

setInterval(richPresReset, Number(fConfig.timer)) // Updates the rich presence every x (fConfig.timer) milliseconds

rpc.login({ clientId }).catch(console.error) // Logs in, catches any errors
