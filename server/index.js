const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", require("./app"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
