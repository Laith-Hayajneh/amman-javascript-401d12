'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const people = require('./people.model');

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    People: people(sequelize, DataTypes),
}
