require('dotenv').config();
const knex = require('knex');
const dbEnv = process.env.NODE_ENV || 'production'
const knexConfig = require('../../knexfile')[dbEnv]
module.exports = knex(knexConfig);
