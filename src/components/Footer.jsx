import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">›_</span>
            <h2>Digital Store</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8z"/>
              </svg>
            </a>

            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.8" r="1" fill="white" stroke="none"/>
              </svg>
            </a>

            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.8 4.7a4 4 0 0 0 1.2 5.4 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.2a11.3 11.3 0 0 0 17.4-9.6v-.5A8 8 0 0 0 22 5.9z"/>
              </svg>
            </a>
          </div>
        </div>


        <div className="footer-column">
          <h3>Informação</h3>
          <a href="#">Sobre Drip Store</a>
          <a href="#">Segurança</a>
          <a href="#">Wishlist</a>
          <a href="#">Blog</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Meus Pedidos</a>
        </div>

        <div className="footer-column">
          <h3>Categorias</h3>
          <a href="#">Camisetas</a>
          <a href="#">Calças</a>
          <a href="#">Bonés</a>
          <a href="#">Headphones</a>
          <a href="#">Tênis</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contato</h3>
          <p>
            Av. Santos Dumont, 1510 - 1
            andar - Aldeota, Fortaleza -
            CE, 60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>

      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2022 Digital College</p>
      </div>
    </footer>
    
  );
}



export default Footer;
