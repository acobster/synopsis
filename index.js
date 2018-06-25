/* globals process */
const notify = require('popcornnotify')
const yaml = require('js-yaml')
const fs = require('fs')


main()


/**
 * Do the thing.
 */
function main() {
  let config

  try {
    config = yaml.safeLoad(fs.readFileSync('./config.yaml'))
  } catch (e) {
    console.log(e)
    process.exit()
  }

  // put the apiKey where Popcorn knows where to look for it
  const popcornInfo = { apiKey: config.popcorn_api_key }

  // send a new plot
  config.contacts.forEach(contact => notify(contact, getPlot(), popcornInfo))

}


/**
 * Generate a plot.
 *
 * @return string
 */
function getPlot() {
  // TODO obvi
  return 'random plot text here'
}
