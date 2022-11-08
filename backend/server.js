const Express = require('express')
const Cors = require('cors')

const colorsRouter = require('./routes/colors')

const app = Express()
const port = 3000
const cors = Cors()

app.use(cors)
app.use('/colors', colorsRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})