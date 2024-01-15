const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const catalogRouter = require("./routes/catalog");

require("dotenv").config();
const app = express();

// Define the database URL to connect to.
const mongoDB = process.env.MONGODB_URI;

// Connect to the database.
mongoose
  .connect(mongoDB)
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log(error));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
// Needed to populate the req.body with form fields
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// set the directory to serve static assets
app.use(express.static(path.join(__dirname, "public")));

// use imported routers to handle views
app.use("/", indexRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
