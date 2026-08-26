import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-statement">
        <p>VAULT/03</p>
        <h2>
          WEAR WHAT
          <br />
          YOU BELIEVE IN.
        </h2>
      </div>

      <div className="footer-grid">
        <div>
          <span className="footer-label">EXPLORE</span>
          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/story">Our Story</Link>
        </div>

        <div>
          <span className="footer-label">FOLLOW</span>
          <a href="/">Instagram</a>
          <a href="/">TikTok</a>
          <a href="/">Pinterest</a>
        </div>

        <div>
          <span className="footer-label">SUPPORT</span>
          <a href="/">Shipping</a>
          <a href="/">Returns</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-newsletter">
          <span className="footer-label">PRIVATE ACCESS</span>
          <p>Early access to future releases.</p>

          <div className="email-field">
            <input type="email" placeholder="EMAIL ADDRESS" />
            <button>JOIN →</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VAULT/03</span>
        <span>INDEPENDENTLY BUILT.</span>
      </div>
    </footer>
  );
}