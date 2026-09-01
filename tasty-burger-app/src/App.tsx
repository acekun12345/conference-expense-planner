import React from 'react';
import Navbar from './components/Navbar';
import BurgerCard, { BurgerItem } from './components/BurgerCard';
import './App.css';

const App: React.FC = () => {
  const sampleBurgers: BurgerItem[] = [
    { id: 1, name: 'Classic Cheeseburger', price: 8.99, description: 'Juicy beef patty with cheddar cheese' },
    { id: 2, name: 'Bacon Deluxe Burger', price: 10.99, description: 'Crispy bacon with special sauce' },
    { id: 3, name: 'Double Veggie Burger', price: 7.99, description: 'Plant-based double patty' },
  ];

  const handleAddToCart = (item: BurgerItem) => {
    console.log('Added to cart:', item);
  };

  return (
    <div className="app-container">
      <Navbar cartCount={0} />
      <main style={{ padding: '20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {sampleBurgers.map((burger) => (
          <BurgerCard key={burger.id} item={burger} onAddToCart={handleAddToCart} />
        ))}
      </main>
    </div>
  );
};

export default App;