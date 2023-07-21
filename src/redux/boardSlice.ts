import { createSlice } from '@reduxjs/toolkit';

import wordList from '../words.json';

let random = Math.floor(Math.random() * wordList.words.length);

const initialState = {
    board: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ],
    letterPosition: 0,
    row: 0,
    key: '',
    correctWord: wordList.words[random].toUpperCase(),
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },
        increaseLetterPosition: (state) => {
            state.letterPosition++;
        },
        decreaseLetterPosition: (state) => {
            state.letterPosition--;
        },
        increaseRow: (state) => {
            state.row++;
        },
        setKey: (state, action) => {
            state.key = action.payload;
        },
    },
});

export const {
    setBoard,
    increaseLetterPosition,
    decreaseLetterPosition,
    increaseRow,
    setKey,
} = boardSlice.actions;

export default boardSlice.reducer;
