import { useSelector } from 'react-redux';
import { RootState } from './interfaces';

import Header from './components/Heading/Header';
import Board from './components/Board/Board';

import './App.css';

function App() {
    const board = useSelector((state: RootState) => state.board.board);

    return (
        <main className="App">
            <Header type="h1" text="WORDLE" />
            <Header type="subtitle" text="Guess today word" />
            <div className="board-container">
                <Board board={board} />
            </div>
        </main>
    );
}

export default App;
