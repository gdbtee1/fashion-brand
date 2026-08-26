import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Story.css';

const values = [
  'SMALL BATCH PRODUCTION',
  'DESIGNED WITH INTENT',
  'IDENTITY FIRST',
  'QUALITY MATERIALS',
];

export default function Story() {
  return (
    <div className="brand-story-page">
      <section className="story-hero">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90"
          alt="Vault campaign"
        />

        <div className="story-hero-overlay" />

        <motion.div
          className="story-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>VAULT/03 / THE STORY</span>

          <h1>
            BUILT FOR
            <br />
            THE JOURNEY.
          </h1>

          <p>
            For people creating their own identity,
            not borrowing somebody else&apos;s.
          </p>

          <Link to="/collections">
            EXPLORE COLLECTION
          </Link>
        </motion.div>
      </section>

      <section className="story-manifesto">
        <span>OUR POINT OF VIEW</span>

        <motion.h2
          initial={{ opacity: 0.2, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.45, once: true }}
          transition={{ duration: 0.7 }}
        >
          Clothing built for the people creating their own lane —
          not following the one already made for them.
        </motion.h2>
      </section>

      <section className="story-split story-split-navy">
        <motion.div
          className="story-split-copy"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.75 }}
        >
          <span>01 / FOUNDATION</span>

          <h2>
            WHY
            <br />
            WE STARTED.
          </h2>

          <h3>
            Clothes should feel personal
            before they feel popular.
          </h3>

          <p>
            VAULT/03 began with a simple frustration: too much clothing
            looked designed for everybody and connected with nobody.
            We wanted pieces with weight, character, and a point of view.
          </p>

          <p>
            Every release starts with the question of how something should
            feel when you live in it — not just how it looks in a campaign.
          </p>

          <Link to="/collections">
            SHOP THE FIRST DROP
          </Link>
        </motion.div>

        <div className="story-split-image">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=90"
            alt="Vault clothing campaign"
          />
        </div>
      </section>

      <section className="story-split story-split-oxblood story-split-reverse">
        <div className="story-split-image">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90"
            alt="Vault fashion model"
          />
        </div>

        <motion.div
          className="story-split-copy"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.75 }}
        >
          <span>02 / DESIGN LANGUAGE</span>

          <h2>
            CLOTHES
            <br />
            WITH PRESENCE.
          </h2>

          <h3>
            Shape. Weight.
            Attitude.
          </h3>

          <p>
            We care about silhouette before decoration. A shoulder that sits
            differently. A trouser that falls correctly. Fabric with enough
            weight to hold its own shape.
          </p>

          <p>
            The goal is never to create noise. The goal is to create something
            simple enough to live in and distinct enough to remember.
          </p>

          <Link to="/collections">
            VIEW APPAREL
          </Link>
        </motion.div>
      </section>

      <section className="story-values">
        {values.map((value, index) => (
          <div className="story-value" key={value}>
            <span>0{index + 1}</span>
            <p>{value}</p>
          </div>
        ))}
      </section>

      <section className="story-split story-split-cream">
        <motion.div
          className="story-split-copy"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.75 }}
        >
          <span>03 / FOUNDER PERSPECTIVE</span>

          <h2>
            BUILT FROM
            <br />
            REAL LIFE.
          </h2>

          <h3>
            The brand starts with a person,
            not a marketing department.
          </h3>

          <p>
            The founder&apos;s perspective sits inside every part of the brand:
            what gets made, what gets rejected, how campaigns feel, and how
            the clothes are meant to exist outside the studio.
          </p>

          <p>
            This space is intentionally built for the real story behind the
            label — founder photos, early samples, sketches, and the moments
            that gave each release its identity.
          </p>

          <Link to="/collections">
            SEE WHAT WE MADE
          </Link>
        </motion.div>

        <div className="story-split-image story-founder-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=90"
            alt="Vault founder portrait"
          />
        </div>
      </section>

      <section className="story-editorial-break">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=90"
          alt="Vault lifestyle campaign"
        />

        <div className="story-editorial-overlay" />

        <motion.div
          className="story-editorial-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.75 }}
        >
          <span>THE NEXT CHAPTER</span>

          <h2>
            THE STORY
            <br />
            IS WORN.
          </h2>

          <p>
            Every person who wears it changes what the brand becomes.
          </p>

          <Link to="/collections">
            EXPLORE DROP 001
          </Link>
        </motion.div>
      </section>

      <section className="story-closing-strip">
        <div>
          <span>01</span>
          <p>30-DAY RETURNS</p>
        </div>

        <div>
          <span>02</span>
          <p>SMALL BATCH RELEASES</p>
        </div>

        <div>
          <span>03</span>
          <p>DESIGNED WITH INTENT</p>
        </div>

        <div>
          <span>04</span>
          <p>SECURE CHECKOUT</p>
        </div>
      </section>
    </div>
  );
}