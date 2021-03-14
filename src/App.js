import React from 'react';
import StationsList from './components/Stations/StationsList';
import './theme/App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <StationsList />
      </div>
    </div>
  );
}

export default App;
