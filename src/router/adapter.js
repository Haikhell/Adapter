const express = require('express');
const controller = require('../controller/planet/route/index');

const router = express.Router();

router.get('/get', controller.get);

module.exports = router;
