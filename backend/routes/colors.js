const Express = require('express')
const Puppeteer = require('puppeteer')
const { Image } = require('image-js')

const router = Express.Router()

router.get('/', (req, res) => {
    res.send('Colors page!')
})

router.get('/:id', async function(req, res) {
    console.log(`analysing: ${req.params.id}`)
    const url = 'https://' + req.params.id
    const browser = await Puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({path:__dirname+'/screenshot.jpg', quality:5, fullPage:true})
    await browser.close()
    const image = await Image.load(__dirname+'/screenshot.jpg')
    const colors = []
    const colorObj = []
    for (let i = 0; i < image.data.length; i+=4) {
        let hex = '#'
        hex+= formatHex(image.data[i])
        hex+= formatHex(image.data[i+1])
        hex+= formatHex(image.data[i+2])
        if (!colors.includes(hex)) {
            colors.push(hex)
            const color = {
                hex: hex,
                count: 0
            }
            colorObj.push(color)
        }
        ++colorObj[colors.indexOf(hex)].count
    }
    colorObj.sort(function(a, b) {
        return b.count - a.count
    })
    const arrLen = colorObj.length < 16 ? colorObj.length : 16
    const schemeArray = []
    for (let i = 0; i < arrLen; ++i) {
        schemeArray.push(colorObj[i].hex)
    }
    res.send(schemeArray)
})

function formatHex(num) {
    let hex = num.toString(16)
    let str = ''
    if (hex.length === 1) {
        str += '0'
    }
    return str+hex
}

module.exports = router