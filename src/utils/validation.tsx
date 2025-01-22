// src/utils/validation.ts

import { Errors, ContestantFormData } from "../types/types";

export const validateContestantForm = (formData: ContestantFormData): Errors => {
    const newErrors: Errors = {};
    const nameRegex = /^[a-zA-Z\såäöÅÄÖ]{1,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
        newErrors.name = "Invalid name.";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address.";
    }

    return newErrors;
};