'use strict';

const express = require('express');
const router = express.Router();
const { Customer } = require('../models/index');

router.get('/customer', getAll);
router.post('/customer', create);

async function getAll(req, res) {
    let customer = await Customer.getAll();
    res.status(200).json(customer);
}

async function create(req, res) {
    let customer = req.body;
    //must have an email

    let customers = await Customer.create(customer);
    res.status(201).json(customers);
}

module.exports = router;
