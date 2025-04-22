// Import mongoose for MongoDB interactions
const mongoose = require("mongoose");

// Load environment variables from the .env file
require("dotenv").config();

// Define an asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the URI from .env
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    // Log any connection errors and exit the process with failure
    console.error("Error in connection to database:", error);
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files
module.exports = connectDB;
