import React from "react";
import Layout from "../components/Layout.jsx"; 
import ProductListing from "../components/ProductListing";
import Gallery from '../components/Gallery';
import Section from '../components/Section';

const HomePage = () => {
  
const slideImages = [
    { 
      src: '/home-slide-1.jpeg', 
      subtitle: 'Melhores ofertas personalizadas',
      title: 'Queima de estoque Nike 🔥',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris elusmod irure consectetur.',
      buttonText: 'Ver Ofertas',
      buttonLink: '/produtos'
    },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
    { src: '/home-slide-5.jpeg' },
    { src: '/home-slide-6.jpeg' },
    { src: '/home-slide-7.jpeg' },
    { src: '/home-slide-8.jpeg' },
  ];

  
  const featuredProducts = [
    { name: 'Tênis Nike Revolution 6 Next Nature Masculino', image: '/product-image-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Tênis Adidas Runfalcon 3.0', image: '/product-image-2.jpeg', price: 299.9, priceDiscount: 249.9 },
    { name: 'Tênis Puma Wired Run', image: '/product-image-3.jpeg', price: 250, priceDiscount: 199.9 },
    { name: 'Tênis Vans Old Skool', image: '/product-thumb-4.jpeg', price: 350, priceDiscount: 299.9 },
    { name: 'Tênis Mizuno Wave Rider', image: '/product-thumb-5.jpeg', price: 400, priceDiscount: 349.9 },
    { name: 'Tênis Under Armour Charged', image: '/product-thumb-1.jpeg', price: 280, priceDiscount: 219.9 },
    { name: 'Tênis Olympikus Corre 3', image: '/product-thumb-2.jpeg', price: 320, priceDiscount: 279.9 },
    { name: 'Tênis Fila Racer', image: '/product-thumb-3.jpeg', price: 220, priceDiscount: 179.9 }
  ];

  return (
    <Layout>
      <main>
       
        <section aria-label="Destaques principais">
          <Gallery 
            images={slideImages} 
            width="1440" 
            height="681" 
            showThumbs 
          />
        </section>

        
        <Section title="Coleções em destaque" titleAlign="center">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
            <img src="/collection-1.png" alt="Coleção 1" style={{ borderRadius: '4px', width: '100%', maxWidth: '380px' }} />
            <img src="/collection-2.png" alt="Coleção 2" style={{ borderRadius: '4px', width: '100%', maxWidth: '380px' }} />
            <img src="/collection-3.png" alt="Coleção 3" style={{ borderRadius: '4px', width: '100%', maxWidth: '380px' }} />
          </div>
        </Section>

        
        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={featuredProducts} />
        </Section>
      </main>
    </Layout>
  );
};

export default HomePage;