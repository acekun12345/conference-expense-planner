import React from 'react';

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
}

const BurgerCard: React.FC<BurgerCardProps> = ({ item }) => {
  return (
    <div style={{
      width: '240px',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    }}>
      {/* Burger Image */}
      <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: '100%', height: '170px', objectFit: 'cover' }} 
      />

      {/* Card Content */}
      <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        {/* Rating and Heart Icon */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#f59e0b', fontSize: '14px' }}>
            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
          </div>
          <span style={{ cursor: 'pointer', color: '#9ca3af', fontSize: '16px' }}>♡</span>
        </div>

        {/* Title */}
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#111827' }}>
          {item.name}
        </h3>

        {/* Description */}
        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', lineHeight: '1.4', flexGrow: 1 }}>
          {item.description}
        </p>

        {/* Price Tag Badge */}
        <div style={{ marginTop: '10px' }}>
          <span style={{
            backgroundColor: '#4a2c20',
            color: '#facc15',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            ৳{item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;