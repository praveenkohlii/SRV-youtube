// Create a MutationObserver to watch for changes to the YouTube homepage
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Hide the video sections on the YouTube homepage
      const primary = document.querySelector('#primary');
      if (primary) {
        primary.style.display = 'none';
      }
  
      const secondary = document.querySelector('#secondary');
      if (secondary) {
        secondary.style.display = 'none';
      }
    });
  });
  
  // Observe changes to the body element
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Create a MutationObserver to watch for changes to the recommended videos section
  const observer2 = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Hide the recommended videos section on the video page
      const related = document.querySelector('#related');
      if (related) {
        related.style.display = 'none';
      }
    });
  });
  
  // Observe changes to the body element
  observer2.observe(document.body, { childList: true, subtree: true });
  