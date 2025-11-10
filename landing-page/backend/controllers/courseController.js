import Course from "../models/course.js";

const getCourse =async(req,res)=>{
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(error){
        res.status(500).json({messege:error.messege})
    }

};
export default getCourse;