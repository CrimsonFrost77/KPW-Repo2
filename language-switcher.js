// language-switcher.js

// Object to store translations
const translations = {
  en: {
    // Main Navigation
    "kaliakair-pourashava": "Kaliakair Municipality",
    home: "Home",
    about: "About",
    employeesAndMembers: "Employees/Members",
    projectsAndBudgets: "Project/Budgets",
    notices: "Notice",
    tenders: "Tender",
    contacts: "Contacts",
    forms: "Forms",
    more: "More",
    tender: "Tenders",
    photo_gallery: "Photo Gallery",

    // Employee List Page
    "employee-list-title": "Kaliakair Municipality Employee List",
    "search-placeholder": "Search for employees...",

    // Department Names
    "executive-officers": "Executive Officers",
    "general-branch": "General Branch",
    "accounts-branch": "Accounts Branch",
    "assessment-branch": "Tax Assessment Branch",
    "tax-license-branch": "Tax Collection and License Branch",
    "market-collection-branch": "Market Collection Branch",
    engineering: "Civil/Electrical/Mechanical Branch",
    "health-family-planning": "Health and Family Planning Branch",
    "cleanliness-branch": "Cleanliness Branch",

    // Table Headers
    "header-name": "Name",
    "header-designation": "Designation",
    "header-mobile": "Mobile",
    "header-education": "Education",
    "header-joining": "Joining Date",

    // Common Designations
    "municipal-executive": "Municipal Executive Officer",
    "executive-engineer": "Executive Engineer",
    "accounts-officer": "Accounts Officer",
    "assistant-engineer": "Assistant Engineer",
    "sub-engineer-civil": "Sub-Assistant Engineer (Civil)",
    "sub-engineer-electrical": "Sub-Assistant Engineer (Electrical)",
    "chief-assistant": "Chief Assistant",
    "senior-assistant": "Senior Assistant",
    "store-keeper": "Store Keeper",
    "junior-assistant": "Junior Assistant cum Typist",
    "jeep-driver": "Jeep Driver",
    "office-assistant": "Office Assistant",
    "office-assistant-mayor": "Office Assistant (Mayor)",
    "night-guard": "Night Guard",
    "tax-assessor": "Tax Assessor",
    "assistant-tax-assessor": "Assistant Tax Assessor",
    "tax-collector": "Tax Collector",
    "license-inspector": "License Inspector",
    "assistant-tax-collector": "Assistant Tax Collector",
    "assistant-license-inspector": "Assistant License Inspector",
    treasurer: "Treasurer",
    "accounts-assistant": "Accounts Assistant",
    "market-inspector": "Market Inspector",
    collector: "Collector",
    surveyor: "Surveyor/Sub-Overseer",
    "work-assistant": "Work Assistant",
    "street-light-inspector": "Street Light Inspector",
    "road-roller-driver": "Road Roller Driver",
    "garbage-truck-driver": "Garbage Truck Driver",
    "truck-driver": "Truck/Tractor Driver",
    "mixture-operator": "Mixture Machine Operator",
    "pump-operator": "Pump Operator",
    lineman: "Lineman",
    "electrical-helper": "Electrical Helper",
    "health-assistant": "Health Assistant",
    "vaccination-supervisor": "Vaccination Supervisor",
    vaccinator: "Vaccinator",
    "conservancy-inspector": "Conservancy Inspector",
    supervisor: "Supervisor",

    // Employee Names
    "abdul-mottaleb": "Abdul Mottaleb",
    "abdullah-munsur": "Abdullah Al Munsur",
    "abu-taher": "Khondokar Abu Taher",
    "arif-hossen-1": "Md. Arif Hossen-1",
    "arif-hossen-2": "Md. Arif Hossen-2",
    "arif-hossen": "Md. Arif Hossen",
    "arif-ul-islam": "Md. Arif-Ul-Islam",
    "asia-begum": "Asia Begum",
    "biplab-hossen": "Md. Biplab Hossen",
    "fahadil-khalid": "Fahadil Khalid",
    "forhad-hossen": "Md. Forhad Hossen",
    "hasina-akter": "Hasina Akter",
    "helal-uddin": "Md. Helal Uddin",
    "horipad-ray": "Engr. Horipad Ray",
    "imrul-hasan": "Md. Imrul Hasan Sumon",
    "isdadul-haque": "Md. Isdadul Haque",
    "istiak-ahammed": "Md. Istiak Ahammed Asad",
    "jahangir-alam-driver": "Md. Jahangir Alam",
    "jahangir-alam": "Md. Jahangir Alam",
    "jahidul-alam": "Md. Jahidul Alam Talukdar",
    "jhorna-akter": "Jhorna Akter",
    "jonny-ahmed": "Md. Jonny Ahmed",
    "kamal-hossen": "Md. Kamal Hossen",
    "khondokar-anwarul": "Khondokar Anwarul Mamun",
    "khondokar-delowar": "Khondokar Delowar Hossen",
    "khorshed-alam": "Khorshed Alam",
    "lucky-begum": "Mahmuda Begum (Lucky)",
    "mahmudul-hasan": "Md. Mahmudul Hasan",
    malek: "A. Malek",
    "mamun-hossen": "Md. Mamun Hossen",
    "masud-rana": "Masud Rana",
    "masum-hossen": "Masum Hossen",
    "moazzem-hossen": "Md. Moazzem Hossen",
    "moktar-hossen": "Md. Moktar Hossen",
    "monser-ali": "Md. Monser Ali",
    "mosaraf-hossen": "Md. Mosaraf Hossen",
    mostofa: "Md. Mostofa",
    "nasir-uddin": "Nasir Uddin",
    "nasir-ul-hasan": "Md. Nasir Ul Hasan (Nannu)",
    "pavel-ahammed": "Pavel Ahammed",
    "rajib-khan": "Md. Rajib Khan",
    "robin-hossen": "Md. Robin Hossen",
    "rowshan-akter": "Rowshan Akter Ruby",
    "saiful-islam-tax": "Md. Saiful Islam",
    "saiful-islam": "Md. Saiful Islam",
    "selim-hossen": "Md. Selim Hossen",
    "shah-alam": "Md. Shah Alam Jomaddar",
    "shahidul-islam": "Md. Shahidul Islam",
    "sharmin-akter": "Sharmin Akter",
    "shilpi-akter": "Shilpi Akter",
    "sobur-molla": "Md. Abdus Sobur Molla",
    sohel: "Md. Sohel",
    "solayman-hossen": "Md. Solayman Hossen",
    "sourav-hossen": "Khondokar Sourav Hossen",
    "syed-asaduzzaman": "Syed Asaduzzaman",
    "tofazzal-hossen": "Md. Tofazzal Hossen",
    "wasim-arafat": "Wasim Arafat",
    "wasim-mia": "Md. Wasim Mia",

    // Info card stuff for home page
    "find-info": "Find Information",
    "news-header": "News and Updates",

    // Info card stuff for about page
    "info-glance": "Pourashava At a Glance",
    "info-established": "Established ",
    "info-class": "Class ",
    "info-total-wards": "Total Wards ",
    "info-area": "Area ",
    "info-population": "Population ",
    "info-holdings": "No. of Holdings ",
    "info-tax-collected": "Tax Collected ",
    "info-literacy-rate": "Literacy Rate ",
    "info-density": "Density ",
    "info-road-network": "Road Network ",
    "info-drain-network": "Drain Network ",
    "info-public-toilets": "Public Toilets ",
    "info-waste-bins": "Waste Collection Bins ",
    "info-municipal-facilities": "Municipal Facilities ",

    // Info card values
    "info-established-value": "2003 (2001)",
    "info-class-value": "A",
    "info-total-wards-value": "09",
    "info-area-value": "28.02 sq. km",
    "info-population-value": "700,000",
    "info-holdings-value": "19,150",
    "info-tax-collected-value": "Tk 5,12,42,483 and 78% of collection",
    "info-literacy-rate-value": "90.34%",
    "info-density-value": "25000 p/sq.km",
    "info-road-network-value": "270.0 km",
    "info-drain-network-value": "252.0 km",
    "info-public-toilets-value": "32",
    "info-waste-bins-value": "24",
    "info-municipal-facilities-value": "Market, Park, etc.",

    // Maintenance page
    "content-soon": "Content Coming Soon",

    // Welcome content
    "welcome-title": "Welcome to Kaliakair Municipality",
    "welcome-intro":
      "Established in 2003 (with its foundations set in 2001), Kaliakoir Municipality is designated as a Class A municipality, consisting of a total of 9 wards. Covering an area of 28.02 sq. km, it supports a population of approximately 700,000 people and includes 19,150 holdings.",
    "welcome-geography":
      "Geographically, Kaliakair is located at latitude 24.0750°N and longitude 90.2167°E. It is bordered by Mirzapur and Sakhipur upazilas to the north, Savar and Dhamrai upazilas to the south, Gazipur Sadar and Sreepur upazilas to the east, and Mirzapur upazila to the west.",
    "welcome-rivers":
      "The primary rivers in the area are Turag, Bangshi, and Salda. Other notable water bodies include Boali, Hawla, Ujan, and Markaj beels, along with the Goala and Betjuri canals.",
    "about-p1":
      "Kaliakair Municipality, established in 2003, stands as a testament to urban development in the Gazipur District. Our municipality has grown from its humble beginnings to become a vital center of commerce and community life.",
    "about-p2":
      "Located at a strategic point in Gazipur District, Kaliakair Municipality serves as an important hub connecting various major urban centers. The municipality's location has played a crucial role in its development as both a residential and commercial center.",
    "about-p3":
      "The jurisdiction of Kaliakair Municipality covers various important areas including residential zones, commercial districts, and industrial areas. Each ward has been carefully planned to ensure balanced development and efficient service delivery to all residents.",
    "about-p4":
      "Our municipality takes pride in its systematic approach to urban planning, with dedicated zones for commercial activities, residential areas, and industrial development. This planned development has helped maintain a balance between urban growth and environmental sustainability.",
    "about-p5":
      "The future development plans for Kaliakair Municipality focus on enhancing infrastructure, improving public services, and creating more green spaces for residents. These initiatives aim to make Kaliakair an even more livable and sustainable urban center.",
  },
  bn: {
    // Main Navigation
    "kaliakair-pourashava": "কালিয়াকৈর পৌরসভা",
    home: "হোম",
    about: "সম্পর্কে",
    employeesAndMembers: "কর্মচারী/সদস্যবৃন্দ",
    forms: "ফর্ম",
    projectsAndBudgets: "প্রকল্প/বাজেট",
    notices: "নোটিশ",
    tenders: "টেন্ডার",
    contacts: "যোগাযোগ",
    more: "অতিরিক্ত",
    tender: "টেন্ডার",
    photo_gallery: "ফটো গ্যালারি",

    // Employee List Page
    "employee-list-title": "কালিয়াকৈর পৌরসভা কর্মচারী তালিকা",
    "search-placeholder": "কর্মচারী খুঁজুন...",

    // Department Names
    "executive-officers": "নির্বাহী কর্মকর্তাবৃন্দ",
    "general-branch": "সাধারণ শাখা",
    "accounts-branch": "হিসাব শাখা",
    "assessment-branch": "কর নির্ধারণ শাখা",
    "tax-license-branch": "কর আদায় ও লাইসেন্স শাখা",
    "market-collection-branch": "বাজার আদায় শাখা",
    engineering: "পূর্ত/বিদ্যুৎ/যান্ত্রিক শাখা",
    "health-family-planning": "স্বাস্থ্য পরিবার পরিকল্পনা শাখা",
    "cleanliness-branch": "পরিচ্ছন্ন শাখা",

    // Table Headers
    "header-name": "নাম",
    "header-designation": "পদবী",
    "header-mobile": "মোবাইল",
    "header-education": "শিক্ষাগত যোগ্যতা",
    "header-joining": "যোগদানের তারিখ",

    // Common Designations
    "municipal-executive": "পৌর নির্বাহী কর্মকর্তা",
    "executive-engineer": "নির্বাহী প্রকৌশলী",
    "accounts-officer": "হিসাব রক্ষন কর্মকর্তা",
    "assistant-engineer": "সহকারী প্রকৌশলী",
    "sub-engineer-civil": "উপ-সহঃ প্রকৌশলী(সিঃ)",
    "sub-engineer-electrical": "উপ-সহঃ প্রকৌশলী (বিদ্যুৎ)",
    "chief-assistant": "প্রধান সহকারী",
    "senior-assistant": "উচ্চমান সহকারী",
    "store-keeper": "স্টোর কিপার",
    "junior-assistant": "নিম্নঃ সহকারী কাম মুদ্রাঃ",
    "jeep-driver": "জীপ চালক",
    "office-assistant": "অফিস সহায়ক",
    "office-assistant-mayor": "অফিস সহায়ক (মেয়র)",
    "night-guard": "নৈশ প্রহরী",
    "tax-assessor": "কর নির্ধারক",
    "assistant-tax-assessor": "সহকারী কর নির্ধারক",
    "tax-collector": "কর আদায়কারী",
    "license-inspector": "লাইসেন্স পরিদর্শক",
    "assistant-tax-collector": "সহকারী কর আদায়কারী",
    "assistant-license-inspector": "সহকারী লাইসেন্স পরিঃ",
    treasurer: "কোষাধ্যক্ষ",
    "accounts-assistant": "হিসাব সহকারী",
    "market-inspector": "বাজার পরিদর্শক",
    collector: "আদায়কারী",
    surveyor: "সার্ভেয়ার/সাব ওভারশিয়ার",
    "work-assistant": "কার্য-সহকারী",
    "street-light-inspector": "সড়ক বাতি পরিদর্শক",
    "road-roller-driver": "রোড রোলার চালক",
    "garbage-truck-driver": "গার্বেজ ট্রাক চালক",
    "truck-driver": "ট্রাক/ট্রাক্টর চালক",
    "mixture-operator": "মিকচার মেশিন অপাঃ",
    "pump-operator": "পাম্প চারক",
    lineman: "লাইনম্যান",
    "electrical-helper": "বিদ্যুৎ হেলপার",
    "health-assistant": "স্বাস্থ্য সহকারী",
    "vaccination-supervisor": "টিকাদান সুপারভাইজার",
    vaccinator: "টিকাদানকারী",
    "conservancy-inspector": "কঞ্জারভেন্সী ইন্সপেক্টর",
    supervisor: "সুপারভাইজার",

    // Employee Names
    "abdul-mottaleb": "আব্দুল মোত্তালেব",
    "abdullah-munsur": "আব্দুল্লাহ আল মুনছুর",
    "abu-taher": "খন্দকার আবু তাহের",
    "arif-hossen-1": "মোঃ আরিফ হোসেন-১",
    "arif-hossen-2": "মোঃ আরিফ হোসেন-২",
    "arif-hossen": "মোঃ আরিফ হোসেন",
    "arif-ul-islam": "মোঃ আরিফ-উল-ইসলাম",
    "asia-begum": "আছিয়া বেগম",
    "biplab-hossen": "মোঃ বিপ্লব হোসেন",
    "fahadil-khalid": "ফাহাদিল খালিদ",
    "forhad-hossen": "মোঃ ফরহাদ হোসেন",
    "hasina-akter": "হাসিনা আক্তার",
    "helal-uddin": "মোঃ হেলাল উদ্দিন",
    "horipad-ray": "প্রকৌ.হরিপদ রায়",
    "imrul-hasan": "মোঃ ইমরুল হাসান সুমন",
    "isdadul-haque": "মোঃ ইসদাদুল হক",
    "istiak-ahammed": "মোঃ ইস্তিয়াক আহাম্মেদ আসাদ",
    "jahangir-alam-driver": "মোঃ জাহাঙ্গীর আলম",
    "jahangir-alam": "মোঃ জাহাঙ্গীর আলম",
    "jahidul-alam": "মোঃ জাহিদুল আলম তালুকদার",
    "jhorna-akter": "ঝর্ণা আক্তার",
    "jonny-ahmed": "মোঃ জনি আহামেদ",
    "kamal-hossen": "মোঃ কামাল হোসেন",
    "khondokar-anwarul": "খন্দকার আনোয়ারুল মামুন",
    "khondokar-delowar": "খন্দকার দেলোয়ার হোসেন",
    "khorshed-alam": "খোরশেদ আলম",
    "lucky-begum": "মাহমুদা বেগম (লাকী)",
    "mahmudul-hasan": "মোঃ মাহমুদুল হাসান",
    malek: "আঃ মালেক",
    "mamun-hossen": "মোঃ মামুন হোসেন",
    "masud-rana": "মাসুদ রানা",
    "masum-hossen": "মাসুম হোসেন",
    "moazzem-hossen": "মোঃ মোয়াজ্জেম হোসেন",
    "moktar-hossen": "মোঃ মোক্তার হোসেন",
    "monser-ali": "মোঃ মোনছের আলী",
    "mosaraf-hossen": "মোঃ মোশারফ হোসেন",
    mostofa: "মোঃ মোস্তফা",
    "nasir-uddin": "নাসির উদ্দিন",
    "nasir-ul-hasan": "মোঃ নাছির উল হাসান (নান্নু)",
    "pavel-ahammed": "পাভেল আহাম্মেদ",
    "rajib-khan": "মোঃ রাজিব খান",
    "robin-hossen": "মোঃ রবিন হোসেন",
    "rowshan-akter": "রওশন আক্তার রুবী",
    "saiful-islam-tax": "মোঃ সাইফুল ইসলাম",
    "saiful-islam": "মোঃ সাইফুল ইসলাম",
    "selim-hossen": "মোঃ সেলিম হোসেন",
    "shah-alam": "মোঃ শাহ আলম জোমাদ্দার",
    "shahidul-islam": "মোঃ শহিদুল ইসলাম",
    "sharmin-akter": "শারমিন আক্তার",
    "shilpi-akter": "শিল্পী আক্তার",
    "sobur-molla": "মোঃ আব্দুস ছবুর মোল্লা",
    sohel: "মোঃ সোহেল",
    "solayman-hossen": "মোঃ সোলায়মান হোসেন",
    "sourav-hossen": "খন্দকার সৌরভ হোসেন",
    "syed-asaduzzaman": "সৈয়দ আসাদুজ্জামান",
    "tofazzal-hossen": "মোঃ তোফাজ্জল হোসেন",
    "wasim-arafat": "ওয়াসিম আরাফাত",
    "wasim-mia": "মোঃ ওয়াসিম মিয়া",

    // Info card stuff
    "find-info": "তথ্য",
    "news-header": "সাম্প্রতিক খবর",

    // Info card stuff for about page
    "info-glance": "এক নজরে পৌরসভা",
    "info-established": "প্রতিষ্ঠিত",
    "info-class": "শ্রেণী",
    "info-total-wards": "মোট ওয়ার্ড",
    "info-area": "এলাকা",
    "info-population": "জনসংখ্যা",
    "info-holdings": "হোল্ডিং সংখ্যা",
    "info-tax-collected": "আদায়কৃত কর",
    "info-literacy-rate": "সাক্ষরতার হার",
    "info-density": "ঘনত্ব",
    "info-road-network": "সড়ক নেটওয়ার্ক",
    "info-drain-network": "ড্রেন নেটওয়ার্ক",
    "info-public-toilets": "পাবলিক টয়লেট",
    "info-waste-bins": "বর্জ্য সংগ্রহ বিন",
    "info-municipal-facilities": "পৌর সুবিধাসমূহ",

    // Info card values for about page
    "info-established-value": "২০০৩ (২০০১)",
    "info-class-value": "এ",
    "info-total-wards-value": "০৯",
    "info-area-value": "২৮.০২ বর্গ কিমি",
    "info-population-value": "৭,০০,০০০",
    "info-holdings-value": "১৯,১৫০",
    "info-tax-collected-value": "টাকা ৫,১২,৪২,৪৮৩ এবং সংগ্রহের ৭৮%",
    "info-literacy-rate-value": "৯০.৩৪%",
    "info-density-value": "২৫০০০ জন/বর্গ কিমি",
    "info-road-network-value": "২৭০.০ কিমি",
    "info-drain-network-value": "২৫২.০ কিমি",
    "info-public-toilets-value": "৩২",
    "info-waste-bins-value": "২৪",
    "info-municipal-facilities-value": "বাজার, পার্ক ইত্যাদি",

    // Maintenance page
    "content-soon": "কন্টেন্ট শীঘ্রই আসছে",

    // Welcome content
    "welcome-title": "কালিয়াকৈর পৌরসভায় স্বাগতম",
    "welcome-intro":
      "২০০৩ সালে প্রতিষ্ঠিত (২০০১ সালে ভিত্তি স্থাপন), কালিয়াকৈর পৌরসভা একটি এ শ্রেণির পৌরসভা হিসেবে নির্ধারিত, যা মোট ৯টি ওয়ার্ড নিয়ে গঠিত। ২৮.০২ বর্গ কিলোমিটার এলাকা জুড়ে বিস্তৃত এই পৌরসভায় প্রায় ৭,০০,০০০ জনসংখ্যা বসবাস করে এবং ১৯,১৫০টি হোল্ডিং রয়েছে।",
    "welcome-geography":
      "ভৌগোলিকভাবে, কালিয়াকৈর ২৪.০৭৫০° উত্তর অক্ষাংশ এবং ৯০.২১৬৭° পূর্ব দ্রাঘিমাংশে অবস্থিত। এর উত্তরে মির্জাপুর ও শাখিপুর উপজেলা, দক্ষিণে সাভার ও ধামরাই উপজেলা, পূর্বে গাজীপুর সদর ও শ্রীপুর উপজেলা এবং পশ্চিমে মির্জাপুর উপজেলা দ্বারা সীমাবদ্ধ।",
    "welcome-rivers":
      "এলাকার প্রধান নদীগুলি হল তুরাগ, বংশী এবং সলদা। অন্যান্য উল্লেখযোগ্য জলাশয়গুলির মধ্যে রয়েছে বোয়ালী, হাওলা, উজান এবং মারকাজ বিল, সেই সাথে গোয়ালা ও বেতজুড়ি খাল।",
    "about-p1":
      "২০০৩ সালে প্রতিষ্ঠিত কালিয়াকৈর পৌরসভা গাজীপুর জেলার নগরায়ণের এক উদাহরণ হিসেবে দাঁড়িয়েছে। আমাদের পৌরসভা তার ক্ষুদ্র সূচনা থেকে বেড়ে উঠেছে এবং এখন বাণিজ্য ও সমাজ জীবনের একটি গুরুত্বপূর্ণ কেন্দ্র হয়ে উঠেছে।",
    "about-p2":
      "গাজীপুর জেলার একটি কৌশলগত স্থানে অবস্থিত কালিয়াকৈর পৌরসভা বিভিন্ন প্রধান শহর কেন্দ্রের সংযোগস্থল হিসেবে গুরুত্বপূর্ণ ভূমিকা পালন করে। পৌরসভার এই অবস্থানই এটিকে একটি আবাসিক ও বাণিজ্যিক কেন্দ্র হিসেবে উন্নতিতে গুরুত্বপূর্ণ ভূমিকা রেখেছে।",
    "about-p3":
      "কালিয়াকৈর পৌরসভার অধিক্ষেত্রে আবাসিক এলাকা, বাণিজ্যিক জেলা এবং শিল্পাঞ্চলসহ বিভিন্ন গুরুত্বপূর্ণ এলাকা অন্তর্ভুক্ত। প্রতিটি ওয়ার্ডকে সুষম উন্নয়ন এবং সকল বাসিন্দার কাছে কার্যকর সেবা প্রদান নিশ্চিত করার জন্য যত্নসহকারে পরিকল্পনা করা হয়েছে।",
    "about-p4":
      "আমাদের পৌরসভা নগর পরিকল্পনার প্রতি একটি সুসংগঠিত দৃষ্টিভঙ্গির জন্য গর্বিত, যেখানে বাণিজ্যিক কার্যক্রম, আবাসিক এলাকা এবং শিল্প উন্নয়নের জন্য নির্দিষ্ট অঞ্চল নির্ধারণ করা হয়েছে। এই পরিকল্পিত উন্নয়ন নগরায়ণ ও পরিবেশগত স্থিতিশীলতার মধ্যে ভারসাম্য রক্ষা করতে সহায়ক হয়েছে।",
    "about-p5":
      "ভবিষ্যতে কালিয়াকৈর পৌরসভার উন্নয়ন পরিকল্পনা অবকাঠামো উন্নয়ন, জনসেবা বৃদ্ধি, এবং বাসিন্দাদের জন্য আরও সবুজ এলাকা সৃষ্টির উপর কেন্দ্রিত। এই উদ্যোগগুলো কালিয়াকৈরকে আরও বাসযোগ্য এবং টেকসই একটি শহর কেন্দ্রে পরিণত করার লক্ষ্য নিয়েছে।",
  },
};

