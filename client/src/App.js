import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
