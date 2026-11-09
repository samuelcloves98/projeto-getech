import React from "react";
import Layout from "../components/Layout.jsx"; // Corrigido de "./components/Layout.jsx" para "../components/Layout.jsx"
import ProductListing from "../components/ProductListing";
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';

const ProductViewPage = () => {
  // Imagens da galeria do produto
  const productImages = [
    { src: '/product-image-1.png' },
    { src: '/product-image-2.png' },
    { src: '/product-image-3.png' },
    { src: '/product-image-4.png' },
    { src: '/product-image-5.png' }
  ];

  // Produtos recomendados
  const relatedProducts = [
    { name: 'Tênis K-Swiss V8 - Masculino', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { name: 'Tênis Adidas Runfalcon 3.0', image: '/product-thumb-2.png', price: 299.9, priceDiscount: 249.9 },
    { name: 'Tênis Puma Wired Run', image: '/product-thumb-3.png', price: 250, priceDiscount: 199.9 },
    { name: 'Tênis Vans Old Skool', image: '/product-thumb-4.png', price: 350, priceDiscount: 299.9 }
  ];

  return (
    <Layout>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 100px' }}>
        
        {/* Seção Superior: Galeria + BuyBox */}
        <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', marginBottom: '80px' }}>
          
          {/* 7.1 - Galeria de Imagens (700x570) */}
          <div>
            <Gallery 
              images={productImages} 
              width="700" 
              height="570" 
              radius="4px" 
              showThumbs 
            />
          </div>

          {/* 7.3 - Buy Box */}
          <div style={{ flex: 1 }}>
            <BuyBox 
              name="Tênis K-Swiss V8 - Masculino"
              reference="Ref: 38416711"
              stars={4.7}
              rating={90}
              price={219.00}
              priceDiscount={139.00}
              description="Edição limitadíssima do clássico Tênis K-Swiss V8, desenvolvido com materiais de alta qualidade para garantir o máximo de estilo e durabilidade no seu dia a dia."
            >
              {/* 7.2 - Opções do Produto (Tamanho e Cor) */}
              <div style={{ marginTop: '20px' }}>
                <span style={{ fontSize: '14px', color: '#8F8F8F', fontWeight: 'bold' }}>Tamanho</span>
                <ProductOptions 
                  options={['39', '40', '41', '42', '43']} 
                  shape="square" 
                  radius="4px" 
                  type="text" 
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <span style={{ fontSize: '14px', color: '#8F8F8F', fontWeight: 'bold' }}>Cor</span>
                <ProductOptions 
                  options={['#6F7E82', '#5A3E36', '#000000', '#D1C2A5']} 
                  shape="circle" 
                  type="color" 
                />
              </div>
            </BuyBox>
          </div>

        </div>

        {/* 7.4 - Produtos Recomendados */}
        <Section 
          title="Produtos recomendados" 
          titleAlign="left" 
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={relatedProducts} />
        </Section>

      </div>
    </Layout>
  );
};

export default ProductViewPage;