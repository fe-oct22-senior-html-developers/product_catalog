import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';

// Pages
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductPage } from './pages/ProductPage';

export const App: React.FC = () => {
  return (
    <>
      <header style={{ fontSize: '24px' }}>Navigation</header>

      {/* container class might be removed */}
      <main className="page__main container">
        <Routes>
          <Route
            path="/"
            element={<HomePage pageTitle="Welcome to Nice Gadgets store!" />}
          />

          <Route
            path="phones"
            element={<ProductPage pageTitle="Mobile Phones" />}
          />
          <Route path="tablets" element={<ProductPage pageTitle="Tablets" />} />
          <Route
            path="accessories"
            element={<ProductPage pageTitle="Accessories" />}
          />

          <Route path="/cart" element={<CartPage pageTitle="Cart" />} />
          <Route
            path="/favourites"
            element={<FavouritesPage pageTitle="Favourites" />}
          />

          <Route path="product/:productId" element={<ProductDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
