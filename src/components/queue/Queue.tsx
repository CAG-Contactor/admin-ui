import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueueItem } from "../../types/types";
import "./Queue.css";
import "../register/Register.css"; // Import Register.css to reuse button styles

interface QueueProps {
    initialQueue: QueueItem[];
}

const Queue: React.FC<QueueProps> = ({ initialQueue = [] }) => {
    const [queue, setQueue] = useState<QueueItem[]>(initialQueue);
    const [message, setMessage] = useState<string>("");

    const handleStartRace = (queueItem: QueueItem) => {
        // Implement start race logic here
        setMessage(`${queueItem.contestant.name} has started the race!`);
    };

    const handleRemoveQueueItem = (queueItem: QueueItem) => {
        setQueue(queue.filter(item => item !== queueItem));
        setMessage(`${queueItem.contestant.name} has been removed from the queue.`);
    };

    return (
        <div className="container queue-container">
            <h1 className="text-center mb-4 queue-title">Contestant Queue</h1>
            {message && <p className="text-center">{message}</p>}
            {queue.length === 0 ? (
                <p className="text-center">No contestants in queue.</p>
            ) : (
                <ListGroup>
                    {queue.map((queueItem, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center queue-item">
                            <div>
                                <strong>{queueItem.contestant.name}</strong>
                                <br />
                                <span>{queueItem.contestant.email}</span>
                                <br />
                            </div>
                            <div className="button-container">
                                <Button variant="primary" className="btn-submit me-2" onClick={() => handleStartRace(queueItem)}>
                                    Start race
                                </Button>
                                <Button type="button" className="btn-clear" onClick={() => handleRemoveQueueItem(queueItem)}>
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