// JavaScript specific to the quiz page
document.addEventListener('DOMContentLoaded', function() {
    // Quiz data by level
    const quizData = {
        foundation: [
            {
                question: "Which word completes this sentence? The cat sat ____ the mat.",
                options: ["on", "in", "at", "by"],
                correctAnswer: "on"
            },
            {
                question: "Which word completes this sentence? ____ want to play with my toys.",
                options: ["I", "You", "We", "They"],
                correctAnswer: "I"
            },
            {
                question: "Which word completes this sentence? I can see ____ red ball.",
                options: ["a", "the", "and", "is"],
                correctAnswer: "a"
            },
            {
                question: "Which word completes this sentence? The book is ____ the table.",
                options: ["on", "for", "with", "the"],
                correctAnswer: "on"
            },
            {
                question: "Which word means the same as 'look'?",
                options: ["see", "go", "play", "like"],
                correctAnswer: "see"
            },
            {
                question: "Which word completes this sentence? I like apples ____ bananas.",
                options: ["and", "the", "is", "to"],
                correctAnswer: "and"
            },
            {
                question: "Which word completes this sentence? This book is ____ me.",
                options: ["for", "and", "the", "at"],
                correctAnswer: "for"
            },
            {
                question: "Which word completes this sentence? I want ____ play outside.",
                options: ["to", "the", "and", "is"],
                correctAnswer: "to"
            },
            {
                question: "Which word completes this sentence? ____ is my dog.",
                options: ["This", "Is", "The", "And"],
                correctAnswer: "This"
            },
            {
                question: "Which word completes this sentence? The sky ____ blue.",
                options: ["is", "the", "and", "go"],
                correctAnswer: "is"
            }
        ],
        year1: [
            {
                question: "Which word completes this sentence? ____ are playing in the park.",
                options: ["They", "He", "I", "You"],
                correctAnswer: "They"
            },
            {
                question: "Which word completes this sentence? ____ at that butterfly!",
                options: ["Look", "Play", "Go", "Run"],
                correctAnswer: "Look"
            },
            {
                question: "Which word completes this sentence? Come over ____.",
                options: ["here", "there", "where", "anywhere"],
                correctAnswer: "here"
            },
            {
                question: "Which word completes this sentence? She ____ hello to me.",
                options: ["said", "says", "saying", "say"],
                correctAnswer: "said"
            },
            {
                question: "Which word completes this sentence? The movie ____ exciting.",
                options: ["was", "is", "are", "be"],
                correctAnswer: "was"
            },
            {
                question: "Which word completes this sentence? ____ and play with us.",
                options: ["Come", "Go", "Look", "See"],
                correctAnswer: "Come"
            },
            {
                question: "Which word completes this sentence? I ____ two cats.",
                options: ["have", "has", "had", "having"],
                correctAnswer: "have"
            },
            {
                question: "Which word completes this sentence? Let's ____ a game.",
                options: ["play", "playing", "played", "plays"],
                correctAnswer: "play"
            },
            {
                question: "Which word completes this sentence? Where ____ you going?",
                options: ["are", "is", "was", "were"],
                correctAnswer: "are"
            },
            {
                question: "Which word completes this sentence? ____ is my favourite toy.",
                options: ["This", "That", "Those", "These"],
                correctAnswer: "This"
            }
        ],
        year2: [
            {
                question: "Which word completes this sentence? I have ____ new toys.",
                options: ["some", "any", "few", "many"],
                correctAnswer: "some"
            },
            {
                question: "Which word completes this sentence? This is ____ book.",
                options: ["her", "his", "your", "their"],
                correctAnswer: "her"
            },
            {
                question: "Which word completes this sentence? I ____ like an ice cream.",
                options: ["would", "will", "want", "wish"],
                correctAnswer: "would"
            },
            {
                question: "Which word completes this sentence? They left ____ shoes outside.",
                options: ["their", "there", "they're", "these"],
                correctAnswer: "their"
            },
            {
                question: "Which word completes this sentence? Tell me ____ your holiday.",
                options: ["about", "with", "from", "over"],
                correctAnswer: "about"
            },
            {
                question: "Which word completes this sentence? She went ____ the garden.",
                options: ["into", "onto", "in", "to"],
                correctAnswer: "into"
            },
            {
                question: "Which word completes this sentence? We ____ see the stars.",
                options: ["could", "can", "will", "would"],
                correctAnswer: "could"
            },
            {
                question: "Which word completes this sentence? I have ____ brothers.",
                options: ["two", "to", "too", "2"],
                correctAnswer: "two"
            },
            {
                question: "Which word completes this sentence? Can I have ____ please?",
                options: ["more", "many", "much", "most"],
                correctAnswer: "more"
            },
            {
                question: "Which word completes this sentence? We had lunch, ____ went to the park.",
                options: ["then", "than", "when", "that"],
                correctAnswer: "then"
            }
        ],
        year3: [
            {
                question: "Which word completes this sentence? We should leave ____.",
                options: ["now", "then", "soon", "later"],
                correctAnswer: "now"
            },
            {
                question: "Which word completes this sentence? Many ____ came to the party.",
                options: ["people", "peoples", "person", "persons"],
                correctAnswer: "people"
            },
            {
                question: "Which word completes this sentence? She ____ to the library.",
                options: ["went", "goes", "going", "go"],
                correctAnswer: "went"
            },
            {
                question: "Which word completes this sentence? The ____ puppy is cute.",
                options: ["little", "small", "tiny", "big"],
                correctAnswer: "little"
            },
            {
                question: "Which word completes this sentence? My ____ has a red door.",
                options: ["house", "home", "room", "building"],
                correctAnswer: "house"
            },
            {
                question: "Which word completes this sentence? I like swimming ____.",
                options: ["too", "to", "two", "also"],
                correctAnswer: "too"
            },
            {
                question: "Which word completes this sentence? My dog is ____ Max.",
                options: ["called", "named", "said", "titled"],
                correctAnswer: "called"
            },
            {
                question: "Which word completes this sentence? Today is a sunny ____.",
                options: ["day", "time", "hour", "moment"],
                correctAnswer: "day"
            },
            {
                question: "Which word completes this sentence? We ____ a cake.",
                options: ["made", "make", "making", "makes"],
                correctAnswer: "made"
            },
            {
                question: "Which word completes this sentence? What ____ is it?",
                options: ["time", "day", "hour", "minute"],
                correctAnswer: "time"
            }
        ]
    };

    // Randomize all flashcard sets
    for (const level in quizData) {
        quizData[level] = window.shuffleArray([...quizData[level]]);
    }    
        
    // DOM elements
    const questionElement = document.getElementById('question-text');
    const questionNumberElement = document.getElementById('question-number');
    const optionsContainer = document.getElementById('options-container');
    const counterElement = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const scoreDisplay = document.getElementById('score-display');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const checkButton = document.getElementById('check-btn');
    const tabs = document.querySelectorAll('.tab');
    
    // Make sure elements exist before proceeding
    if (!questionElement || !optionsContainer) {
        return;
    }
    
    // Current state
    let currentLevel = 'foundation';
    let currentQuestionIndex = 0;
    let selectedOption = null;
    let score = 0;
    let answeredQuestions = [];
    let attempts = 0;
    
    // Initialize the quiz
    function initQuiz() {
        // Reset the score and answered questions
        score = 0;
        answeredQuestions = Array(quizData[currentLevel].length).fill(false);
        attempts = 0;
        updateScore();
        
        // Load the first question
        loadQuestion();
    }
    
    // Load a question
    function loadQuestion() {
        const currentQuestion = quizData[currentLevel][currentQuestionIndex];
        
        // Update question text and number
        questionElement.textContent = currentQuestion.question;
        questionNumberElement.textContent = currentQuestionIndex + 1;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Add options
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.setAttribute('data-option', option);
            
            // Add option text
            optionElement.textContent = option;
            
            // Add feedback indicator
            const feedbackElement = document.createElement('div');
            feedbackElement.classList.add('option-feedback');
            feedbackElement.textContent = '';
            optionElement.appendChild(feedbackElement);
            
            // Add click event
            optionElement.addEventListener('click', () => selectOption(optionElement));
            
            // Add to container
            optionsContainer.appendChild(optionElement);
        });
        
        // Update progress and counter
        updateProgress();
        
        // Reset selected option
        selectedOption = null;
        
        // Update button states
        updateButtons();
        
        // If this question has been answered before, show the answer
        if (answeredQuestions[currentQuestionIndex]) {
            // Get all options
            const options = document.querySelectorAll('.option');
            
            // Find the correct answer
            const correctAnswer = currentQuestion.correctAnswer;
            
            // Mark the correct answer
            options.forEach(option => {
                if (option.getAttribute('data-option') === correctAnswer) {
                    option.classList.add('correct');
                    const feedback = option.querySelector('.option-feedback');
                    feedback.textContent = '✓';
                    feedback.classList.add('correct');
                }
            });
            
            // Disable check button and enable next button
            checkButton.disabled = true;
            nextButton.disabled = (currentQuestionIndex === quizData[currentLevel].length - 1);
        }
    }
    
    // Select an option
    function selectOption(optionElement) {
        // If this question is already answered, do nothing
        if (answeredQuestions[currentQuestionIndex]) {
            return;
        }
        
        // Remove selected class from all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        
        // Add selected class to clicked option
        optionElement.classList.add('selected');
        
        // Store selected option
        selectedOption = optionElement;
        
        // Enable check button
        checkButton.disabled = false;
    }
    
    // Check the answer
    function checkAnswer() {
        // If no option is selected, do nothing
        if (!selectedOption) {
            return;
        }
        
        // Get the current question
        const currentQuestion = quizData[currentLevel][currentQuestionIndex];
        
        // Get the selected answer
        const selectedAnswer = selectedOption.getAttribute('data-option');
        
        // Check if answer is correct
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        
        // Get all options
        const options = document.querySelectorAll('.option');
        
        // Mark the selected option
        if (isCorrect) {
            selectedOption.classList.add('correct', 'bounce');
            const feedback = selectedOption.querySelector('.option-feedback');
            feedback.textContent = '✓';
            feedback.classList.add('correct');
            
            // Update score if this is the first attempt
            if (!answeredQuestions[currentQuestionIndex]) {
                score++;
                updateScore();
            }
        } else {
            selectedOption.classList.add('incorrect', 'shake');
            const feedback = selectedOption.querySelector('.option-feedback');
            feedback.textContent = '✗';
            feedback.classList.add('incorrect');
            
            // Find and mark the correct answer
            options.forEach(option => {
                if (option.getAttribute('data-option') === currentQuestion.correctAnswer) {
                    option.classList.add('correct');
                    const feedback = option.querySelector('.option-feedback');
                    feedback.textContent = '✓';
                    feedback.classList.add('correct');
                }
            });
        }
        
        // Mark this question as answered
        answeredQuestions[currentQuestionIndex] = true;
        attempts++;
        
        // Disable check button and enable next button
        checkButton.disabled = true;
        nextButton.disabled = (currentQuestionIndex === quizData[currentLevel].length - 1);
    }
    
    // Move to the next question
    function nextQuestion() {
        if (currentQuestionIndex < quizData[currentLevel].length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    }
    
    // Move to the previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }
    
    // Update the progress bar and counter
    function updateProgress() {
        const totalQuestions = quizData[currentLevel].length;
        const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        
        progressFill.style.width = `${progressPercentage}%`;
        counterElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    }
    
    // Update the score display
    function updateScore() {
        const totalQuestions = quizData[currentLevel].length;
        scoreDisplay.textContent = `Score: ${score} / ${totalQuestions}`;
    }
    
    // Update button states
    function updateButtons() {
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = !answeredQuestions[currentQuestionIndex] || currentQuestionIndex === quizData[currentLevel].length - 1;
        checkButton.disabled = !selectedOption;
        
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
    
    // Event Listeners
    if (checkButton) {
        checkButton.addEventListener('click', checkAnswer);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevQuestion);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextQuestion);
    }
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const level = tab.getAttribute('data-level');
            
            // Update current level and reset index
            currentLevel = level;
            currentQuestionIndex = 0;
            
            // Initialize the quiz for this level
            initQuiz();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            prevQuestion();
        } else if (e.key === 'ArrowRight' && !nextButton.disabled) {
            nextQuestion();
        } else if (e.key === 'Enter' && !checkButton.disabled) {
            checkAnswer();
        }
    });
    
    // Initialize the quiz
    initQuiz();
});