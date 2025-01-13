import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Register from "./components/register/Register";
import Contestants from "./components/contestants/Contestants";
import Queue from "./components/queue/Queue";
import Leaderboard from "./components/leaderboard/Leaderboard";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Register />} />
                    <Route path="register" element={<Register />} />
                    <Route path="contestants" element={<Contestants />} />
                    <Route path="queue" element={<Queue />} />
                    <Route path="leaderboard" element={<Leaderboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;