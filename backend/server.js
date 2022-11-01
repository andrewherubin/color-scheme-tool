const Express = require('express')

const colorsRouter = require('./routes/colors')

const app = Express()
const port = 3000

app.use('/colors', colorsRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})