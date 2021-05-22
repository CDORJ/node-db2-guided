const db = require("../../data/db-config");

function get() {
  return db("fruits");
}

async function getById(id) {
  return await db("fruits").first("*").where({ id });
}

async function create(newFruit) {
  const ids = await db("fruits").insert(newFruit);
  return getById(ids[0]);
}

function remove(id) {}

module.exports = {
  get,
  getById,
  create,
  remove,
};
