import React, { useEffect, useState } from "react";
import { Contestant } from "../../types/types";
import { fetchContestants, deleteContestant as deleteContestantAPI } from "../../api/BackendAPI";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../CommonStyles.css";

interface ContestantsProps {}

export const Contestants: React.FC<ContestantsProps> = () => {
    const [contestants, setContestants] = useState<Contestant[]>([]);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadContestants = async () => {
            try {
                const data = await fetchContestants();
                setContestants(data || []);
            } catch (err) {
                console.error("Failed to load contestants", err);
                setError("Failed to load contestants");
            } finally {
                setLoading(false);
            }
        };

        loadContestants();
    }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleDeleteContestant = async (contestant: Contestant) => {
        console.log("Contestants.tsx: Deleting contestant " + JSON.stringify(contestant));
        try {
            await deleteContestantAPI(contestant);
            setContestants(contestants.filter(c => c !== contestant));
            setMessage(`${contestant.name} has been deleted successfully!`);
        } catch (err) {
            console.error("Failed to delete contestant", err);
            setError("Failed to delete contestant");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
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