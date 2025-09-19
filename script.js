
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

  // Animate progress bars
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = value + '%';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 🔁 Add click event to mobile menu button
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMobileMenu);
    }

    // 🚀 Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // 🧹 Hide mobile menu after clicking a link (on small screens)
        const mobileMenu = document.getElementById('mobile-menu');
        if (window.innerWidth < 768 && mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // 📊 Animate progress bars when in view
    const impactSection = document.querySelector('#impact');
    if (impactSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgressBars();
          }
        });
      });
      observer.observe(impactSection);
    }

    
    });
  
