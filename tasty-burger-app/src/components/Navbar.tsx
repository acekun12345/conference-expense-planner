import React from 'react';
import heroImg from '../assets/hero.png';

interface NavbarProps {
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 2 }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 50px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #eaeaea',
      fontFamily: 'sans-serif'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={heroImg} alt="Tasty Burger Logo" style={{ height: '50px', width: 'auto' }} />
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontWeight: 'bold', fontSize: '14px', color: '#333' }}>
        <span style={{ cursor: 'pointer' }}>ABOUT</span>
        <span style={{ cursor: 'pointer' }}>OUR MENU</span>
        <span style={{ cursor: 'pointer' }}>SHOP</span>
        <span style={{ cursor: 'pointer' }}>CONTACT</span>
        
        {/* Cart Icon */}
        <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-10px',
            backgroundColor: '#e11d48',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '10px',
            fontWeight: 'bold'
          }}>
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;