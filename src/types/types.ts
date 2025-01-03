export interface ContestantFormData {
    name: string;
    email: string;
}

export interface Errors {
    name?: string;
    email?: string;
}

export interface RegisterContestantResponse {
    success: boolean;
    contestant: ContestantFormData;
}

export interface Contestant {
    name: string;
    email: string;
}

export interface Result {
    contestant: Contestant;
    timestamp: string;
}

export interface QueueItem {
    contestant: {
        name: string;
        email: string;
    };
    timestamp: string;
}

export interface LeaderBoardItem {
    contestant: {
        name: string;
        email: string;
    };
    result: {
        endTime: string;
        splitTime: string;
    };
}