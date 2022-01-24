const express = require('express');

const router = express.Router();
const adapter = require('./adapter');

router.use('/adapter', adapter);

module.exports = router;
