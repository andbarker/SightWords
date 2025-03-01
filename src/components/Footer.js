import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Sight Words | All rights reserved
        </p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <a 
            href="https://github.com/andbarker/SightWords" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;