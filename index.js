const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const blogRoute = require("./routes/index");
app.use("/api/v1", blogRoute);

const connectWithDB = require("./config/db");
connectWithDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is My Home Page Baby...</h1>`);
});

// 1:11
