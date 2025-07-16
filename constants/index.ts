export enum UserRole {
  Research = "Research Paper",
  Editor = "Article",
  Viewer = "viewer",
}

export const navItems = [
  {
    name: "Browse",
    icon: "/assets/icons/dashboard.svg",
    url: "/browse",
  },
  {
    name: "About",
    icon: "/assets/icons/documents.svg",
    url: "/about",
  },
  {
    name: "Sign in",
    icon: "/assets/icons/images.svg",
    url: "https://jirbdai.com.ng/index.php/jirbdai/login",
  },
  {
    name: "Register",
    icon: "/assets/icons/images.svg",
    url: "https://jirbdai.com.ng/index.php/jirbdai/user/register",
  },
  {
    name: "Editorial Team",
    icon: "/assets/icons/images.svg",
    url: "/editorial-team",
  },
  {
    name: "Publications",
    icon: "/assets/icons/images.svg",
    url: "/publications",
  },
  {
    name: "Journal Policies",
    icon: "/assets/icons/images.svg",
    url: "",
    subUrl: [
      {
        name: "Editorial Policies",
        url: "/journal-policies/editorial-policies",
      },
      {
        name: "AI Policy",
        url: "/journal-policies/other-policies#ai-policy",
      },
      {
        name: "Editorial Review Process",
        url: "/journal-policies/other-policies#editorial-review-process",
      },
      {
        name: "Peer Review Process",
        url: "/journal-policies/other-policies#peer-review-process",
      },
      {
        name: "Publication Ethics",
        url: "/journal-policies/other-policies#publication-ethics",
      },
      {
        name: "Research Article Guideline",
        url: "/journal-policies/other-policies#research-article-guideline",
      },
    ],
  },
  {
    name: "Conference",
    icon: "/assets/icons/images.svg",
    url: "/conference",
  },
];

