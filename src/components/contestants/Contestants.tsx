import React, { useState } from "react";
import { Contestant } from "../../types/types";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../CommonStyles.css";

interface ContestantsProps {
    initialContestants: Contestant[];
    enqueueContestant: (contestant: Contestant) => void;
    deleteContestant: (contestant: Contestant) => void;
}

export const Contestants: React.FC<ContestantsProps> = ({ initialContestants, enqueueContestant, deleteContestant }) => {
    const [message, setMessage] = useState<string>("");

    const handleEnqueueContestant = (contestant: Contestant) => {
        enqueueContestant(contestant);
        setMessage(`${contestant.name} has been enqueued successfully!`);
    };

    const handleDeleteContestant = async (contestant: Contestant) => {
        deleteContestant(contestant);
        setMessage(`${contestant.name} has been deleted successfully!`);
    };

    return (
        <div className="container list-group-container">
            <h1 className="text-center mb-4 title">Contestants</h1>
            {message && <p className="text-center">{message}</p>}
            {initialContestants.length === 0 ? (
                <p className="text-center">No contestants registered yet.</p>
            ) : (
                <ListGroup className="list-group-container">
                    {initialContestants.map((contestant, index) => (
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