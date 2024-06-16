const express = require('express')
const {
    getFavoritesProduct, newFavoriteProduct, deleteFavoriteProduct
    } = require("../controllers/favorites");
const  {verifyToken}  = require("../middleware/auth.js");

const router = express.Router()

router.get('/', getFavoritesProduct)
router.post('/', newFavoriteProduct )

router.delete('/:id', deleteFavoriteProduct)

module.exports = router