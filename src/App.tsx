import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Navigation/Header';

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
      <Header />
      <main className="page__main">
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

      <footer style={{ fontSize: '24px' }}>Footer</footer>
    </>
  );
};
