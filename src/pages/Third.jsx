import { useState } from 'react';
import { wordLists, gradeLevels } from '../data/wordLists';
import WordCard from '../components/WordCard';

const Third = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = wordLists.third;
  const level = gradeLevels.third;

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => 
      prevIndex < words.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : words.length - 1
    );
  };

  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWordIndex(randomIndex);
  };

  return (
    <div className="word-list-page">
      <section className="level-intro">
        <h1>{level.title} Sight Words</h1>
        <p>{level.description}</p>
        <p className="word-count">Total Words: {words.length}</p>
      </section>

      <section className="word-display">
        <div className="word-navigation">
          <button onClick={prevWord} className="nav-button">
            Previous
          </button>
          <div className="word-counter">
            {currentWordIndex + 1} of {words.length}
          </div>
          <button onClick={nextWord} className="nav-button">
            Next
          </button>
        </div>

        <WordCard word={words[currentWordIndex]} />

        <div className="word-actions">
          <button onClick={randomWord} className="action-button">
            Random Word
          </button>
        </div>
      </section>

      <section className="word-list">
        <h2>All {level.title} Words</h2>
        <div className="words-grid">
          {words.map((word, index) => (
            <button 
              key={index} 
              className={`word-button ${index === currentWordIndex ? 'active' : ''}`}
              onClick={() => setCurrentWordIndex(index)}
            >
              {word}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Third;