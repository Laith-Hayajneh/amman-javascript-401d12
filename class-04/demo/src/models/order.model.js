'use strict';

const Orders = (sequelize, DataTypes) => sequelize.define('Orders', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Orders;