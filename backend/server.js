// Import necessary modules
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js"); // Import the database connection function

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set the port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Connect to the database, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is connected successfully on port ${PORT}`);
  });
});
