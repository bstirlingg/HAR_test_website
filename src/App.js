import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleErrorRequest = () => {
    try {
      // Simulate a condition where an error with a specific status code occurs
      throw {
        response: {
          status: 400,
          statusText: "Bad Request"
        }
      };
    } catch (error) {
      // Handle the simulated error
      alert(`Error: ${error.response.status} ${error.response.statusText}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleErrorRequest}>Test</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
