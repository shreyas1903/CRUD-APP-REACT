require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

app.use(cors());
app.use(express.json());

const port = 8003;
app.listen(port, () => {
  console.log(`server is started on port number ${port}`);
});
