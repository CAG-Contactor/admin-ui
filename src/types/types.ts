export type FormData = {
    name: string;
    email: string;
};

export type Errors = {
    name?: string;
    email?: string;
};

export type RegisterContestantResponse = {
    success: boolean;
    contestant: FormData;
};

export type Contestant = {
    name: string;
    email: string;
};

export type Result = {
    contestant: Contestant;
    timestamp: string;
};

export type QueueItem = {
    contestant: {
        name: string;
        email: string;
    }
    timestamp: string;
};

export type LeaderBoardItem = {
    contestant: {
        name: string;
        email: string;
    }
    result: {
        endTime: string;
        splitTime: string;
    };
};
