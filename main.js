/* =============================================
   SANSKAR VIKAS FOUNDATION - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll behavior ----
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 80;

  function updateNavbar() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Mobile Nav Toggle ----
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // ---- Login Modal ----
  const loginOverlay = document.getElementById('loginOverlay');
  const loginTriggers = document.querySelectorAll('[data-login-trigger]');
  const loginClose = document.getElementById('loginClose');

  loginTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginOverlay) {
        loginOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  if (loginClose) {
    loginClose.addEventListener('click', () => {
      loginOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  if (loginOverlay) {
    loginOverlay.addEventListener('click', (e) => {
      if (e.target === loginOverlay) {
        loginOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Login Form ----
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('[name="email"]').value;
      const password = loginForm.querySelector('[name="password"]').value;
      if (email && password) {
        showToast('Login successful! Welcome back.', 'success');
        loginOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Counter Animation ----
  const counters = document.querySelectorAll('[data-count]');
  const observerOptions = { threshold: 0.5 };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 16);
  }

  // ---- Scroll Reveal Animation ----
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- Donate Amount Buttons ----
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmount = document.getElementById('customAmount');
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (customAmount) {
        customAmount.value = btn.getAttribute('data-amount');
      }
    });
  });

  // ---- Donate Form Submit ----
  const donateForm = document.getElementById('donateForm');
  if (donateForm) {
    donateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for your generous donation! We will contact you shortly.', 'success');
    });
  }

  // ---- Contact Form Submit ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent successfully! We will get back to you within 24 hours.', 'success');
      contactForm.reset();
    });
  }

  // ---- Newsletter Form ----
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing to our newsletter!', 'success');
      form.reset();
    });
  });

  // ---- Toast Notification ----
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
      <span>${message}</span>
      <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:inherit;font-size:1rem;margin-left:12px;">✕</button>
    `;
    toast.style.cssText = `
      position: fixed; bottom: 24px; right: 24px;
      background: ${type === 'success' ? '#1a9e6e' : '#e85d5d'};
      color: white; padding: 16px 24px;
      border-radius: 12px; display: flex; align-items: center; gap: 10px;
      font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2); z-index: 9999;
      animation: slideInRight 0.3s ease;
      max-width: 400px;
    `;
    document.body.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 5000);
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ---- Gallery Filter (gallery page) ----
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-masonry-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ---- Parallax on hero ----
  const heroBg = document.querySelector('.hero-bg-pattern');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }, { passive: true });
  }

});

// Add reveal styles
const style = document.createElement('style');
style.textContent = `
  [data-reveal] {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  [data-reveal].revealed {
    opacity: 1;
    transform: translateY(0);
  }
  [data-reveal][data-delay="1"] { transition-delay: 0.1s; }
  [data-reveal][data-delay="2"] { transition-delay: 0.2s; }
  [data-reveal][data-delay="3"] { transition-delay: 0.3s; }
  [data-reveal][data-delay="4"] { transition-delay: 0.4s; }
  [data-reveal][data-delay="5"] { transition-delay: 0.5s; }
  @keyframes slideInRight {
    from { opacity:0; transform:translateX(30px); }
    to { opacity:1; transform:translateX(0); }
  }
`;
document.head.appendChild(style);
