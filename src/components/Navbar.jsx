import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'SHOP', path: '/shop' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'STORY', path: '/story' },
  ];

  return (
    <>
      <header className="navbar">
        <button
          className="nav-icon mobile-menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.7} />
        </button>

        <nav className="nav-left desktop-nav">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="brand-mark">
          VAULT<span>/03</span>
        </Link>

        <div className="nav-right">
          <button className="nav-icon desktop-search" aria-label="Search">
            <Search size={19} strokeWidth={1.7} />
          </button>

          <Link to="/cart" className="bag-link">
            <ShoppingBag size={19} strokeWidth={1.7} />
            <span>BAG (0)</span>
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-top">
              <span className="brand-mark">
                VAULT<span>/03</span>
              </span>

              <button
                className="nav-icon"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <span>DROP 001</span>
              <span>EST. 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}