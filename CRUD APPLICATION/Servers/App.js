require("dotenv").config();
const express = require("express");
const app = express();

const port = 8003;
app.listen(port, () => {
  console.log(`server is started on port number ${port}`);
});
