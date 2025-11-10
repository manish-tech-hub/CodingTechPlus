import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    date: {
        type: Date, 
        required: true,
        default:Date.now,
    },
    tags: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Blogs = mongoose.model('Blog', blogsSchema);

export default Blogs;
