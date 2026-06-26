/* =============================================
   SHARED COMPONENTS - nav.js
   Injects navbar, mobile nav, footer, login modal
   ============================================= */

function injectComponents() {
  // ---- NAVBAR ----
  const navHTML = `
  <nav id="navbar">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">
        <img src="../images/logo.png" alt="Sanskar Vikas Foundation Logo" onerror="this.style.display='none'">
        <div class="nav-logo-text">
          <span class="org-name">Sanskar Vikas Foundation</span>
          <span class="org-tagline">"Serving Lives, Serving Hopes"</span>
        </div>
      </a>

      <div class="nav-links">
        <a href="../index.html">Home</a>
        <a href="about.html">About</a>
        <a href="programmes.html">Programmes</a>
        <a href="team.html">Our Team</a>
        <a href="gallery.html">Events & Gallery</a>
        <a href="contact.html">Contact</a>
         <a href="Membership.html">Membership</a>
      </div>

      <div class="nav-actions">
       
        <a href="donate.html" class="nav-cta-donate btn">❤️ Donate</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <div class="mobile-nav" id="mobileNav">
    <button class="mobile-nav-close" id="mobileNavClose">✕</button>
    <a href="../index.html">Home</a>
    <a href="about.html">About</a>
    <a href="programmes.html">Programmes</a>
    <a href="team.html">Our Team</a>
    <a href="gallery.html">Events & Gallery</a>
    <a href="contact.html">Contact</a>
        <a href="membership.html">Membership</a>
    <a href="donate.html" style="color:var(--orange-accent);">❤️ Donate</a>

  </div>

  <!-- Login Modal -->
  <div class="login-overlay" id="loginOverlay">
    <div class="login-box">
      <button class="login-close" id="loginClose">✕</button>
      <div style="text-align:center;margin-bottom:28px;">
        <div style="width:64px;height:64px;background:var(--green-pale);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 16px;">🔐</div>
        <h3>Member Login</h3>
        <p>Access your dashboard and manage activities</p>
      </div>
      <form id="loginForm">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" name="email" class="form-input" placeholder="your@email.com" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password" class="form-input" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;">Sign In</button>
        <p style="text-align:center;margin-top:16px;font-size:0.85rem;">
          <a href="#" style="color:var(--green-primary);font-weight:600;">Forgot Password?</a>
        </p>
      </form>
    </div>
  </div>
  `;

  // ---- FOOTER ----
  const footerHTML = `
  <footer id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="../images/logo.png" alt="Logo" onerror="this.style.display='none'">
            <div class="footer-logo-name">Sanskar Vikas<br>Foundation</div>
          </div>
          <p>Empowering rural communities and marginalized groups through education, healthcare, and sustainable development since 2012.</p>
          <div class="social-links">
            <div class="social-link" title="Facebook">📘</div>
            <div class="social-link" title="Instagram">📸</div>
            <div class="social-link" title="Twitter/X">🐦</div>
            <div class="social-link" title="YouTube">▶️</div>
            <div class="social-link" title="LinkedIn">💼</div>
            <div class="social-link" title="WhatsApp">💬</div>
          </div>
        </div>

        <div class="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="../index.html">🏠 Home</a></li>
            <li><a href="about.html">📖 About Us</a></li>
            <li><a href="programmes.html">🌱 Programmes</a></li>
            <li><a href="team.html">👥 Our Team</a></li>
            <li><a href="gallery.html">📷 Gallery</a></li>
            <li><a href="donate.html">❤️ Donate</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Our Work</h5>
          <ul>
            <li><a href="programmes.html">Healthcare</a></li>
            <li><a href="programmes.html">Education</a></li>
            <li><a href="programmes.html">Women Empowerment</a></li>
            <li><a href="programmes.html">Skill Development</a></li>
            <li><a href="programmes.html">Environmental</a></li>
            <li><a href="programmes.html">Rural Development</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact Us</h5>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📍</span>
            <span>Aspire Aesthetics Skin and Hair Laser Clinic, Plot No. 4, Ramkrishna Nagar, Near Ajni Metro Station, Wardha Road, Nagpur – 440015</span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📧</span>
            <span>sanskarvikasfoundation@gmail.com</span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📱</span>
            <span>+91 89756 04678</span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">🏛</span>
            <span>CIN: U93030MH2012NPL237849</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2025 Sanskar Vikas Foundation. All Rights Reserved.</span>
        <span>Registered NGO | Maharashtra, India | <a href="#">Privacy Policy</a></span>
      </div>
    </div>
  </footer>
  `;

  // Inject navbar before body content
  const navContainer = document.getElementById('nav-placeholder');
  if (navContainer) navContainer.innerHTML = navHTML;

  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // Fix paths for index.html (root level)
  const isRoot = !window.location.pathname.includes('/pages/');
  if (isRoot) {
    document.querySelectorAll('.nav-links a, .mobile-nav a, .footer-grid a, .footer-logo').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('../')) {
        a.setAttribute('href', href.replace('../', ''));
      }
      if (href && href.startsWith('pages/') === false && href.endsWith('.html') && !href.startsWith('../') && !href.startsWith('http') && !href.startsWith('#')) {
        // relative already fine
      }
    });
    document.querySelectorAll('img[src*="../images"]').forEach(img => {
      img.src = img.src.replace('../images', 'images');
    });
  }
}

document.addEventListener('DOMContentLoaded', injectComponents);
