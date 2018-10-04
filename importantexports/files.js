const fs = require('fs')
const path = require('path')

/**
 * Gets the files from a directory
 * @param {string} directory The directory of the files
 */
function getFiles (directory) {
  let files = fs.readdirSync(directory).map(name => path.join(directory, name)).filter(isFile)
  for (let file in files) { // Cycles through the files
    files[file] = files[file].slice(directory.length + 1)
  }
  return files
}

function isFile (source) { // Checks if the file is source.
  return fs.lstatSync(source).isFile()
}

let files = getFiles('profiles') // Get the profiles

module.exports = files // Exports the files variable
