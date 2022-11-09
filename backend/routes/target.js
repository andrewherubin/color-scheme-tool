const Express = require('express')
const Puppeteer = require('puppeteer')
const BodyParser = require('body-parser')

const router = Express.Router()
const jsonParser = BodyParser.json()

// POST new target website
router.post('/', jsonParser, async function(req, res) {
    console.log(`post request incoming for: ${req.body.url}...`)
    /*
    ** puppeteer allows manipulation of a headless chromium browser
    ** .launch() launches browser
    ** .newPage() opens a new page for browser
    ** .goto() navigates to specifed url
    ** .screenshot() takes screenshot of page
    */
    const browser = await Puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(req.body.url)
    // take a lower quality screenshot to reduce amount of pixels
    await page.screenshot({ path: __dirname+'/screenshot.jpg' })
    browser.close()
    console.log(`screenshot saved for: ${req.body.url}...`)
    res.json({ message: 'screenshot taken.' })
})

module.exports = router