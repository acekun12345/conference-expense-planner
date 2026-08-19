import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/venueSlice';
import { incrementAvQuantity, decrementAvQuantity } from '../redux/addonsSlice';
import { toggleMealSelection } from '../redux/mealsSlice';
import './ConferenceEvent.css';

const ConferenceEvent = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const venueItems = useSelector((state) => state.venue);
  const addonItems = useSelector((state) => state.addons);
  const mealsItems = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const venueTotal = venueItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const addonTotal = addonItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const mealsTotal = mealsItems.reduce(
    (sum, item) => (item.selected ? sum + item.cost * numberOfPeople : sum),
    0
  );
  const grandTotal = venueTotal + addonTotal + mealsTotal;

  return (
    <div className="conference-container">
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
          <section id="venue" className="section">
            <h2 className="section-header">Venue Room Selection</h2>
            <div className="grid-container">
              {venueItems.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.name}</h3>
                  <p className="price">${item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decrementQuantity(index))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(index))}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${venueTotal}</div>
          </section>

          <section id="addons" className="section">
            <h2 className="section-header">Add-ons Selection</h2>
            <div className="grid-container">
              {addonItems.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.name}</h3>
                  <p className="price">${item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decrementAvQuantity(index))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementAvQuantity(index))}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${addonTotal}</div>
          </section>

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
              {mealsItems.map((item, index) => (
                <div key={index} className="meal-card">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => dispatch(toggleMealSelection(index))}
                  />
                  <span>{item.name} (${item.cost})</span>
                </div>
              ))}
            </div>
            <div className="subtotal-box">Total Cost: ${mealsTotal}</div>
          </section>
        </div>
      ) : (
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
              {venueItems.filter((i) => i.quantity > 0).map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>${i.cost}</td>
                  <td>{i.quantity}</td>
                  <td>${i.cost * i.quantity}</td>
                </tr>
              ))}
              {addonItems.filter((i) => i.quantity > 0).map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>${i.cost}</td>
                  <td>{i.quantity}</td>
                  <td>${i.cost * i.quantity}</td>
                </tr>
              ))}
              {mealsItems.filter((i) => i.selected).map((i, idx) => (
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