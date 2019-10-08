const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
  
});

router.post('/', (req, res) => {

})

module.exports = router;