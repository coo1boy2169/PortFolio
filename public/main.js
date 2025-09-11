// script.js — Robust Portfolio JS (drop-in replacement)

class PortfolioApp {
    constructor() {
        // DOM caches
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navList = document.querySelector('.nav-list');
        this.navItems = Array.from(document.querySelectorAll('.nav-item'));
        this.sidebar = document.getElementById('sidebar');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.scrollIndicator = document.getElementById('scrollIndicator');

        // Expose instance for external use (resize handler etc.)
        window.portfolioApp = this;

        // Init
        this.init();
    }

    init() {
        try {
            this.createParticles();
        } catch (e) {
            // graceful degradation if particles fail
            console.warn('Particles init failed:', e);
        }

        this.enhanceNavAccessibility();
        this.setupNavigationDelegation();
        this.setupCTALinks();
        this.setupScrollSpy();
        this.setupMobileMenu();
        this.setupScrollIndicator();
        this.setupIntersectionObserver();
    }

    // ---------- Visual helpers ----------
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 1;
            const left = Math.random() * 100;
            const animationDelay = Math.random() * 6;
            const animationDuration = Math.random() * 3 + 3;
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${animationDelay}s;
                animation-duration: ${animationDuration}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Make <li class="nav-item"> keyboard-accessible & tabbable
    enhanceNavAccessibility() {
        this.navItems.forEach(item => {
            item.setAttribute('tabindex', item.getAttribute('tabindex') || '0');
            item.setAttribute('role', 'button');
            // handle Enter/Space to "click" the item
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleNavItemClick(item);
                }
            });
        });
    }

    // ---------- Navigation (event delegation) ----------
    setupNavigationDelegation() {
        if (!this.navList) return;

        // Use delegation so clicks on inner <i> or <span> still register
        this.navList.addEventListener('click', (e) => {
            const item = e.target.closest('.nav-item');
            if (!item) return;
            e.preventDefault();
            this.handleNavItemClick(item);
        });
    }

    // Handler used by delegation and keyboard events
    handleNavItemClick(item) {
        const targetId = item.dataset.target;
        if (!targetId) return;
        const target = document.getElementById(targetId);
        if (!target) return;

        // Smooth scroll
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active state
        this.updateActiveNavItem(item);

        // Close mobile sidebar if open
        if (window.innerWidth <= 768 && this.sidebar) {
            this.sidebar.classList.remove('open');
            if (this.mobileMenu) {
                const icon = this.mobileMenu.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        }

        // Update URL hash without jumping (nice-to-have)
        try {
            history.replaceState && history.replaceState(null, '', `#${targetId}`);
        } catch (_) { /* ignore */ }
    }

    // Also handle CTA anchor links (a[href^="#"]) — similar behavior
    setupCTALinks() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || href === '#') return;
                e.preventDefault();
                const id = href.substring(1);
                const target = document.getElementById(id);
                if (!target) return;
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const correspondingNavItem = document.querySelector(`[data-target="${id}"]`);
                if (correspondingNavItem) this.updateActiveNavItem(correspondingNavItem);
                try { history.replaceState && history.replaceState(null, '', `#${id}`); } catch (_) {}
            });
        });
    }

    // ---------- Scrollspy ----------
    setupScrollSpy() {
        if (!this.sections || !this.sections.length) return;

        // We'll mark a section active when it crosses near the top of viewport.
        const observerOptions = {
            root: null,
            // when the section's top is within the top 45% of the viewport it becomes active
            rootMargin: '0px 0px -55% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const correspondingNavItem = document.querySelector(`[data-target="${sectionId}"]`);
                    if (correspondingNavItem) {
                        this.updateActiveNavItem(correspondingNavItem);
                    }
                }
            });
        }, observerOptions);

        this.sections.forEach(section => observer.observe(section));

        // set initial active item based on current scroll position (run once)
        setTimeout(() => {
            const fromTop = window.scrollY + 10;
            for (const section of this.sections) {
                const rect = section.getBoundingClientRect();
                const top = window.scrollY + rect.top;
                if (top <= fromTop + window.innerHeight * 0.45) {
                    const item = document.querySelector(`[data-target="${section.id}"]`);
                    if (item) this.updateActiveNavItem(item);
                }
            }
        }, 200);
    }

    updateActiveNavItem(activeItem) {
        // refresh navItems in case DOM changed
        this.navItems = Array.from(document.querySelectorAll('.nav-item'));
        this.navItems.forEach(item => item.classList.remove('active'));
        if (activeItem && typeof activeItem.classList !== 'undefined') {
            activeItem.classList.add('active');
        }
    }

    // ---------- Mobile menu ----------
    setupMobileMenu() {
        if (!this.mobileMenu || !this.sidebar) return;

        this.mobileMenu.addEventListener('click', () => {
            this.sidebar.classList.toggle('open');
            const icon = this.mobileMenu.querySelector('i');
            if (this.sidebar.classList.contains('open')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 &&
                this.sidebar.classList.contains('open') &&
                !this.sidebar.contains(e.target) &&
                !this.mobileMenu.contains(e.target)) {
                this.sidebar.classList.remove('open');
                const icon = this.mobileMenu.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    // ---------- Scroll indicator ----------
    setupScrollIndicator() {
        if (!this.scrollIndicator) return;

        this.scrollIndicator.addEventListener('click', () => {
            this.scrollToNextSection();
        });

        // Hide indicator when scrolled past home
        window.addEventListener('scroll', () => {
            const home = document.getElementById('home');
            if (!home) return;
            const homeBottom = home.offsetTop + home.offsetHeight;
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            this.scrollIndicator.style.opacity = (scrollPos > homeBottom - 200) ? '0' : '1';
        });
    }

    // move to the next section after current viewport position
    scrollToNextSection() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        // find first section that starts below current scroll + 10px
        const next = this.sections.find(s => {
            const top = s.getBoundingClientRect().top + window.pageYOffset;
            return top > currentScroll + 10;
        });
        if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // fallback: scroll to bottom
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }

    // ---------- Animate on scroll ----------
    setupIntersectionObserver() {
        const animateOnScrollOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const animateOnScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, animateOnScrollOptions);

        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            animateOnScrollObserver.observe(card);
        });
    }
}

/* Initialization using requestIdleCallback where available */
function initializeWhenIdle() {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => new PortfolioApp());
    } else {
        setTimeout(() => new PortfolioApp(), 1);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWhenIdle);
} else {
    initializeWhenIdle();
}

/* Resize handling (debounced) */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.portfolioApp && typeof window.portfolioApp.setupScrollSpy === 'function') {
            // re-run scrollspy setup to adjust for layout changes
            window.portfolioApp.setupScrollSpy();
        }
    }, 250);
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}