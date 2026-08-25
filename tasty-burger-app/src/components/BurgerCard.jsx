import React, { useState } from 'react';

const BurgerCard = ({ burger, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="burger-card">
      <div className="card-image-wrapper">
        <img src={burger.image} alt={burger.name} className="burger-img" />
        <button
          className={`favorite-btn ${isLiked ? 'liked' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Favorite"
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="card-content">
        <div className="rating">
          {'★'.repeat(burger.rating)}
          {'☆'.repeat(5 - burger.rating)}
        </div>

        <h3 className="burger-title">{burger.name}</h3>
        <p className="burger-description">{burger.description}</p>

        <button className="price-btn" onClick={() => onAddToCart(burger)}>
          ৳ {burger.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;