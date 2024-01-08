// const dotenv = require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const cors = require("cors");

const app = require("./app");
app.use(express.json());

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://waqas:waqas123@cluster0.rsj5ifx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("error");
  });

//Route
const poetry = require("./routes/PoetryRoute");
app.use("/api/v1", poetry);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log("server connected "));
