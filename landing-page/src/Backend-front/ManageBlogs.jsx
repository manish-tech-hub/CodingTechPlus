import React, { useState,useContext } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import '../AdminCss/managecourses.css'; // Use same CSS

export function ManageBlogs() {
  const { sidebarOpen } = useOutletContext(); // sidebar state
  const blogs = useContext(BlogContext)
  const handleEdit = (id) => alert(`Edit blog ID: ${id}`);
  const handleDelete = (id) => setBlogs(blogs.filter(blog => blog.id !== id));
  const handleAdd = () => alert("Add new blog");

  return (
    <div className={`course-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="course-header">
        <h2>Manage Blogs</h2>
        <button className="add-btn" onClick={handleAdd}>
          <FaPlus /> Add Blog
        </button>
      </div>
      <div className="courses-table">
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td className="course-image">
                  <img src={blog.image} alt={blog.title} />
                </td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.date}</td>
                <td className="action-icons">
                  <FaEdit className="edit-icon" onClick={() => handleEdit(blog.id)} />
                  <FaTrash className="delete-icon" onClick={() => handleDelete(blog.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
