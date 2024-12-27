import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueueItem } from "../../types";
import "./Queue.css";
import "../register/Register.css"; // Import Register.css to reuse button styles

interface QueueProps {
    initialQueue: QueueItem[];
    initialMessage?: string;
}

const Queue: React.FC<QueueProps> = ({ initialQueue = [], initialMessage = "" }) => {
    return (
        <div className="container">
            <h1 className="text-center mb-4">Contestant Queue</h1>
            {initialMessage && <p className="text-center">{initialMessage}</p>}
            {initialQueue.length === 0 ? (
                <p className="text-center">No contestants in queue.</p>
            ) : (
                <ListGroup>
                    {initialQueue.map((queueItem, index) => (
                        <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div>
                                <span>{queueItem.contestant.name}</span>
                            </div>
                            <div className="button-container">
                                <Button variant="primary" className="btn-submit me-2">
                                    Start race
                                </Button>
                                <Button type="button" className="btn-clear">
                                    Remove
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Queue;