import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeaderBoardItem } from "../../types/types";
import { fetchLeaderBoard } from "../../api/BackendAPI";
import "../CommonStyles.css";

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderBoardItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadLeaderboard = async () => {
            try {
                const data = await fetchLeaderBoard();
                setLeaderboard(data || []);
            } catch (err) {
                console.error("Failed to load leaderboard", err);
                setError("Failed to load leaderboard");
            } finally {
                setLoading(false);
            }
        };

        loadLeaderboard();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container leaderboard-container">
            <h1 className="text-center mb-4 title">Leaderboard</h1>
            {leaderboard.length === 0 ? (
                <p className="text-center">No results available.</p>
            ) : (
                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center list-group-item">
                        <div className="text-center flex-fill">Name</div>
                        <div className="text-center flex-fill">Split Time</div>
                        <div className="text-center flex-fill">End Time</div>
                    </ListGroup.Item>
                    {leaderboard.map((leaderBoardItem, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div className="flex-fill">{leaderBoardItem.contestant.name}</div>
                            <div className="flex-fill text-center">{leaderBoardItem.result?.splitTime || "N/A"}</div>
                            <div className="flex-fill text-center">{leaderBoardItem.result?.endTime || "N/A"}</div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Leaderboard;