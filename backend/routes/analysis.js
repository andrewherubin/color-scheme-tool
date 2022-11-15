const Express = require('express')
const { Image } = require('image-js')

const router = Express.Router()

// GET analysis on screenshot in system
router.get('/', async function(req, res) {
    console.log('opening image...')
    const image = await Image.load(__dirname+'/screenshot.jpg')
    console.log('analyzing image...')
    /*
    ** colors is a 2-D array of color info
    ** [0] = color
    ** [1] = pixel count
    */
    const colors = [[],[]]
    // loop through all pixels
    for (let i = 0; i < image.data.length; i+=4) {
        // construct color object for each pixel
        const color = {
            r: image.data[i],
            g: image.data[i+1],
            b: image.data[i+2]
        }
        processColor(color, colors)
    }
    // sort colors by pixel count
    colors.sort((a,b)=>{return a[1]-b[1]})
    // shorten array to at most 8 colors
    const len = colors[0].length > 8 ? 8 : colors[0].length
    const target = []
    // convert color objects to hex values
    colors[0].splice(0, len).forEach((color) => {
        let hex = '#'
        hex += formatHex(color.r)
        hex += formatHex(color.g)
        hex += formatHex(color.b)
        target.push(hex)
    })
    res.json({ colors: target })
})

module.exports = router

// function determines if the hex value represents a new color
function processColor(color, colors) {
    for (let i = 0; i < colors[0].length; ++i) {
        // rgb difference of 75 is enough to be new color
        if ((Math.abs(color.r-colors[0][i].r)+Math.abs(color.g-colors[0][i].g)+Math.abs(color.b-colors[0][i].b)) < 75) {
            ++colors[1][i]
            return true
        }
    }
    colors[0].push(color)
    colors[1].push(1)
    return false
}

// function converts decimal to hex
function formatHex(num) {
    let hex = num.toString(16)
    // evaluates if leading 0 is required
    return hex.length === 1 ? '0'+hex : hex
}