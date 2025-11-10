import { createContext,useState,useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext();
export const BlogProvider=({children})=>{
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
       const ftechBlogs=async()=>{
        try{
            const res = await axios.get('https://codingtechplus.onrender.com/api/blogs')
            setBlogs(res.data)
        }catch(error){
            console.error("Error fetching blogs", error)
        }

        }
        ftechBlogs()
    },[])
    return(
        <BlogContext.Provider value={blogs}>
            {children}
        </BlogContext.Provider>
    )
}