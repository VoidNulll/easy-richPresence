const files = require('./files')

let rpcs = []
for(let file of files) { //loops through all the profiles
  let profile = require('../profiles/' + file)()
  if(profile.name == '' || profile.name == null) { //Makes sure the name is in the profile
    console.log('I need the profile name for file: ' + file); //Tells you the profile that is missing its name 
    process.exit() //Exits the process
  }
  if(profile.details == null || profile.details == '') { //Makes sure the details are in the profile
    console.log('(Error) I need the details for profile: ' + profile.name); //Tells you the profile that is missing its details
    process.exit()//Exits the process
  } else if(profile.state == null || profile.state == '') { //Makes sure the state is in the profile
    console.log('(Error) I need the state for profile: ' + profile.name);//Tells you the profile that is missing its state 
    process.exit()//Exits the process
  } else if(profile.assets.large.icon == null || profile.assets.large.icon == '') { //Makes sure the assets.large.icon is in the profile
    console.log('(Error) I need the assets large icon for profile: ' + profile.name);//Tells you the profile that is missing its assets.large.icon 
    process.exit()//Exits the process
  } else if(profile.assets.small.icon == null || profile.assets.small.icon == '') { //Makes sure the assets.small.icon is in the profile
    console.log('(Error) I need the assets small icon for profile: ' + profile.name); //Tells you the profile that is missing its assets.small.icon 
    process.exit()//Exits the process
  } else if(profile.assets.small.txt == null || profile.assets.small.txt == '') { //Makes sure the assets.small.txt is in the profile
    console.log('(Error) I need the assets small txt for profile: ' + profile.name); //Tells you the profile that is missing its assets.small.txt 
    process.exit()//Exits the process
  }else if(profile.assets.large.txt == null || profile.assets.large.txt == '') { //Makes sure the assets.large.txt is in the profile
    console.log('(Error) I need the assets large txt for profile: ' + profile.name); //Tells you the profile that is missing its assets.large.txt 
    process.exit()//Exits the process
  }
  rpcs.push(profile) //Pushs the rpc
}

module.exports = rpcs;