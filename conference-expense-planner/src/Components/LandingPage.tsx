import React from 'react';
import './LandingPage.css';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-container">
      <div className="landing-overlay">
        <div className="landing-content">
          
          {/* Left Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title">Conference Expense Planner</h1>
            <p className="hero-subtitle">
              Plan your next event seamlessly with automated budget calculation.
            </p>
            <button className="get-started-btn" onClick={onGetStarted}>
              Get Started
            </button>
          </div>

          {/* Right Info Card */}
          <div className="info-card">
            <p>
              Welcome to <strong>Conference Expense Planner</strong>, your all-in-one solution for managing event costs efficiently.
            </p>
            <p>
              Easily select suitable <strong>Venue Rooms</strong>, equipment <strong>Add-ons</strong>, and tailored <strong>Meal Packages</strong> for your attendees with real-time budget tracking.
            </p>
            <p>
              Click <strong>Get Started</strong> to customize your event requirements and streamline your planning process today!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;