/// Bangla number conversion mappings
const numberMap = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

// Core conversion functions
function convertToBanglaNumbers(str) {
  if (!str) return "";
  return str.toString().replace(/[0-9]/g, (match) => numberMap[match] || match);
}

function convertToBanglaDate(dateStr) {
  if (!dateStr || dateStr === "-") return "-";
  return convertToBanglaNumbers(dateStr);
}

function convertToBanglaMobile(mobileStr) {
  if (!mobileStr) return "";
  return convertToBanglaNumbers(mobileStr);
}

// Function to get current language
function getCurrentLanguage() {
  return localStorage.getItem("selectedLanguage") || "en";
}

// Function to update language buttons
function updateLanguageButtons(selectedLang) {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === selectedLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Function to update page content with translations and number conversions
function updatePageContent(language) {
  // Update translations
  for (const [key, value] of Object.entries(translations[language])) {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach((element) => {
      if (
        element.tagName.toLowerCase() === "input" &&
        element.hasAttribute("placeholder")
      ) {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    });
  }

  // Handle number conversions for Bangla
  if (language === "bn") {
    // Convert dates
    document.querySelectorAll('[data-convert="date"]').forEach((element) => {
      element.textContent = convertToBanglaDate(
        element.getAttribute("data-original")
      );
    });

    // Convert mobile numbers
    document.querySelectorAll('[data-convert="mobile"]').forEach((element) => {
      element.textContent = convertToBanglaMobile(
        element.getAttribute("data-original")
      );
    });

    // Convert general numbers
    document.querySelectorAll('[data-convert="number"]').forEach((element) => {
      element.textContent = convertToBanglaNumbers(
        element.getAttribute("data-original")
      );
    });
  } else {
    // Restore original values
    document.querySelectorAll("[data-convert]").forEach((element) => {
      const originalValue = element.getAttribute("data-original");
      if (originalValue) {
        element.textContent = originalValue;
      }
    });
  }
}

// Initialize language switcher
function initializeLanguageSwitcher() {
  // Store original numeric values
  document.querySelectorAll("[data-convert]").forEach((element) => {
    if (!element.getAttribute("data-original")) {
      element.setAttribute("data-original", element.textContent);
    }
  });

  // Set initial language
  const currentLang = getCurrentLanguage();
  updateLanguageButtons(currentLang);
  updatePageContent(currentLang);

  // Add click event listeners to language buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute("data-lang");
      localStorage.setItem("selectedLanguage", selectedLang);
      updateLanguageButtons(selectedLang);
      updatePageContent(selectedLang);
    });
  });
}

// Initialize when document is loaded
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initializeLanguageSwitcher, 100);
});

// Export functions for external use if needed
window.translateUtils = {
  convertToBanglaNumbers,
  convertToBanglaDate,
  convertToBanglaMobile,
  getCurrentLanguage,
  updatePageContent,
};
