import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Register from "./components/register/Register";
import Contestants from "./components/contestants/Contestants";
import Queue from "./components/queue/Queue";
import Leaderboard from "./components/leaderboard/Leaderboard";
import { fetchContestants, fetchLeaderBoard, fetchQueue } from "./api/BackendAPI";
import { Contestant, QueueItem, LeaderBoardItem, ContestantFormData } from "./types/types";

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
                const data = await fetchLeaderBoard();
                setLeaderboard(data || []);
            } catch (err) {
                console.error("Failed to load leaderboard", err);
            }
        };

        loadContestants();
        loadQueue();
        loadLeaderboard();
    }, []);

    const addContestant = (formData: ContestantFormData) => {
        console.log("Adding contestant " + JSON.stringify(formData));
        const newContestant: Contestant = {
            name: formData.name,
            email: formData.email,
        };
        setContestants([...contestants, newContestant]);
    };

    const enqueueContestant = (contestant: Contestant) => {
        console.log("Enqueue contestant - BACKEND CALL NOT IMPLEMENTED YET");
        const newQueueItem: QueueItem = {
            contestant,
            timestamp: new Date().toISOString(),
        };
        setQueue([...queue, newQueueItem]);
    };

    const removeFromQueue = (queueItem: QueueItem) => {
        console.log("Remove from queue - BACKEND CALL NOT IMPLEMENTED YET");
        setQueue(queue.filter(item => item !== queueItem));
    };

    const deleteContestant = async (contestant: Contestant) => {
        console.log("Deleting contestant " + JSON.stringify(contestant));
        setContestants(contestants.filter(c => c !== contestant));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Register addContestant={addContestant} />} />
                    <Route path="register" element={<Register addContestant={addContestant} />} />
                    <Route path="contestants" element={<Contestants initialContestants={contestants} enqueueContestant={enqueueContestant} deleteContestant={deleteContestant} />} />
                    <Route path="queue" element={<Queue initialQueue={queue} removeFromQueue={removeFromQueue} />} />
                    <Route path="leaderboard" element={<Leaderboard initialLeaderboard={leaderboard} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;