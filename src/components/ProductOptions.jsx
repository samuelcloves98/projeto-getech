import React, { useState } from 'react';

const ProductOptions = ({ options = [], radius = '0px', shape = 'square', type = 'text' }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isCircle = shape === 'circle';

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '15px 0' }}>
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;

        const baseStyle = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: isSelected ? '2px solid #C92071' : '1px solid #CCCCCC',
          backgroundColor: type === 'color' ? option : '#FFFFFF',
          color: type === 'text' ? '#474747' : 'transparent',
          fontSize: '24px',
          fontWeight: 'bold',
        };

        const shapeStyle = isCircle
          ? { width: '31px', height: '31px', borderRadius: '50%' }
          : { width: '48px', height: '46px', borderRadius: radius };

        return (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ ...baseStyle, ...shapeStyle }}
          >
            {type === 'text' && option}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;