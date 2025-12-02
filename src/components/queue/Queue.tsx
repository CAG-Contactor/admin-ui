import React, { useEffect, useState } from "react";
import { ListGroup, Button, Modal, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueueItem } from "../../types/types";
import { removeQueueItem as removeQueueItemAPI, startRace, abortRace } from "../../api/BackendAPI";
import { useData } from "../../context/DataContext";
import "../CommonStyles.css";
import "../../index.css";

interface QueueProps {}

const Queue: React.FC<QueueProps> = () => {
    const { queue, loading, error, setQueue } = useData();
    const [message, setMessage] = useState<string>("");
    const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
    const [showStartModal, setShowStartModal] = useState<boolean>(false);
    const [showAbortModal, setShowAbortModal] = useState<boolean>(false);
    const [selectedQueueItem, setSelectedQueueItem] = useState<QueueItem | null>(null);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleStartRaceClick = (queueItem: QueueItem) => {
        setSelectedQueueItem(queueItem);
        setShowStartModal(true);
    };

    const handleStartRaceConfirm = async () => {
        if (!selectedQueueItem) return;

        try {
            await startRace(selectedQueueItem.timestamp);
            setQueue(queue.filter(item => item !== selectedQueueItem));
            setMessage(`${selectedQueueItem.contestant.name} has started the race!`);
        } catch (err) {
            console.error("Failed to start race", err);
            setMessage("Failed to start race");
        } finally {
            setShowStartModal(false);
            setSelectedQueueItem(null);
        }
    };

    const handleRemoveQueueItemClick = (queueItem: QueueItem) => {
        setSelectedQueueItem(queueItem);
        setShowRemoveModal(true);
    };

    const handleRemoveQueueItemConfirm = async () => {
        if (!selectedQueueItem) return;

        try {
            await removeQueueItemAPI(selectedQueueItem.timestamp);
            setQueue(queue.filter(item => item !== selectedQueueItem));
            setMessage(`${selectedQueueItem.contestant.name} has been removed from the queue.`);
        } catch (err) {
            console.error("Failed to remove queue item", err);
            setMessage("Failed to remove queue item");
        } finally {
            setShowRemoveModal(false);
            setSelectedQueueItem(null);
        }
    };

    const handleAbortRaceClick = () => {
        setShowAbortModal(true);
    };

    const handleAbortRaceConfirm = async () => {
        try {
            await abortRace();
            setMessage("Race has been aborted.");
        } catch (err) {
            console.error("Failed to abort race", err);
            setMessage("Failed to abort race");
        } finally {
            setShowAbortModal(false);
        }
    };

    const handleModalCancel = () => {
        setShowRemoveModal(false);
        setShowStartModal(false);
        setShowAbortModal(false);
        setSelectedQueueItem(null);
    };

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

    return (
        <div className="container list-group-container">
            {message && <p className="text-center message">{message}</p>}
            <div className="text-end mb-4">
                <Button className="btn-abort" onClick={handleAbortRaceClick}>
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
                                <Button variant="primary" className="btn-submit me-2" onClick={() => handleStartRaceClick(queueItem)}>
                                    Start race
                                </Button>
                                <Button type="button" className="btn-clear" onClick={() => handleRemoveQueueItemClick(queueItem)}>
                                    Remove
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {/* Remove from Queue Modal */}
            <Modal show={showRemoveModal} onHide={handleModalCancel} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Remove</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove <strong>{selectedQueueItem?.contestant.name}</strong> from the queue?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalCancel}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleRemoveQueueItemConfirm}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Start Race Modal */}
            <Modal show={showStartModal} onHide={handleModalCancel} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Start Race</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to start the race for <strong>{selectedQueueItem?.contestant.name}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleStartRaceConfirm}>
                        Start Race
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Abort Race Modal */}
            <Modal show={showAbortModal} onHide={handleModalCancel} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Abort Race</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to abort the current race? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalCancel}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleAbortRaceConfirm}>
                        Abort Race
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Queue;