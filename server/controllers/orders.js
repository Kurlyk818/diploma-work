const Order = require("../db/order.model");
const  serverErrorHandler  = require("../middleware/ServerErrorHandler");

const GetOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders) {
      return res.status(404).json({ message: 'No orders found' });
    }
    return res.status(200).json(orders);
  } catch (err) {
    serverErrorHandler(res, err);
  }
};
const GetUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }
    const orders = await Order.find({user: userId});
    if (!orders) {
      return res.status(404).json({ message: 'No orders found' });
    }
    return res.status(200).json(orders);
  } catch (err) {
    serverErrorHandler(res, err);
  }
};


const NewOrder = async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      if (!savedOrder) {
        return res.status(400).json({ message: 'Order could not be saved' });
      }
      return res.status(201).json(savedOrder);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  module.exports = { GetOrders,GetUserOrders , NewOrder };