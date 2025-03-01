// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-links');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Tab switching functionality (common for flashcards, quiz, and sentences pages)
    const tabs = document.querySelectorAll('.tab');
    
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Find all tabs in the same container
                const allTabs = tab.closest('.tabs').querySelectorAll('.tab');
                
                // Remove active class from all tabs
                allTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
            });
        });
    }
});

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    // Create a copy to avoid modifying the original
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// Make available globally
window.shuffleArray = shuffleArr