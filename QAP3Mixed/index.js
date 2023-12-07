const express = require('express');
const methodOverride = require('method-override');
const apiRoutes = require('./src/routes/apiRoutes');
const webRoutes = require('./src/routes/webRoutes');
const db = require('./src/db/db.js'); // Import the database connection

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Routes
app.use('/api', apiRoutes); // API routes
app.use('/', webRoutes); // Web routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
