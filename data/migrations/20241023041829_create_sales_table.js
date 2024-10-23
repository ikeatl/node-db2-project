/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sales", (table) => {
    table.increments("id").primary();
    table.integer("car_id").unsigned().notNullable().references("id").inTable("cars").onDelete("CASCADE");
    table.decimal("sale_price", 10, 2).notNullable();
    table.date("sale_date").notNullable();
    table.string("buyer_name").notNullable();

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sales");
};
