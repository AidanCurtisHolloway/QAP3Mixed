// webRoutes.js
const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

router.get('/', toyController.getAllToysView);
router.get('/toys/new', toyController.getAddToyForm);
router.post('/toys/new', toyController.addNewToy);

module.exports = router;
