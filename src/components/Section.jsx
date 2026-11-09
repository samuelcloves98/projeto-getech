import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section style={{ margin: '40px 0', width: '100%' }}>
      {/* Cabeçalho da Seção (Título e Link opcional) */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px',
          textAlign: titleAlign === 'center' ? 'center' : 'left'
        }}
      >
        <h2 
          style={{ 
            fontSize: '24px', 
            color: '#474747', 
            fontWeight: 'bold', 
            margin: 0,
            width: titleAlign === 'center' ? '100%' : 'auto'
          }}
        >
          {title}
        </h2>

        {/* Link Opcional */}
        {link && titleAlign !== 'center' && (
          <a 
            href={link.href} 
            style={{ 
              fontSize: '18px', 
              color: '#C92071', 
              textDecoration: 'none', 
              fontWeight: 'normal' 
            }}
          >
            {link.text}
          </a>
        )}
      </div>

      {/* Conteúdo Dinâmico (Children) */}
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;