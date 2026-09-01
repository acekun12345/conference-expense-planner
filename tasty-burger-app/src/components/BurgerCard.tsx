import React from 'react';

export interface BurgerItem {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

interface BurgerCardProps {
  item: BurgerItem;
  onAddToCart?: (item: BurgerItem) => void;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="burger-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center', maxWidth: '250px' }}>
      {item.image && <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '6px' }} />}
      <h3>{item.name}</h3>
      {item.description && <p>{item.description}</p>}
      <p style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
      <button 
        onClick={() => onAddToCart && onAddToCart(item)}
        style={{ padding: '8px 16px', backgroundColor: '#e11d48', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BurgerCard;