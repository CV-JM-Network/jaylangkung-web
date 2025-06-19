// This file contains the main JavaScript code for the tech startup website. 
// It initializes the website, handles events, and manages dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Tech Startup Website Loaded');

    // Initialize navigation
    initNavigation();

    // Initialize services
    initServices();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
}

function initServices() {
    // Logic to dynamically load or display services can be added here
}