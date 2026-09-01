import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('OUR MENU');

  const navItems = [
    { label: 'ABOUT', id: 'about-section' },
    { label: 'OUR MENU', id: 'menu-section' },
    { label: 'SHOP', id: 'menu-section' },
    { label: 'CONTACT', id: 'contact-section' },
  ];

  const handleNavClick = (label: string, id: string) => {
    setActiveTab(label);
    onNavigate(id);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 50px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #eaeaea',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'sans-serif'
    }}>
      {/* Burger Logo */}
      <div 
        onClick={() => handleNavClick('OUR MENU', 'menu-section')} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
          alt="Tasty Burger Logo" 
          style={{ height: '45px', width: 'auto' }} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
          <span style={{ fontSize: '18px', fontWeight: '900', color: '#d97706', fontStyle: 'italic' }}>TASTY</span>
          <span style={{ fontSize: '18px', fontWeight: '900', color: '#dc2626', fontStyle: 'italic' }}>BURGER</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontWeight: 'bold', fontSize: '14px' }}>
        {navItems.map((item) => (
          <span
            key={item.label}
            onClick={() => handleNavClick(item.label, item.id)}
            style={{
              cursor: 'pointer',
              color: activeTab === item.label ? '#dc2626' : '#333333',
              borderBottom: activeTab === item.label ? '2px solid #dc2626' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {item.label}
          </span>
        ))}
        
        {/* Interactive Cart Icon Badge */}
        <div 
          onClick={onOpenCart}
          style={{ 
            position: 'relative', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center',
            padding: '5px',
            transition: 'transform 0.1s ease'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span style={{
            position: 'absolute',
            top: '-4px',
            right: '-6px',
            backgroundColor: '#e11d48',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '11px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;