import React, { useState } from 'react';
import './ConferenceEvent.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/venueSlice';
import { incrementAvQuantity, decrementAvQuantity } from '../redux/addonsSlice';
import { toggleMealSelection } from '../redux/mealsSlice';

const ConferenceEvent = () => {
    const venueItems = useSelector((state) => state.venue) || [];
    const addonsItems = useSelector((state) => state.addons) || [];
    const mealsItems = useSelector((state) => state.meals) || [];
    const dispatch = useDispatch();

    const [numberOfPeople, setNumberOfPeople] = useState(1);

    // Dynamic Total Cost Calculations
    const calculateVenueTotal = () => {
        return venueItems.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    const calculateAddonsTotal = () => {
        return addonsItems.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    const calculateMealsTotal = () => {
        const sumPerPerson = mealsItems.reduce((total, item) => item.selected ? total + item.cost : total, 0);
        return sumPerPerson * numberOfPeople;
    };

    return (
        <div className="conference-app-wrapper">
            <nav className="top-navbar">
                <h1 className="nav-title">Conference Expense Planner</h1>
                <div className="nav-menu">
                    <a href="#venue" className="nav-item">Venue</a>
                    <a href="#addons" className="nav-item">Add-ons</a>
                    <a href="#meals" className="nav-item">Meals</a>
                </div>
                <button className="show-details-btn">Show Details</button>
            </nav>

            <main className="content-area">
                {/* 1. ROOM SELECTION */}
                <section id="venue" className="selection-section">
                    <div className="section-header-banner">
                        <h2>Venue Room Selection</h2>
                    </div>
                    <div className="card-grid">
                        {venueItems.map((item, index) => (
                            <div key={index} className="item-card">
                                <div className="card-img-container">
                                    <img src={item.img} alt={item.name} className="card-image" />
                                </div>
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-subtitle">(Capacity:{item.capacity})</p>
                                <p className="card-price">${item.cost}</p>
                                <div className="counter-control">
                                    <button className="counter-btn minus-btn" onClick={() => dispatch(decrementQuantity(index))}>-</button>
                                    <span className="counter-val">{item.quantity}</span>
                                    <button className="counter-btn plus-btn" onClick={() => dispatch(incrementQuantity(index))}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-display">
                        <span>Total Cost: ${calculateVenueTotal()}</span>
                    </div>
                </section>

                {/* 2. ADD-ONS SELECTION */}
                <section id="addons" className="selection-section" style={{ marginTop: '40px' }}>
                    <div className="section-header-banner">
                        <h2>Add-ons Selection</h2>
                    </div>
                    <div className="card-grid">
                        {addonsItems.map((item, index) => (
                            <div key={index} className="item-card">
                                <div className="card-img-container">
                                    <img src={item.img} alt={item.name} className="card-image" />
                                </div>
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-price">${item.cost}</p>
                                <div className="counter-control">
                                    <button className="counter-btn minus-btn" onClick={() => dispatch(decrementAvQuantity(index))}>-</button>
                                    <span className="counter-val">{item.quantity}</span>
                                    <button className="counter-btn plus-btn" onClick={() => dispatch(incrementAvQuantity(index))}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-display">
                        <span>Total Cost: ${calculateAddonsTotal()}</span>
                    </div>
                </section>

                {/* 3. MEALS SELECTION */}
                <section id="meals" className="selection-section" style={{ marginTop: '40px' }}>
                    <div className="section-header-banner">
                        <h2>Meals Selection</h2>
                    </div>
                    <div className="meals-input-container" style={{ textAlign: 'center', margin: '20px 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px' }}>
                            Number of People:
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1))}
                            style={{ padding: '8px', fontSize: '1rem', width: '80px', textAlign: 'center' }}
                        />
                    </div>
                    <div className="meals-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '500px', margin: '0 auto' }}>
                        {mealsItems.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <input
                                    type="checkbox"
                                    id={`meal-${index}`}
                                    checked={item.selected}
                                    onChange={() => dispatch(toggleMealSelection(index))}
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <label htmlFor={`meal-${index}`} style={{ fontSize: '1.1rem' }}>
                                    <strong>{item.name}</strong> <br /> ${item.cost}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="total-display" style={{ marginTop: '20px' }}>
                        <span>Total Cost: ${calculateMealsTotal()}</span>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ConferenceEvent;