export const navBoardTeam = [
  {
    name: "Editor-In-Chief",
    icon: "/assets/icons/dashboard.svg",
    url: "#editor-in-chief",
  },
  {
    name: "Managing Editor",
    icon: "/assets/icons/documents.svg",
    url: "#managing-editor",
  },
  {
    name: "Editors",
    icon: "/assets/icons/images.svg",
    url: "#editors",
  },
  {
    name: "Contributing Editors",
    icon: "/assets/icons/images.svg",
    url: "#contributing-editors",
  },
  {
    name: "Editorial & Advisory Board",
    icon: "/assets/icons/images.svg",
    url: "#editorial-&-advisory-board",
  },
];
export const navBoardTeamPerson = [
  {
    name: "Editor in Chief",
    members: [
      {
        name: "Prof. Peter Ogedebe",
        university: "",
        img: "peter_ogedebe.svg",
        country: "",
      },
    ],
  },
  {
    name: "Managing Editor",
    members: [
      {
        name: "Oluwatobi Noah Akande (PhD)",
        university: "Nile University",
        img: "noah_oluwatobi_akande.svg",
        country: "Nigeria",
      },
    ],
  },
  {
    name: "Editors",
    members: [
      {
        name: "Prof. James Ogunleye",
        university: "Middlesex University",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Dr. Rislan Abdulazeez Kanya",
        university: "Baze University Abuja",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Mathias Fonkam",
        university: "American University Yola",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Nasir Farouk",
        university: "Sule Lamido University",
        img: "",
        country: "Nigeria",
      },
    ],
  },
  {
    name: "Contributing Editors",
    members: [
      {
        name: "Dr. Dominique Heger",
        university: "DHTechnologies & Data Nubes",
        img: "",
        country: "USA",
      },
      {
        name: "Dr. Appolo Tankeh",
        university: "IBM",
        img: "",
        country: "USA",
      },
      {
        name: "Dr. Alain Biem",
        university: "Opera Solutions",
        img: "",
        country: "USA",
      },
      {
        name: "Professor Elizabeth Onwuka",
        university: "Federal University of Technology, Minna",
        img: "",
        country: "Nigeria",
      },
    ],
  },
  {
    name: "Editorial & Advisory Board",
    members: [
      {
        name: "Prof. Ibrahim Katampe",
        university: "Central State University, Ohio",
        img: "",
        country: "USA",
      },
      {
        name: "Prof. Mohammad Hammawa",
        university: "Baze University",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Osita Agbu",
        university: "Baze University",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Nurudden Labaran Tanko",
        university: "Baze University",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Hilary Inyang",
        university: "University of Massachusetts Lowell",
        img: "",
        country: "USA",
      },
      {
        name: "Dr. Alice Good",
        university: "University of Portsmouth",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Prof. Bader Alanzi, Program Director",
        university: "MIT / University of Kuwait",
        img: "",
        country: "Kuwait",
      },
      {
        name: "Dr. Salihu Dasuki",
        university: "Sheffield University",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Prof. Sirajul Islam",
        university: "Orebro University",
        img: "",
        country: "Sweden",
      },
      {
        name: "Dr. Boris Zibitsker",
        university: "BEZNext, Chicago",
        img: "",
        country: "USA",
      },
      {
        name: "Dr. Deryn Graham",
        university: "University of Greenwich",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Dr. Irina Neaga",
        university: "University of Plymouth",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Professor Ezendu Ariwa",
        university: "University of Bedfordshire",
        img: "",
        country: "United Kingdom",
      },
      {
        name: "Raj Datta, MBA",
        university: "IBM",
        img: "",
        country: "USA",
      },
      {
        name: "Dr. Moses Effiong Ekpenyong",
        university: "University of Uyo",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Prof. Saidu Oyarekhua OSENI",
        university: "Obafemi Awolowo University, Ile-Ife",
        img: "",
        country: "Nigeria",
      },
      {
        name: "Dr. Sam Takavarasha",
        university: "Women's University in Africa",
        img: "",
        country: "Zimbabwe",
      },
      {
        name: "Dr. Festus Adebor",
        university: "University of Sharjah",
        img: "",
        country: "UAE",
      },
    ],
  },
];

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const sorTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const fieldsCovering = [
  {
    srcLabel: "innovation-in-digital-tech.png",
    heading: "Innovation in Digital Teaching, Learning and Pedagogy",
    description:
      "This field examines how emerging digital technologies are reshaping the methods, tools, and environments of education. It focuses on innovative pedagogical approaches, including blended learning, e-learning platforms, gamification, virtual reality (VR), and artificial intelligence in instruction. The field explores how these innovations enhance learner engagement, personalization, accessibility, and teaching effectiveness. It also considers institutional strategies for integrating digital pedagogy, supporting educator development, and addressing equity in digitally-mediated learning environments.",
  },
  {
    srcLabel: "big-data-analytics.png",
    heading: "Big Data Analytics",
    description:
      "Big Data Analytics investigates the collection, processing, interpretation, and application of vast and complex datasets to extract actionable insights. This field emphasizes tools and methodologies such as machine learning, predictive modeling, and statistical analysis to support institutional decision-making and innovation. Research in this area explores the role of data in understanding trends, optimizing performance, evaluating policies, and enhancing outcomes across education, business, healthcare, and governance, with attention to ethics, privacy, and data governance.",
  },
  {
    srcLabel: "management-business-and-entre.png",
    heading: "Management, Business, Entrepreneurship and Innovation",
    description:
      "This area explores the intersection of leadership, organizational development, entrepreneurship, and innovation in modern institutions. It includes studies on strategic management, business modeling, organizational agility, startup ecosystems, and innovation-driven enterprise. The field emphasizes how institutions and businesses can adapt to change, leverage innovation for growth, foster a culture of entrepreneurship, and navigate complex market environments. It also considers sustainable development, digital transformation, and the integration of emerging technologies in business operations.",
  },
  {
    srcLabel: "egovernment-ebusiness-ehealth.png",
    heading:
      "eGovernment, eBusiness, eHealth, & Other ICT Sectoral Applications",
    description:
      "This field covers the application of Information and Communication Technologies (ICTs) across various sectors, including government, business, and health. It includes research on eGovernment platforms for citizen engagement and transparency, eBusiness models for digital commerce, eHealth innovations for healthcare delivery, and ICT tools in agriculture, energy, and education. The field emphasizes the design, implementation, and policy implications of sector-specific digital solutions that improve efficiency, accessibility, inclusiveness, and service innovation in institutional settings.",
  },
  {
    srcLabel: "students-success-wellbeing.png",
    heading: "Student Success and Wellbeing",
    description:
      "This field focuses on the academic, social, emotional, and psychological factors that influence student achievement and development. It includes research on institutional policies, support systems, learning environments, mentoring, mental health services, and interventions that promote student engagement and resilience. The goal is to understand how institutions can create inclusive and supportive ecosystems that foster persistence, equity, and holistic development, while addressing challenges such as stress, burnout, digital overload, and academic pressure.",
  },
  {
    srcLabel: "computing-information-communications.png",
    heading: "Computing, Information and Communications Technologies",
    description:
      "This field explores the design, development, and application of computing and ICT systems that support innovation across sectors. Topics include hardware and software systems, network infrastructures, cybersecurity, cloud computing, and emerging technologies such as quantum computing and edge computing. The field addresses both theoretical and applied research aimed at improving performance, scalability, and user experience in digital systems. It also considers the social, ethical, and regulatory dimensions of pervasive computing and digital transformation.",
  },
  {
    srcLabel: "information-systems-software.png",
    heading: "Information Systems, Software Engineering and Management",
    description:
      "This field investigates the analysis, design, implementation, and maintenance of software and information systems within institutional contexts. It covers software engineering principles, systems architecture, project management, agile methodologies, and systems integration. Research also explores information governance, system usability, enterprise systems, and the role of software in organizational efficiency and digital innovation. Emphasis is placed on how institutions can strategically manage software and IT infrastructure to meet evolving operational and user needs.",
  },
  {
    srcLabel: "graduate-employability.png",
    heading: "Graduate Employability and the Future of Work",
    description:
      "This field explores the evolving landscape of work and how educational institutions prepare graduates for success in dynamic labor markets. Topics include curriculum relevance, work-integrated learning, digital and soft skills development, industry partnerships, and career readiness programs. It also investigates trends such as remote work, automation, the gig economy, and lifelong learning. The field highlights strategies that bridge the gap between education and employment, fostering adaptability, innovation, and long-term employability for graduates.",
  },
];
