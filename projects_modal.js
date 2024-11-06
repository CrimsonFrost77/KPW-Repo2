// Simplified modal functionality for project images
document.addEventListener('DOMContentLoaded', function() {
  const projectImage = document.querySelector('.projects-intro-image img');
  const modal = document.getElementById('projectImageModal');
  const modalImg = document.getElementById('modalImage');

  // Open modal when clicking on project image
  if (projectImage) {
      projectImage.style.cursor = 'pointer';
      projectImage.addEventListener('click', function() {
          modal.style.display = "flex";
          modalImg.src = this.src;
      });
  }

  // Close modal when clicking anywhere on it
  modal.addEventListener('click', function() {
      modal.style.display = "none";
  });

  // Prevent scrolling when modal is open
  modal.addEventListener('wheel', function(e) {
      e.preventDefault();
  });

  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === "flex") {
          modal.style.display = "none";
      }
  });
});