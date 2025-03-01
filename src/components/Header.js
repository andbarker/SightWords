import { Link } from 'react-router-dom';
import { gradeLevels } from '../data/wordLists';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Sight Words
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            {Object.entries(gradeLevels).map(([key, level]) => (
              <li key={key} className="nav-item">
                <Link to={level.path} className="nav-link">
                  {level.title}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;