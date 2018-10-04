const files = require('./files')

let filenames = []

for (let file of files) { // Loops through all profiles
  let profile = require('../profiles/' + file)()
  filenames.push(profile.name) // Push the profile to filenames
}

module.exports = filenames
