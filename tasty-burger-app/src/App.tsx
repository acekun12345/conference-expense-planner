import React from 'react';
import Navbar from './components/Navbar';
import BurgerCard, { BurgerItem } from './components/BurgerCard';
import './App.css';

const App: React.FC = () => {
  const burgers: BurgerItem[] = [
    {
      id: 1,
      name: 'Crispy Chicken',
      price: 99.15,
      rating: 5,
      description: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Ultimate Bacon',
      price: 99.32,
      rating: 5,
      description: 'House patty, cheddar cheese, bacon, onion, mustard',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Black Sheep',
      price: 69.15,
      rating: 4,
      description: 'American cheese, tomato relish, avocado, lettuce, red onion',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      name: 'Vegan Burger',
      price: 99.25,
      rating: 4,
      description: 'House patty, cheddar cheese, bacon, onion, mustard',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <Navbar cartCount={2} />

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        {/* Header Section */}
        <h1 style={{ color: '#d97706', fontSize: '36px', fontWeight: '900', letterSpacing: '1px', margin: '0 0 15px 0' }}>
          OUR CRAZY BURGERS
        </h1>
        <p style={{ color: '#6b7280', maxWidth: '650px', margin: '0 auto 40px auto', fontSize: '14px', lineHeight: '1.6' }}>
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
          patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted
          bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow
          your mind!
        </p>

        {/* 4 Cards Grid */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {burgers.map((burger) => (
            <BurgerCard key={burger.id} item={burger} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;