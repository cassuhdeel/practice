const pets = require("../fixtures/pets");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE pets RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("pets").insert(pets);
    });
};
