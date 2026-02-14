/**
 * ACE-SCHOLARA INTERACTIVE EFFECTS
 * Lightweight animations using native APIs
 * ~2KB minified
 */

// ============================================
// 1. SCROLL ANIMATIONS
// Triggers .visible class when elements enter viewport
// ============================================

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children'
  );

  if (animatedElements.length === 0) return;

  // Disconnect existing observer if any (for page transitions)
  if (window.scrollObserver) {
    window.scrollObserver.disconnect();
  }

  window.scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing after animation
          // window.scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Reset and observe
  animatedElements.forEach((el) => {
    el.classList.remove('visible');
    window.scrollObserver.observe(el);
  });
}

// ============================================
// 2. 3D TILT EFFECT
// Add class "tilt-card" to any element
// ============================================

function initTiltEffect() {
  const tiltElements = document.querySelectorAll('.tilt-card');
  
  if (tiltElements.length === 0) return;

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s ease';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'none';
    });
  });
}

// ============================================
// 3. MAGNETIC BUTTON EFFECT
// Add class "btn-magnetic" to buttons
// ============================================

function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.btn-magnetic');
  
  if (magneticElements.length === 0) return;

  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// 4. COUNT-UP ANIMATION
// Add class "count-up" and data-target="1000"
// ============================================

function initCountUp() {
  const countElements = document.querySelectorAll('.count-up');
  
  if (countElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target || el.textContent.replace(/[^0-9]/g, ''));
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = parseInt(el.dataset.duration) || 2000;
          
          animateCount(el, target, prefix, suffix, duration);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  countElements.forEach((el) => observer.observe(el));
}

function animateCount(el, target, prefix, suffix, duration) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);
    
    el.textContent = prefix + current.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = prefix + target.toLocaleString() + suffix;
    }
  }
  
  requestAnimationFrame(update);
}

// ============================================
// 5. PARALLAX SCROLLING (lightweight)
// Add class "parallax" and data-speed="0.5"
// ============================================

function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;

  function updateParallax() {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 0.5;
      const offset = scrollY * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

// ============================================
// 6. CURSOR EFFECTS (optional, subtle)
// Add class "custom-cursor" to body
// ============================================

function initCustomCursor() {
  if (!document.body.classList.contains('custom-cursor')) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  cursor.style.cssText = `
    width: 8px;
    height: 8px;
    background: #3b82f6;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top = e.clientY - 4 + 'px';
  });

  // Scale up on hover over links/buttons
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(3)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
}

// ============================================
// INITIALIZE ALL EFFECTS
// ============================================

function initAllEffects() {
  initScrollAnimations();
  initTiltEffect();
  initMagneticButtons();
  initCountUp();
  initParallax();
  // initCustomCursor(); // Uncomment if you want custom cursor
}

// Run on initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllEffects);
} else {
  initAllEffects();
}

// Run on Astro page transitions
document.addEventListener('astro:page-load', initAllEffects);
document.addEventListener('astro:after-swap', initAllEffects);

// Export for manual use if needed
window.AceEffects = {
  initScrollAnimations,
  initTiltEffect,
  initMagneticButtons,
  initCountUp,
  initParallax,
  initAllEffects,
};
