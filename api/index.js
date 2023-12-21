import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import CategoryRouter from './routes/categories.route.js'
import cors from "cors";
import cookieParser from "cookie-parser";
import categoriesModel from "./models/categories.model.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Mongo db connection established");
  } catch (error) {
    console.log(`Could not connect to Mongoose, ${error}`);
  }
};
app.listen(process.env.PORT, () => {
  connect();
  console.log(`Api is listening on ${process.env.PORT}`);
});
app.use("/api", userRouter);
app.use("/api", CategoryRouter)
