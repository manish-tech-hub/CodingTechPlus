import React from "react";
import { FaBook, FaBlog, FaUsers, FaDollarSign, FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import "../AdminCss/dashboard.css";

export function Dashboard() {
  const { sidebarOpen } = useOutletContext();

  // Example stats (later fetch from API)
  const stats = [
    { id: 1, title: "Total Courses", value: 12, icon: <FaBook />, color: "#4caf50" },
    { id: 2, title: "Total Blogs", value: 8, icon: <FaBlog />, color: "#2196f3" },
    { id: 3, title: "Students", value: 150, icon: <FaUsers />, color: "#ff9800" },
    { id: 4, title: "Revenue", value: "$2,450", icon: <FaDollarSign />, color: "#9c27b0" },
  ];

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Header */}
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card" style={{ borderTop: `4px solid ${stat.color}` }}>
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Section */}
      <div className="recent-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>📚 Added new course: <strong>React Basics</strong></li>
          <li>📝 Published blog: <strong>Understanding Django ORM</strong></li>
          <li>👨‍🎓 New student enrolled: <strong>Alex Johnson</strong></li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions">
          <button><FaPlus /> Add Course</button>
          <button><FaPlus /> Add Blog</button>
        </div>
      </div>
    </div>
  );
}
