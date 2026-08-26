import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Collections.css';

const catalogProducts = [
  {
    id: 1,
    slug: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie Washed Black',
    price: 118,
    category: 'Outerwear',
    badge: 'LIMITED',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#141414', '#6d665b'],
  },
  {
    id: 2,
    slug: 'signal-tee',
    name: 'Signal Tee Bone',
    price: 72,
    category: 'Tops',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#eee8da', '#111111', '#7d7065'],
  },
  {
    id: 3,
    slug: 'utility-trouser',
    name: 'Utility Trouser Charcoal',
    price: 134,
    category: 'Bottoms',
    badge: 'PRE-ORDER',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#353535', '#5f625c'],
  },
  {
    id: 4,
    slug: 'archive-knit',
    name: 'Archive Knit Stone',
    price: 96,
    category: 'Tops',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#c6bba5', '#1a1a1a'],
  },
  {
    id: 5,
    slug: 'studio-jacket',
    name: 'Studio Jacket Moss',
    price: 168,
    category: 'Outerwear',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#6f7056', '#242424'],
  },
  {
    id: 6,
    slug: 'wide-leg-pant',
    name: 'Wide Leg Pant Black',
    price: 128,
    category: 'Bottoms',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#101010', '#4c4b49'],
  },
  {
    id: 7,
    slug: 'ribbed-long-sleeve',
    name: 'Ribbed Long Sleeve Olive',
    price: 88,
    category: 'Tops',
    badge: 'SOLD OUT',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#55533c', '#202020'],
  },
  {
    id: 8,
    slug: 'structured-vest',
    name: 'Structured Vest Cream',
    price: 108,
    category: 'Tops',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#e2ddd0', '#292929'],
  },
  {
    id: 9,
    slug: 'uniform-short',
    name: 'Uniform Short Charcoal',
    price: 92,
    category: 'Bottoms',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#4d4c48', '#151515'],
  },
  {
    id: 10,
    slug: 'raw-edge-tee',
    name: 'Raw Edge Tee White',
    price: 68,
    category: 'Tops',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#f1efe7', '#101010'],
  },
  {
    id: 11,
    slug: 'canvas-overshirt',
    name: 'Canvas Overshirt Tobacco',
    price: 142,
    category: 'Outerwear',
    badge: 'NEW',
    type: 'model',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#8b7055', '#34332f'],
  },
  {
    id: 12,
    slug: 'studio-cargo',
    name: 'Studio Cargo Black',
    price: 148,
    category: 'Bottoms',
    type: 'product',
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=90',
    swatches: ['#111111', '#5b5c57', '#9c9585'],
  },
];

const filters = ['All', 'Tops', 'Bottoms', 'Outerwear'];

export default function Collections() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    let items =
      category === 'All'
        ? [...catalogProducts]
        : catalogProducts.filter((product) => product.category === category);

    if (sort === 'Price Low') {
      items.sort((a, b) => a.price - b.price);
    }

    if (sort === 'Price High') {
      items.sort((a, b) => b.price - a.price);
    }

    if (sort === 'Newest') {
      items.reverse();
    }

    return items;
  }, [category, sort]);

  return (
    <div className="catalog-page">
      <div className="catalog-announcement">
        FREE SHIPPING ON ORDERS OVER $200
      </div>

      <header className="catalog-controls">
        <div className="catalog-categories">
          {filters.map((filter) => (
            <button
              key={filter}
              className={category === filter ? 'active' : ''}
              onClick={() => setCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="catalog-sort">
          <button onClick={() => setFilterOpen((current) => !current)}>
            Sort: {sort}
            <ChevronDown size={17} strokeWidth={1.4} />
          </button>

          {filterOpen && (
            <div className="catalog-sort-menu">
              {['Featured', 'Newest', 'Price Low', 'Price High'].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSort(option);
                      setFilterOpen(false);
                    }}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </header>

      <main className="catalog-grid">
        {visibleProducts.map((product) => (
          <article className="catalog-item" key={product.id}>
            <Link to={`/product/${product.slug}`} className="catalog-item-image">
              {product.badge && (
                <span
                  className={`catalog-badge ${
                    product.badge === 'SOLD OUT' ? 'sold-out' : ''
                  }`}
                >
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className={product.type === 'product' ? 'isolated' : ''}
              />
            </Link>

            <div className="catalog-item-info">
              <Link to={`/product/${product.slug}`}>{product.name}</Link>

              <span className="catalog-price">${product.price}.00</span>

              <div className="catalog-swatches">
                {product.swatches.map((color, index) => (
                  <span
                    key={`${product.id}-${index}`}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      <section className="catalog-pagination">
        <div className="pagination-controls">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>…</span>
          <button>4</button>

          <button className="pagination-next" aria-label="Next page">
            <ChevronRight size={22} strokeWidth={1.3} />
          </button>
        </div>

        <p>You’re viewing 1–{visibleProducts.length} of 42 products</p>
      </section>

      <section className="catalog-commerce-footer">
        <div className="catalog-footer-brand">
          <div className="catalog-footer-logo">VAULT/03</div>

          <p>
            Independent clothing.
            <br />
            Built without permission.
          </p>

          <span>EST. 2026</span>
        </div>

        <div className="catalog-footer-links">
          <div>
            <Link to="/story">About</Link>
            <a href="/">Sizing Chart</a>
            <a href="/">FAQ</a>
            <a href="/">Shipping</a>
            <a href="/">Returns</a>
          </div>

          <div>
            <Link to="/shop">New</Link>
            <Link to="/collections">Apparel</Link>
            <a href="/">Accessories</a>
            <a href="/">Gift Cards</a>
            <Link to="/story">Story</Link>
          </div>
        </div>

        <div className="catalog-newsletter">
          <h3>NEWSLETTER</h3>

          <p>
            New releases, studio notes,
            <br />
            and early access.
          </p>

          <div className="catalog-email">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <div className="catalog-footer-bottom">
        <span>© 2026 VAULT/03</span>
        <span>INSTAGRAM / TIKTOK</span>
      </div>
    </div>
  );
}