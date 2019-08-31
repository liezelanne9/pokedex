const express = require('express');
const router = express.Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

module.exports = router;