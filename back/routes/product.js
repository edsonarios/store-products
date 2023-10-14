const express = require('express')
const router = express.Router()
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, fillProducts, getTags } = require('../controller/product.js')

router.get('/', getProducts)
router.get('/getById/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/tags', getTags)

router.get('/examples', fillProducts)

module.exports = router
