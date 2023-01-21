const express = require("express");
const app = express();
const globalErrorHandler = require("./controllers/errorController");
const appError = require("./utils/appError");
const userRoute = require("./routes/userRoute");

//Use Express.json
app.use(express.json());
//Register Routes
app.use("/api/v1/users", userRoute);

//Handle Unconfigured routes
app.all("*", (req, res, next) => {
  return next(
    new appError(404, `${req.originalUrl} cannot be found in this application`)
  );
});
//Handle Error Globally
app.use(globalErrorHandler);
//Export App
module.exports = app;
