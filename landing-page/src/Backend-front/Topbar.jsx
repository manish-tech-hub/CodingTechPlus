import React from "react";
import '../AdminCss/topbar.css'
import { FaBars } from "react-icons/fa";
export function Topbar({toggleSidebar}){
    return(
        <div className="topbar">
            <div className="menu-icon">
                <FaBars onClick={toggleSidebar}/>
            </div>
            <p>Hi! Admin</p>
        </div>
        )
}