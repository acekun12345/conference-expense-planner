import React from 'react';
import './App.css';

const burgerData = [
  {
    id: 1,
    name: 'Crispy Chicken',
    desc: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    price: 99.15,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&q=80',
  },
  {
    id: 2,
    name: 'Ultimate Bacon',
    desc: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: 99.32,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80',
  },
  {
    id: 3,
    name: 'Black Sheep',
    desc: 'American cheese, tomato relish, avocado, lettuce, red onion',
    price: 69.15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
  },
  {
    id: 4,
    name: 'Vegan Burger',
    desc: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: 99.25,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80',
  },
];

function App() {
  return (
    <div className="burger-app">
      <nav className="navbar">
        <div className="logo-container">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
            alt="Tasty Burger Logo" 
            className="logo-img" 
          />
          <span className="logo-text">TASTY<br /><small>BURGER</small></span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu" className="active">OUR MENU</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li className="cart-icon">
            🛒<span className="cart-badge">2</span>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>OUR CRAZY BURGERS</h1>
        <p>
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
          patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted
          bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow
          your mind!
        </p>
      </header>

      <main className="burger-grid">
        {burgerData.map((burger) => (
          <div key={burger.id} className="burger-card">
            <div className="card-image">
              <img src={burger.image} alt={burger.name} />
            </div>
            <div className="card-body">
              <div className="card-header-row">
                <div className="stars">
                  {'★'.repeat(burger.rating)}
                  {'☆'.repeat(5 - burger.rating)}
                </div>
                <button className="wishlist-btn">♡</button>
              </div>
              <h3 className="burger-title">{burger.name}</h3>
              <p className="burger-desc">{burger.desc}</p>
              <div className="price-tag">
                ৳{burger.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;