'use strict';

const express = require('express');
const router = express.Router();
const { Order } = require('../models/index');

router.get('/order', getAllOrders);
router.post('/order', createOrders);

async function getAllOrders(req, res) {
    let orders = await Order.getAll();
    res.status(200).json(orders);
}

async function createOrders(req, res) {
    let order = req.body;
    //must have an email

    let orders = await Order.create(order);
    res.status(201).json(orders);
}

module.exports = router;
