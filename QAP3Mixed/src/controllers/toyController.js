// src/controllers/toyController.js
const toyModel = require('../models/toyModel');

const toyController = {
  getAllToys: async (req, res) => {
    try {
      const toys = await toyModel.getAllToys();
      res.json({ toys });
    } catch (error) {
      console.error('Error fetching toys:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getToyByName: async (req, res) => {
    const { name } = req.params;
    try {
      const toy = await toyModel.getToyByName(name);
      if (toy) {
        res.json({ toy });
      } else {
        res.status(404).json({ error: 'Toy not found' });
      }
    } catch (error) {
      console.error(`Error fetching toy with name ${name}:`, error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateToy: async (req, res) => {
    const { name } = req.params;
    const { category, price, quantityInStock } = req.body;
    try {
      await toyModel.updateToy(name, category, price, quantityInStock);
      res.json({ message: `Toy ${name} updated successfully` });
    } catch (error) {
      console.error(`Error updating toy ${name}:`, error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createToy: async (req, res) => {
    const { name, category, price, quantityInStock } = req.body;
    try {
      const newToy = await toyModel.createToy(name, category, price, quantityInStock);
      res.json({ message: 'Toy created successfully', toy: newToy });
    } catch (error) {
      console.error('Error creating toy:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteToy: async (req, res) => {
    const { name } = req.params;
    try {
      await toyModel.deleteToy(name);
      res.json({ message: `Toy ${name} deleted successfully` });
    } catch (error) {
      console.error(`Error deleting toy ${name}:`, error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = toyController;
