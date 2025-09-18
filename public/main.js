// Enhanced Portfolio JS with Dutch Translation and Dark Mode

class PortfolioApp {
    constructor() {
        // DOM caches
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navList = document.querySelector('.nav-list');
        this.navItems = Array.from(document.querySelectorAll('.nav-item'));
        this.sidebar = document.getElementById('sidebar');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.scrollIndicator = document.getElementById('scrollIndicator');
        this.langToggle = document.getElementById('langToggle');
        this.themeToggle = document.getElementById('themeToggle');
        
        // State
        this.currentLang = 'en';
        this.currentTheme = 'light';
        
        // Expose instance for external use
        window.portfolioApp = this;

        // Initialize
        this.init();
    }

    init() {
        // Load saved preferences
        this.loadPreferences();
        
        // Initialize features
        try {
            this.createParticles();
        } catch (e) {
            console.warn('Particles init failed:', e);
        }

        this.enhanceNavAccessibility();
        this.setupNavigationDelegation();
        this.setupCTALinks();
        this.setupScrollSpy();
        this.setupMobileMenu();
        this.setupScrollIndicator();
        this.setupIntersectionObserver();
        this.setupLanguageToggle();
        this.setupThemeToggle();
        
        // Apply initial theme and language
        this.applyTheme(this.currentTheme);
        this.applyLanguage(this.currentLang);
    }

    // ---------- Theme Management ----------
    setupThemeToggle() {
        if (!this.themeToggle) return;
        
        this.themeToggle.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.applyTheme(this.currentTheme);
            this.savePreferences();
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = this.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
        this.currentTheme = theme;
    }

    // ---------- Language Management ----------
    setupLanguageToggle() {
        if (!this.langToggle) return;
        
        this.langToggle.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'en' ? 'nl' : 'en';
            this.applyLanguage(this.currentLang);
            this.savePreferences();
        });
    }

    applyLanguage(lang) {
        // Update language toggle button
        const langText = this.langToggle?.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'NL' : 'EN';
        }

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Update all translatable elements
        const translatableElements = document.querySelectorAll('[data-en][data-nl]');
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.textContent = translation;
            }
        });

        this.currentLang = lang;
    }

    // ---------- Preferences Management ----------
    savePreferences() {
        const preferences = {
            theme: this.currentTheme,
            language: this.currentLang
        };
        
        try {
            // Use cookies as fallback since localStorage isn't available
            document.cookie = `portfolioPrefs=${JSON.stringify(preferences)}; path=/; max-age=31536000`;
        } catch (e) {
            console.warn('Could not save preferences:', e);
        }
    }

    loadPreferences() {
        try {
            // Try to load from cookies
            const cookies = document.cookie.split(';');
            const prefsCookie = cookies.find(cookie => cookie.trim().startsWith('portfolioPrefs='));
            
            if (prefsCookie) {
                const prefsValue = prefsCookie.split('=')[1];
                const preferences = JSON.parse(decodeURIComponent(prefsValue));
                
                this.currentTheme = preferences.theme || 'light';
                this.currentLang = preferences.language || 'en';
            }
        } catch (e) {
            console.warn('Could not load preferences:', e);
            // Use defaults
            this.currentTheme = 'light';
            this.currentLang = 'en';
        }
    }

    // ---------- Visual Helpers ----------
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

    // ---------- Navigation ----------
    enhanceNavAccessibility() {
        this.navItems.forEach(item => {
            item.setAttribute('tabindex', item.getAttribute('tabindex') || '0');
            item.setAttribute('role', 'button');
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleNavItemClick(item);
                }
            });
        });
    }

    setupNavigationDelegation() {
        if (!this.navList) return;

        this.navList.addEventListener('click', (e) => {
            const item = e.target.closest('.nav-item');
            if (!item) return;
            e.preventDefault();
            this.handleNavItemClick(item);
        });
    }

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

        // Update URL hash
        try {
            history.replaceState && history.replaceState(null, '', `#${targetId}`);
        } catch (_) { /* ignore */ }
    }

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
                
                try { 
                    history.replaceState && history.replaceState(null, '', `#${id}`); 
                } catch (_) {}
            });
        });
    }

    // ---------- Scroll Spy ----------
    setupScrollSpy() {
        if (!this.sections || !this.sections.length) return;

        const observerOptions = {
            root: null,
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

        // Set initial active item
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
        this.navItems = Array.from(document.querySelectorAll('.nav-item'));
        this.navItems.forEach(item => item.classList.remove('active'));
        if (activeItem && typeof activeItem.classList !== 'undefined') {
            activeItem.classList.add('active');
        }
    }

    // ---------- Mobile Menu ----------
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

    // ---------- Scroll Indicator ----------
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

    scrollToNextSection() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const next = this.sections.find(s => {
            const top = s.getBoundingClientRect().top + window.pageYOffset;
            return top > currentScroll + 10;
        });
        
        if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }

    // ---------- Animate on Scroll ----------
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

// ---------- Initialization ----------
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

// ---------- Resize Handling ----------
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.portfolioApp && typeof window.portfolioApp.setupScrollSpy === 'function') {
            window.portfolioApp.setupScrollSpy();
        }
    }, 250);
});

// ---------- Scroll to Top Functionality ----------
let scrollTopButton = document.getElementById("scrollTopBtn");

if (scrollTopButton) {
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    };

    scrollTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}