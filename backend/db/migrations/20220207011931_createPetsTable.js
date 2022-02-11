exports.up = function(knex) {
    return knex.schema.createTable("pets", (table) => {
        table.increments("pet_id").primary(); // Sets `product_id` as the primary key
        table.string("pet_breed");
        table.string("pet_name");
        table.decimal("pet_weight_in_lbs");
        table.integer("owner_id").unsigned().notNullable();
        table
          .foreign("owner_id")
          .references("owner_id")
          .inTable("owners")
          .onDelete("cascade");
        table.timestamps(true, true);
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable("pets");
};
