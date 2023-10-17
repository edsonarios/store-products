const Product = require('../models/product')
const examples = require('./examples.json')

exports.fillProducts = async (req, res) => {
    try {
        const savePromises = examples.map(async data => {
            const product = new Product(data)
            const newProduct = await product.save()
            return newProduct
        })
        const newProducts = await Promise.all(savePromises)
        res.status(201).json(newProducts)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        // Filters by query
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const nameFilter = req.query.name || ''
        const priceFilter = parseFloat(req.query.price) || null
        let ratings = req.query.rating
        if (typeof ratings === 'string') {
            ratings = ratings.split(',')
        }
        let categories = req.query.category
        if (typeof categories === 'string') {
            categories = categories.split(',')
        }

        // Make filters
        const filter = {}
        if (nameFilter) filter.name = new RegExp(nameFilter, 'i')
        if (priceFilter) filter.price = { $lte: priceFilter }
        if (ratings && ratings.length > 0) {
            filter.rating = { $in: ratings }
        }
        if (categories && categories.length > 0) {
            filter.tags = { $in: categories }
        }

        // Pagination
        const skip = (page - 1) * limit
        const total = await Product.countDocuments(filter)

        const products = await Product.find(filter).skip(skip).limit(limit)

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
        console.log(req.body)

        if (req.body.price && product.price !== req.body.price) {
            product.priceHistory.push({ date: new Date(), price: req.body.price })
            product.price = req.body.price
        }

        if (req.body.stock && product.stock !== req.body.stock) {
            product.stockHistory.push({ date: new Date(), stock: req.body.stock })
            product.stock = req.body.stock
        }

        Object.keys(req.body).forEach(key => {
            if (key !== 'price' && key !== 'stock') {
                product[key] = req.body[key]
            }
        })

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

exports.getTags = async (req, res, next) => {
    try {
        const tags = await Product.distinct('tags')
        const objectTags = tags.map(name => {
            return { name }
        })
        res.status(200).json({
            total: tags.length,
            data: objectTags
        })
    } catch (err) {
        next(err)
    }
}
