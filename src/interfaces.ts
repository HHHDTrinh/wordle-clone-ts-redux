interface boardState {
    board: string[];
    letterPosition: number;
    row: number;
    key: string;
    correctWord: string;
}

export interface RootState {
    board: boardState;
}
