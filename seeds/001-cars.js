
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '184r577i2', make: 'Nissan', model: 'Pulsar', mileage: 22030, transmissionType: 'Manual', titleStatus: 'salvage'},
        {id: 2, vin: '558s9220c', make: 'MG', model: 'B Roadster', mileage: 20394, transmissionType: 'Manual', titleStatus: 'clean'},
        {id: 3, vin: '104k52n87', make: 'Toyota', model: 'Prius', mileage: 40001, transmissionType: 'Automatic', titleStatus: 'clean'}
      ]);
    });
};
