import mongoose from "mongoose";
import { Schema } from "mongoose";
const categoriesSchema = new Schema({
    catName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
export default mongoose.model("Categories", categoriesSchema)