import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { products } from '../data/products';

const newArrivals = [
  {
    id: 1,
    title: 'SIGNAL TEE / BONE',
    price: '$72',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90',
    type: 'model',
  },
  {
    id: 2,
    title: 'HEAVYWEIGHT HOODIE / BLACK',
    price: '$118',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90',
    type: 'product',
  },
  {
    id: 3,
    title: 'UTILITY TROUSER / CHARCOAL',
    price: '$134',
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=90',
    type: 'model',
  },
  {
    id: 4,
    title: 'STUDIO KNIT / CREAM',
    price: '$96',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90',
    type: 'product',
  },
];

const collectionCards = [
  {
    label: 'APPAREL',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=90',
    path: '/shop',
  },
  {
    label: 'SETS',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90',
    path: '/collections',
  },
];

export default function Home() {
  return (
    <div className="catalog-home">
      <section className="catalog-hero">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=90"
          alt="Vault campaign"
          className="catalog-hero-image"
        />

        <div className="catalog-hero-brand">
          <span className="catalog-hero-mark">VAULT/03</span>
          <span>DROP 001</span>
        </div>

        <button className="hero-arrow hero-arrow-left" aria-label="Previous image">
          <ArrowLeft size={34} strokeWidth={1.4} />
        </button>

        <button className="hero-arrow hero-arrow-right" aria-label="Next image">
          <ArrowRight size={34} strokeWidth={1.4} />
        </button>

        <div className="catalog-hero-caption">
          <span>CAMPAIGN 001</span>
          <p>THE UNIFORM / SUMMER 2026</p>
        </div>
      </section>

      <section className="catalog-row-section">
        <div className="catalog-row-heading">
          <h2>
            New <span>-</span>{' '}
            <Link to="/shop">
              Shop All
            </Link>
          </h2>

          <div className="catalog-row-arrows">
            <button aria-label="Previous products">
              <ArrowLeft size={30} strokeWidth={1.4} />
            </button>

            <button aria-label="Next products">
              <ArrowRight size={30} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div className="catalog-product-track">
          {newArrivals.map((item) => (
            <Link
              key={item.id}
              to={`/product/${products[(item.id - 1) % products.length].slug}`}
              className="catalog-product"
            >
              <div className={`catalog-product-image ${item.type}`}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className="catalog-product-copy">
                <p>{item.title}</p>
                <span>{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="catalog-split">
        {collectionCards.map((card) => (
          <Link
            to={card.path}
            className="catalog-split-card"
            key={card.label}
          >
            <img src={card.image} alt={card.label} />

            <div className="catalog-split-overlay" />

            <span>{card.label}</span>
          </Link>
        ))}
      </section>

      <section className="catalog-row-section catalog-row-second">
        <div className="catalog-row-heading">
          <h2>
            Apparel <span>-</span>{' '}
            <Link to="/shop">
              Shop All
            </Link>
          </h2>

          <div className="catalog-row-arrows">
            <button aria-label="Previous products">
              <ArrowLeft size={30} strokeWidth={1.4} />
            </button>

            <button aria-label="Next products">
              <ArrowRight size={30} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div className="catalog-product-track">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="catalog-product"
            >
              <div className={`catalog-product-image ${index % 2 === 0 ? 'model' : 'product'}`}>
                <img
                  src={index % 2 === 0 ? product.alternate : product.image}
                  alt={product.name}
                />
              </div>

              <div className="catalog-product-copy">
                <p>{product.name}</p>
                <span>${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="catalog-founder-moment">
        <div className="catalog-founder-photo">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90"
            alt="Founder"
          />
        </div>

        <div className="catalog-founder-copy">
          <span>FROM THE FOUNDER</span>

          <p>
            “I wanted the clothes to feel like something you discovered,
            not something somebody tried to sell you.”
          </p>

          <Link to="/story">Read the story</Link>
        </div>
      </section>

      <section className="catalog-closing-image">
        <img
          src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1800&q=90"
          alt="Vault campaign archive"
        />

        <div className="catalog-closing-caption">
          <span>ARCHIVE 001</span>
          <Link to="/collections">View Collection</Link>
        </div>
      </section>
    </div>
  );
}