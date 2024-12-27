import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Contestants from "./Contestants";

export default {
    title: "Components/Contestants",
    component: Contestants,
} as Meta<typeof Contestants>;

const Template: StoryFn<typeof Contestants> = (args) => <Contestants {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    initialContestants: [],
};

export const WithContestants = Template.bind({});
WithContestants.args = {
    initialContestants: [
        { name: "John Doe", email: "john.doe@example.com" },
        { name: "Jane Smith", email: "jane.smith@example.com" },
        { name: "Alice Johnson", email: "alice.johnson@example.com" },
    ],
};