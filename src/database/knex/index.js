const config = require("../../../knexfile");
const knex = require("kenx")

const connection = knex(config.development)

module.exports = connection;