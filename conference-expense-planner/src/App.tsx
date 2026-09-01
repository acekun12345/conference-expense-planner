import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import ConferenceEvent from './Components/ConferenceEvent';
import './App.css';

const App: React.FC = () => {
  const [showVenuePage, setShowVenuePage] = useState<boolean>(false);

  return (
    <div className="App">
      {!showVenuePage ? (
        <LandingPage onGetStarted={() => setShowVenuePage(true)} />
      ) : (
        <ConferenceEvent onBackToLanding={() => setShowVenuePage(false)} />
      )}
    </div>
  );
};

export default App;