export function setupScrollAnimation() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '50px' // Start animation slightly before the element comes into view
    });
  
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }