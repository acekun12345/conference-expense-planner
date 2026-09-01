import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { incrementQuantity, decrementQuantity } from '../redux/venueSlice';
import { incrementAddonQuantity, decrementAddonQuantity } from '../redux/addonsSlice';
import { toggleMealSelection, setNumberOfPeople } from '../redux/mealsSlice';
import './ConferenceEvent.css';

interface ConferenceEventProps {
  onBackToLanding?: () => void;
}

const ConferenceEvent: React.FC<ConferenceEventProps> = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const venues = useSelector((state: RootState) => state.venues);
  const addons = useSelector((state: RootState) => state.addons);
  const mealsState = useSelector((state: RootState) => state.meals);
  const dispatch = useDispatch();

  const mealsList = Array.isArray(mealsState) ? mealsState : ((mealsState as any)?.packages || []);
  const numberOfPeople = typeof mealsState === 'object' && 'numberOfPeople' in mealsState ? mealsState.numberOfPeople : 1;

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalVenueCost = (venues || []).reduce((sum, venue) => sum + (venue.cost * venue.quantity), 0);
  const totalAddonCost = (addons || []).reduce((sum, addon) => sum + (addon.cost * addon.quantity), 0);

  const selectedMeals = mealsList.filter((pkg: any) => pkg.selected);
  const totalMealCost = selectedMeals.reduce((sum: number, pkg: any) => sum + (pkg.cost * numberOfPeople), 0);

  const grandTotal = totalVenueCost + totalAddonCost + totalMealCost;

  return (
    <div className="conference-container">
      <nav className="navbar">
        <h2 className="brand">Conference Expense Planner</h2>
        <div className="nav-links">
          <button onClick={() => handleScrollToSection('venue')}>Venue</button>
          <button onClick={() => handleScrollToSection('addons')}>Add-ons</button>
          <button onClick={() => handleScrollToSection('meals')}>Meals</button>
        </div>
        <button className="show-details-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </nav>

      <main className="main-content">
        {!showDetails ? (
          <>
            <section id="venue" className="section-block">
              <h2 className="section-title">Venue Room Selection</h2>
              <div className="cards-grid">
                {(venues || []).map((venue, index) => (
                  <div key={index} className={`card ${venue.quantity > 0 ? 'selected' : ''}`}>
                    <img src={venue.img} alt={venue.name} />
                    <h3>{venue.name}</h3>
                    <p className="capacity">Capacity: {venue.capacity}</p>
                    <p className="cost">${venue.cost}</p>
                    <div className="counter">
                      <button onClick={() => dispatch(decrementQuantity(index))}>-</button>
                      <span className="counter-val">{venue.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(index))}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-display">Total Venue Cost: ${totalVenueCost}</div>
            </section>

            <section id="addons" className="section-block">
              <h2 className="section-title">Add-ons Selection</h2>
              <div className="cards-grid">
                {(addons || []).map((addon, index) => (
                  <div key={index} className={`card ${addon.quantity > 0 ? 'selected' : ''}`}>
                    <img src={addon.img} alt={addon.name} />
                    <h3>{addon.name}</h3>
                    <p className="cost">${addon.cost}</p>
                    <div className="counter">
                      <button onClick={() => dispatch(decrementAddonQuantity(index))}>-</button>
                      <span className="counter-val">{addon.quantity}</span>
                      <button onClick={() => dispatch(incrementAddonQuantity(index))}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-display">Total Add-ons Cost: ${totalAddonCost}</div>
            </section>

            <section id="meals" className="section-block">
              <h2 className="section-title">Meal Selection</h2>
              <div className="meals-container">
                <div className="people-input-container">
                  <label htmlFor="numberOfPeople">Number of People: </label>
                  <input
                    type="number"
                    id="numberOfPeople"
                    min="1"
                    value={numberOfPeople}
                    onChange={(e) => dispatch(setNumberOfPeople(Number(e.target.value)))}
                  />
                </div>
                <div className="meals-grid">
                  {mealsList.map((pkg: any, index: number) => (
                    <label key={index} className="meal-checkbox-label">
                      <input
                        type="checkbox"
                        checked={pkg.selected || false}
                        onChange={() => dispatch(toggleMealSelection(index))}
                      />
                      <span>
                        {pkg.name} (${pkg.cost}/person)
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="total-display">Total Meals Cost: ${totalMealCost}</div>
            </section>

            <div className="total-display" style={{ textAlign: 'center', fontSize: '1.6rem' }}>
              Grand Total: ${grandTotal}
            </div>
          </>
        ) : (
          <div className="section-block">
            <h2 className="section-title">Total Cost Breakdown</h2>
            <p><strong>Venue Total:</strong> ${totalVenueCost}</p>
            <p><strong>Add-ons Total:</strong> ${totalAddonCost}</p>
            <p><strong>Meals Total:</strong> ${totalMealCost}</p>
            <hr style={{ margin: '20px 0', borderColor: 'rgba(255,255,255,0.1)' }} />
            <h3 style={{ color: '#38bdf8' }}>Grand Total: ${grandTotal}</h3>
          </div>
        )}
        <div className="welcome-banner">
  <h1 className="welcome-title">Welcome to Event Planner</h1>
  <p className="welcome-subtitle">Select your venue, add-ons, and meals below</p>
</div>
      </main>
    </div>
  );
};

export default ConferenceEvent;