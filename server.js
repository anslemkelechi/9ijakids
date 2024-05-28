const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Configure .env files
console.log();
if (process.env.BUILD != 6000) {
  console.log("Hola");
  dotenv.config({ path: "./.env" });
}

//Configure Uncaught Exceptions handlers
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, SHUTTING DOWN 😰");
  console.log(err.name, err.message);
  process.exit(1);
});

//Assign DB on local or productioh
let DB;
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") {
  DB = process.env.DB_PROD.replace("<password>", process.env.DB_PASSWORD);
} else {
  DB = process.env.DB_LOCAL;
}
//Finally Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connection Successful");
  });

//Connect to Server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});

//Handle Unhandled Rejection
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION, SHUTTING DOWN 😰");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
