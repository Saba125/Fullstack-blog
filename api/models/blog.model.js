import mongoose from "mongoose";
import { Schema } from "mongoose";
const blogSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Blog", blogSchema);
