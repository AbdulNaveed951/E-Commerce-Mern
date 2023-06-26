// import  express  from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import product from "./Controllers/productController";
// import cors from "cors";
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors") 
const errorMiddleware = require("./middleware/error");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");



dotenv.config()
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());



// Database Connectivity
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } 
    catch (error) {
      throw error;
    }
  };
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


// Middleware for Errors
app.use(errorMiddleware);
app.use(express.json());
app.use(cors())
// Routes
 
// Route Imports
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");
const order = require("./Routes/orderRoute");
// const order = require("./routes/orderRoute");
const payment = require("./Routes/paymentController");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);




// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

 const server = app.listen(8800, ()=>
{
    connect()

    // res.send(start)
    console.log("connected to backend server");

  });
 
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Server Error
  // Unhandled Promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    }); 
  });


