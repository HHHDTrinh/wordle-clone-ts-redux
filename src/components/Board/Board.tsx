import Keyboard from '../Keyboard/Keyboard';
import Square from '../Square/Square';

import './Board.css';

interface Props {
    board: string[];
}

const Board: React.FC<Props> = (props) => {
    const { board } = props;

    return (
        <>
            <div className="board">
                {board.map((b, idx) => {
                    return (
                        <>
                            <Square value={b} squareIndex={idx} />
                        </>
                    );
                })}
            </div>
            <div className="keyboard">
                <Keyboard />
            </div>
        </>
    );
};

export default Board;
