const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
 } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = dbConnect;
