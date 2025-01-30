import React, { useEffect, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueueItem } from "../../types/types";
import { fetchQueue, removeQueueItem as removeQueueItemAPI, startRace, abortRace } from "../../api/BackendAPI";
import "../CommonStyles.css";
import "../../index.css";

interface QueueProps {}

const Queue: React.FC<QueueProps> = () => {
    const [queue, setQueue] = useState<QueueItem[]>([]);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQueue = async () => {
            try {
                const data = await fetchQueue();
                setQueue(data || []);
            } catch (err) {
                console.error("Failed to load queue", err);
                setError("Failed to load queue");
            } finally {
                setLoading(false);
            }
        };

        loadQueue();
    }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleStartRace = async (queueItem: QueueItem) => {
        try {
            await startRace(queueItem.timestamp);
            setQueue(queue.filter(item => item !== queueItem));
            setMessage(`${queueItem.contestant.name} has started the race!`);
        } catch (err) {
            console.error("Failed to start race", err);
            setMessage("Failed to start race");
        }
    };

    const handleRemoveQueueItem = async (queueItem: QueueItem) => {
        try {
            await removeQueueItemAPI(queueItem.timestamp);
            setQueue(queue.filter(item => item !== queueItem));
            setMessage(`${queueItem.contestant.name} has been removed from the queue.`);
        } catch (err) {
            console.error("Failed to remove queue item", err);
            setMessage("Failed to remove queue item");
        }
    };

    const handleAbortRace = async () => {
        try {
            await abortRace();
            setMessage("Race has been aborted.");
        } catch (err) {
            console.error("Failed to abort race", err);
            setMessage("Failed to abort race");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container list-group-container">
            {message && <p className="text-center message">{message}</p>}
            <div className="text-end mb-4">
                <Button className="btn-abort" onClick={handleAbortRace}>
                    Abort game
                </Button>
            </div>
            {queue.length === 0 ? (
                <p className="text-center message">No contestants in queue.</p>
            ) : (
                <ListGroup>
                    {queue.map((queueItem, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center queue-item">
                            <div>
                                {queueItem.contestant.name}
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