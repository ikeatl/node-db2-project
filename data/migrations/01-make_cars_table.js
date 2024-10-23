exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", (table) => {
    table.increments("id").unsigned().primary();

    table.string("vin").notNullable().unique();

    table.string("make").notNullable();

    table.string("model").notNullable();

    table.integer("mileage", 10, 2).unsigned().notNullable();

    table.string("title");

    table.string("transmission");
  });
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists("cars");
};
