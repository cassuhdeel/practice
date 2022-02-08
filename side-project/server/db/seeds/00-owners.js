const owners = require("../fixtures/owners");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE owners RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("owners").insert(owners);
    });
};