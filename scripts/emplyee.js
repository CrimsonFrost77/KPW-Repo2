//where the employee table will go
const tableContainer = document.getElementById("employees-table");

const employeeTable = [
  {
    branchHeading: {
      value: "Executive Officers",
      dataTranslate: "executive-officers",
    },
    employees: [
      {
        name: {
          value: "Md. Jahidul Alam Talukdar",
          dataTranslate: "jahidul-alam",
        },
        designation: {
          value: "Municipal Executive Officer",
          dataTranslate: "municipal-executive",
        },
        mobile: {
          value: "01704808086",
          dataOriginal: "01704808086",
        },
        education: "M.Sc (Fisheries)",
        joinDate: {
          value: "01.06.2023",
          dataOriginal: "01.06.2023",
        },
      },
      {
        name: {
          value: "Engr. Horipad Ray",
          dataTranslate: "horipad-ray",
        },
        designation: {
          value: "Executive Engineer",
          dataTranslate: "executive-engineer",
        },
        mobile: {
          value: "01714424343",
          dataOriginal: "01714424343",
        },
        education: "B.Sc Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Arif-Ul-Islam",
          dataTranslate: "arif-ul-islam",
        },
        designation: {
          value: "Accounts Officer",
          dataTranslate: "accounts-officer",
        },
        mobile: {
          value: "01833718433",
          dataOriginal: "01833718433",
        },
        education: "B.Com",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Abdul Mottaleb",
          dataTranslate: "abdul-mottaleb",
        },
        designation: {
          value: "Assistant Engineer",
          dataTranslate: "assistant-engineer",
        },
        mobile: {
          value: "01913340033",
          dataOriginal: "01913340033",
        },
        education: "B.Sc Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Mahmudul Hasan",
          dataTranslate: "mahmudul-hasan",
        },
        designation: {
          value: "Sub-Assistant Engineer (Civil)",
          dataTranslate: "sub-engineer-civil",
        },
        mobile: {
          value: "01766458181",
          dataOriginal: "01766458181",
        },
        education: "B.Sc Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Mahmuda Begum (Lucky)",
          dataTranslate: "lucky-begum",
        },
        designation: {
          value: "Sub-Assistant Engineer (Electrical)",
          dataTranslate: "sub-engineer-electrical",
        },
        mobile: {
          value: "01717642149",
          dataOriginal: "01717642149",
        },
        education: "Diploma Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Biplab Hossen",
          dataTranslate: "biplab-hossen",
        },
        designation: {
          value: "Sub-Assistant Engineer (Civil)",
          dataTranslate: "sub-engineer-civil",
        },
        mobile: {
          value: "01984232103",
          dataOriginal: "01984232103",
        },
        education: "Diploma Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "General Branch",
      dataTranslate: "general-branch",
    },
    employees: [
      {
        name: {
          value: "Nasir Uddin",
          dataTranslate: "nasir-uddin",
        },
        designation: {
          value: "Chief Assistant",
          dataTranslate: "chief-assistant",
        },
        mobile: {
          value: "01724936359",
          dataOriginal: "01724936359",
        },
        education: "M.Com",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Abdus Sobur Molla",
          dataTranslate: "sobur-molla",
        },
        designation: {
          value: "Senior Assistant",
          dataTranslate: "senior-assistant",
        },
        mobile: {
          value: "01721620951",
          dataOriginal: "01721620951",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Moazzem Hossen",
          dataTranslate: "moazzem-hossen",
        },
        designation: {
          value: "Store Keeper",
          dataTranslate: "store-keeper",
        },
        mobile: {
          value: "01728010916",
          dataOriginal: "01728010916",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Jahangir Alam",
          dataTranslate: "jahangir-alam",
        },
        designation: {
          value: "Senior Assistant",
          dataTranslate: "senior-assistant",
        },
        mobile: {
          value: "01723664344",
          dataOriginal: "01723664344",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Saiful Islam",
          dataTranslate: "saiful-islam",
        },
        designation: {
          value: "Junior Assistant cum Typist",
          dataTranslate: "junior-assistant",
        },
        mobile: {
          value: "01772541685",
          dataOriginal: "01772541685",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Jahangir Alam",
          dataTranslate: "jahangir-alam-driver",
        },
        designation: {
          value: "Senior Assistant",
          dataTranslate: "senior-assistant",
        },
        mobile: {
          value: "01788617207",
          dataOriginal: "01788617207",
        },
        education: "Class 10",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Masud Rana",
          dataTranslate: "masud-rana",
        },
        designation: {
          value: "Jeep Driver",
          dataTranslate: "jeep-driver",
        },
        mobile: {
          value: "01758730325",
          dataOriginal: "01758730325",
        },
        education: "S.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Sharmin Akter",
          dataTranslate: "sharmin-akter",
        },
        designation: {
          value: "Office Assistant (Mayor)",
          dataTranslate: "office-assistant-mayor",
        },
        mobile: {
          value: "01714639993",
          dataOriginal: "01714639993",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Shah Alam Jomaddar",
          dataTranslate: "shah-alam",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01720363374",
          dataOriginal: "01720363374",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Abdul Mannan",
          dataTranslate: "abdul-mannan",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01734000023",
          dataOriginal: "01734000023",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Solayman Hossen",
          dataTranslate: "solayman-hossen",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01712851355",
          dataOriginal: "01712851355",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Abdullah Al Munsur",
          dataTranslate: "abdullah-munsur",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01776634486",
          dataOriginal: "01776634486",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Khondokar Delowar Hossen",
          dataTranslate: "khondokar-delowar",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01724088109",
          dataOriginal: "01724088109",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Forhad Hossen",
          dataTranslate: "forhad-hossen",
        },
        designation: {
          value: "Night Guard",
          dataTranslate: "night-guard",
        },
        mobile: {
          value: "01818469351",
          dataOriginal: "01818469351",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Mamun Hossen",
          dataTranslate: "mamun-hossen",
        },
        designation: {
          value: "Night Guard",
          dataTranslate: "night-guard",
        },
        mobile: {
          value: "01727267092",
          dataOriginal: "01727267092",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Shilpi Akter",
          dataTranslate: "shilpi-akter",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01721523600",
          dataOriginal: "01721523600",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Asia Begum",
          dataTranslate: "asia-begum",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01742856623",
          dataOriginal: "01742856623",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Tax Assessment Branch",
      dataTranslate: "tax-assessment-branch",
    },
    employees: [
      {
        name: {
          value: "Khondokar Anwarul Mamun",
          dataTranslate: "khondokar-anwarul",
        },
        designation: {
          value: "Tax Assessor",
          dataTranslate: "tax-assessor",
        },
        mobile: {
          value: "01818965702",
          dataOriginal: "01818965702",
        },
        education: "B.S.S",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Selim Hossen",
          dataTranslate: "selim-hossen",
        },
        designation: {
          value: "Assistant Tax Assessor",
          dataTranslate: "assistant-tax-assessor",
        },
        mobile: {
          value: "01766632271",
          dataOriginal: "01766632271",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Tax Collection and License Branch",
      dataTranslate: "tax-license-branch",
    },
    employees: [
      {
        name: {
          value: "Md. Tofazzal Hossen",
          dataTranslate: "tofazzal-hossen",
        },
        designation: {
          value: "Tax Collector",
          dataTranslate: "tax-collector",
        },
        mobile: {
          value: "01815485793",
          dataOriginal: "01815485793",
        },
        education: "B.Com (Honours)",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Abdus Sattar",
          dataTranslate: "abdus-sattar",
        },
        designation: {
          value: "License Inspector",
          dataTranslate: "license-inspector",
        },
        mobile: {
          value: "01818192512",
          dataOriginal: "01818192512",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Saiful Islam",
          dataTranslate: "saiful-islam-tax",
        },
        designation: {
          value: "Assistant Tax Collector",
          dataTranslate: "assistant-tax-collector",
        },
        mobile: {
          value: "01819473068",
          dataOriginal: "01819473068",
        },
        education: "M.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Shahidul Islam",
          dataTranslate: "shahidul-islam",
        },
        designation: {
          value: "Assistant Tax Collector",
          dataTranslate: "assistant-tax-collector",
        },
        mobile: {
          value: "01718434806",
          dataOriginal: "01718434806",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Mosaraf Hossen",
          dataTranslate: "mosaraf-hossen",
        },
        designation: {
          value: "Assistant Tax Collector",
          dataTranslate: "assistant-tax-collector",
        },
        mobile: {
          value: "01719867582",
          dataOriginal: "01719867582",
        },
        education: "B.S.S",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Robin Hossen",
          dataTranslate: "robin-hossen",
        },
        designation: {
          value: "Assistant License Inspector",
          dataTranslate: "assistant-license-inspector",
        },
        mobile: {
          value: "01794799156",
          dataOriginal: "01794799156",
        },
        education: "B.S.S",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Accounts Branch",
      dataTranslate: "accounts-branch",
    },
    employees: [
      {
        name: {
          value: "Md. Isdadul Haque",
          dataTranslate: "isdadul-haque",
        },
        designation: {
          value: "Treasurer",
          dataTranslate: "treasurer",
        },
        mobile: {
          value: "01721612056",
          dataOriginal: "01721612056",
        },
        education: "B.Com",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Fahadil Khalid",
          dataTranslate: "fahadil-khalid",
        },
        designation: {
          value: "Accounts Assistant",
          dataTranslate: "accounts-assistant",
        },
        mobile: {
          value: "01679522262",
          dataOriginal: "01679522262",
        },
        education: "B.Com",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Market Collection Branch",
      dataTranslate: "market-collection-branch",
    },
    employees: [
      {
        name: {
          value: "Md. Arif Hossen",
          dataTranslate: "arif-hossen",
        },
        designation: {
          value: "Market Inspector",
          dataTranslate: "market-inspector",
        },
        mobile: {
          value: "01719603521",
          dataOriginal: "01719603521",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Imrul Hasan Sumon",
          dataTranslate: "imrul-hasan",
        },
        designation: {
          value: "Collector",
          dataTranslate: "collector",
        },
        mobile: {
          value: "01843590723",
          dataOriginal: "01843590723",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Civil/Electrical/Mechanical Branch",
      dataTranslate: "engineering",
    },
    employees: [
      {
        name: {
          value: "Md. Jonny Ahmed",
          dataTranslate: "jonny-ahmed",
        },
        designation: {
          value: "Surveyor/Sub-Overseer",
          dataTranslate: "surveyor",
        },
        mobile: {
          value: "01722444437",
          dataOriginal: "01722444437",
        },
        education: "Diploma Engineering",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Nasir Ul Hasan (Nannu)",
          dataTranslate: "nasir-ul-hasan",
        },
        designation: {
          value: "work-assistant",
          dataTranslate: "Work Assistant",
        },
        mobile: {
          value: "01818420883",
          dataOriginal: "01818420883",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Rajib Khan",
          dataTranslate: "rajib-khan",
        },
        designation: {
          value: "Work Assistant",
          dataTranslate: "work-assistant",
        },
        mobile: {
          value: "01734881283",
          dataOriginal: "01734881283",
        },
        education: "S.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Ferdous Ur Rahman",
          dataTranslate: "ferdous-ur-rahman",
        },
        designation: {
          value: "Work Assistant",
          dataTranslate: "work-assistant",
        },
        mobile: {
          value: "01821525620",
          dataOriginal: "01821525620",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Istiak Ahammed Asad",
          dataTranslate: "istiak-ahammed",
        },
        designation: {
          value: "Work Assistant",
          dataTranslate: "work-assistant",
        },
        mobile: {
          value: "01715280522",
          dataOriginal: "01715280522",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Arif Hossen",
          dataTranslate: "arif-hossen",
        },
        designation: {
          value: "Street Light Inspector",
          dataTranslate: "street-light-inspector",
        },
        mobile: {
          value: "01729545765",
          dataOriginal: "01729545765",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Monser Ali",
          dataTranslate: "monser-ali",
        },
        designation: {
          value: "Road Roller Driver",
          dataTranslate: "road-roller-driver",
        },
        mobile: {
          value: "01712782941",
          dataOriginal: "01712782941",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "A. Malek",
          dataTranslate: "malek",
        },
        designation: {
          value: "Road Roller Driver",
          dataTranslate: "road-roller-driver",
        },
        mobile: {
          value: "01843746925",
          dataOriginal: "01843746925",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Anowar Hossen",
          dataTranslate: "anwar-hossain",
        },
        designation: {
          value: "Garbage Truck Driver",
          dataTranslate: "garbage-truck-driver",
        },
        mobile: {
          value: "01715912224",
          dataOriginal: "01715912224",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Sohel",
          dataTranslate: "sohel",
        },
        designation: {
          value: "Garbage Truck Driver",
          dataTranslate: "garbage-truck-driver",
        },
        mobile: {
          value: "01727640888",
          dataOriginal: "01727640888",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Masum Hossen",
          dataTranslate: "masum-hossen",
        },
        designation: {
          value: "Truck/Tractor Driver",
          dataTranslate: "truck-driver",
        },
        mobile: {
          value: "01870462281",
          dataOriginal: "01870462281",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Wasim Mia",
          dataTranslate: "wasim-mia",
        },
        designation: {
          value: "Mixture Machine Operator",
          dataTranslate: "mixture-operator",
        },
        mobile: {
          value: "01727513058",
          dataOriginal: "01727513058",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Pavel Ahammed",
          dataTranslate: "pavel-ahammed",
        },
        designation: {
          value: "Pump Operator",
          dataTranslate: "pump-operator",
        },
        mobile: {
          value: "01707622961",
          dataOriginal: "01707622961",
        },
        education: "S.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Mostofa",
          dataTranslate: "mostofa",
        },
        designation: {
          value: "Pump Operator",
          dataTranslate: "pump-operator",
        },
        mobile: {
          value: "01793760227",
          dataOriginal: "01793760227",
        },
        education: "S.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Khorshed Alam",
          dataTranslate: "khorshed-alam",
        },
        designation: {
          value: "Lineman",
          dataTranslate: "lineman",
        },
        mobile: {
          value: "01729604062",
          dataOriginal: "01729604062",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Syed Asaduzzaman",
          dataTranslate: "syed-asaduzzaman",
        },
        designation: {
          value: "Electrical Helper",
          dataTranslate: "electrical-helper",
        },
        mobile: {
          value: "01712532492",
          dataOriginal: "01712532492",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Kamal Hossen",
          dataTranslate: "kamal-hossen",
        },
        designation: {
          value: "Electrical Helper",
          dataTranslate: "electrical-helper",
        },
        mobile: {
          value: "01713504423",
          dataOriginal: "01713504423",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Helal Uddin",
          dataTranslate: "helal-uddin",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01813591390",
          dataOriginal: "01813591390",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Arif Hossen-2",
          dataTranslate: "arif-hossen-2",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01923730631",
          dataOriginal: "01923730631",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Abdus Sobur",
          dataTranslate: "sobur-molla",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01739895180",
          dataOriginal: "01739895180",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Health and Family Planning Branch",
      dataTranslate: "health-family-planning",
    },
    employees: [
      {
        name: {
          value: "Wasim Arafat",
          dataTranslate: "wasim-arafat",
        },
        designation: {
          value: "Health Assistant",
          dataTranslate: "health-assistant",
        },
        mobile: {
          value: "01782719244",
          dataOriginal: "01782719244",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Jhorna Akter",
          dataTranslate: "jhorna-akter",
        },
        designation: {
          value: "Vaccination Supervisor",
          dataTranslate: "vaccination-supervisor",
        },
        mobile: {
          value: "01718912970",
          dataOriginal: "01718912970",
        },
        education: "S.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Moktar Hossen",
          dataTranslate: "moktar-hossen",
        },
        designation: {
          value: "Vaccination Supervisor",
          dataTranslate: "vaccination-supervisor",
        },
        mobile: {
          value: "01712232620",
          dataOriginal: "01712232620",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Hasina Akter",
          dataTranslate: "hasina-akter",
        },
        designation: {
          value: "Vaccinator",
          dataTranslate: "vaccinator",
        },
        mobile: {
          value: "01720638010",
          dataOriginal: "01720638010",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Khondokar Sourav Hossen",
          dataTranslate: "sourav-hossen",
        },
        designation: {
          value: "Vaccinator",
          dataTranslate: "vaccinator",
        },
        mobile: {
          value: "01720156262",
          dataOriginal: "01720156262",
        },
        education: "H.S.C",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
  {
    branchHeading: {
      value: "Cleanliness Branch",
      dataTranslate: "cleanliness-branch",
    },
    employees: [
      {
        name: {
          value: "Rowshan Akter Ruby",
          dataTranslate: "rowshan-akter",
        },
        designation: {
          value: "Conservancy Inspector",
          dataTranslate: "conservancy-inspector",
        },
        mobile: {
          value: "01726621446",
          dataOriginal: "01726621446",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Khondokar Abu Taher",
          dataTranslate: "abu-taher",
        },
        designation: {
          value: "Supervisor",
          dataTranslate: "supervisor",
        },
        mobile: {
          value: "01915400413",
          dataOriginal: "01915400413",
        },
        education: "B.A",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
      {
        name: {
          value: "Md. Arif Hossen-1",
          dataTranslate: "arif-hossen-1",
        },
        designation: {
          value: "Office Assistant",
          dataTranslate: "office-assistant",
        },
        mobile: {
          value: "01767342535",
          dataOriginal: "01767342535",
        },
        education: "Class 8",
        joinDate: {
          value: "-",
          dataOriginal: "-",
        },
      },
    ],
  },
];

//string with header to store the html
let html = `<h1
        id="kaliakair-municipality-employee-list"
        data-translate="employee-list-title"
      >
        Kaliakair Municipality Employee List
      </h1>`;

//loop through the employeeTable array and create the html for each department
employeeTable.forEach((element, index) => {
  html += `
        <div class="department">
          <div
            class="department-header"
            data-translate="${element.branchHeading.dataTranslate}"
          >
            ${element.branchHeading.value}
          </div>
          <table>
            <thead>
              <tr>
                <th data-translate="header-name">Name</th>
                <th data-translate="header-designation">Designation</th>
                <th data-translate="header-mobile">Mobile</th>
                <th data-translate="header-education">Education</th>
                <th data-translate="header-joining">Joining Date</th>
              </tr>
            </thead>
            <tbody>
          `;
  //loop through the employees array and create the html for each employee
  element.employees.forEach((employee) => {
    html += `
              <tr>
                <td data-translate="${employee.name.dataTranslate}">
                  ${employee.name.value}
                </td>
                <td data-translate="${employee.designation.dataTranslate}">
                  ${employee.designation.value}
                </td>
                <td data-convert="mobile" data-original="${employee.mobile.dataOriginal}">
                  ${employee.mobile.value}
                </td>
                <td>${employee.education}</td>
                <td data-original="${employee.joinDate.dataOriginal}">
                  ${employee.joinDate.value}
                </td>
              </tr>
            `;
  });
  //close the table and department div
  html += `
            </tbody>
          </table>
        </div>
      `;
});

//add the html to the table container
tableContainer.innerHTML = html;
