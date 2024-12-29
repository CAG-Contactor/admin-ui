// src/components/leaderboard/Leaderboard.tsx
import React from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeaderBoardItem } from "../../types/types";
import "./Leaderboard.css";

interface LeaderboardProps {
    initialLeaderboard: LeaderBoardItem[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ initialLeaderboard }) => {
    return (
        <div className="container">
            <h1 className="text-center mb-4">Leaderboard</h1>
            {initialLeaderboard.length === 0 ? (
                <p className="text-center">No results available.</p>
            ) : (
                <ListGroup>
                    {initialLeaderboard.map((leaderBoardItem, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div>
                                <strong>{leaderBoardItem.contestant.name}</strong>
                                <br />
                                {/*<span>Score: {result.time !== undefined ? result.time : "N/A"}</span>*/}
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Leaderboard;