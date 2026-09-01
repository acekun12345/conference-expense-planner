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
  index: number;
  onAddToCart: (item: BurgerItem, quantity: number) => void;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ item, index, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onAddToCart(item, quantity);
    }
  };

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
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        animation: `cardPopUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
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

        <div style={{ marginTop: '5px' }}>
          <span style={{
            backgroundColor: '#4a2c20',
            color: '#facc15',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            ৳{item.price.toFixed(2)}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '6px', overflow: 'hidden' }}>
            <button
              onClick={handleDecrement}
              style={{
                backgroundColor: '#f3f4f6',
                border: 'none',
                padding: '4px 10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#374151'
              }}
            >
              -
            </button>
            <span style={{ padding: '4px 10px', fontSize: '13px', fontWeight: 'bold', color: '#111827', minWidth: '16px', textAlign: 'center' }}>
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              style={{
                backgroundColor: '#f3f4f6',
                border: 'none',
                padding: '4px 10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#374151'
              }}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            disabled={quantity === 0}
            style={{
              backgroundColor: quantity > 0 ? '#dc2626' : '#9ca3af',
              color: '#ffffff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: quantity > 0 ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.2s',
              flexGrow: 1
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;