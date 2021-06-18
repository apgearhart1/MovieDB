import React from 'react';
import './App.css';
import List from './MovieList'
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>ReelTime</h1>
        <h2>A cleaner movie DB experience</h2>
      </header>

      <div>
      <h2>Popular Movies</h2>
        <List/>
      </div> 
    </div>
  );
}

export default App;
