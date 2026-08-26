import Navbar from './Navbar';
import Footer from './Footer';

export default function AppShell({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}