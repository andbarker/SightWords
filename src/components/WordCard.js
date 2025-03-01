import { useState } from 'react';

const WordCard = ({ word }) => {
  const [fontSize, setFontSize] = useState(80);
  
  // Adjust font size based on word length
  useState(() => {
    if (word.length > 6) {
      setFontSize(60);
    } else if (word.length > 4) {
      setFontSize(70);
    }
  }, [word]);

  return (
    <div className="word-card">
      <div className="word-text" style={{ fontSize: `${fontSize}px` }}>
        {word}
      </div>
    </div>
  );
};

export default WordCard;