const mongoose = require('mongoose')

const URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/products'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    sku: String,
    imageUrl: String,
    tags: [String],
    price: Number,
    stock: Number,
    priceHistory: [{ date: Date, price: Number }],
    stockHistory: [{ date: Date, stock: Number }],
    rating: Number,
    category: String,
    inventoryStatus: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
