// navbar-loader.js
async function loadNavbar() {
  try {
    // Fetch the navbar HTML content
    const response = await fetch('navbar.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const navbarHTML = await response.text();

    // Create navbar container and insert content
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = navbarHTML;

    // Insert navbar at the start of body
    document.body.insertBefore(navbar, document.body.firstChild);

    // Set up event listeners after navbar is loaded
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
      dropbtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 804) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });

  } catch (error) {
    console.error('Error loading navbar:', error);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadNavbar);

/*icon tab*/
function setFavicon(faviconUrl) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = faviconUrl;
  document.head.appendChild(link);
}

// Call the function with the path to the favicon
setFavicon('Assets/tabicon.ico');