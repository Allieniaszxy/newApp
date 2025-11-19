const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Paystack = require("paystack-api");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

export const instance = new Paystack({
  key_id: process.env.PAYSTACK_KEY_ID,
  secret_key: process.env.PAYSTACK_SECRET_KEY,
});
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", require("./app"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
