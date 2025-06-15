// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const nav = document.getElementById("nav")

  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      nav.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.backgroundColor = "transparent"
      header.style.backdropFilter = "none"
      header.style.boxShadow = "none"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".hero-content, .partners")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add hover effects to CTA button
  const ctaButton = document.querySelector(".cta-button")
  ctaButton.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  ctaButton.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

const section = document.querySelector('.fast-stats-section');
  const counter = document.querySelector('.counter');
  let counted = false;

  section.addEventListener('mouseenter', () => {
    if (!counted) {
      const target = +counter.getAttribute('data-target');
      let count = 233527; // initial visible number
      const step = Math.ceil((target - count) / 60); // adjust speed here

      const update = () => {
        count += step;
        if (count >= target) {
          counter.innerText = target.toLocaleString();
        } else {
          counter.innerText = count.toLocaleString();
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
      counted = true;
    }
    document.addEventListener("keydown", y => {
      if (
        (y.ctrlKey && y.shiftKey && ["I", "J", "C"].includes(y.key.toUpperCase())) ||
        (y.ctrlKey && y.key.toLowerCase() === "u") ||
        y.key === "F12"
      ) {
        y.preventDefault();
        location.reload();
      }
    });
  });

  