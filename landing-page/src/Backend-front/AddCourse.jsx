import React, { useState } from "react";
import '../AdminCss/addcourse.css'
import { useOutletContext } from "react-router-dom";

export function AddCourse(){
    const {sidebarOpen}=useOutletContext();
    const [formData, setFormData]=useState({
        name: "",
        duration: "",
        price: "",
        description:"",
        image: null,

    })
    const handleSubmit=(e)=>{
        const {name,value,files}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:files? files[0]:value
        }));
    }
    const handleChange=()=>{
        e.preventDefault()
        alert('course added succesfully')
    }
    return(
        <div className={`add-course-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="add-course-header">
                <h2>Add New Course</h2>
            </div>
            <form className="add-course-form" onClick={handleSubmit}>
                <div className="form-group">
                    <label>Course Name</label>
                    <input type="text"
                    name="name"
                    placeholder="Enter course name"
                    value={formData.name}
                    onChange={handleChange}
                    required/>
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                    type="text"
                    name="duration"
                    value={formData.value}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                    type="text"
                    name="price"
                    value={formData.duration}
                    onChange={handleChange}
                    required/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required/>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                    type="file"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    accept="image/*"/> 
                </div>
                <button type="submit" className="submit-btn">Add Course</button>
            </form>

        </div>
    )
}
