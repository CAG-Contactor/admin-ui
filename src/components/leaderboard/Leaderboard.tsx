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
        <div className="container leaderboard-container">
            <h1 className="text-center mb-4 leaderboard-title">Leaderboard</h1>
            {initialLeaderboard.length === 0 ? (
                <p className="text-center">No results available.</p>
            ) : (
                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center list-group-item">
                        <div className="text-center flex-fill">Name</div>
                        <div className="text-center flex-fill">Split Time</div>
                        <div className="text-center flex-fill">End Time</div>
                    </ListGroup.Item>
                    {initialLeaderboard.map((leaderBoardItem, index) => (
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