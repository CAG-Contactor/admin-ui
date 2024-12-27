import {FormData, LeaderBoardItem, QueueItem, RegisterContestantResponse} from "../types";
import { Contestant } from "../types";
import { Result } from "../types";

const BASE_URL = "http://localhost:8080/api/v1";

export const registerContestant = async (
    data: FormData
): Promise<RegisterContestantResponse> => {
    console.log("Registering contestant " + JSON.stringify(data));
    const response = await fetch(`${BASE_URL}/contestants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to register contestant");
    }

    return response.json();
};

export const enqueueContestant = async (contestant: Contestant): Promise<void> => {
    console.log("Enqueuing contestant " + JSON.stringify(contestant));
    const response = await fetch(`${BASE_URL}/enqueueContestant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contestant),
    });

    if (!response.ok) {
        throw new Error("Failed to enqueue contestant");
    }
};

export const deleteContestant = async (contestant: Contestant): Promise<void> => {
    console.log("Deleting contestant " + JSON.stringify(contestant));
    // const response = await fetch(`${BASE_URL}/contestants/${contestant}`, {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    // });
    //
    // if (!response.ok) {
    //     throw new Error("Failed to delete contestant");
    // }
};

export const fetchContestants = async (): Promise<Contestant[]> => {
    console.log("Fetching contestants from " +  BASE_URL + "/contestants");
    const response = await fetch(`${BASE_URL}/contestants`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch contestants");
    }

    return response.json();
};

export const fetchQueue = async (): Promise<QueueItem[]> => {
    console.log("Fetching queue from " +  BASE_URL + "/queue");
    const response = await fetch(`${BASE_URL}/queue`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch queue");
    }

    return response.json();
};

export const fetchLeaderBoard = async (): Promise<LeaderBoardItem[]> => {
    console.log("Fetching leader board from " +  BASE_URL + "/leaderboard");
    const response = await fetch(`${BASE_URL}/leaderboard`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch leaderboard");
    }

    return response.json();
};