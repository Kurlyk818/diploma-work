const express = require('express')
const {
    GetOrders, NewOrder
    } = require("../controllers/orders");
const  {verifyToken}  = require("../middleware/auth.js");

const router = express.Router()

router.get('/', GetOrders )
router.post('/', NewOrder )


module.exports = router