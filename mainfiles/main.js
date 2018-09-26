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

function arrayMachine(arrayName, pushing) {
    arrayName.forEach(() => {
      arrayName.pop()
    });
    if(arrayName.length == 0) {
      arrayName.push(pushing);
    } else {
      
    }
}

let backupname = []
backupname.push(name[0])

let rpcs = require('../importantexports/rpcs')

const rpcname = []
let rpc1 = []
for(let rpc2 of rpcs) {
  if(rpc2.name == name[0]) {
    rpc1.push(rpc2)
    rpcname.push(rpc2.name)
  }
}

if(fConfig.prompt !== 'true') {
  rpc.on('ready', () => {
    console.log("ready");
    setActivity({
      state: rpc1[0].state,
      details: rpc1[0].details,
      largeImg: rpc1[0].bigFileIcon,
      SmallImg: rpc1[0].littleFileIcon,
      LargeImgTxt: rpc1[0].bigIconTxt,
      SmallImgTxt: rpc1[0].littleIconTxt
    })
  });  
} else {
  const readline = require('readline')

const filenames = require('../importantexports/filenames')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Would you like to set your profile (set), clear your activity (clear/c), or exit the app (exit/e)? '
})
rpc.on('ready', () => {
  console.log("ready");
  setActivity({
    state: rpc1[0].state,
    details: rpc1[0].details,
    largeImg: rpc1[0].bigFileIcon,
    SmallImg: rpc1[0].littleFileIcon,
    LargeImgTxt: rpc1[0].bigIconTxt,
    SmallImgTxt: rpc1[0].littleIconTxt
  })
  rl.prompt()
});

rl.on('line', (line) =>{
  if(line == 'exit' || line == 'e') {
    rl.question('Are you sure you want to exit? (y/yes)(n/no) ', (answer) => {
      if (answer.match(/^y(es)?$/i)) process.exit()
      else if (answer.match(/^n(o)?$/i)) console.log('Ok, i will not exit')
      else console.log('Thats not a option, i have no exited the application')
      rl.prompt()
    });
  } else if(line == 'set') {
    rl.question(`Which of these would you like to set your profile to? Here are your options: ${filenames.join(", ")}. `, (answer) =>{
      if(filenames.includes(answer)) {
        arrayMachine(name, answer);
        console.log('Your profile has been set to: ' + answer);
        rl.prompt()
      } else {
        console.log('That is not a profile i recognize.');
        rl.prompt()
      }
    })
  }
    else if(line == 'clear' || line == 'c') {
      rl.question('Are you sure you want to clear your activity? (y/yes)(n/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rpc.clearActivity()
        else if (answer.match(/^n(o)?$/i)) console.log('I have not cleared your activity!')
        rl.prompt();
      })
  } else {
    console.log('Thats not a option!')
    rl.prompt()
  }
  rl.prompt();
})
}



/**
 * Sets the owners rich presence
 */

function richPresReset() {
  if(rpcname[0] !== name[0] && backupname[0] !== name[0]) { //If stuff
    for(let rpc2 of rpcs) { //For of rpcs (array of all rpc profiles)
      if(rpc2.name == name[0]) {
        arrayMachine(backupname, name[0])
      arrayMachine(rpc1, rpc2)//Function to update arrays
      setActivity({//Function to update the users activity
        state: rpc1[0].state,
        details: rpc1[0].details,
        largeImg: rpc1[0].bigFileIcon,
        SmallImg: rpc1[0].littleFileIcon,
        LargeImgTxt: rpc1[0].bigIconTxt,
        SmallImgTxt: rpc1[0].littleIconTxt
      })
      }
    }
  } else if(name[0] == backupname[0] && name[0] !== rpcname[0]) {//If stuff
    arrayMachine(rpcname, name[0]) //edit rpcname array
  }
}

setInterval(richPresReset, Number(fConfig.timer)) //Timer

rpc.login({ clientId }).catch(console.error);