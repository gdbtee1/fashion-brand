import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import './index.css';

import AppShell from './components/AppShell';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Collections = lazy(() => import('./pages/Collections'));
const Story = lazy(() => import('./pages/Story'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));

function Loader() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        letterSpacing: '0.14em',
      }}
    >
      LOADING
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppShell>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/story" element={<Story />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </AppShell>
    </HashRouter>
  </React.StrictMode>
);