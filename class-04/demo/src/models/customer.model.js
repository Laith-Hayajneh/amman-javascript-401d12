'use strict';

// id column will be added by default with datatibe SERIAL
const Customers = (sequelize, DataTypes) => sequelize.define('Customers', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Customers;
