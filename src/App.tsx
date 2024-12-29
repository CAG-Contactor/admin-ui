import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Register from "./components/register/Register";
import Contestants from "./components/contestants/Contestants";
import Queue from "./components/queue/Queue";
import Leaderboard from "./components/leaderboard/Leaderboard";
import {fetchContestants, fetchLeaderBoard, fetchQueue} from "./api/BackendAPI";
import { Contestant, QueueItem, LeaderBoardItem} from "./types/types";

const App: React.FC = () => {
    const [contestants, setContestants] = useState<Contestant[]>([]);
    const [queue, setQueue] = useState<QueueItem[]>([]);
    const [leaderboard, setLeaderboard] = useState<LeaderBoardItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadContestants = async () => {
            try {
                const data = await fetchContestants();
                setContestants(data || []);
            } catch (err) {
                console.error("Failed to load contestants", err);
                setError("Failed to load contestants");
            } finally {
                setLoading(false);
            }
        };

        const loadQueue = async () => {
            try {
                const data = await fetchQueue();
                setQueue(data || []);
            } catch (err) {
                console.error("Failed to load queue", err);
                setError("Failed to load queue");
            }
        };

        const loadLeaderboard = async () => {
            try {
                const data = await fetchLeaderBoard()
                setLeaderboard(data || []);
            } catch (err) {
                console.error("Failed to load leaderboard", err);
            }
        };

        loadContestants();
        loadQueue();
        loadLeaderboard();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Register />} />
                    <Route path="register" element={<Register />} />
                    <Route path="contestants" element={<Contestants initialContestants={contestants} />} />
                    <Route path="queue" element={<Queue initialQueue={queue} />} />
                    <Route path="leaderboard" element={<Leaderboard initialLeaderboard={leaderboard} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;