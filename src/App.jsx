import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(e.target.value);

    if (isNaN(value)) {
      setMessage('');
      return;
    }

    if (value < 0) {
      setMessage('Enter a positive value');
    } else if (value % 2 === 0) {
      setMessage(`${value + 2}, ${value + 4}, ${value + 6}`);
    } else {
      setMessage(`${value + 2}, ${value + 4}, ${value + 6}`);
    }
  }

  return (
    <>
      <div className="App">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div id="message">{message}</div>
    </div>
    </>
  )
}

export default App
