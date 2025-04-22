const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 3001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is connect succefuly on  port ${PORT}`);
  });
});