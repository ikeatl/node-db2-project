const db = require("../../data/db-config");
const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where({ id }).first();
};

const create = async (car) => {
  // DO YOUR MAGIC
  const [id] = await db("cars").insert(car);
  return db("cars").where({ id }).first();
};

const update = async (id, changes) => {
  await db("cars").where({ id }).update(changes);
  return getById(id);
};

const remove = async (id) => {
  const deletedCar = await getById(id);
  await db("cars").where({ id }).del();
  return deletedCar;
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
