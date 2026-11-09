import React from 'react';

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h3 style={{ fontSize: '14px', color: '#1F1F1F', fontWeight: 'bold', marginBottom: '12px' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map((option, index) => (
          <label key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: '#474747' }}>
            <input 
              type={inputType} 
              name={title.toLowerCase().replace(/\s+/g, '-')} 
              value={option.value || option.text}
              style={{ width: '22px', height: '22px', accentColor: '#C92071', cursor: 'pointer' }}
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;