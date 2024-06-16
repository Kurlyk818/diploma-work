const express = require('express')
const  {verifyToken}  = require("../middleware/auth.js");
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/products");
const router = express.Router()

router.get('/', getProducts)
router.post('/', createProduct )

router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router