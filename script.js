// ---------- Mobile Nav Toggle ----------
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the mobile menu automatically when a link is clicked
const navLinkItems = navLinks.querySelectorAll('a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ---------- Active Nav Link on Scroll ----------
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinkItems.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px' // counts a section as "current" once it crosses the middle of the screen
});

sections.forEach(section => observer.observe(section));

// ---------- Fix: highlight last link when scrolled to the very bottom ----------
window.addEventListener('scroll', () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (scrolledToBottom) {
        navLinkItems.forEach(link => link.classList.remove('active-link'));
        navLinkItems[navLinkItems.length - 1].classList.add('active-link');
    }
});