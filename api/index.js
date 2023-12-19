import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config();
app.use(express.json());
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
