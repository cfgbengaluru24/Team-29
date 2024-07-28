import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    const connInst = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

dotenv.config({});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Conneceted to port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo Conn failed");
  });
