document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.accordion-item');
  
  items.forEach(item => {
    const button = item.querySelector('.accordion-button');
    
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      
      
      // Close all other items
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Close when clicking outside
  document.addEventListener('click', function() {
    items.forEach(item => {
      item.classList.remove('active');
    });
  });
  
  // Prevent accordion clicks from closing
  document.querySelector('.accordion').addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
