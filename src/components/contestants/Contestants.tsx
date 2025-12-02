import React, { useEffect, useState } from "react";
import { Contestant } from "../../types/types";
import { deleteContestant as deleteContestantAPI } from "../../api/BackendAPI";
import { useData } from "../../context/DataContext";
import { ListGroup, Button, Modal, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../CommonStyles.css";

interface ContestantsProps {}

export const Contestants: React.FC<ContestantsProps> = () => {
    const { contestants, loading, setContestants } = useData();
    const [message, setMessage] = useState<string>("");
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [contestantToDelete, setContestantToDelete] = useState<Contestant | null>(null);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleDeleteClick = (contestant: Contestant) => {
        setContestantToDelete(contestant);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        if (!contestantToDelete) return;

        console.log("Contestants.tsx: Deleting contestant " + JSON.stringify(contestantToDelete));
        try {
            await deleteContestantAPI(contestantToDelete);
            setContestants(contestants.filter(c => c !== contestantToDelete));
            setMessage(`${contestantToDelete.name} has been deleted successfully!`);
        } catch (err) {
            console.error("Failed to delete contestant", err);
            setMessage("Failed to delete contestant");
        } finally {
            setShowDeleteModal(false);
            setContestantToDelete(null);
        }
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
        setContestantToDelete(null);
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


    return (
        <div className="container list-group-container">
            {message && <p className="text-center message">{message}</p>}
            {contestants.length === 0 ? (
                <p className="text-center message">No contestants registered yet.</p>
            ) : (
                <ListGroup>
                    {contestants.map((contestant, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div>
                                {contestant.name}
                                <br />
                            </div>
                            <div className="button-container">
                                <Button type="button" className="btn-clear" onClick={() => handleDeleteClick(contestant)}>
                                    Delete
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <Modal show={showDeleteModal} onHide={handleDeleteCancel} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{contestantToDelete?.name}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteCancel}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contestants;