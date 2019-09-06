import React from 'react';
import Players from './components/Players';
import './App.css';
import NavBar from './hooks/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Players />
    </div>
  );
}

export default App;
