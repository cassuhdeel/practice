
exports.up = function(knex) {
    return knex.schema.createTable("owners", (table) => {
        table.increments("owner_id").primary(); // Sets owner_id as the primary key
        table.string("owners_name");
        table.string("owner_address");
        table.string("owner_city");
        table.string("owner_state");
        table.string("owner_zip");
        table.string("owner_phone");
        table.timestamps(true, true); // Adds created_at and updated_at columns
      });
};


exports.down = function(knex) {
    return knex.schema.dropTable("owners");
};
