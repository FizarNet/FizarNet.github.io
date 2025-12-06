// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -100);
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Typing Effect
const typingText = document.getElementById('typing-text');
const textToType = 'Cybersecurity & Offensive Security Specialist';
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.getElementById('who-am-i').scrollIntoView({ behavior: 'smooth' });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('.section:not(#hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Prevent right-click (optional security measure)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Add glitch effect on hover for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch-anim 0.3s';
    });
    
    item.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Console message for visitors
console.log('%c⚠️ FizarNet Security Notice ⚠️', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cThis console is monitored. Unauthorized access attempts will be logged.', 'color: #00ff41; font-size: 14px;');
console.log('%c[SYSTEM] Access Level: Guest', 'color: #808080; font-size: 12px;');
console.log('%c[SYSTEM] IP Address: ' + 'REDACTED', 'color: #808080; font-size: 12px;');
console.log('%c[SYSTEM] Status: Encrypted Connection Active', 'color: #00ff41; font-size: 12px;');