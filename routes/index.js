const express = require('express');
const router = express.Router();
const usersRoutes = require('./Tasks');

router.use('/', usersRoutes);

module.exports = router;