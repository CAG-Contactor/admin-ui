import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Register from "./Register";

export default {
    title: "Components/Register",
    component: Register,
} as Meta<typeof Register>;

const Template: StoryFn<typeof Register> = (args) => <Register {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Default props for the Register component
};

export const WithPreFilledData = Template.bind({});
WithPreFilledData.args = {
    initialFormData: {
        name: "John Doe",
        email: "john.doe@example.com",
    },
};

export const WithValidationErrors = Template.bind({});
WithValidationErrors.args = {
    initialFormData: {
        name: "Invalid Name123",
        email: "invalid-email",
    }
};