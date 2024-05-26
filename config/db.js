const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected Successfully..");
  } catch (error) {
    console.log(error);
    console.log("DB connection faild");
    process.exit(1);
  }
};

module.exports = connectWithDB;
