const express = require('express')
const router = express.Router()
const Product = require('../database')

router.get('/products', async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
})

router.get('/products/:id', async (req, res, next) => {
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
})

router.post('/products', async (req, res) => {
    const product = new Product(req.body)
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
})

router.put('/products/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send({ message: `Product with id ${id} not found` })
        }

        Object.keys(req.body).forEach(key => {
            product[key] = req.body[key]
        })

        await product.save()
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
})

router.delete('/products/:id', async (req, res, next) => {
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
})

module.exports = router
