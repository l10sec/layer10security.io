/**
 * Layer 10 Security - Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTerminalAnimation();
    initScrollAnimations();
    initFormHandling();
    initSmoothScroll();
});

/**
 * Navbar scroll behavior
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            // Toggle mobile menu visibility (would need additional CSS)
        });
    }
}

/**
 * Terminal typing animation
 */
function initTerminalAnimation() {
    const terminal = document.querySelector('.terminal-body');
    if (!terminal) return;

    const commands = [
        { type: 'command', text: 'layer10 scan --target=192.168.1.0/24' },
        { type: 'output', class: 'info', text: '[INFO] Initializing Nmap MCP server...' },
        { type: 'output', class: 'success', text: '[OK] Scan complete: 24 hosts discovered' },
        { type: 'command', text: 'layer10 assess --risk-level=high' },
        { type: 'output', class: 'warning', text: '[WARN] 3 critical vulnerabilities found' },
        { type: 'output', class: 'success', text: '[OK] Risk report generated' },
    ];

    let commandIndex = 0;

    function typeNextCommand() {
        if (commandIndex >= commands.length) {
            commandIndex = 0;
            // Clear previous dynamic lines after a delay
            setTimeout(() => {
                const dynamicLines = terminal.querySelectorAll('.dynamic-line');
                dynamicLines.forEach(line => line.remove());
                typeNextCommand();
            }, 3000);
            return;
        }

        const cmd = commands[commandIndex];
        const line = document.createElement('div');
        line.className = 'terminal-line dynamic-line';

        if (cmd.type === 'command') {
            line.innerHTML = `<span class="prompt">$</span> <span class="command"></span>`;
            terminal.insertBefore(line, terminal.lastElementChild);

            const commandSpan = line.querySelector('.command');
            typeText(commandSpan, cmd.text, () => {
                commandIndex++;
                setTimeout(typeNextCommand, 500);
            });
        } else {
            line.className += ' output';
            line.innerHTML = `<span class="${cmd.class}">[${cmd.class.toUpperCase()}]</span> ${cmd.text.split(']')[1]}`;
            terminal.insertBefore(line, terminal.lastElementChild);
            commandIndex++;
            setTimeout(typeNextCommand, 300);
        }
    }

    // Start animation after initial delay
    setTimeout(typeNextCommand, 2000);
}

/**
 * Type text character by character
 */
function typeText(element, text, callback) {
    let index = 0;
    const speed = 30;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.problem-card, .feature-card, .use-case-card, .integration-category, .arch-layer'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Form handling
 */
function initFormHandling() {
    const form = document.getElementById('demo-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value;
            const button = form.querySelector('button');
            const originalText = button.innerHTML;

            // Simulate submission
            button.innerHTML = '<span>Submitting...</span>';
            button.disabled = true;

            setTimeout(() => {
                button.innerHTML = '<span>Thank you!</span>';
                form.querySelector('input').value = '';

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }, 2000);
            }, 1000);

            // In production, you would send the email to your backend
            console.log('Email submitted:', email);
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effect for background elements
 */
function initParallax() {
    const glows = document.querySelectorAll('.glow');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        glows.forEach((glow, index) => {
            const speed = 0.1 + (index * 0.05);
            glow.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/**
 * Counter animation for stats
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

/**
 * Add hover effects to cards
 */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.feature-card, .use-case-card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
