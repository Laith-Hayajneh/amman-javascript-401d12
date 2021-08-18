'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/class4";
const { Sequelize, DataTypes } = require('sequelize');
const customers = require('./customer.model');
const orders = require('./order.model');
const Collection = require('./lib/collection');

var sequelize = new Sequelize(POSTGRES_URI, {});

const customerModel = customers(sequelize, DataTypes);
const orderModel = orders(sequelize, DataTypes);

// create our relations that will add 'foreign keys' to our tables
customerModel.hasMany(orderModel, { sourceKey: 'id', foreignKey: 'customerId' });
orderModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });

const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);

module.exports = {
    db: sequelize,
    Customer: customerCollection,
    Order: orderCollection
}
