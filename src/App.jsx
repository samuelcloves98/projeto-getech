import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import ProductViewPage from "./pages/ProductViewPage.jsx";
import Header from "./components/Header.jsx"


function App() {
  return ( <div>

    <BrowserRouter>
      <header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </BrowserRouter>
      <footer/>
  </div>
  );
}

export default App;