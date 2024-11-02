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
    'kpboast': 'kaliakair pauroshova is the best pouroshova',

    // Employee List Translations
    'employee-list-title': 'Kaliakair Municipality Employee List',
    'search-placeholder': 'Search for employees...',
    
    // Department Names
    'general-branch': 'General Branch',
    'accounts-branch': 'Accounts Branch',
    'assessment-branch': 'Assessment Branch',
    'tax-license-branch': 'Tax Collection/License Branch',
    'market-branch': 'Market Branch',
    'health-sanitation': 'Health Department - Sanitation',
    'health-family-planning': 'Health Department - Family Planning',
    'engineering': 'Engineering Department',

    // Table Headers
    'name-header': 'Name',
    'designation-header': 'Designation',
    'mobile-header': 'Mobile',
    'education-header': 'Education',
    'joining-header': 'Joining Date',

    'head-assistant': 'Head Assistant',
    'upper-division-assistant': 'Upper Division Assistant',
    'mlss': 'MLSS',
    'night-guard': 'Night Guard',
    'accountant': 'Accountant',
    'cashier': 'Cashier',
    'tax-assessor': 'Tax Assessor',
    'tax-collector': 'Tax Collector',
    'assistant-tax-collector': 'Assistant Tax Collector',
    'license-inspector': 'License Inspector',
    'market-inspector': 'Market Inspector',
    'conservation-inspector': 'Conservation Inspector',
    'vaccination-supervisor': 'Vaccination Supervisor',
    'vaccinator': 'Vaccinator',
    'work-assistant': 'Work Assistant',
    'construction-assistant': 'Construction Assistant cum Surveyor',
    'road-roller-driver': 'Road Roller Driver',
    'garbage-truck-driver': 'Garbage Truck Driver',

    // Employee Names
    'nasir-uddin': 'Nasir Uddin',
    'abdus-sabur-molla': 'Md. Abdus Sabur Molla',
    'shah-alam': 'Shah Alam Jamadar',
    'abdul-mannan': 'Md. Abdul Mannan',
    'mint-sikdar': 'Md. Mint Sikdar',
    'farhad-hossain': 'Md. Farhad Hossain',
    'mosaddekman-khan': 'Md. Mosaddekman Khan',
    'imdadul-haque': 'Md. Imdadul Haque',
    'anowar-mamun': 'Khandakar Anowar Mamun',
    'sulaiman-hossain': 'Md. Sulaiman Hossain',
    'tofazzal-hossain': 'Md. Tofazzal Hossain',
    'saiful-islam': 'Md. Saiful Islam',
    'shahidul-islam': 'Md. Shahidul Islam',
    'abdus-sattar': 'Md. Abdus Sattar',
    'mamun-hossain': 'Md. Mamun Hossain',
    'arif-hossain': 'Md. Arif Hossain',
    'arif-hossain-1': 'Md. Arif Hossain-01',
    'arif-hossain-2': 'Md. Arif Hossain-2',
    'rowshan-akter': 'Rowshan Akter Baby',
    'jhorna-akter': 'Jhorna Akter',
    'moktar-hossain': 'Md. Moktar Hossain',
    'azahar-islam': 'Md. Azahar Islam',
    'hasina-akter': 'Hasina Akter',
    'nur-amin': 'Md. Nur Amin',
    'nasirul-hassan': 'Md. Nasirul Hassan (Nanu)',
    'abdur-rahim': 'Md. Abdur Rahim Sarkar',
    'jahangir-alam': 'Md. Jahangir Alam',
    'manser-ali': 'Md. Manser Ali',
    'anwar-hossain': 'Md. Anwar Hossain',
    'helal-uddin': 'Md. Helal Uddin',

    //info card stuff for home page
    'find-info': 'Find Information',
    'news-header':'News and Updates',

    //info card stuff for about page
    'info-glance':'Pourashava At a Glance',
    'info-established':'Established:',
    'info-class':'Class:',
    'info-total-wards':'Total Wards:',
    'info-area':'Area:',
    'info-population':'Population:',
    'info-holdings':'No. of Holdings:',
    'info-tax-collected':'Tax Collected:',
    'info-literacy-rate':'Literacy Rate:',
    'info-density':'Density:',
    'info-road-network':'Road Network:',
    'info-drain-network':'Drain Network:',
    'info-public-toilets':'Public Toilets:',
    'info-waste-bins':'Waste Collection Bins:',
    'info-municipal-facilities':'Municipal Facilities:'
  },
  bn: {
    'kaliakair-pourashava': 'কালিয়াকৈর পৌরসভা',
    'home': 'হোম',
    'about': 'সম্পর্কে',
    'employees': 'কর্মচারী',
    'projects': 'প্রকল্প',
    'budgets': 'বাজেট',
    'contacts': 'যোগাযোগ',

    'hello-line': 'হ্যালো এটি একটি পরীক্ষা লাইন',
    'kpboast': 'সেরা পৌরোশোভা সহ কালিয়াকৈর পৌরোশোভা',

    // Employee List Translations
    'employee-list-title': 'কালিয়াকৈর পৌরসভা কর্মচারী তালিকা',
    'search-placeholder': 'কর্মচারী খুঁজুন...',
    
    // Department Names
    'general-branch': 'সাধারণ শাখা',
    'accounts-branch': 'হিসাব শাখা',
    'assessment-branch': 'এসেসমেন্ট শাখা',
    'tax-license-branch': 'কর আদায়/লাইসেন্স শাখা',
    'market-branch': 'বাজার শাখা',
    'health-sanitation': 'স্বাস্থ্য বিভাগ - পরিচ্ছন্নতা',
    'health-family-planning': 'স্বাস্থ্য বিভাগ - পরিবার পরিকল্পনা',
    'engineering': 'প্রকৌশল বিভাগ',

    // Table Headers
    'name-header': 'নাম',
    'designation-header': 'পদবী',
    'mobile-header': 'মোবাইল',
    'education-header': 'শিক্ষাগত যোগ্যতা',
    'joining-header': 'যোগদান তারিখ',

    // Common Designations
    'head-assistant': 'প্রধান সহকারী',
    'upper-division-assistant': 'উচ্চমান সহকারী',
    'mlss': 'এম.এল.এস.এস',
    'night-guard': 'নৈশ প্রহরী',
    'accountant': 'হিসাব রক্ষক',
    'cashier': 'কোষাধ্যক্ষ',
    'tax-assessor': 'কর নির্ধারক',
    'tax-collector': 'কর আদায়কারী',
    'assistant-tax-collector': 'সহকারী কর আদায়কারী',
    'license-inspector': 'লাইসেন্স পরিদর্শক',
    'market-inspector': 'বাজার পরিদর্শক',
    'conservation-inspector': 'কনজারভেন্সি ইন্সপেক্টর',
    'vaccination-supervisor': 'টিকাদান সুপারভাইজার',
    'vaccinator': 'টিকাদানকারী',
    'work-assistant': 'কার্য সহকারী',
    'construction-assistant': 'নির্মাণ সহকারী কাম মুন্সিখানা',
    'road-roller-driver': 'রোড রোলার চালক',
    'garbage-truck-driver': 'গার্বেজ ট্রাক চালক',

    // Employee Names
    'nasir-uddin': 'নাসির উদ্দিন',
    'abdus-sabur-molla': 'মোঃ আব্দুস সবুর মোল্লা',
    'shah-alam': 'শাহ আলম জামাদার',
    'abdul-mannan': 'মোঃ আব্দুল মান্নান',
    'mint-sikdar': 'মোঃ মিন্টু সিকদার',
    'farhad-hossain': 'মোঃ ফরহাদ হোসেন',
    'mosaddekman-khan': 'মোঃ মোছাদ্দেকমান খান',
    'imdadul-haque': 'মোঃ ইমদাদুল হক',
    'anowar-mamun': 'খন্দকার আনোয়ার মামুন',
    'sulaiman-hossain': 'মোঃ সোলায়মান হোসেন',
    'tofazzal-hossain': 'মোঃ তোফাজ্জল হোসেন',
    'saiful-islam': 'মোঃ সাইফুল ইসলাম',
    'shahidul-islam': 'মোঃ শহিদুল ইসলাম',
    'abdus-sattar': 'মোঃ আব্দুস সাত্তার',
    'mamun-hossain': 'মোঃ মামুন হোসেন',
    'arif-hossain': 'মোঃ আরিফ হোসেন',
    'arif-hossain-1': 'মোঃ আরিফ হোসেন-০১',
    'arif-hossain-2': 'মোঃ আরিফ হোসেন-২',
    'rowshan-akter': 'রওশন আক্তার বেবী',
    'jhorna-akter': 'ঝর্ণা আক্তার',
    'moktar-hossain': 'মোঃ মোক্তার হোসেন',
    'azahar-islam': 'মোঃ আজহার ইসলাম',
    'hasina-akter': 'হাসিনা আক্তার',
    'nur-amin': 'মোঃ নুর আমিন',
    'nasirul-hassan': 'মোঃ নাসিরুল হাসান (নানু)',
    'abdur-rahim': 'মোঃ আব্দুর রহিম সরকার',
    'jahangir-alam': 'মোঃ জাহাঙ্গীর আলম',
    'manser-ali': 'মোঃ মনছের আলী',
    'anwar-hossain': 'মোঃ আনোয়ার হোসেন',
    'helal-uddin': 'মোঃ হেলাল উদ্দিন',
    
    //info card stuff
    'find-info': 'তথ্য',
    'news-header':'সাম্প্রতিক খবর ও আপডেট',

    // info card stuff for about page
    'info-glance':'এক নজরে পৌরসভা',
    'info-established':'প্রতিষ্ঠিত',
    'info-class':'শ্রেণী',
    'info-total-wards':'মোট ওয়ার্ড',
    'info-area':'এলাকা',
    'info-population':'জনসংখ্যা',
    'info-holdings':'হোল্ডিং সংখ্যা',
    'info-tax-collected':'আদায়কৃত কর',
    'info-literacy-rate':'সাক্ষরতার হার',
    'info-density':'ঘনত্ব',
    'info-road-network':'সড়ক নেটওয়ার্ক',
    'info-drain-network':'ড্রেন নেটওয়ার্ক',
    'info-public-toilets':'পাবলিক টয়লেট',
    'info-waste-bins':'বর্জ্য সংগ্রহ বিন',
    'info-municipal-facilities':'পৌর সুবিধাসমূহ'

  }
};

