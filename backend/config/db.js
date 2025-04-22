const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to database succsefuly");
  } catch (error) {
    console.error("error in connction to database", error);
    process.exit(1);
  }
};
module.exports = connectDB;
