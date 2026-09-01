import React from 'react';
import Navbar from './components/Navbar';
import BurgerCard, { BurgerItem } from './components/BurgerCard';
import heroImg from './assets/hero.png';
import './App.css';

const App: React.FC = () => {
  const burgerList: BurgerItem[] = [
    {
      id: 1,
      name: 'Classic Cheeseburger',
      price: 8.99,
      description: 'Juicy beef patty with melt-in-your-mouth cheddar cheese.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Bacon Deluxe Burger',
      price: 10.99,
      description: 'Crispy bacon, prime beef, and house special sauce.',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Double Veggie Burger',
      price: 7.99,
      description: 'Loaded double plant-based patty with fresh greens.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const handleAddToCart = (item: BurgerItem) => {
    console.log('Added to cart:', item);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar cartCount={0} />

      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <img 
          src={heroImg} 
          alt="Tasty Burger Hero" 
          style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '15px' }} 
        />
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '10px 0' }}>Welcome to Tasty Burger</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>The best handcrafted burgers in town!</p>
      </header>

      {/* Menu Cards Section */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1e293b' }}>Our Special Menu</h2>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {burgerList.map((burger) => (
            <BurgerCard key={burger.id} item={burger} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;