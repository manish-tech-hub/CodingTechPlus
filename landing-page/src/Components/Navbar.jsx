import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/image/ct-logo.png'
import "../css/navbar.css";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="container">
        <button className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="navbar">
          <NavLink to="/home" end className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/course" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Course</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/blog" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
        </nav>
      </div>

      {/* Overlay */}
      <div className={`overlay ${sidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <Link to="/Home" onClick={toggleSidebar}>Home</Link>
        <Link to="/course" onClick={toggleSidebar}>Course</Link>
        <Link to="/About" onClick={toggleSidebar}>About</Link>
        <Link to="/Blog" onClick={toggleSidebar}>Blog</Link>
      </div>
    </>
  );
}

export default Navbar;
