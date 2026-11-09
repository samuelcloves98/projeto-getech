import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import searchIcon from '../assets/search-icon.png'; 
import cartIcon from '../assets/mini-cart.svg'; 

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.topRow}>
        <Logo />
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button onClick={handleSearch} style={styles.searchButton} aria-label="Pesquisar">
            <img src={searchIcon} alt="Buscar" style={styles.searchIconImg} />
          </button>
        </div>

        <div style={styles.actionsContainer}>
          <a href="/register" style={styles.signUpLink}>
            Cadastre-se
          </a>
          <a href="/login" style={styles.loginButton}>
            Entrar
          </a>
          <div style={styles.cartContainer}>
            <img src={cartIcon} alt="Carrinho de compras" style={styles.cartIconImg} />
          </div>
        </div>
      </div>

      <nav style={styles.navRow}>
        <ul style={styles.navList}>
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/categories" 
              style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/orders" 
              style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};


const styles = {
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: '30px 100px 0 100px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '25px',
    gap: '30px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    maxWidth: '559px',
  },
  input: {
    width: '100%',
    padding: '12px 45px 12px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#F5F5F5', 
    fontSize: '14px',
    color: '#1F1F1F', 
    outline: 'none',
  },
  searchButton: {
    position: 'absolute',
    right: '16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconImg: {
    width: '20px',
    height: '20px',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  signUpLink: {
    fontSize: '16px',
    color: '#474747', 
    textDecoration: 'underline',
    fontWeight: '400',
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '114px',
    height: '40px',
    backgroundColor: '#C92071', 
    color: '#FFFFFF', 
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  cartContainer: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  cartIconImg: {
    width: '32px',
    height: '32px',
  },
  navRow: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    padding: 0,
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '16px',
    color: '#474747', 
    paddingBottom: '8px',
    position: 'relative',
    transition: 'color 0.2s',
  },
  activeNavLink: {
    color: '#C92071', 
    fontWeight: '600',
    borderBottom: '2px solid #C92071', 
  },
};

export default Header;