import { Schema } from "mongoose";
import mongoose from "mongoose";

const blog = new Schema({
    title: String,
    body: String,
    image:String
},
    {
        timestamps: true,
    }
)

const blogModel = mongoose.models.blogModel || mongoose.model("blogModel",blog)

export default blogModel