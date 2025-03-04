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
            // Set 1
            { word: "I", example: "<span class='highlight'>I</span> like to read books.", set: 1 },
            { word: "the", example: "Look at <span class='highlight'>the</span> stars in the sky.", set: 1 },
            { word: "a", example: "I saw <span class='highlight'>a</span> butterfly in the garden.", set: 1 },
            { word: "is", example: "The sky <span class='highlight'>is</span> blue today.", set: 1 },
            { word: "and", example: "Tom <span class='highlight'>and</span> Sarah are friends.", set: 1 },
            { word: "my", example: "This is <span class='highlight'>my</span> favorite book.", set: 1 },
            { word: "went", example: "She <span class='highlight'>went</span> to the park yesterday.", set: 1 },
            { word: "name", example: "My <span class='highlight'>name</span> is Emma.", set: 1 },
            { word: "can", example: "I <span class='highlight'>can</span> ride a bicycle.", set: 1 },
            { word: "on", example: "The book is <span class='highlight'>on</span> the table.", set: 1 },
            { word: "up", example: "Look <span class='highlight'>up</span> at the sky.", set: 1 },
            { word: "three", example: "I have <span class='highlight'>three</span> cats.", set: 1 },
            { word: "in", example: "The toy is <span class='highlight'>in</span> the box.", set: 1 },
            { word: "see", example: "Can you <span class='highlight'>see</span> the rainbow?", set: 1 },
            { word: "to", example: "We're going <span class='highlight'>to</span> the beach tomorrow.", set: 1 },
            
            // Set 2
            { word: "was", example: "She <span class='highlight'>was</span> happy to see her friend.", set: 2 },
            { word: "that", example: "Is <span class='highlight'>that</span> your new toy?", set: 2 },
            { word: "they", example: "<span class='highlight'>They</span> are playing in the park.", set: 2 },
            { word: "you", example: "Did <span class='highlight'>you</span> finish your homework?", set: 2 },
            { word: "see", example: "I can <span class='highlight'>see</span> the moon tonight.", set: 2 },
            { word: "four", example: "There are <span class='highlight'>four</span> seasons in a year.", set: 2 },
            { word: "weekend", example: "We go camping on the <span class='highlight'>weekend</span>.", set: 2 },
            { word: "but", example: "I wanted to go, <span class='highlight'>but</span> it was raining.", set: 2 },
            { word: "five", example: "I counted <span class='highlight'>five</span> birds on the tree.", set: 2 },
            { word: "today", example: "<span class='highlight'>Today</span> is a sunny day.", set: 2 },
            { word: "had", example: "We <span class='highlight'>had</span> a great time at the party.", set: 2 },
            { word: "yes", example: "<span class='highlight'>Yes</span>, I would like some juice.", set: 2 },
            { word: "no", example: "<span class='highlight'>No</span>, I don't want to go to bed yet.", set: 2 },
            { word: "it", example: "<span class='highlight'>It</span> is time for dinner.", set: 2 },
            { word: "said", example: "Mom <span class='highlight'>said</span> we could go to the park.", set: 2 },
            
            // Set 3
            { word: "be", example: "I want to <span class='highlight'>be</span> a doctor when I grow up.", set: 3 },
            { word: "he", example: "<span class='highlight'>He</span> likes to play soccer.", set: 3 },
            { word: "are", example: "Where <span class='highlight'>are</span> you going?", set: 3 },
            { word: "me", example: "Can you help <span class='highlight'>me</span> with this puzzle?", set: 3 },
            { word: "not", example: "I'm <span class='highlight'>not</span> tired yet.", set: 3 },
            { word: "six", example: "There are <span class='highlight'>six</span> apples in the basket.", set: 3 },
            { word: "she", example: "<span class='highlight'>She</span> loves to draw pictures.", set: 3 },
            { word: "will", example: "I <span class='highlight'>will</span> see you tomorrow.", set: 3 },
            { word: "we", example: "<span class='highlight'>We</span> are going to the zoo.", set: 3 },
            { word: "did", example: "What <span class='highlight'>did</span> you do yesterday?", set: 3 },
            { word: "big", example: "That's a <span class='highlight'>big</span> elephant!", set: 3 },
            { word: "seven", example: "I am <span class='highlight'>seven</span> years old.", set: 3 },
            { word: "well", example: "She plays piano very <span class='highlight'>well</span>.", set: 3 },
            { word: "find", example: "Can you <span class='highlight'>find</span> your shoes?", set: 3 },
            { word: "day", example: "It's a beautiful <span class='highlight'>day</span> outside.", set: 3 },
            
            // Set 4
            { word: "one", example: "I have <span class='highlight'>one</span> brother.", set: 4 },
            { word: "has", example: "She <span class='highlight'>has</span> a new bicycle.", set: 4 },
            { word: "were", example: "They <span class='highlight'>were</span> late for school.", set: 4 },
            { word: "look", example: "<span class='highlight'>Look</span> at the pretty butterfly!", set: 4 },
            { word: "have", example: "I <span class='highlight'>have</span> two cats.", set: 4 },
            { word: "out", example: "Let's go <span class='highlight'>out</span> to play.", set: 4 },
            { word: "like", example: "I <span class='highlight'>like</span> ice cream.", set: 4 },
            { word: "so", example: "I am <span class='highlight'>so</span> excited about the trip.", set: 4 },
            { word: "two", example: "There are <span class='highlight'>two</span> cookies left.", set: 4 },
            { word: "at", example: "Meet me <span class='highlight'>at</span> the park.", set: 4 },
            { word: "who", example: "<span class='highlight'>Who</span> wants to play a game?", set: 4 },
            { word: "mum", example: "My <span class='highlight'>mum</span> made pancakes for breakfast.", set: 4 },
            { word: "all", example: "We <span class='highlight'>all</span> went to the zoo.", set: 4 },
            { word: "dad", example: "My <span class='highlight'>dad</span> is fixing the car.", set: 4 },
            { word: "looked", example: "She <span class='highlight'>looked</span> for her lost toy.", set: 4 },
            
            // Set 5
            { word: "his", example: "That is <span class='highlight'>his</span> book.", set: 5 },
            { word: "her", example: "This is <span class='highlight'>her</span> new dress.", set: 5 },
            { word: "them", example: "Give <span class='highlight'>them</span> the presents.", set: 5 },
            { word: "there", example: "Put it over <span class='highlight'>there</span>.", set: 5 },
            { word: "by", example: "The cat is sitting <span class='highlight'>by</span> the window.", set: 5 },
            { word: "man", example: "The <span class='highlight'>man</span> is walking his dog.", set: 5 },
            { word: "over", example: "The bird flew <span class='highlight'>over</span> the house.", set: 5 },
            { word: "off", example: "Take your shoes <span class='highlight'>off</span> before coming inside.", set: 5 },
            { word: "new", example: "I got a <span class='highlight'>new</span> toy for my birthday.", set: 5 },
            { word: "am", example: "I <span class='highlight'>am</span> going to school.", set: 5 },
            { word: "do", example: "What do you <span class='highlight'>do</span> after school?", set: 5 },
            { word: "eight", example: "I have <span class='highlight'>eight</span> colored pencils.", set: 5 },
            { word: "if", example: "<span class='highlight'>If</span> it rains, we will stay inside.", set: 5 },
            { word: "nine", example: "She will be <span class='highlight'>nine</span> years old next month.", set: 5 },
            { word: "people", example: "Many <span class='highlight'>people</span> came to the party.", set: 5 },
            
            // Set 6
            { word: "come", example: "<span class='highlight'>Come</span> and join us for dinner.", set: 6 },
            { word: "back", example: "Please come <span class='highlight'>back</span> soon.", set: 6 },
            { word: "get", example: "Let's <span class='highlight'>get</span> some ice cream.", set: 6 },
            { word: "just", example: "I <span class='highlight'>just</span> finished my homework.", set: 6 },
            { word: "when", example: "<span class='highlight'>When</span> are we going to the park?", set: 6 },
            { word: "into", example: "The cat jumped <span class='highlight'>into</span> the box.", set: 6 },
            { word: "now", example: "We need to leave <span class='highlight'>now</span>.", set: 6 },
            { word: "an", example: "I saw <span class='highlight'>an</span> elephant at the zoo.", set: 6 },
            { word: "here", example: "Put the book <span class='highlight'>here</span>.", set: 6 },
            { word: "of", example: "This is a picture <span class='highlight'>of</span> my family.", set: 6 },
            { word: "old", example: "My grandmother is very <span class='highlight'>old</span>.", set: 6 },
            { word: "our", example: "This is <span class='highlight'>our</span> house.", set: 6 },
            { word: "with", example: "I play <span class='highlight'>with</span> my friends after school.", set: 6 },
            { word: "from", example: "I got a letter <span class='highlight'>from</span> my friend.", set: 6 },
            { word: "water", example: "Please drink some <span class='highlight'>water</span>.", set: 6 },
            
            // Set 7
            { word: "little", example: "The <span class='highlight'>little</span> girl is playing with her doll.", set: 7 },
            { word: "tall", example: "The giraffe is very <span class='highlight'>tall</span>.", set: 7 },
            { word: "ball", example: "The dog is chasing the <span class='highlight'>ball</span>.", set: 7 },
            { word: "call", example: "I will <span class='highlight'>call</span> you tomorrow.", set: 7 },
            { word: "been", example: "I have <span class='highlight'>been</span> to the beach before.", set: 7 },
            { word: "came", example: "She <span class='highlight'>came</span> to my birthday party.", set: 7 },
            { word: "made", example: "I <span class='highlight'>made</span> a cake with my mom.", set: 7 },
            { word: "much", example: "How <span class='highlight'>much</span> does this cost?", set: 7 },
            { word: "make", example: "Let's <span class='highlight'>make</span> cookies together.", set: 7 },
            { word: "your", example: "Where is <span class='highlight'>your</span> book?", set: 7 },
            { word: "about", example: "Tell me <span class='highlight'>about</span> your day.", set: 7 },
            { word: "must", example: "You <span class='highlight'>must</span> finish your homework.", set: 7 },
            { word: "how", example: "<span class='highlight'>How</span> are you feeling today?", set: 7 },
            { word: "some", example: "Would you like <span class='highlight'>some</span> juice?", set: 7 },
            { word: "today", example: "<span class='highlight'>Today</span> we are going to the museum.", set: 7 },
            
            // Set 8
            { word: "go", example: "Let's <span class='highlight'>go</span> to the playground.", set: 8 },
            { word: "this", example: "<span class='highlight'>This</span> is my favorite toy.", set: 8 },
            { word: "more", example: "Can I have <span class='highlight'>more</span> ice cream?", set: 8 },
            { word: "other", example: "My <span class='highlight'>other</span> sock is missing.", set: 8 },
            { word: "right", example: "Turn <span class='highlight'>right</span> at the corner.", set: 8 },
            { word: "less", example: "I have <span class='highlight'>less</span> homework today.", set: 8 },
            { word: "many", example: "How <span class='highlight'>many</span> books do you have?", set: 8 },
            { word: "these", example: "<span class='highlight'>These</span> are my new shoes.", set: 8 },
            { word: "long", example: "The snake is very <span class='highlight'>long</span>.", set: 8 },
            { word: "which", example: "<span class='highlight'>Which</span> color do you prefer?", set: 8 },
            { word: "use", example: "I <span class='highlight'>use</span> crayons to color.", set: 8 },
            { word: "only", example: "I <span class='highlight'>only</span> have one cookie left.", set: 8 },
            { word: "not", example: "I'm <span class='highlight'>not</span> going to the party.", set: 8 },
            { word: "but", example: "I want to go swimming, <span class='highlight'>but</span> it's too cold.", set: 8 },
            { word: "ten", example: "I can count to <span class='highlight'>ten</span>.", set: 8 },
            
            // Set 9
            { word: "do", example: "What do you <span class='highlight'>do</span> on weekends?", set: 9 },
            { word: "like", example: "I <span class='highlight'>like</span> to draw pictures.", set: 9 },
            { word: "very", example: "The cake is <span class='highlight'>very</span> delicious.", set: 9 },
            { word: "put", example: "<span class='highlight'>Put</span> your toys away, please.", set: 9 },
            { word: "as", example: "The cat is <span class='highlight'>as</span> quiet as a mouse.", set: 9 },
            { word: "before", example: "Wash your hands <span class='highlight'>before</span> eating.", set: 9 },
            { word: "first", example: "I was <span class='highlight'>first</span> in line.", set: 9 },
            { word: "again", example: "Let's play that game <span class='highlight'>again</span>.", set: 9 },
            { word: "once", example: "I <span class='highlight'>once</span> saw a shooting star.", set: 9 },
            { word: "home", example: "Let's go <span class='highlight'>home</span> now.", set: 9 },
            { word: "boy", example: "The <span class='highlight'>boy</span> is playing with his truck.", set: 9 },
            { word: "girl", example: "The <span class='highlight'>girl</span> is reading a book.", set: 9 },
            { word: "please", example: "<span class='highlight'>Please</span> pass the salt.", set: 9 },
            { word: "told", example: "She <span class='highlight'>told</span> me a funny story.", set: 9 },
            { word: "then", example: "First we'll eat, and <span class='highlight'>then</span> we'll play.", set: 9 },
            
            // Set 10
            { word: "what", example: "<span class='highlight'>What</span> is your favorite color?", set: 10 },
            { word: "want", example: "I <span class='highlight'>want</span> to go to the park.", set: 10 },
            { word: "where", example: "<span class='highlight'>Where</span> are my shoes?", set: 10 },
            { word: "their", example: "The children are playing with <span class='highlight'>their</span> toys.", set: 10 },
            { word: "for", example: "This present is <span class='highlight'>for</span> you.", set: 10 },
            { word: "or", example: "Would you like juice <span class='highlight'>or</span> water?", set: 10 },
            { word: "could", example: "I <span class='highlight'>could</span> ride a bike when I was five.", set: 10 },
            { word: "would", example: "I <span class='highlight'>would</span> like to visit the zoo.", set: 10 },
            { word: "should", example: "You <span class='highlight'>should</span> wear a hat in the sun.", set: 10 },
            { word: "pull", example: "<span class='highlight'>Pull</span> the door to open it.", set: 10 },
            { word: "down", example: "The ball rolled <span class='highlight'>down</span> the hill.", set: 10 },
            { word: "called", example: "My dog is <span class='highlight'>called</span> Max.", set: 10 },
            { word: "write", example: "I can <span class='highlight'>write</span> my name.", set: 10 },
            { word: "am", example: "I <span class='highlight'>am</span> eight years old.", set: 10 },
            { word: "ask", example: "<span class='highlight'>Ask</span> your teacher for help.", set: 10 }
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
    let currentLevel = 'year1';
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
    
    // // Speak the current word
    // function speakWord() {
    //     if (speechSynthesis) {
    //         // Cancel any ongoing speech
    //         speechSynthesis.cancel();
            
    //         // const utterance = new SpeechSynthesisUtterance(wordElement.textContent);
    //         const utterance = new SpeechSynthesisUtterance(exampleElement.textContent);
    //         utterance.lang = 'en-AU';
    //         utterance.rate = 0.7; // Slightly slower for clarity
            
    //         speechSynthesis.speak(utterance);
            
    //         // Add visual feedback
    //         soundButton.classList.add('pulse');
    //         setTimeout(() => {
    //             soundButton.classList.remove('pulse');
    //         }, 1000);
    //     }
    // }
        
    // Cache available voices
    let voices = [];

    // Initialize voices
    function loadVoices() {
        voices = speechSynthesis.getVoices();
    }

    // Load voices when available
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Load voices right away in case they're already available
    loadVoices();

    // Speak the current word
    function speakWord() {
        if (speechSynthesis) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();
            
            // Create the utterance from example text
            const utterance = new SpeechSynthesisUtterance(exampleElement.textContent);
            
            // Make sure voices are loaded
            if (voices.length === 0) {
                loadVoices();
            }
            
            // Try to find a natural-sounding Australian voice
            const ausVoice = voices.find(voice => 
                // voice.lang.includes('en-AU') && 
                voice.lang.includes('en-GB') && 
                (voice.name.includes('Google') || voice.name.includes('Female'))
            );
            
            // Fallback to any Australian voice
            const anyAusVoice = voices.find(voice => voice.lang.includes('en-AU'));
            
            // Further fallback to any natural-sounding English voice
            const naturalEnglishVoice = voices.find(voice => 
                voice.lang.includes('en') && 
                (voice.name.includes('Google') || voice.name.includes('Natural'))
            );
            
            // Set the best available voice
            utterance.voice = ausVoice || anyAusVoice || naturalEnglishVoice || null;
            
            // Set Australian English as the language
            utterance.lang = 'en-AU';
            
            // Adjust parameters for more natural sound
            utterance.rate = 0.8;     // Slightly slower for clarity
            utterance.pitch = 1.0;    // Natural pitch
            utterance.volume = 1.0;   // Full volume
            
            // Speak the text
            speechSynthesis.speak(utterance);
            
            // Add visual feedback
            soundButton.classList.add('pulse');
            setTimeout(() => {
                soundButton.classList.remove('pulse');
            }, 1000);
        }
    }

    // Optional: Add a function to allow testing different voices
    function testVoices() {
        console.log("Available voices:");
        voices.forEach((voice, index) => {
            console.log(`${index}: ${voice.name} (${voice.lang})`);
        });
    }

    // Optional: Add a function to test a specific voice
    function testSpecificVoice(index) {
        if (index >= 0 && index < voices.length) {
            const utterance = new SpeechSynthesisUtterance("This is an example of how this voice sounds.");
            utterance.voice = voices[index];
            speechSynthesis.speak(utterance);
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