// JavaScript specific to the flashcards page
document.addEventListener('DOMContentLoaded', function() {
    // Flashcards data by level
    const flashcardsData = {
        foundation: [
            { word: "a", example: "I have <span class='highlight'>a</span> red ball." },
            { word: "and", example: "I like apples <span class='highlight'>and</span> bananas." },
            { word: "the", example: "<span class='highlight'>The</span> cat is sleeping." },
            { word: "to", example: "I want <span class='highlight'>to</span> play." },
            { word: "is", example: "The sky <span class='highlight'>is</span> blue." },
            { word: "in", example: "The toy is <span class='highlight'>in</span> the box." },
            { word: "it", example: "<span class='highlight'>It</span> is raining today." },
            { word: "my", example: "This is <span class='highlight'>my</span> book." },
            { word: "we", example: "<span class='highlight'>We</span> are going to the park." },
            { word: "on", example: "The cat is <span class='highlight'>on</span> the mat." },
            { word: "I", example: "<span class='highlight'>I</span> can read this book." },
            { word: "at", example: "Meet me <span class='highlight'>at</span> school." },
            { word: "he", example: "<span class='highlight'>He</span> likes to swim." },
            { word: "for", example: "This present is <span class='highlight'>for</span> you." },
            { word: "me", example: "Can you help <span class='highlight'>me</span>?" },
            { word: "with", example: "I play <span class='highlight'>with</span> my friends." },
            { word: "you", example: "Can <span class='highlight'>you</span> help me?" },
            { word: "see", example: "I can <span class='highlight'>see</span> a bird." },
            { word: "like", example: "I <span class='highlight'>like</span> ice cream." },
            { word: "go", example: "Let's <span class='highlight'>go</span> to the beach." }
        ],
        year1: [
            { word: "they", example: "<span class='highlight'>They</span> are playing football." },
            { word: "look", example: "<span class='highlight'>Look</span> at that butterfly!" },
            { word: "here", example: "Come over <span class='highlight'>here</span>." },
            { word: "said", example: "She <span class='highlight'>said</span> hello to me." },
            { word: "was", example: "The movie <span class='highlight'>was</span> exciting." },
            { word: "come", example: "<span class='highlight'>Come</span> and play with us." },
            { word: "have", example: "I <span class='highlight'>have</span> two cats." },
            { word: "play", example: "Let's <span class='highlight'>play</span> a game." },
            { word: "are", example: "Where <span class='highlight'>are</span> you going?" },
            { word: "this", example: "<span class='highlight'>This</span> is my favourite toy." },
            { word: "from", example: "The letter is <span class='highlight'>from</span> Grandma." },
            { word: "of", example: "The colour <span class='highlight'>of</span> the sky is blue." },
            { word: "one", example: "I have <span class='highlight'>one</span> brother." },
            { word: "all", example: "We <span class='highlight'>all</span> went to the zoo." },
            { word: "there", example: "Put it over <span class='highlight'>there</span>." },
            { word: "do", example: "What do you <span class='highlight'>do</span> at school?" },
            { word: "when", example: "<span class='highlight'>When</span> is your birthday?" },
            { word: "out", example: "Let's go <span class='highlight'>out</span> to play." },
            { word: "what", example: "<span class='highlight'>What</span> is your name?" },
            { word: "so", example: "I am <span class='highlight'>so</span> happy today." }
        ],
        year2: [
            { word: "some", example: "I have <span class='highlight'>some</span> new toys." },
            { word: "her", example: "This is <span class='highlight'>her</span> book." },
            { word: "would", example: "I <span class='highlight'>would</span> like an ice cream." },
            { word: "their", example: "They left <span class='highlight'>their</span> shoes outside." },
            { word: "about", example: "Tell me <span class='highlight'>about</span> your holiday." },
            { word: "into", example: "She went <span class='highlight'>into</span> the garden." },
            { word: "could", example: "We <span class='highlight'>could</span> see the stars." },
            { word: "two", example: "I have <span class='highlight'>two</span> brothers." },
            { word: "more", example: "Can I have <span class='highlight'>more</span> please?" },
            { word: "then", example: "We had lunch, <span class='highlight'>then</span> went to the park." },
            { word: "them", example: "Give <span class='highlight'>them</span> the toys." },
            { word: "but", example: "I like swimming <span class='highlight'>but</span> not diving." },
            { word: "has", example: "She <span class='highlight'>has</span> a new bike." },
            { word: "who", example: "<span class='highlight'>Who</span> is your teacher?" },
            { word: "were", example: "They <span class='highlight'>were</span> at the party." },
            { word: "get", example: "Let's <span class='highlight'>get</span> ready for school." },
            { word: "our", example: "This is <span class='highlight'>our</span> classroom." },
            { word: "your", example: "What is <span class='highlight'>your</span> favourite colour?" },
            { word: "will", example: "I <span class='highlight'>will</span> see you tomorrow." },
            { word: "that", example: "Is <span class='highlight'>that</span> your dog?" }
        ],
        year3: [
            { word: "now", example: "We should leave <span class='highlight'>now</span>." },
            { word: "people", example: "Many <span class='highlight'>people</span> came to the party." },
            { word: "went", example: "She <span class='highlight'>went</span> to the library." },
            { word: "little", example: "The <span class='highlight'>little</span> puppy is cute." },
            { word: "house", example: "My <span class='highlight'>house</span> has a red door." },
            { word: "too", example: "I like swimming <span class='highlight'>too</span>." },
            { word: "called", example: "My dog is <span class='highlight'>called</span> Max." },
            { word: "day", example: "Today is a sunny <span class='highlight'>day</span>." },
            { word: "made", example: "We <span class='highlight'>made</span> a cake." },
            { word: "time", example: "What <span class='highlight'>time</span> is it?" },
            { word: "very", example: "The movie was <span class='highlight'>very</span> good." },
            { word: "put", example: "<span class='highlight'>Put</span> your toys away." },
            { word: "by", example: "The book was written <span class='highlight'>by</span> my teacher." },
            { word: "just", example: "I <span class='highlight'>just</span> finished my homework." },
            { word: "Mrs", example: "<span class='highlight'>Mrs</span> Jones is our teacher." },
            { word: "Mr", example: "<span class='highlight'>Mr</span> Smith works at the store." },
            { word: "make", example: "Let's <span class='highlight'>make</span> a card for Mum." },
            { word: "came", example: "My friend <span class='highlight'>came</span> to visit." },
            { word: "asked", example: "She <span class='highlight'>asked</span> for help." },
            { word: "school", example: "I go to <span class='highlight'>school</span> every day." }
        ]
    };

    // // Helper function to shuffle an array (Fisher-Yates algorithm)
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }
    
    // Randomize all flashcard sets
    for (const level in flashcardsData) {
        flashcardsData[level] = window.shuffleArray([...flashcardsData[level]]);
    }    

    // DOM elements
    const flashcard = document.getElementById('flashcard');
    const wordElement = document.getElementById('word');
    const exampleElement = document.getElementById('example');
    const counterElement = document.getElementById('counter');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const soundButton = document.getElementById('sound-btn');
    const tabs = document.querySelectorAll('.tab');
    
    // Speech synthesis
    const speechSynthesis = window.speechSynthesis;
    
    // Current state
    let currentLevel = 'foundation';
    let currentIndex = 0;
    
    // Update card content
    function updateCard() {
        const currentData = flashcardsData[currentLevel];
        const { word, example } = currentData[currentIndex];
        
        wordElement.textContent = word;
        exampleElement.innerHTML = example;
        counterElement.textContent = `Card ${currentIndex + 1} of ${currentData.length}`;
        
        // Reset card to front face
        flashcard.classList.remove('flipped');
        
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
    }
    
    // Speak the current word
    function speakWord() {
        if (speechSynthesis) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(wordElement.textContent);
            utterance.lang = 'en-AU';
            utterance.rate = 0.9; // Slightly slower for clarity
            
            speechSynthesis.speak(utterance);
            
            // Add visual feedback
            soundButton.classList.add('pulse');
            setTimeout(() => {
                soundButton.classList.remove('pulse');
            }, 1000);
        }
    }
    
    // Event Listeners
    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCard();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentIndex < flashcardsData[currentLevel].length - 1) {
                currentIndex++;
                updateCard();
            }
        });
    }
    
    if (soundButton) {
        soundButton.addEventListener('click', speakWord);
    }
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const level = tab.getAttribute('data-level');
            
            // Update current level and reset index
            currentLevel = level;
            currentIndex = 0;
            updateCard();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            currentIndex--;
            updateCard();
        } else if (e.key === 'ArrowRight' && !nextButton.disabled) {
            currentIndex++;
            updateCard();
        } else if (e.key === ' ' || e.key === 'Enter') {
            flashcard.classList.toggle('flipped');
        }
    });
    
    // Mobile swipe handling
    let touchstartX = 0;
    let touchendX = 0;
    
    if (flashcard) {
        flashcard.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });
        
        flashcard.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const threshold = 50; // Minimum distance to be considered a swipe
        
        if (touchendX + threshold < touchstartX && !nextButton.disabled) {
            // Swipe left -> next card
            currentIndex++;
            updateCard();
        } else if (touchendX > touchstartX + threshold && !prevButton.disabled) {
            // Swipe right -> previous card
            currentIndex--;
            updateCard();
        }
    }
    
    // Initialize the first card
    if (wordElement && exampleElement) {
        updateCard();
    }
});