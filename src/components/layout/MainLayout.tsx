import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
    return (
        <div className="layout">
            <header className="layout-header">
                <nav className="layout-nav">
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contestants" className={({ isActive }) => isActive ? "active" : ""}>
                                Contestants
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/queue" className={({ isActive }) => isActive ? "active" : ""}>
                                Queue
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "active" : ""}>
                                Leaderboard
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="layout-content">
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
        </div>
    );
};

export default MainLayout;