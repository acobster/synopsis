/* globals process */
const notify = require('popcornnotify')
const yaml = require('js-yaml')
const fs = require('fs')
const rp = require('request-promise')
const { JSDOM } = require('jsdom')


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
  getPlot()
    .then(plot => config.contacts.forEach(
      contact => notify(contact, plot, popcornInfo)))



}

/**
 * Generate a plot.
 *
 * @return string
 */
function getPlot() {
  return new Promise((resolve, reject) => {
    rp('https://words.bighugelabs.com/plot.php').then(html => {
      const doc = new JSDOM(html).window.document

      let plot
      try {
        plot = doc.querySelector('.loglines li').textContent
      } catch(e) {
        reject('An automated texting system goes awry, with hilarious results')
      }

      if (plot) {
        resolve(plot)
      } else {
        reject('An automated texting system goes off the rails.')
      }
    }).catch(err => reject(err.message))
  })
}
