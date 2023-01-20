const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");

//Register Routes
app.use("/api/v1/users", userRoute);
//Export App
module.exports = app;
