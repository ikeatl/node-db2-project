/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").del();
  await knex("cars").insert([
    { id: 1, vin: "11111111111111112", make: "toyota", model: "prius", milage: 250000, title: "salvage", transmission: "CVT" },
    { id: 2, vin: "22222222222222223", make: "ford", model: "mustang", milage: 120000, title: "clean", transmission: "manual" },
    { id: 3, vin: "33333333333333334", make: "honda", model: "accord", milage: 220000, title: "clean", transmission: "automatic" },
  ]);
};