// Bangla number conversion mappings
const numberMap = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

// Core conversion functions
function convertToBanglaNumbers(str) {
  if (!str) return '';
  return str.toString().replace(/[0-9]/g, match => numberMap[match] || match);
}

function convertToBanglaDate(dateStr) {
  if (!dateStr || dateStr === '-') return '-';
  return convertToBanglaNumbers(dateStr);
}

function convertToBanglaMobile(mobileStr) {
  if (!mobileStr) return '';
  return convertToBanglaNumbers(mobileStr);
}

// Function to get current language
function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

// Function to update language buttons
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

// Function to update page content with translations and number conversions
function updatePageContent(language) {
  // Update translations
  for (const [key, value] of Object.entries(translations[language])) {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach(element => {
      if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    });
  }

  // Handle number conversions for Bangla
  if (language === 'bn') {
    // Convert dates
    document.querySelectorAll('[data-convert="date"]').forEach(element => {
      element.textContent = convertToBanglaDate(element.getAttribute('data-original'));
    });

    // Convert mobile numbers
    document.querySelectorAll('[data-convert="mobile"]').forEach(element => {
      element.textContent = convertToBanglaMobile(element.getAttribute('data-original'));
    });

    // Convert general numbers
    document.querySelectorAll('[data-convert="number"]').forEach(element => {
      element.textContent = convertToBanglaNumbers(element.getAttribute('data-original'));
    });
  } else {
    // Restore original values
    document.querySelectorAll('[data-convert]').forEach(element => {
      const originalValue = element.getAttribute('data-original');
      if (originalValue) {
        element.textContent = originalValue;
      }
    });
  }
}

// Initialize language switcher
function initializeLanguageSwitcher() {
  // Store original numeric values
  document.querySelectorAll('[data-convert]').forEach(element => {
    if (!element.getAttribute('data-original')) {
      element.setAttribute('data-original', element.textContent);
    }
  });

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

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initializeLanguageSwitcher, 100);
});

// Export functions for external use if needed
window.translateUtils = {
  convertToBanglaNumbers,
  convertToBanglaDate,
  convertToBanglaMobile,
  getCurrentLanguage,
  updatePageContent
};