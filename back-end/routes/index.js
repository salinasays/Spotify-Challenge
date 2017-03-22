const express = require('express');
const router = express.Router();

router.use('/people', require('./people-routes.js'));

module.exports = router; 