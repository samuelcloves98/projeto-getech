import React, { useState } from 'react';

const Gallery = ({ className, width, height, radius = '0px', showThumbs, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  
 
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={className} style={{ width: width ? `${width}px` : '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Container Principal do Slide */}
      <div style={{ position: 'relative', width: '100%', height: height ? `${height}px` : '400px', borderRadius: radius, overflow: 'hidden', backgroundColor: '#EFEFEF' }}>
        
     
        {images.length > 0 && (
          <img 
            src={images[currentIndex].src} 
            alt={`Slide ${currentIndex + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }} 
          />
        )}

        
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === 0 ? 0.4 : 1,
            zIndex: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1F1F1F' }}>‹</span>
        </button>

       
        <button 
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === images.length - 1 ? 0.4 : 1,
            zIndex: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
         
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1F1F1F' }}>›</span>
        </button>
      </div>

      
      {showThumbs !== undefined && (
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '5px' }}>
          {images.map((img, index) => {
            const isSelected = currentIndex === index;
            return (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '117px',
                  height: '95px',
                  borderRadius: radius,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #C92071' : '2px solid transparent',
                  transition: 'border 0.2s ease',
                  flexShrink: 0
                }}
              >
                <img 
                  src={img.src} 
                  alt={`Thumbnail ${index + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Gallery;