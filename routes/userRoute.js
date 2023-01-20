const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Server Status Healthy!!",
  });
});

module.exports = router;
