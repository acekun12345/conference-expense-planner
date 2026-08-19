import React, { useState } from 'react';
import './ConferenceEvent.css';

const ConferenceEvent = () => {
  const [showDetails, setShowDetails] = useState(false);

  // Venue Rooms State
  const [venueItems, setVenueItems] = useState([
    { name: 'Conference Room (Capacity:15)', cost: 1500, quantity: 0 },
    { name: 'Auditorium Hall (Capacity:200)', cost: 5500, quantity: 0 },
    { name: 'Presentation Room (Capacity:50)', cost: 3500, quantity: 0 },
    { name: 'Large Meeting Room (Capacity:10)', cost: 1000, quantity: 0 },
    { name: 'Small Meeting Room (Capacity:5)', cost: 800, quantity: 0 },
  ]);

  // Add-ons State
  const [addonItems, setAddonItems] = useState([
    { name: 'Projectors', cost: 200, quantity: 0 },
    { name: 'Speaker', cost: 35, quantity: 0 },
    { name: 'Microphones', cost: 45, quantity: 0 },
    { name: 'Whiteboards', cost: 80, quantity: 0 },
    { name: 'Signage', cost: 80, quantity: 0 },
  ]);

  // Meals State
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [meals, setMeals] = useState([
    { name: 'Breakfast', cost: 50, selected: false },
    { name: 'High Tea', cost: 25, selected: false },
    { name: 'Lunch', cost: 65, selected: false },
    { name: 'Dinner', cost: 70, selected: false },
  ]);

  // Quantity Handlers
  const handleVenueQuantityChange = (index, delta) => {
    const updated = [...venueItems];
    const newQty = updated[index].quantity + delta;
    if (newQty >= 0) {
      updated[index].quantity = newQty;
      setVenueItems(updated);
    }
  };

  const handleAddonQuantityChange = (index, delta) => {
    const updated = [...addonItems];
    const newQty = updated[index].quantity + delta;
    if (newQty >= 0) {
      updated[index].quantity = newQty;
      setAddonItems(updated);
    }
  };

  const handleMealChange = (index) => {
    const updated = [...meals];
    updated[index].selected = !updated[index].selected;
    setMeals(updated);
  };

  // Subtotal Calculations
  const venueTotal = venueItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const addonTotal = addonItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const mealsTotal = meals.reduce((sum, item) => item.selected ? sum + item.cost * numberOfPeople : sum, 0);
  const grandTotal = venueTotal + addonTotal + mealsTotal;

  return (
    <div className="conference-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-title">Conference Expense Planner</div>
        <div className="navbar-links">
          <a href="#venue">Venue</a>
          <a href="#addons">Add-ons</a>
          <a href="#meals">Meals</a>
        </div>
        <button className="show-details-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Close Details' : 'Show Details'}
        </button>
      </nav>

      {!showDetails ? (
        <div className="main-content">
          {/* Section 1: Venue Selection */}
          <section id="venue" className="section">
            <h2 className="section-header">Venue Room Selection</h2>
            <div className="grid-container">
              {venueItems.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.name}</h3>
                  <p className="price">${item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleVenueQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleVenueQuantityChange(index, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${venueTotal}</div>
          </section>

          {/* Section 2: Add-ons Selection */}
          <section id="addons" className="section">
            <h2 className="section-header">Add-ons Selection</h2>
            <div className="grid-container">
              {addonItems.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.name}</h3>
                  <p className="price">${item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleAddonQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddonQuantityChange(index, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${addonTotal}</div>
          </section>

          {/* Section 3: Meals Selection */}
          <section id="meals" className="section">
            <h2 className="section-header">Meals Selection</h2>
            <div className="people-input-container">
              <label>Number of People: </label>
              <input
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>
            <div className="meals-grid">
              {meals.map((item, index) => (
                <div key={index} className="meal-card">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleMealChange(index)}
                  />
                  <span>{item.name} (${item.cost})</span>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${mealsTotal}</div>
          </section>
        </div>
      ) : (
        /* Pop-up Summary Table */
        <div className="summary-container">
          <h2>TOTAL COST FOR THE EVENT</h2>
          <h1 className="grand-total">${grandTotal}</h1>
          <table className="summary-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {venueItems.filter(i => i.quantity > 0).map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>${i.cost}</td>
                  <td>{i.quantity}</td>
                  <td>${i.cost * i.quantity}</td>
                </tr>
              ))}
              {addonItems.filter(i => i.quantity > 0).map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>${i.cost}</td>
                  <td>{i.quantity}</td>
                  <td>${i.cost * i.quantity}</td>
                </tr>
              ))}
              {meals.filter(i => i.selected).map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>${i.cost}</td>
                  <td>For {numberOfPeople} people</td>
                  <td>${i.cost * numberOfPeople}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ConferenceEvent;