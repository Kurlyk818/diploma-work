const Order = require("../db/order.model");


const GetOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (err) {
    serverErrorHandler(res, err);
  }
};

const NewOrder = async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      return res.status(201).json(savedOrder);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  module.exports = { GetOrders, NewOrder };