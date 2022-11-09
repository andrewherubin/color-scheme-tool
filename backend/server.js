const Express = require('express')
const Cors = require('cors')

const analysisRouter = require('./routes/analysis')
const targetRouter = require('./routes/target')

const app = Express()
// run on port defined by environment variable or default to port 3000
const port = process.env.PORT || 3000
const cors = Cors()

app.use(cors)
app.use('/analysis', analysisRouter)
app.use('/target', targetRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})