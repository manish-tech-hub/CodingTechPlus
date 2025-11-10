import { createContext,useState,useEffect } from "react";
import axios from "axios";

 export const CourseContext = createContext();
 export const CourseProvider=({children})=>{
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        const fetchCourses = async () => {
      try {
        const { data } = await axios.get("https://codingtechplus.onrender.com/api/courses");
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
    },[])
    return(
        <CourseContext.Provider value={{courses}}>
        {children}
        </CourseContext.Provider>
    )
 }
