import React from 'react';

const Navbar = ({ activeTab, setActiveTab, cartCount, onCartClick }) => {
  const navItems = ['ABOUT', 'OUR MENU', 'SHOP', 'CONTACT'];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-icon">🍔</span>
        <div className="logo-text">
          <h2>TASTY BURGER</h2>
        </div>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-btn ${activeTab === item ? 'active' : ''}`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button className="cart-btn" onClick={onCartClick} aria-label="Cart">
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;