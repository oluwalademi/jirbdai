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
    url: "/journal-policies",
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
