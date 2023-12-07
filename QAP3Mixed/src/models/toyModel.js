// src/models/toyModel.js
const db = require('../db/db');

const toyModel = {
  getAllToys: async () => {
    try {
      return await db.any('SELECT * FROM public.toy');
    } catch (error) {
      console.error('Error fetching toys:', error);
      throw error;
    }
  },

  getToyByName: async (name) => {
    try {
      return await db.oneOrNone('SELECT * FROM public.toy WHERE name = $1', [name]);
    } catch (error) {
      console.error(`Error fetching toy with name ${name}:`, error);
      throw error;
    }
  },

  updateToy: async (name, category, price, quantityInStock) => {
    try {
      return await db.none(`
        UPDATE public.toy
        SET category = $2, price = $3, quantity_in_stock = $4
        WHERE name = $1
      `, [name, category, price, quantityInStock]);
    } catch (error) {
      console.error(`Error updating toy ${name}:`, error);
      throw error;
    }
  },

  createToy: async (name, category, price, quantityInStock) => {
    try {
      return await db.one(`
        INSERT INTO public.toy (name, category, price, quantity_in_stock)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `, [name, category, price, quantityInStock]);
    } catch (error) {
      console.error('Error creating toy:', error);
      throw error;
    }
  },

  deleteToy: async (name) => {
    try {
      return await db.none('DELETE FROM public.toy WHERE name = $1', [name]);
    } catch (error) {
      console.error(`Error deleting toy ${name}:`, error);
      throw error;
    }
  },
};

module.exports = toyModel;
