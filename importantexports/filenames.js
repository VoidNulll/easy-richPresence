const files = require('./files')

let filenames = []

for(let file of files) { // Loops through all profiles
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
  } else if(profile.bigFileIcon == null || profile.bigFileIcon == '') { //Makes sure the bigFileIcon is in the profile
    console.log('(Error) I need the bigFileIcon for profile: ' + profile.name);//Tells you the profile that is missing its bigFileIcon 
    process.exit()//Exits the process
  } else if(profile.littleFileIcon == null || profile.littleFileIcon == '') { //Makes sure the littleFileIcon is in the profile
    console.log('(Error) I need the littleFileIcon for profile: ' + profile.name); //Tells you the profile that is missing its littleFileIcon 
    process.exit()//Exits the process
  } else if(profile.littleIconTxt == null || profile.littleIconTxt == '') { //Makes sure the liittleIconTxtv is in the profile
    console.log('(Error) I need the littleIconTxt for profile: ' + profile.name); //Tells you the profile that is missing its littleIconTxt 
    process.exit()//Exits the process
  }else if(profile.bigIconTxt == null || profile.bigIconTxt == '') { //Makes sure the bigIconTxtv is in the profile
    console.log('(Error) I need the bigIconTxt for profile: ' + profile.name); //Tells you the profile that is missing its bigIconTxt 
    process.exit()//Exits the process
  }
  filenames.push(profile.name)
}

module.exports = filenames;