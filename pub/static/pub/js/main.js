document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar scroll effect ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── Mobile menu toggle ──
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // ── Language Switcher ──
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-en]');

    function setLanguage(lang) {
        localStorage.setItem('memories-pub-lang', lang);

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        translatableElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });

        document.documentElement.lang = lang === 'sk' ? 'sk' : 'en';
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    const savedLang = localStorage.getItem('memories-pub-lang') || 'en';
    setLanguage(savedLang);

    // ── Scroll-triggered fade-in animations ──
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedSelectors = [
        '.about-card', '.ent-card', '.ent-detail-card',
        '.drink-category', '.contact-block', '.contact-map'
    ];

    animatedSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });

});
