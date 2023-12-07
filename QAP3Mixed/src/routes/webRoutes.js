// src/routes/webRoutes.js
const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

router.get('/', async (req, res) => {
  try {
    await toyController.getAllToysView(req, res); // Pass 'req' and 'res' here
  } catch (error) {
    console.error('Error retrieving toys:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/toys/new', (req, res) => {
  res.render('addToyForm');
});

router.get('/toys/:id/edit', async (req, res) => {
  const { id } = req.params;
  try {
    const toy = await toyController.getToyById(id);
    res.render('editToyForm', { toy });
  } catch (error) {
    console.error(`Error retrieving toy ${id} for editing:`, error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/toys/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    await toyController.deleteToy(id);
    res.redirect('/');
  } catch (error) {
    console.error(`Error deleting toy ${id}:`, error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
