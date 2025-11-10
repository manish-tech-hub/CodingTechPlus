import React, { useState,useContext } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { CourseContext } from "../Context/CourseContext";
import { Link } from "react-router-dom";
import '../AdminCss/managecourses.css';

export function MangeCourse() {
  const {sidebarOpen} = useOutletContext();
  const {courses} = useContext(CourseContext)
  const handleEdit = (id) => {
    alert(`Edit course with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleAdd = () => {
    alert("Add new course");
  };

  return (
    <div className={`course-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="course-header">
        <h2>Manage Courses</h2>
        <Link to='/admin/add-courses'><button className="add-btn">
          <FaPlus /> Add Course
        </button></Link>
      </div>
      <div className="courses-table">
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td className="course-image">
                  <img src={course.image} alt={course.name} />
                </td>
                <td>{course.title}</td>
                <td>{course.duration}</td>
                <td>{course.price}</td>
                <td className="action-icons">
                  <FaEdit className="edit-icon" onClick={() => handleEdit(course.id)} />
                  <FaTrash className="delete-icon" onClick={() => handleDelete(course.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
