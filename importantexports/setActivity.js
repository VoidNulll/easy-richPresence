const rpc = require('../mainfiles/rpc')
/**
 * Sets the owners rich presence
 * @arg {object} [options] The options for the setActivity function
 * @arg {string} [options.details] The rich presence details
 * @arg {string} [options.state] The rich presence state
 * @arg {string} [options.largeImg] The Large image in the rich presence
 * @arg {string} [options.SmallImg] The small image in the rich presence
 * @arg {string} [options.LargeImgTxt] The text for the large image
 * @arg {string} [options.SmallImgTxt] The text for the small image
 */
function setActivity (options) {
  rpc.setActivity({
    details: options.state, // Sets the details
    state: options.details, // Sets the state
    largeImageKey: options.largeImg, // Sets the largeImageKey
    largeImageText: options.LargeImgTxt, // Sets the largeImageText
    smallImageKey: options.SmallImg, // Sets the smallImageKey
    smallImageText: options.SmallImgTxt, // Sets the smallImageText
    instance: false,
    startTimestamp: new Date()
  })
}

module.exports = setActivity
