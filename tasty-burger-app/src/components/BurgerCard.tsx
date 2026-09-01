import React, { useState } from 'react';

export interface BurgerItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

interface BurgerCardProps {
  item: BurgerItem;
  onAddToCart: (item: BurgerItem) => void;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ item, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '240px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        boxShadow: isHovered ? '0 10px 15px -3px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.2s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Burger Image */}
      <div style={{ overflow: 'hidden', height: '170px' }}>
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }} 
        />
      </div>

      {/* Card Body */}
      <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#f59e0b', fontSize: '14px' }}>
            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
          </div>
          <span 
            onClick={() => setIsLiked(!isLiked)} 
            style={{ 
              cursor: 'pointer', 
              color: isLiked ? '#dc2626' : '#9ca3af', 
              fontSize: '18px',
              transition: 'color 0.2s'
            }}
          >
            {isLiked ? '♥' : '♡'}
          </span>
        </div>

        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#111827' }}>
          {item.name}
        </h3>

        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', lineHeight: '1.4', flexGrow: 1 }}>
          {item.description}
        </p>

        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            backgroundColor: '#4a2c20',
            color: '#facc15',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            ৳{item.price.toFixed(2)}
          </span>

          <button
            onClick={() => onAddToCart(item)}
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;