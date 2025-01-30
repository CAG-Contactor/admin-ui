import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeaderBoardItem } from "../../types/types";
import { fetchLeaderBoard } from "../../api/BackendAPI";
import "../CommonStyles.css";
import "./Leaderboard.css";

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

    const formatTimestamp = (timestamp: number): string => {
        const seconds = Math.floor(timestamp / 1000); // Convert to seconds and remove decimals
        return seconds.toString(); // Convert to string
    };

    return (
        <div className="container list-group-container">
            {leaderboard.length === 0 ? (
                <p className="text-center">No results available.</p>
            ) : (
                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center list-group-item header-row">
                        <div className="column">No.</div>
                        <div className="column">Name</div>
                        <div className="column">Split Time</div>
                        <div className="column">End Time</div>
                    </ListGroup.Item>
                    {leaderboard.map((leaderBoardItem, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div className="column">{index + 1}</div>
                            <div className="column">{leaderBoardItem.contestant.name}</div>
                            <div className="column">
                                {leaderBoardItem.result?.splitTime ? formatTimestamp(Number(leaderBoardItem.result.splitTime)) : "N/A"}
                            </div>
                            <div className="column">
                                {leaderBoardItem.result?.endTime ? formatTimestamp(Number(leaderBoardItem.result.endTime)) : "N/A"}
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Leaderboard;