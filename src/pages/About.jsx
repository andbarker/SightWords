import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-content">
        <h1>About Sight Words</h1>
        
        <div className="about-section">
          <h2>What are Sight Words?</h2>
          <p>
            Sight words are high-frequency words that young children are encouraged to memorize 
            as a whole by sight, so that they can automatically recognize these words in print without 
            having to use any strategies to decode them.
          </p>
          <p>
            Learning these words helps children become more fluent readers, as these words appear 
            very frequently in text. The ability to recognize these words quickly allows children to 
            focus their attention on the more difficult words in a text.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Dolch Sight Words</h2>
          <p>
            The Dolch Word List is a list of commonly used English words that was compiled by Edward 
            William Dolch, PhD and published in his 1948 book, "Problems in Reading". Dolch compiled 
            the list based on children's books of his era.
          </p>
          <p>
            The list contains 220 "service words" that must be quickly recognized in order to achieve 
            reading fluency. The Dolch word list is typically broken down into five levels:
          </p>
          <ul>
            <li>Pre-primer (40 words)</li>
            <li>Primer (52 words)</li>
            <li>First Grade (41 words)</li>
            <li>Second Grade (46 words)</li>
            <li>Third Grade (41 words)</li>
          </ul>
        </div>
        
        <div className="about-section">
          <h2>How to Use This App</h2>
          <p>
            This application is designed to help children practice and learn sight words. You can use it in several ways:
          </p>
          <ul>
            <li>Browse through words by grade level</li>
            <li>Practice one word at a time in the flashcard-style display</li>
            <li>Use the "Random Word" feature for review</li>
            <li>Click on any word in the list to display it in the large format</li>
          </ul>
          <p>
            Regular practice with these words will help build reading fluency and confidence.
          </p>
        </div>
      </section>
      
      <div className="return-home">
        <Link to="/" className="button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default About;