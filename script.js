
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }
// Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"], .nav-link, .mobile-nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        });
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
  

        const openFormBtns = document.querySelectorAll(".open-form-btn"); // get all buttons
        const formModal = document.getElementById("form-modal");
        const closeFormBtn = document.getElementById("close-form");

        const contactForm = document.getElementById("contact-form");
        const iframe = document.querySelector("iframe[name='hidden-iframe']");
        const thankYouModal = document.getElementById("thank-you-modal");
        const closeBtn = document.getElementById("close-modal");

        // Open form modal for ALL "Contact Us" buttons
        openFormBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            formModal.classList.remove("hidden");
            formModal.classList.add("flex");
          });
        });

        // Close form modal
        closeFormBtn.addEventListener("click", () => {
          formModal.classList.add("hidden");
          formModal.classList.remove("flex");
        });

        // Track submission
        contactForm.addEventListener("submit", () => {
          contactForm.dataset.submitted = "true";
        });

        // Show thank-you modal after iframe load
        iframe.addEventListener("load", () => {
          if (contactForm.dataset.submitted === "true") {
            formModal.classList.add("hidden"); // close form modal
            thankYouModal.classList.remove("hidden");
            thankYouModal.classList.add("flex");

            contactForm.reset();
            contactForm.dataset.submitted = "false";
          }
        });

        // Close thank-you modal
        closeBtn.addEventListener("click", () => {
          thankYouModal.classList.add("hidden");
          thankYouModal.classList.remove("flex");
        });

        // Optional: close modals when clicking background
        [formModal, thankYouModal].forEach((modal) => {
          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              modal.classList.add("hidden");
              modal.classList.remove("flex");
            }
          });
        });
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('bg-white/98');
                header.classList.remove('bg-white/95');
            } else {
                header.classList.add('bg-white/95');
                header.classList.remove('bg-white/98');
            }
        }); 