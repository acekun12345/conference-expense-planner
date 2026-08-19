import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="left-content">
          <h1>Conference Expense Planner</h1>
          <p className="subtitle">Plan your next major event with us!</p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
        <div className="right-content">
          <p>
            Welcome to BudgetEase Solutions, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions to meet the diverse needs of our
            clients.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower
            individuals and businesses to take control of their finances and achieve
            their goals with ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless and
            accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;