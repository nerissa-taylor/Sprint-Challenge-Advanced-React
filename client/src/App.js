import React from 'react';
import PlayersList from './components/PlayersList';
import './App.css';
import NavBar from './hooks/Navbar';
import Players from './components/Players';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Players />
    </div>
  );
}

export default App;
