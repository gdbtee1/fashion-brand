import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Shop.css';

const editorialCategories = [
  {
    id: '01',
    title: 'NEW DROP',
    path: '/collections',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '02',
    title: 'AFTER HOURS',
    path: '/collections?category=Tops',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '03',
    title: 'ESSENTIALS',
    path: '/collections?category=Tops',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '04',
    title: 'MATCHING SETS',
    path: '/collections',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '05',
    title: 'OUTERWEAR',
    path: '/collections?category=Outerwear',
    image:
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '06',
    title: 'EVERYDAY UNIFORM',
    path: '/collections',
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '07',
    title: 'STATEMENT PIECES',
    path: '/collections',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '08',
    title: 'OFF DUTY',
    path: '/collections?category=Bottoms',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=90',
  },
  {
    id: '09',
    title: 'THE ARCHIVE',
    path: '/collections',
    image:
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=90',
  },
];

const shopCategories = [
  {
    number: '01',
    title: 'TOPS',
    detail: 'TEES / KNITS / LAYERS',
    path: '/collections?category=Tops',
  },
  {
    number: '02',
    title: 'BOTTOMS',
    detail: 'TROUSERS / CARGOS / SHORTS',
    path: '/collections?category=Bottoms',
  },
  {
    number: '03',
    title: 'OUTERWEAR',
    detail: 'JACKETS / HOODIES / OVERSHIRTS',
    path: '/collections?category=Outerwear',
  },
  {
    number: '04',
    title: 'SETS',
    detail: 'BUILT TOGETHER',
    path: '/collections',
  },
  {
    number: '05',
    title: 'ACCESSORIES',
    detail: 'THE FINISHING PIECES',
    path: '/collections',
  },
  {
    number: '06',
    title: 'ALL PRODUCTS',
    detail: 'VIEW THE FULL CATALOG',
    path: '/collections',
  },
];

export default function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-intro">
        <div className="shop-intro-top">
          <span>VAULT/03 / SHOP</span>
          <span>2026</span>
        </div>

        <div className="shop-intro-main">
          <h1>SHOP THE WORLD.</h1>

          <p>
            Start with a mood.
            <br />
            Find the piece after.
          </p>
        </div>
      </section>

      <section className="shop-editorial-grid">
        {editorialCategories.map((category, index) => (
          <motion.article
            className="shop-editorial-item"
            key={category.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: (index % 3) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to={category.path}>
              <div className="shop-editorial-image">
                <img src={category.image} alt={category.title} />

                <div className="shop-editorial-hover">
                  <span>ENTER</span>
                </div>
              </div>

              <div className="shop-editorial-meta">
                <h2>{category.title}</h2>
                <span>{category.id}</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      <motion.section
        className="shop-category-panel"
        initial={{ y: 110 }}
        whileInView={{ y: 0 }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="shop-category-heading">
          <span>SHOP BY CATEGORY</span>

          <p>
            KNOW WHAT
            <br />
            YOU CAME FOR?
          </p>
        </div>

        <div className="shop-category-list">
          {shopCategories.map((category) => (
            <Link
              className="shop-category-row"
              to={category.path}
              key={category.number}
            >
              <span className="shop-category-number">
                {category.number}
              </span>

              <h3>{category.title}</h3>

              <span className="shop-category-detail">
                {category.detail}
              </span>

              <ArrowRight
                className="shop-category-arrow"
                size={30}
                strokeWidth={1.1}
              />
            </Link>
          ))}
        </div>
      </motion.section>

      <section className="shop-campaign-break">
        <img
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=2000&q=90"
          alt="Vault clothing campaign"
        />

        <div className="shop-campaign-shade" />

        <div className="shop-campaign-copy">
          <span>DROP 001</span>

          <h2>
            WEAR IT
            <br />
            YOUR WAY.
          </h2>

          <Link to="/collections">
            VIEW ALL PRODUCTS
            <ArrowRight size={18} strokeWidth={1.2} />
          </Link>
        </div>
      </section>
    </div>
  );
}