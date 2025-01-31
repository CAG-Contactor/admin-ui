import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Queue from "./Queue";
import { QueueItem } from "../../types/types";

export default {
    title: "Components/Queue",
    component: Queue,
} as Meta<typeof Queue>;

const Template: StoryFn<typeof Queue> = (args) => <Queue {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialQueue: [],
};

export const WithInitialQueue = Template.bind({});
WithInitialQueue.args = {
    initialQueue: [
        { contestant: { name: "Alice", email: "alice@example.com" } },
        { contestant: { name: "Bob", email: "bob@example.com" } },
    ] as QueueItem[],
};
