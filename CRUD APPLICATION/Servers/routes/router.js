const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   console.log("conect");
// });

router.post("/register", (req, res) => {
  console.log(req.body);
});

module.export = router;
