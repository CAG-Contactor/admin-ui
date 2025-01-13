import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Contestants from "./Contestants"; // Import the Contestants component

export default {
    title: "Components/Contestants",
    component: Contestants,
} as Meta<typeof Contestants>;

const Template: StoryFn<typeof Contestants> = (args) => <Contestants {...args} />;

export const Empty = Template.bind({});

