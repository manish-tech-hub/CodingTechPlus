import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import '../AdminCss/layout.css';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Detect screen size on mount
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`admin-layout ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="admin-main">
        <Topbar toggleSidebar={toggleSidebar} />
        <main>
          <Outlet context={{ sidebarOpen }} />
        </main>
      </div>
    </div>
  );
}
