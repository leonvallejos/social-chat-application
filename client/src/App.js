import './App.css';
import io from 'socket.io-client';
import React from 'react'
import { useState, useEffect } from 'react';
import { Socket } from 'socket.io';

// eslint-disable-next-line
const socket = io('http://localhost:4000'); 

function App() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message);
        socket.emit('message', message) // name and value
    }

    useEffect(()=> {
        socket.on('message', message => console.log(message))
    }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}> 
        <input type="text" onChange={e => setMessage(e.target.value)}/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
