import React, { useEffect, useState } from 'react';
import './Square.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

interface IProps {
    value: string;
    squareIndex: number;
}

const Square: React.FC<IProps> = (props) => {
    const { value, squareIndex } = props;
    //Redux state
    const correctWord = useSelector(
        (state: RootState) => state.board.correctWord,
    );
    const position = useSelector(
        (state: RootState) => state.board.letterPosition,
    );
    const reduxRow = useSelector((state: RootState) => state.board.row);
    //State
    const [correct, setCorrect] = useState<boolean>(false);
    const [almost, setAlmost] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);

    let wordLastIndex = 4;
    let currentPos =
        position === 5
            ? wordLastIndex
            : position > 5 && position % 5 === 0
            ? wordLastIndex
            : (position % 5) - 1;

    const variants = {
        filled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
        unfilled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
    };

    useEffect(() => {
        console.log(correctWord);
        if (correctWord[currentPos] === value) {
            setCorrect(true);
        } else if (!correct && value !== '' && correctWord.includes(value)) {
            setAlmost(true);
        } else if (!correct && value !== '' && !correctWord.includes(value)) {
            setWrong(true);
        }
        return () => {
            setCorrect(false);
            setAlmost(false);
            setWrong(false);
        };
    }, [value]);

    const status: any =
        Math.floor(squareIndex / 5) < reduxRow &&
        (correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '');

    return (
        <motion.div animate={value ? 'filled' : 'unfilled'} variants={variants}>
            <div className="square" id={status}>
                {value}
            </div>
        </motion.div>
    );
};

export default Square;
