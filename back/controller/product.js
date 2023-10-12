const Product = require('../models/product')

exports.getProducts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const skip = (page - 1) * limit
        const total = await Product.countDocuments()

        const products = await Product.find().skip(skip).limit(limit)

        res.status(200).json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            limit,
            data: products
        })
    } catch (err) {
        next(err)
    }
}

exports.getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` })
        }
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
}

exports.createProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

exports.updateProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` })
        }

        if (req.body.price && product.price !== req.body.price) {
            product.priceHistory.push({ date: new Date(), price: req.body.price })
            product.price = req.body.price
        }

        if (req.body.stock && product.stock !== req.body.stock) {
            product.stockHistory.push({ date: new Date(), stock: req.body.stock })
            product.stock = req.body.stock
        }

        await product.save()
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` })
        }

        await product.deleteOne(product._id)
        res.status(200).json({ message: `Product with id ${product._id} was deleted` })
    } catch (err) {
        next(err)
    }
}
