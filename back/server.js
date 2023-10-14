const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

const errorHandler = require('./middleware/errorHandler')
const productRoutes = require('./routes/product.js')

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api/products', productRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
