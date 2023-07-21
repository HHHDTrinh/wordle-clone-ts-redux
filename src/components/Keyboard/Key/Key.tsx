import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../interfaces';
import {
    increaseLetterPosition,
    setBoard,
    setKey,
} from '../../../redux/boardSlice';

import './key.css';

interface IProps {
    letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
    const board = useSelector((state: RootState) => state.board.board);
    const key = useSelector((state: RootState) => state.board.key);
    const letterPosition = useSelector(
        (state: RootState) => state.board.letterPosition,
    );
    const row = useSelector((state: RootState) => state.board.row);

    const dispatch = useDispatch();

    let currentRow = Math.floor(letterPosition / 5);

    const handleChooseLetter = (letter: string) => {
        if (letterPosition >= 30) return;
        else if (key === 'Enter') {
            const newBoard = [...board];
            newBoard[letterPosition] = letter;
            dispatch(setBoard(newBoard));
            dispatch(increaseLetterPosition());
            dispatch(setKey(''));
        } else {
            if (currentRow > row) {
                return;
            }
            const newBoard = [...board];
            newBoard[letterPosition] = letter;
            dispatch(setBoard(newBoard));
            dispatch(increaseLetterPosition());
        }
    };

    return (
        <div className="letter" onClick={() => handleChooseLetter(letter)}>
            {letter}
        </div>
    );
};

export default Key;
