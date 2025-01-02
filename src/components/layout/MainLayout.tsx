import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
    return (
        <div className="layout">
        <header className="layout-header">
        <nav className="layout-nav">
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contestants">Contestants</Link></li>
            <li><Link to="/queue">Queue</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
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
