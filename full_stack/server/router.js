const express = require('express');
const router = express.Router();
const { controller, controller_params } = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  .route('/:pokemon')
  .get(controller_params.getByPokemon)
  .delete(controller_params.deleteById)

module.exports = router;