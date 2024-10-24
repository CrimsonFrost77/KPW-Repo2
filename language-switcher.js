// language-switcher.js

// Object to store translations
const translations = {
  en: {
    'kaliakair-pourashava': 'Kaliakair Pourashava',
    'home': 'Home',
    'about': 'About',
    'employees': 'Employees',
    'projects': 'Projects',
    'budgets': 'Budgets',
    'contacts': 'Contacts',
    
    'hello-line': 'Hello this is a test line',
    'kotha-line': 'kotha \n kotha \n kotha',
    'kpboast': 'kaliakair pauroshova is the best pouroshova'
  },
  bn: {
    'kaliakair-pourashava': 'কালিয়াকৈর পৌরসভা',
    'home': 'হোম',
    'about': 'সম্পর্কে',
    'employees': 'কর্মচারী',
    'projects': 'প্রকল্প',
    'budgets': 'বাজেট',
    'contacts': 'যোগাযোগ',

    'hello-line': 'হ্যালো এটি একটি পরীক্ষা লাইনহ্যালো এটি একটি পরীক্ষা লাইন',
    'kpboast': 'সেরা পৌরোশোভা সহ কালিয়াকৈর পৌরোশোভা'
  }
};

// Function to get the current language from localStorage or default to 'en'
function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

// Function to update active language button styling
function updateLanguageButtons(selectedLang) {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-lang') === selectedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Function to update the text content of elements
function updatePageContent(language) {
  // Update each translatable element
  for (const [key, value] of Object.entries(translations[language])) {
    // Find elements with matching data-translate attribute
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach(element => {
      element.textContent = value;
    });
  }
}

// Function to initialize language switcher
function initializeLanguageSwitcher() {
  // Add data-translate attributes to elements that need translation
  const elementsToTranslate = {
    '#kaliakair-pourashava': 'kaliakair-pourashava',
    '.navigation-section .noDrop': ['home', 'about', 'employees', 'contacts'],
    '.dropdown .dropbtn': ['projects', 'budgets']
  };

  // Add data-translate attributes to elements
  for (const [selector, keys] of Object.entries(elementsToTranslate)) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      if (Array.isArray(keys)) {
        element.setAttribute('data-translate', keys[index]);
      } else {
        element.setAttribute('data-translate', keys);
      }
    });
  }

  // Set initial language
  const currentLang = getCurrentLanguage();
  updateLanguageButtons(currentLang);
  updatePageContent(currentLang);

  // Add click event listeners to language buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      localStorage.setItem('selectedLanguage', selectedLang);
      updateLanguageButtons(selectedLang);
      updatePageContent(selectedLang);
    });
  });
}

// Initialize when navbar is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for navbar-loader.js to complete
  setTimeout(initializeLanguageSwitcher, 100);
});