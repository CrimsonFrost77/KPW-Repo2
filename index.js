const images = [
  'Assets/Picture/Kaliakoir_Pic1.webp',
  'Assets/Picture/Bangabandhu_hi_tech.webp',
  'Assets/Picture/Kaliakoir_rail.webp',
  'Assets/Picture/Mokhosh_swamp2.webp',
  'Assets/Picture/ShreefaltaliCourtOfEstate.webp',
];

function setRandomHeaderImage() {
  const headerDiv = document.getElementById('dynamic-header');
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  headerDiv.style.backgroundImage = `url('${selectedImage}')`;
}

// Call the function when the page loads
window.onload = setRandomHeaderImage;

// Slideshow functionality
function initSlideshow() {
  const images = document.querySelectorAll('.slide-img');
  let currentImageIndex = 0;
  
  // Show first image initially
  images[0].classList.add('active');
  
  // Change image every 5 seconds
  setInterval(() => {
      // Remove active class from current image
      images[currentImageIndex].classList.remove('active');
      
      // Move to next image
      currentImageIndex = (currentImageIndex + 1) % images.length;
      
      // Add active class to new current image
      images[currentImageIndex].classList.add('active');
  }, 5000);
}

// Call initSlideshow after window loads
window.addEventListener('load', initSlideshow);