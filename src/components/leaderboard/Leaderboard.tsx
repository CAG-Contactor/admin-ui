import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useData } from "../../context/DataContext";
import "../CommonStyles.css";
import "./Leaderboard.css";

const Leaderboard: React.FC = () => {
    const { leaderboard, loading, error } = useData();

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        );
    }

    const formatTimestamp = (timestamp: number): string => {
        const seconds = (timestamp / 1000).toFixed(2); // Convert to seconds and format to 2 decimal places
        return seconds.toString(); // Convert to string
    };

    return (
        <div className="container list-group-container">
            {leaderboard.length === 0 ? (
                <p className="text-center">No results available.</p>
            ) : (
                <>
                    <div className="d-flex justify-content-between align-items-center list-group-item header-row">
                        <div className="column">No.</div>
                        <div className="column">Name</div>
                        <div className="column">Split Time</div>
                        <div className="column">End Time</div>
                    </div>
                    <ListGroup>
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
                </>
            )}
        </div>
    );
};

export default Leaderboard;