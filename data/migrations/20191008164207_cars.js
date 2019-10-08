
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin', 128).notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.text('transmissionType', 128);
    tbl.text('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
