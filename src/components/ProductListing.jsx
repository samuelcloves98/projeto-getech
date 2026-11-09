import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(292px, 1fr))', 
        gap: '24px', 
        width: '100%' 
      }}
    >
      {products && products.map((product, index) => (
        <ProductCard 
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;