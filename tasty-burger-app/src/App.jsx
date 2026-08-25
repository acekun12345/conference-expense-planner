import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BurgerCard from './components/BurgerCard';
import './App.css';

const BURGER_DATA = [
  {
    id: 1,
    name: 'Crispy Chicken',
    description: 'Juicy, breaded chicken burger with slaw in a brioche bun.',
    price: 99.15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Ultimate Bacon',
    description: 'Double beef patty burger overflowing with pattern bacon.',
    price: 99.32,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Black Sheep',
    description: 'Unique lamb patty burger with avocado and red onion.',
    price: 69.15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Vegan Burger',
    description: 'Plant-based patty burger with fresh toppings and hit more.',
    price: 99.25,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('OUR MENU');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (burger) => {
    setCartItems((prev) => [...prev, burger]);
  };

  const handleCartClick = () => {
    alert(`Cart Items (${cartItems.length}):\n` + cartItems.map((i) => i.name).join('\n'));
  };

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.length}
        onCartClick={handleCartClick}
      />

      <header className="hero-section">
        <h1>OUR CRAZY BURGERS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam ton
          euismod tincidunt ut labore et dolore magna aliqua.
        </p>
      </header>

      <main className="menu-grid">
        {BURGER_DATA.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} onAddToCart={handleAddToCart} />
        ))}
      </main>
    </div>
  );
}

export default App;