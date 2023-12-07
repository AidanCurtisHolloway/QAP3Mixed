// apiRoutes.js
const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

router.get('/toys', toyController.getAllToys);
router.post('/toys', toyController.createToy);
router.put('/toys/:id', toyController.updateToy);
router.delete('/toys/:id', toyController.deleteToy);

module.exports = router;
