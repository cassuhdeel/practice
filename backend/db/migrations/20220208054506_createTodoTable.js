
exports.up = function(knex) {
    return knex.schema.createTable("todo", (table) => {
        table.increments("todo_id").primary(); // Sets todo_id as the primary key
        table.string("todo_title");
        table.string("todo_description");
        table.timestamps(true, true); // Adds created_at and updated_at columns
      });
};


exports.down = function(knex) {
    return knex.schema.dropTable("todo");
};
