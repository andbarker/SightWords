// JavaScript specific to the sentences page
document.addEventListener('DOMContentLoaded', function() {
    // Sentences data by level
    const sentencesData = {
        foundation: [
            {
                text: "I can see <span class='highlight'>the</span> red ball <span class='highlight'>and</span> <span class='highlight'>a</span> blue car.",
                highlightWords: ["the", "and", "a"]
            },
            {
                text: "<span class='highlight'>I</span> like <span class='highlight'>to</span> play <span class='highlight'>with</span> <span class='highlight'>my</span> toys.",
                highlightWords: ["I", "to", "with", "my"]
            },
            {
                text: "<span class='highlight'>The</span> cat <span class='highlight'>is</span> sitting <span class='highlight'>on</span> <span class='highlight'>the</span> mat.",
                highlightWords: ["The", "is", "on", "the"]
            },
            {
                text: "<span class='highlight'>It</span> <span class='highlight'>is</span> time <span class='highlight'>for</span> lunch.",
                highlightWords: ["It", "is", "for"]
            },
            {
                text: "<span class='highlight'>I</span> can <span class='highlight'>see</span> <span class='highlight'>a</span> bird <span class='highlight'>in</span> <span class='highlight'>the</span> tree.",
                highlightWords: ["I", "see", "a", "in", "the"]
            },
            {
                text: "<span class='highlight'>We</span> <span class='highlight'>go</span> <span class='highlight'>to</span> <span class='highlight'>the</span> park <span class='highlight'>on</span> weekends.",
                highlightWords: ["We", "go", "to", "the", "on"]
            },
            {
                text: "<span class='highlight'>The</span> dog <span class='highlight'>is</span> playing <span class='highlight'>with</span> <span class='highlight'>the</span> ball.",
                highlightWords: ["The", "is", "with", "the"]
            },
            {
                text: "Can <span class='highlight'>you</span> help <span class='highlight'>me</span>, please?",
                highlightWords: ["you", "me"]
            }
        ],
        year1: [
            {
                text: "<span class='highlight'>They</span> <span class='highlight'>are</span> playing football <span class='highlight'>in</span> <span class='highlight'>the</span> park.",
                highlightWords: ["They", "are", "in", "the"]
            },
            {
                text: "<span class='highlight'>Look</span> <span class='highlight'>at</span> <span class='highlight'>this</span> beautiful butterfly!",
                highlightWords: ["Look", "at", "this"]
            },
            {
                text: "Please <span class='highlight'>come</span> over <span class='highlight'>here</span> <span class='highlight'>and</span> <span class='highlight'>play</span> <span class='highlight'>with</span> us.",
                highlightWords: ["come", "here", "and", "play", "with"]
            },
            {
                text: "She <span class='highlight'>said</span> hello <span class='highlight'>to</span> <span class='highlight'>all</span> of us.",
                highlightWords: ["said", "to", "all"]
            },
            {
                text: "<span class='highlight'>The</span> movie <span class='highlight'>was</span> very exciting <span class='highlight'>for</span> us.",
                highlightWords: ["The", "was", "for"]
            },
            {
                text: "<span class='highlight'>I</span> <span class='highlight'>have</span> <span class='highlight'>one</span> dog <span class='highlight'>and</span> <span class='highlight'>one</span> cat <span class='highlight'>at</span> home.",
                highlightWords: ["I", "have", "one", "and", "one", "at"]
            },
            {
                text: "<span class='highlight'>What</span> <span class='highlight'>is</span> <span class='highlight'>your</span> favourite toy?",
                highlightWords: ["What", "is", "your"]
            },
            {
                text: "Let's <span class='highlight'>go</span> <span class='highlight'>out</span> <span class='highlight'>to</span> <span class='highlight'>play</span> <span class='highlight'>when</span> <span class='highlight'>it</span> stops raining.",
                highlightWords: ["go", "out", "to", "play", "when", "it"]
            }
        ],
        year2: [
            {
                text: "<span class='highlight'>I</span> <span class='highlight'>have</span> <span class='highlight'>some</span> new toys <span class='highlight'>in</span> <span class='highlight'>my</span> room.",
                highlightWords: ["I", "have", "some", "in", "my"]
            },
            {
                text: "<span class='highlight'>This</span> <span class='highlight'>is</span> <span class='highlight'>her</span> book <span class='highlight'>about</span> dinosaurs.",
                highlightWords: ["This", "is", "her", "about"]
            },
            {
                text: "<span class='highlight'>I</span> <span class='highlight'>would</span> <span class='highlight'>like</span> <span class='highlight'>to</span> <span class='highlight'>have</span> an ice cream.",
                highlightWords: ["I", "would", "like", "to", "have"]
            },
            {
                text: "<span class='highlight'>They</span> left <span class='highlight'>their</span> shoes outside <span class='highlight'>in</span> <span class='highlight'>the</span> rain.",
                highlightWords: ["They", "their", "in", "the"]
            },
            {
                text: "Tell <span class='highlight'>me</span> <span class='highlight'>about</span> <span class='highlight'>your</span> holiday <span class='highlight'>at</span> <span class='highlight'>the</span> beach.",
                highlightWords: ["me", "about", "your", "at", "the"]
            },
            {
                text: "<span class='highlight'>She</span> went <span class='highlight'>into</span> <span class='highlight'>the</span> garden <span class='highlight'>to</span> pick flowers.",
                highlightWords: ["She", "into", "the", "to"]
            },
            {
                text: "<span class='highlight'>We</span> <span class='highlight'>could</span> see <span class='highlight'>the</span> stars <span class='highlight'>when</span> <span class='highlight'>it</span> <span class='highlight'>was</span> dark.",
                highlightWords: ["We", "could", "the", "when", "it", "was"]
            },
            {
                text: "<span class='highlight'>I</span> <span class='highlight'>have</span> <span class='highlight'>two</span> brothers <span class='highlight'>but</span> no sisters.",
                highlightWords: ["I", "have", "two", "but"]
            }
        ],
        year3: [
            {
                text: "<span class='highlight'>We</span> should leave <span class='highlight'>now</span> <span class='highlight'>or</span> <span class='highlight'>we</span> will be late.",
                highlightWords: ["We", "now", "or", "we"]
            },
            {
                text: "Many <span class='highlight'>people</span> <span class='highlight'>came</span> <span class='highlight'>to</span> <span class='highlight'>the</span> party yesterday.",
                highlightWords: ["people", "came", "to", "the"]
            },
            {
                text: "<span class='highlight'>She</span> <span class='highlight'>went</span> <span class='highlight'>to</span> <span class='highlight'>the</span> library <span class='highlight'>with</span> <span class='highlight'>her</span> friend.",
                highlightWords: ["She", "went", "to", "the", "with", "her"]
            },
            {
                text: "<span class='highlight'>The</span> <span class='highlight'>little</span> puppy <span class='highlight'>is</span> very cute <span class='highlight'>and</span> playful.",
                highlightWords: ["The", "little", "is", "and"]
            },
            {
                text: "<span class='highlight'>My</span> <span class='highlight'>house</span> <span class='highlight'>has</span> <span class='highlight'>a</span> red door <span class='highlight'>and</span> blue windows.",
                highlightWords: ["My", "house", "has", "a", "and"]
            },
            {
                text: "<span class='highlight'>I</span> <span class='highlight'>like</span> swimming <span class='highlight'>too</span>, <span class='highlight'>but</span> <span class='highlight'>not</span> <span class='highlight'>when</span> <span class='highlight'>it</span>'s cold.",
                highlightWords: ["I", "like", "too", "but", "not", "when", "it"]
            },
            {
                text: "<span class='highlight'>My</span> dog <span class='highlight'>is</span> <span class='highlight'>called</span> Max <span class='highlight'>and</span> <span class='highlight'>he</span> <span class='highlight'>is</span> very friendly.",
                highlightWords: ["My", "is", "called", "and", "he", "is"]
            },
            {
                text: "Today <span class='highlight'>is</span> <span class='highlight'>a</span> sunny <span class='highlight'>day</span>, perfect <span class='highlight'>for</span> playing outside.",
                highlightWords: ["is", "a", "day", "for"]
            }
        ]
    };

    // Randomize all flashcard sets
    for (const level in sentencesData) {
        sentencesData[level] = window.shuffleArray([...sentencesData[level]]);
    }    
        
    // DOM elements
    const sentenceElement = document.getElementById('sentence-text');
    const counterElement = document.getElementById('sentence-counter');
    const readingStatus = document.getElementById('reading-status');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const readButton = document.getElementById('read-btn');
    const tabs = document.querySelectorAll('.tab');
    
    // Make sure elements exist before proceeding
    if (!sentenceElement || !counterElement) {
        return;
    }
    
    // Speech synthesis
    const speechSynthesis = window.speechSynthesis;
    
    // Current state
    let currentLevel = 'foundation';
    let currentIndex = 0;
    let isReading = false;
    
    // Update sentence content
    function updateSentence() {
        const currentData = sentencesData[currentLevel];
        const { text } = currentData[currentIndex];
        
        sentenceElement.innerHTML = text;
        counterElement.textContent = `Sentence ${currentIndex + 1} of ${currentData.length}`;
        
        // Update navigation buttons
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === currentData.length - 1;
        
        if (prevButton.disabled) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
        
        if (nextButton.disabled) {
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
        
        // Clear reading status
        readingStatus.textContent = '';
        
        // Stop any ongoing speech
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            isReading = false;
            updateReadButton();
        }
        
        // Add animation to highlighted words
        animateHighlightedWords();
    }
    
    // Animate highlighted words
    function animateHighlightedWords() {
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach((highlight, index) => {
            // Remove any existing animations
            highlight.classList.remove('bounce');
            
            // Add a slight delay before animating each word
            setTimeout(() => {
                highlight.classList.add('bounce');
            }, index * 300);
        });
    }
    
    // Read the current sentence aloud
    function readSentence() {
        if (speechSynthesis) {
            // If already reading, stop
            if (isReading) {
                speechSynthesis.cancel();
                isReading = false;
                readingStatus.textContent = '';
                updateReadButton();
                return;
            }
            
            // Start reading
            isReading = true;
            updateReadButton();
            
            // Get plain text without HTML tags
            const plainText = sentenceElement.textContent.trim();
            
            const utterance = new SpeechSynthesisUtterance(plainText);
            utterance.lang = 'en-AU';
            utterance.rate = 0.6; // Slightly slower for clarity
            
            // Show reading status
            readingStatus.textContent = 'Reading...';
            
            // Highlight words as they are spoken
            let currentHighlightIndex = 0;
            const highlights = document.querySelectorAll('.highlight');
            
            // When done speaking
            utterance.onend = () => {
                isReading = false;
                readingStatus.textContent = 'Finished reading';
                updateReadButton();
                
                // Remove pulse from all highlights
                highlights.forEach(highlight => {
                    highlight.classList.remove('highlight-pulse');
                });
            };
            
            // Start speaking
            speechSynthesis.speak(utterance);
            
            // Add pulse animation to each highlighted word in sequence
            function highlightNextWord() {
                if (currentHighlightIndex < highlights.length && isReading) {
                    // Remove pulse from previous word
                    if (currentHighlightIndex > 0) {
                        highlights[currentHighlightIndex - 1].classList.remove('highlight-pulse');
                    }
                    
                    // Add pulse to current word
                    highlights[currentHighlightIndex].classList.add('highlight-pulse');
                    
                    // Move to next word after delay
                    currentHighlightIndex++;
                    setTimeout(highlightNextWord, 1000);
                }
            }
            
            // Start highlighting words
            highlightNextWord();
        }
    }
    
    // Update read button text and icon
    function updateReadButton() {
        if (isReading) {
            readButton.innerHTML = `
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                </svg>
                Stop Reading
            `;
        } else {
            readButton.innerHTML = `
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                </svg>
                Read Aloud
            `;
        }
    }
    
    // Event Listeners
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSentence();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentIndex < sentencesData[currentLevel].length - 1) {
                currentIndex++;
                updateSentence();
            }
        });
    }
    
    if (readButton) {
        readButton.addEventListener('click', readSentence);
    }
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const level = tab.getAttribute('data-level');
            
            // Update current level and reset index
            currentLevel = level;
            currentIndex = 0;
            updateSentence();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            currentIndex--;
            updateSentence();
        } else if (e.key === 'ArrowRight' && !nextButton.disabled) {
            currentIndex++;
            updateSentence();
        } else if (e.key === ' ' || e.key === 'Enter') {
            readSentence();
        }
    });
    
    // Initialize the first sentence
    updateSentence();
});