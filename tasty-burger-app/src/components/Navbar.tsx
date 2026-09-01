import React from 'react';

interface NavbarProps {
  // Magdagdag ng props dito kung may pinapasa mula sa App.tsx (e.g. cartCount?: number)
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0 }) => {
  return (
    <nav className="navbar" style={{ padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b', color: '#fff' }}>
      <h2 style={{ margin: 0 }}>Tasty Burger App</h2>
      <div className="nav-items" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span>Menu</span>
        <span>Cart ({cartCount})</span>
      </div>
    </nav>
  );
};

export default Navbar;