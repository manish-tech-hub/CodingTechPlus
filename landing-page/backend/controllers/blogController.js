import Blogs from "../models/blog.js";

const getBlogs = async(req,res)=>{
    try{
        const blogs = await Blogs.find()
        res.json(blogs)
    }catch(error){
        res.status(500).json({messege:error.messege})
    }
}
export default getBlogs;