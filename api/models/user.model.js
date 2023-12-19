import { Schema, mongo } from "mongoose";
import mongoose from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 50,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
export default mongoose.model("User", userSchema)