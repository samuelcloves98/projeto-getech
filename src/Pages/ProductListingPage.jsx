
import React from "react";
import Layout from "../components/Layout.jsx"; 
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  // Lista de produtos de exemplo para a listagem
  const productsList = [
    { name: 'Tênis Nike Revolution 6 Next Nature Masculino', image: '/product-image-1.jpeg', price: 200, priceDiscount: 149.9 },
    { name: 'Tênis Adidas Runfalcon 3.0', image: '/product-image-2.jpeg', price: 299.9, priceDiscount: 249.9 },
    { name: 'Tênis Puma Wired Run', image: '/product-image-3.jpeg', price: 250, priceDiscount: 199.9 },
    { name: 'Tênis Vans Old Skool', image: '/product-thumb-4.jpeg', price: 350, priceDiscount: 299.9 },
    { name: 'Tênis Mizuno Wave Rider', image: '/product-thumb-5.jpeg', price: 400, priceDiscount: 349.9 },
    { name: 'Tênis Under Armour Charged', image: '/product-thumb-1.jpeg', price: 280, priceDiscount: 219.9 },
    { name: 'Tênis Olympikus Corre 3', image: '/product-thumb-2.jpeg', price: 320, priceDiscount: 279.9 },
    { name: 'Tênis Fila Racer', image: '/product-thumb-3.jpeg', price: 220, priceDiscount: 179.9 }
  ];

  // Opções de filtro de Marca
  const brandOptions = [
    { text: 'Adidas', value: 'adidas' },
    { text: 'Balenciaga', value: 'balenciaga' },
    { text: 'K-Swiss', value: 'k-swiss' },
    { text: 'Nike', value: 'nike' },
    { text: 'Puma', value: 'puma' }
  ];

  // Opções de filtro de Categoria
  const categoryOptions = [
    { text: 'Esporte e Lazer', value: 'esporte' },
    { text: 'Casual', value: 'casual' },
    { text: 'Utilitário', value: 'utilitario' },
    { text: 'Corrida', value: 'corrida' }
  ];

  // Opções de filtro de Gênero
  const genderOptions = [
    { text: 'Masculino', value: 'masculino' },
    { text: 'Feminino', value: 'feminino' },
    { text: 'Unisex', value: 'unisex' }
  ];

  // Opções de filtro de Estado
  const stateOptions = [
    { text: 'Novo', value: 'novo' },
    { text: 'Usado', value: 'usado' }
  ];

  return (
    <Layout>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 100px' }}>
        
        {/* Container Principal Dividido em Sidebar (Filtros) e Conteúdo */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          
          {/* Coluna da Esquerda: Ordenação e Filtros */}
          <aside style={{ width: '308px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* 6.1 - Campo de Ordenação */}
            <div style={{ width: '308px', height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <label htmlFor="sort-select" style={{ fontSize: '16px', color: '#474747', fontWeight: 'bold', marginBottom: '8px' }}>
                Ordenar por
              </label>
              <select 
                id="sort-select"
                style={{ width: '100%', height: '40px', padding: '0 12px', borderRadius: '4px', border: '1px solid #CCCCCC', color: '#474747', fontSize: '14px', backgroundColor: '#FFFFFF' }}
              >
                <option value="relevancia">Mais relevantes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>
            </div>

            {/* 6.2 - Caixa de Filtrar por */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '4px', width: '308px' }}>
              <h2 style={{ fontSize: '16px', color: '#474747', fontWeight: 'bold', paddingBottom: '12px', margin: '0' }}>
                Filtrar por
              </h2>
              <hr style={{ border: '0', height: '1px', backgroundColor: '#CCCCCC', margin: '0 0 20px 0' }} />

              {/* Grupos de Filtros */}
              <FilterGroup title="Marca" inputType="checkbox" options={brandOptions} />
              <FilterGroup title="Categoria" inputType="checkbox" options={categoryOptions} />
              <FilterGroup title="Gênero" inputType="checkbox" options={genderOptions} />
              <FilterGroup title="Estado" inputType="radio" options={stateOptions} />
            </div>

          </aside>

          {/* Coluna da Direita: Listagem de Produtos */}
          <main style={{ flex: 1 }}>
            {/* 6.3 - Seção e listagem de produtos com o total dinâmico */}
            <Section title={`Resultados para "Tênis" - ${productsList.length} produtos encontrados`} titleAlign="left">
              <ProductListing products={productsList} />
            </Section>
          </main>

        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;