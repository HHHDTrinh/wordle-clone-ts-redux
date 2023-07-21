import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordList from '../../words.json';
import {
    decreaseLetterPosition,
    increaseRow,
    setBoard,
    setKey,
} from '../../redux/boardSlice';
import { RootState } from '../../interfaces';
import Key from './Key/Key';
import './keyboard.css';

const KeyBoard: React.FC = () => {
    const dispatch = useDispatch();
    const rowInRedux = useSelector((state: RootState) => state.board.row);
    const board = useSelector((state: RootState) => state.board.board);
    const position = useSelector(
        (state: RootState) => state.board.letterPosition,
    );
    const key = useSelector((state: RootState) => state.board.key);
    const correctWord = useSelector(
        (state: RootState) => state.board.correctWord,
    );
    let allWords = wordList.words;
    let board5Words: string = `${board[position - 5]}${board[position - 4]}${
        board[position - 3]
    }${board[position - 2]}${board[position - 1]}`.toLowerCase();
    const rows = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'];

    const clickEnter = () => {
        if (key !== 'Enter') {
            if (allWords.includes(board5Words)) {
                if (
                    position % 5 === 0 &&
                    position !== 0 &&
                    (position - 1) / 5 > rowInRedux
                ) {
                    dispatch(increaseRow());
                }
                dispatch(setKey('Enter'));
            } else if (!allWords.includes(board5Words)) {
                alert('Invalid words');
            }
        }
        if (position === 30 && allWords.includes(board5Words)) {
            alert('The word is: ' + correctWord);
        }
    };

    const clickBack = () => {
        if (Math.floor((position - 1) / 5) < rowInRedux) return;
        else {
            const newBoard = [...board];
            newBoard[position - 1] = '';
            dispatch(decreaseLetterPosition());
            dispatch(setBoard(newBoard));
        }
    };

    return (
        <div className="keyboard-container">
            {rows.map((row, idx) => {
                return (
                    <div className="row">
                        {idx === 2 && (
                            <span className="letter-row" onClick={clickEnter}>
                                {idx === 2 && 'Enter'}{' '}
                            </span>
                        )}
                        {row.split(' ').map((letter, idx) => {
                            return (
                                <div className="letter-row">
                                    <Key letter={letter.toUpperCase()} />
                                    {letter === 'm' && (
                                        <span onClick={clickBack}> Back </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default KeyBoard;
