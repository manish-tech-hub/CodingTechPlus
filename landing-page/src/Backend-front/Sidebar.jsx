import React from "react";
// import '../AdminCss/sidebar.css'
import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/admin/home">Home</Link>
      <Link to="/admin/course">Course</Link>
      <Link to="/admin/blogs">Blogs</Link>
    </div>
  );
}
