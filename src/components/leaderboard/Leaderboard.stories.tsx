import React from "react";
import {StoryFn, Meta} from "@storybook/react";
import Leaderboard from "./Leaderboard";
import {LeaderBoardItem} from "../../types/types";

export default {
    title: "Components/Leaderboard",
    component: Leaderboard,
} as Meta<typeof Leaderboard>;

const Template: StoryFn<typeof Leaderboard> = (args) => <Leaderboard {...args} />;

export const WithNoResultsMessage = Template.bind({});
WithNoResultsMessage.args = {
    initialLeaderboard: [],
};

export const WithLeaderboardItems = Template.bind({});
WithLeaderboardItems.args = {
    initialLeaderboard: [
        {
            contestant: {
                name: "Alice",
                email: "alice@example.com"
            },
            result: {
                endTime: "00:59:45",
                splitTime: "00:30:00",
            },

        },
        {
            contestant:
                {
                    name: "Bob",
                    email: "bob@example.com"
                },
            result:
                {
                    endTime: "00:45:45",
                    splitTime: "00:25:00",
            },
        },
    ] as LeaderBoardItem[],
};

