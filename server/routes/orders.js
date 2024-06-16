const express = require('express')
const {
    GetOrders,GetUserOrders, NewOrder
    } = require("../controllers/orders");
const  {verifyToken}  = require("../middleware/auth.js");

const router = express.Router()

router.get('/', GetOrders )
router.get('/:userId', GetUserOrders )
router.post('/', NewOrder )


module.exports = router