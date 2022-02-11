const knex = require("../db/connection");


function create(todo) {
    return knex('todo')
    .insert(todo)
    .returning('*')
}

function read(todo_id) {
    return knex('todo')
    .select('*')
    .where({ todo_id: todo_id })
    .first();
}

function list() {
      return knex("todo")
      .select('*')
      .orderBy('todo_id', 'asc'); 
}


module.exports = {
    list,
    read, 
    create,
}