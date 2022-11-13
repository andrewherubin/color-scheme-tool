const Express = require('express')
const { Image } = require('image-js')
const ntc = require('ntcjs')

const router = Express.Router()

// GET analysis on screenshot in system
router.get('/', async function(req, res) {
    console.log('opening image...')
    const image = await Image.load(__dirname+'/screenshot.jpg')
    console.log('analyzing image...')
    /*
    ** colors is a 2-D array of color info
    ** [0] = color name
    ** [1] = pixel count
    */
    const colors = [[],[],[]]
    for (let i = 0; i < image.data.length; i+=4) {
        /* 
        ** image.data is a 1-D array of the rgb values of each pixel in the image
        ** each pixel is represented by 4 values: red, green, blue, opacity
        ** this loop extracts the rgb values into hex colors
        */ 
        let hex = '#'
        // formatHex function converts decimal value to hex string
        hex+= formatHex(image.data[i])
        hex+= formatHex(image.data[i+1])
        hex+= formatHex(image.data[i+2])
        /*
        ** ntc converts hex color value to array of closest named color
        ** [0] = rgb value of determined color
        ** [1] = color name of determined color
        ** [2] = boolean for exact match 
        */
        const n_match = ntc.name(hex)
        // if color has not been seen yet, add to array
        if (!colors[0].includes(n_match[1])) {
            colors[0].push(n_match[1])
            colors[1].push(0)
            colors[2].push(hex)
        }
        // increment pixel count of color
        ++colors[1][colors[0].indexOf(n_match[1])]
    }
    // sort colors by pixel count
    colors.sort((a, b) => { return a[1] - b[1] })
    colorLen = colors[1].length > 8 ? 8 : colors[1].length
    console.log('color scheme identified...')
    res.json({ colors: colors[2].slice(0, colorLen) })
})

module.exports = router

// function converts decimal to hex
function formatHex(num) {
    let hex = num.toString(16)
    // evaluates if leading 0 is required
    return hex.length === 1 ? '0'+hex : hex
}