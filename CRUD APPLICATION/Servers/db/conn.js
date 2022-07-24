const mongoose = require("mongoose");

const DB =
  "mongodb+srv://shreyaspatil1901:mongoDb123@cluster0.lqhkp.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
