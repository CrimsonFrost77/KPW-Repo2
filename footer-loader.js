// footer-loader.js
async function loadFooter() {
  try {
    // Fetch the footer HTML content
    const response = await fetch('footer.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const footerHTML = await response.text();

    // Create footer container and insert content
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = footerHTML;

    // Append footer at the end of body
    document.body.appendChild(footer);

    // Handle image error cases for the logos
    const footerImages = document.querySelectorAll('.footer-bottom img');
    footerImages.forEach(img => {
      img.onerror = function() {
        console.warn(`Failed to load footer image: ${img.src}`);
        // Optionally hide the broken image
        // img.style.display = 'none';
      };
    });

  } catch (error) {
    console.error('Error loading footer:', error);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadFooter);

