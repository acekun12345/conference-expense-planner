import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import ConferenceEvent from './Components/ConferenceEvent';
import './App.css';

function App() {
  const [showProductSelection, setShowProductSelection] = useState(false);

  return (
    <div className="App">
      {!showProductSelection ? (
        <LandingPage onGetStarted={() => setShowProductSelection(true)} />
      ) : (
        <ConferenceEvent />
      )}
    </div>
  );
}

export default App;