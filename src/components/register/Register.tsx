// src/components/register/Register.tsx

import React, { useState } from "react";
import { Errors, ContestantFormData } from "../../types/types";
import { registerContestant } from "../../api/BackendAPI";
import { validateContestantForm } from "../../utils/validation";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../CommonStyles.css";
import "./Register.css";

const Register: React.FC = () => {
    const [formData, setFormData] = useState<ContestantFormData>({ name: "", email: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        const newErrors = validateContestantForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        try {
            await registerContestant(formData);
            setMessage("Registration successful!");
            setFormData({ name: "", email: "" });
            setErrors({});
        } catch (error) {
            setMessage("Registration failed.");
        }
    };

    const handleClear = (): void => {
        setFormData({ name: "", email: "" });
        setErrors({});
        setMessage("");
    };

    return (
        <div className="container register-container">
            <h1 className="text-center mb-4 title">Contestant Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        isInvalid={!!errors.name}
                        className="form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        isInvalid={!!errors.email}
                        className="form-control"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-between mt-4">
                    <Button type="submit" className="btn-submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={handleClear} className="btn-clear" variant="light">
                        Clear
                    </Button>
                </div>
            </Form>
            {message && <p className="text-center mt-4">{message}</p>}
        </div>
    );
};

export default Register;