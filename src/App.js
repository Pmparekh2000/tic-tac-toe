import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <TicTacToe boardSize={3}/>
    </div>
  );
}

export default App;
