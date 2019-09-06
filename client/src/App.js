import React from 'react';
import PlayersList from './components/PlayersList';
import './App.css';
import NavBar from './hooks/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <PlayersList />
    </div>
  );
}

export default App;
