// Select all elements to animate
const animatedElements = document.querySelectorAll('.animate-up');

// Function to reveal elements when in view
const revealOnScroll = () => {
  animatedElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Add class to make element visible when it enters the viewport
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

// Listen to the scroll event
window.addEventListener('scroll', revealOnScroll);

// Trigger on load for elements already in view
revealOnScroll();
