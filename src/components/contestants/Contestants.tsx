import React, { useState } from "react";
import { Contestant } from "../../types/types";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { enqueueContestant, deleteContestant } from "../../api/BackendAPI";
import "../../index.css"; // Import index.css to reuse global styles
import "./Contestants.css"; // Import Contestants.css to reuse Contestants-specific styles

interface ContestantsProps {
    initialContestants: Contestant[];
}

export const Contestants: React.FC<ContestantsProps> = ({ initialContestants }) => {
    const [contestants, setContestants] = useState<Contestant[]>(initialContestants);
    const [message, setMessage] = useState<string>("");

    const handleEnqueueContestant = async (contestant: Contestant) => {
        try {
            await enqueueContestant(contestant);
            setMessage(`${contestant.name} has been enqueued successfully!`);
        } catch (err) {
            console.error("Failed to enqueue contestant", err);
            setMessage("Failed to enqueue contestant");
        }
    };

    const handleDeleteContestant = async (contestant: Contestant) => {
        try {
            await deleteContestant(contestant);
            setMessage(`${contestant.name} has been deleted successfully!`);
            setContestants(contestants.filter(c => c !== contestant));
        } catch (err) {
            console.error("Failed to delete contestant", err);
            setMessage("Failed to delete contestant");
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4">Contestants</h1>
            {message && <p className="text-center">{message}</p>}
            {contestants.length === 0 ? (
                <p className="text-center">No contestants registered yet.</p>
            ) : (
                <ListGroup>
                    {contestants.map((contestant, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center list-group-item">
                            <div>
                                <strong>{contestant.name}</strong>
                                <br />
                                <span>{contestant.email}</span>
                                <br/>
                            </div>
                            <div className="button-container">
                                <Button variant="primary" className="btn-submit me-2" onClick={() => handleEnqueueContestant(contestant)}>
                                    Enqueue
                                </Button>
                                <Button type="button" className="btn-clear" onClick={() => handleDeleteContestant(contestant)}>
                                    Delete
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Contestants;