const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Light Theme'; // Change button text
    themeToggle.style.backgroundColor = '#ffffff'; // Change background color to white
    themeToggle.style.color = '#000000'; // Change text color to black
  } else {
    themeToggle.textContent = 'Dark Theme'; // Revert button text
    themeToggle.style.backgroundColor = '#2c2b2b'; // Revert background color
    themeToggle.style.color = '#f0f0f0'; // Revert text color
  }
});


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
