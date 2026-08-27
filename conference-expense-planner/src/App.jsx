import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import ConferenceEvent from './Components/ConferenceEvent';
import './App.css';

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <div className="App">
      {!showVenue ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <ConferenceEvent />
      )}
    </div>
  );
}

export default App;