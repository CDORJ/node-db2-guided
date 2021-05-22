const knex = require("knex");
const config = require("../knexfile");

const activeCongfig = process.env.NODE_ENV || "development";
const configuredKnex = knex(config[activeCongfig]);

module.exports = configuredKnex;
