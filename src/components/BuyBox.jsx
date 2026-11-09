import React from 'react';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '580px' }}>
      {/* Nome do Produto */}
      <h1 style={{ fontSize: '32px', color: '#1F1F1F', fontWeight: 'bold', margin: '0 0 10px 0', lineHeight: '38px' }}>
        {name}
      </h1>

      {/* Referência */}
      <span style={{ fontSize: '12px', color: '#666666', marginBottom: '15px' }}>
        {reference}
      </span>

      {/* Avaliações (Stars e Rating) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#F6AA1C', padding: '4px 8px', borderRadius: '4px', color: '#FFFFFF', fontSize: '14px', fontWeight: 'bold' }}>
          {stars} ★
        </div>
        <span style={{ fontSize: '14px', color: '#8F8F8F' }}>
          ({rating} avaliações)
        </span>
      </div>

      {/* Preços */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px', marginBottom: '20px' }}>
        {priceDiscount ? (
          <>
            <span style={{ fontSize: '32px', color: '#1F1F1F', fontWeight: 'bold' }}>
              R$ {priceDiscount.toFixed(2)}
            </span>
            <span style={{ fontSize: '16px', color: '#8F8F8F', textDecoration: 'line-through' }}>
              R$ {price.toFixed(2)}
            </span>
          </>
        ) : (
          <span style={{ fontSize: '32px', color: '#1F1F1F', fontWeight: 'bold' }}>
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', color: '#8F8F8F', textTransform: 'uppercase', marginBottom: '8px' }}>
          Descrição
        </h3>
        <p style={{ fontSize: '14px', color: '#474747', lineHeight: '22px', margin: 0 }}>
          {description}
        </p>
      </div>

      {/* Children (Ex: Opções de Tamanho/Cor) */}
      {children}

      {/* Botão Call to Action (COMPRAR) */}
      <button 
        style={{ 
          backgroundColor: '#F6AA1C', 
          color: '#FFFFFF', 
          border: 'none', 
          borderRadius: '4px', 
          padding: '16px 0', 
          fontSize: '16px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          marginTop: '20px',
          width: '100%',
          maxWidth: '220px',
          textTransform: 'uppercase'
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;