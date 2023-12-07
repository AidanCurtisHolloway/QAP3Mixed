const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');
const toyModel = require('../models/toyModel'); // Import the toyModel functions for database interactions

// API routes
router.get('/toys', async (req, res) => {
  try {
    const toys = await toyController.getAllToys();
    res.json({ toys });
  } catch (error) {
    console.error('Error fetching toys:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/toys', async (req, res) => {
  const { name, category, price, quantityInStock } = req.body;
  try {
    const newToy = await toyController.createToy(name, category, price, quantityInStock);
    res.json({ message: 'Toy created successfully', toy: newToy });
  } catch (error) {
    console.error('Error creating toy:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/toys/:id', async (req, res) => {
  const { id } = req.params;
  const { name, category, price, quantityInStock } = req.body;
  try {
    await toyController.updateToy({ id, name, category, price, quantityInStock });
    res.json({ message: `Toy ${id} updated successfully` });
  } catch (error) {
    console.error(`Error updating toy ${id}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/toys/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await toyController.deleteToy(id);
    res.json({ message: `Toy ${id} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting toy ${id}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
