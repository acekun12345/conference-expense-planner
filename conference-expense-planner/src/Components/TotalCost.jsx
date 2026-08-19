import React from 'react';
import './ConferenceEvent.css';

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading">Total Cost for the Event</p>
          <h2 className="heading">${totalCosts}</h2>
        </div>
        <div>
          <ItemsDisplay />
        </div>
      </div>
    </div>
  );
};

export default TotalCost;