import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'SHOP', path: '/shop' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'STORY', path: '/story' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="nav-mobile-left">
          <button
            className="nav-icon mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="nav-left desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="brand-mark" aria-label="VAULT 03 Home">
          VAULT<span>/03</span>
        </Link>

        <div className="nav-right">
          <button
            className="nav-icon desktop-search"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link
            to="/cart"
            className="bag-link"
            aria-label="Shopping bag, 0 items"
          >
            <ShoppingBag size={21} strokeWidth={1.5} />
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
            transition={{
              duration: 0.48,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="mobile-menu-top">
              <Link
                to="/"
                className="mobile-menu-brand"
                onClick={() => setMenuOpen(false)}
              >
                VAULT<span>/03</span>
              </Link>

              <button
                className="mobile-menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={25} strokeWidth={1.4} />
              </button>
            </div>

            <nav className="mobile-menu-links">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + 0.07 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'mobile-active' : ''
                    }
                  >
                    <span>0{index + 1}</span>

                    <strong>{item.label}</strong>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu-secondary">
              <Link to="/collections" onClick={() => setMenuOpen(false)}>
                NEW ARRIVALS
              </Link>

              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                BAG (0)
              </Link>
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