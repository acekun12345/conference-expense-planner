import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BurgerCard, { BurgerItem } from './components/BurgerCard';
import './App.css';

interface CartEntry {
  item: BurgerItem;
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

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

  const handleAddToCart = (burger: BurgerItem, selectedQuantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === burger.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === burger.id
            ? { ...entry, quantity: entry.quantity + selectedQuantity }
            : entry
        );
      }
      return [...prev, { item: burger, quantity: selectedQuantity }];
    });
  };

  const totalCartCount = cartItems.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalPrice = cartItems.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
      />

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        
        {/* Menu Section */}
        <div id="menu-section">
          <h1 style={{ color: '#d97706', fontSize: '36px', fontWeight: '900', letterSpacing: '1px', margin: '0 0 15px 0' }}>
            OUR CRAZY BURGERS
          </h1>
          <p style={{ color: '#6b7280', maxWidth: '650px', margin: '0 auto 40px auto', fontSize: '14px', lineHeight: '1.6' }}>
            Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
            patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted
            bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow
            your mind!
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {burgers.map((burger, index) => (
              <BurgerCard 
                key={burger.id} 
                item={burger} 
                index={index} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <section id="about-section" style={{ marginTop: '80px', padding: '40px 20px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
          <h2 style={{ color: '#111827', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>ABOUT TASTY BURGER</h2>
          <p style={{ color: '#4b5563', fontSize: '14px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Founded with a passion for quality, we source the freshest ingredients and prime beef to craft handcrafted burgers that satisfy your cravings every single day.
          </p>
        </section>

        {/* Contact Section with CEO Info */}
        <section id="contact-section" style={{ marginTop: '50px', padding: '40px 20px', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ color: '#111827', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>CONTACT US</h2>
          <p style={{ color: '#dc2626', fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>CEO : ACE ESTRABELA</p>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: '5px 0' }}>Email: support@tastyburger.com | Phone: (02) 8888-BURGER</p>
        </section>
      </main>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            width: '350px',
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-4px 0 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Your Shopping Cart</h2>
              <span onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>✕</span>
            </div>

            <div style={{ flexGrow: 1, overflowY: 'auto', margin: '20px 0' }}>
              {cartItems.length === 0 ? (
                <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '40px' }}>Your cart is empty.</p>
              ) : (
                cartItems.map((entry) => (
                  <div key={entry.item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '14px' }}>{entry.item.name}</h4>
                      <span style={{ fontSize: '12px', color: '#6b7280' }}>Qty: {entry.quantity} x ৳{entry.item.price.toFixed(2)}</span>
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#dc2626' }}>
                      ৳{(entry.item.price * entry.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontWeight: 'bold', fontSize: '16px' }}>
                <span>Total:</span>
                <span style={{ color: '#dc2626' }}>৳{totalPrice.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => alert('Proceeding to Checkout!')}
                style={{
                  width: '100%',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;