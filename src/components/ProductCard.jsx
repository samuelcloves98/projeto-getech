import React from 'react';

const ProductCard = ({ name, image, price, priceDiscount }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '292px', cursor: 'pointer' }}>
      {/* Imagem do Produto (292x321 pixels) */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
        <img 
          src={image} 
          alt={name} 
          style={{ width: '100%', height: '321px', objectFit: 'contain' }} 
        />
      </div>

      {/* Nome do Produto */}
      <h4 style={{ fontSize: '18px', color: '#474747', fontWeight: 'normal', margin: '0 0 10px 0', lineHeight: '24px' }}>
        {name}
      </h4>

      {/* Preços */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {priceDiscount ? (
          <>
            <span style={{ fontSize: '24px', color: '#8F8F8F', textDecoration: 'line-through', fontWeight: 'bold' }}>
              R$ {price.toFixed(2)}
            </span>
            <span style={{ fontSize: '24px', color: '#1F1F1F', fontWeight: 'bold' }}>
              R$ {priceDiscount.toFixed(2)}
            </span>
          </>
        ) : (
          <span style={{ fontSize: '24px', color: '#1F1F1F', fontWeight: 'bold' }}>
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;