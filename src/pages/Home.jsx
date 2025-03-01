import { Link } from 'react-router-dom';
import { gradeLevels } from '../data/wordLists';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Sight Words</h1>
        <p className="subtitle">Building reading fluency one word at a time</p>
      </section>
      
      <section className="grade-levels">
        <h2>Select a Grade Level</h2>
        <div className="level-grid">
          {Object.entries(gradeLevels).map(([key, level]) => (
            <Link to={level.path} className="level-card" key={key}>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="about-section">
        <h2>About Sight Words</h2>
        <p>
          Sight words are common words that young children are encouraged to memorize as a whole,
          by sight, so that they can automatically recognize these words in print without having
          to use any strategies to decode.
        </p>
        <Link to="/about" className="button">
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Home;