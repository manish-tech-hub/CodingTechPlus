import mongoose from "mongoose";
const courseSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    duration:{
        type:String,
        require:true,
    },
    level:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
},
{ timestamps: true })
const Course = mongoose.model("Course",courseSchema)
export default Course