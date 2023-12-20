
import "./styles.css";
import './App.css';
import Game from "./components/Game";
function App() {
  return (

    <div className="App">
      <div className="game">
        <div className="game-board">
          <Game />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </div>

  );
}

export default App;
