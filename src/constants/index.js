import {
  // airbnb,
  // binance,
  // coinbase,
  // dropbox,
  // nitk,
  // cluboard,
  // cash_flow,
  // freadom,
  // bank,
  // gdsc,
  // iris,
  // ecell,
  // genesis,
  // graphql,
  // portfolio,
  // publiclab,
  // zulip,
  // cdc,
  // chargeswap,
  // placeicon,
  // recruitment,
  // huntly,
  // oracle,
  tgitlogo,
  smartthink,
  consortium,
  youwin,
  unifly,
  ignitor,
  crm,
  aiub,
  gaps,
  ned,
  skytouch,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
  AiFillFacebook,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiCsharp,
  SiPhp,
  SiLaravel,
  SiMongodb,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

import { FaHardHat } from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";

import { IoIosNotificationsOutline } from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/drive/folders/1ZR_IuIg01lj40v2On4stpYEKRo0Hlz6A?usp=drive_link";
export const repoLink = "https://github.com/diponkorcs";

export const callToAction =
  "https://www.linkedin.com/in/diponkor-chandra-shil-736542198/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: aiub,
    title: "American International University, Bangladesh",
    degree: "Bachelor of Science",
    department: "Computer Science and Engineering",
    duration: "May 2018 - Apr 2022",
    content1: "Major: Software Engineering",
    // content2: "Minor: Information Technology",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: SiCsharp,
        name: "C#",
      },
      {
        id: "pl-3",
        icon: FaJava,
        name: "Java",
      },
      {
        id: "pl-1",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },

      {
        id: "pl-8",
        icon: SiPhp,
        name: "PHP",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "f-3",
        icon: TbBrandReactNative,
        name: "React Native",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-8",
        icon: SiLaravel,
        name: "Laravel",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },

      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "TGIT, Bangladesh",
    logo: tgitlogo,
    link: "https://tgitbangladesh.com/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Feb 2022 - Apr 2022",
        content: [
          {
            text: "Worked as a part of the Web Development team as a frontend developer.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "TGIT, Bangladesh",
    logo: tgitlogo,
    link: "https://tgitbangladesh.com/",
    positions: [
      {
        title: "Junior Software Developer",
        duration: "May 2022 - October 2022 (Part Time)",
        content: [
          {
            text: "Worked as a part of the web development team as a frontend developer specialized for ReactJS.",
            link: "",
          },
        ],
      },
      {
        title: "Software Developer",
        duration: "October 2022 - Present (Full Time)",
        content: [
          {
            text: "Working in MERN Stack, specialized in ReactJS. Also have experience working in native application development.",
            link: "",
          },
        ],
      },
    ],
  },
];

// export const openSourceContributions = [
//   {
//     id: "os-1",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "pull-request",
//     status: "merged",
//     title:
//       "Move _wiki to old table look, common template for email and settings digest only",
//     link: "https://github.com/publiclab/plots2/pull/10731",
//     number: "#10731",
//     date: "Feb 24 2022",
//     linesAdded: "101",
//     linesDeleted: "48",
//   },
//   {
//     id: "os-2",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "pull-request",
//     status: "merged",
//     title: "Combine templates for email digest and settings digest",
//     link: "https://github.com/publiclab/plots2/pull/10681",
//     number: "#10681",
//     date: "Feb 9 2022",
//     linesAdded: "86",
//     linesDeleted: "106",
//   },
//   {
//     id: "os-3",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "pull-request",
//     status: "merged",
//     title: "Fix reverse chronological sorting on inline grids",
//     link: "https://github.com/publiclab/plots2/pull/11114",
//     number: "#11114",
//     date: "May 4 2022",
//     linesAdded: "1",
//     linesDeleted: "1",
//   },
//   {
//     id: "os-4",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "pull-request",
//     status: "merged",
//     title: "style: Make post page footer responsive",
//     link: "https://github.com/publiclab/plots2/pull/10634",
//     number: "#10634",
//     date: "Feb 24 2022",
//     linesAdded: "64",
//     linesDeleted: "8",
//   },
//   {
//     id: "os-5",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Typos in Translation_System.md",
//     link: "https://github.com/publiclab/plots2/issues/11120",
//     number: "#11120",
//     date: "May 6 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-6",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Missing translations on layouts/_header.html.erb",
//     link: "https://github.com/publiclab/plots2/issues/11115",
//     number: "#11115",
//     date: "May 4 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-7",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Missing translation of 'This is part of' on _tagging.html.erb",
//     link: "https://github.com/publiclab/plots2/issues/10986",
//     number: "#10986",
//     date: "Apr 8 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-8",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Wrong closing heading tag in _digest.html.erb",
//     link: "https://github.com/publiclab/plots2/issues/10985",
//     number: "#10985",
//     date: "Apr 8 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-9",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Add class to center wiki.scraped_image in wikis template",
//     link: "https://github.com/publiclab/plots2/issues/10797",
//     number: "#10797",
//     date: "Mar 18 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-10",
//     organisation: "PublicLab",
//     logo: publiclab,
//     repo: "plots2",
//     type: "issue",
//     status: "closed",
//     title: "Images on /wiki are not center aligned",
//     link: "https://github.com/publiclab/plots2/issues/10755",
//     number: "#10755",
//     date: "Mar 4 2022",
//     linesAdded: "",
//     linesDeleted: "",
//   },
//   {
//     id: "os-11",
//     organisation: "Zulip",
//     logo: zulip,
//     repo: "zulip",
//     type: "pull-request",
//     status: "merged",
//     title: "invitations: Check invitation from a now-deactivated user.",
//     link: "https://github.com/zulip/zulip/pull/20206",
//     number: "#20206",
//     date: "Dec 30 2021",
//     linesAdded: "31",
//     linesDeleted: "1",
//   },
//   {
//     id: "os-12",
//     organisation: "Zulip",
//     logo: zulip,
//     repo: "zulip",
//     type: "pull-request",
//     status: "merged",
//     title: "invitations: Check invitation from a now-deactivated user.",
//     link: "https://github.com/zulip/zulip/pull/20206",
//     number: "#20206",
//     date: "Dec 30 2021",
//     linesAdded: "31",
//     linesDeleted: "1",
//   },
//   {
//     id: "os-13",
//     organisation: "Zulip",
//     logo: zulip,
//     repo: "zulip",
//     type: "pull-request",
//     status: "merged",
//     title: "authentication: Fix placeholder realms for redirects.",
//     link: "https://github.com/zulip/zulip/pull/19689",
//     number: "#19689",
//     date: "Sep 9 2021",
//     linesAdded: "1",
//     linesDeleted: "1",
//   },
//   {
//     id: "os-14",
//     organisation: "Zulip",
//     logo: zulip,
//     repo: "zulip",
//     type: "pull-request",
//     status: "merged",
//     title: "message_editing : Fix topic edit propagate option cut-off",
//     link: "https://github.com/zulip/zulip/pull/19760",
//     number: "#19760",
//     date: "Feb 10 2022",
//     linesAdded: "9",
//     linesDeleted: "8",
//   },
// ];

export const projects = [
  {
    id: "project-1",
    title: "TGIT Bangladesh Official",
    github: "",
    link: "https://tgitbangladesh.com/",
    image: tgitlogo,
    content:
      "TGIT Bangladesh Official Website New Version. Static web application to showcase the company's services and portfolio.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-2",
    title: "Smart Think",
    github: "",
    link: "https://smartthinksbd.com/",
    image: smartthink,
    content:
      "Smart Think is a retailer smartphone and related device selling and buying shop based in Bangladesh. This is a full-stack website to showcase their products and related information for customers to buy or sell their device.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-3",
    title: "Unifly Travels",
    github: "",
    link: "",
    image: unifly,
    content:
      "A full-stack application for a travel agency based in Bangladesh. Used to process customers paperworks for travel bookings and payments and maintain all travel related works. This application was an extensive dashboard for admin to manage and check all the works. This application has currently been down due to the closure of the company.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-4",
    title: "Youwin Education",
    github: "",
    link: "https://youwineducation.org/",
    image: youwin,
    content:
      "Static website for an educational consultancy firm based in UK. This website was used to showcase their services and portfolio.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  // {
  //   id: "project-5",
  //   title: "Ignitor",
  //   github: "",
  //   link: "",
  //   image: ignitor,
  //   content:
  //     "A static website for a company which initially started to produce energy drinks called ignitor energy drink. This website was used to showcase their products and services.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: AiFillHtml5,
  //       name: "HTML",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: DiCss3,
  //       name: "CSS",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiBootstrap,
  //       name: "Bootstrap",
  //     },
  //   ],
  // },
  // {
  //   id: "project-6",
  //   title: "Consortium BD",
  //   github: "",
  //   link: "https://consortiumbd.com/",
  //   image: consortium,
  //   content:
  //     "A static website for an HR recruiting firm. They provides a complete solution for recruitment services, payroll services & background.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: AiFillHtml5,
  //       name: "HTML",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: DiCss3,
  //       name: "CSS",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiBootstrap,
  //       name: "Bootstrap",
  //     },
  //   ],
  // },
  {
    id: "project-5",
    title: "TGS CRM",
    github: "",
    link: "",
    image: crm,
    content:
      "TGS CRM was a full-stack application to manage all the customer relationship management of the company. This application was used to manage all the customer data and as a file transfer medium for the company.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },

  {
    id: "project-6",
    title: "GAPS International",
    github: "",
    link: "https://gapsinternational.co.uk/",
    image: gaps,
    content:
      "GAPS International is a educational consultancy company. They provide several outwide services for Graduates and Professional services.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      // {
      //   id: "icon-2",
      //   icon: FaNodeJs,
      //   name: "NodeJS",
      // },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      // {
      //   id: "icon-4",
      //   icon: SiMongodb,
      //   name: "MongoDB",
      // },
    ],
  },

  {
    id: "project-7",
    title: "NorthEast Dashboard",
    github: "",
    link: "http://15.206.66.98/",
    image: ned,
    content:
      "NorthEast Dashboard is a full-stack ERP system for a company based in Bangladesh. This application was used to manage all the company's data and manage all the works.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },

  {
    id: "project-8",
    title: "Skytouch Education",
    github: "",
    link: "https://skytoucheducation.co.uk/",
    image: skytouch,
    content:
      "Static website for an educational consultancy firm based in UK. This website was used to showcase their services and portfolio.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
];

// export const blogPosts = [
//   {
//     id: "post-1",
//     title: "Blog Post 01 - Title",
//     link: "#",
//     date: new Date().toLocaleDateString(), // Can be edited to any string format
//     image: "https://via.placeholder.com/600/92c952",
//     tags: [
//       {
//         id: "tag-1",
//         name: "tag 01",
//       },
//       {
//         id: "tag-2",
//         name: "tag 03",
//       },
//       {
//         id: "tag-3",
//         name: "tag 03",
//       },
//     ],
//   },
//   {
//     id: "post-2",
//     title: "Blog Post 02 - Title",
//     link: "#",
//     date: new Date().toLocaleDateString(),
//     image: "https://via.placeholder.com/600/d32776",
//     tags: [
//       {
//         id: "tag-1",
//         name: "tag 01",
//       },
//       {
//         id: "tag-2",
//         name: "tag 03",
//       },
//       {
//         id: "tag-3",
//         name: "tag 03",
//       },
//     ],
//   },
//   {
//     id: "post-3",
//     title: "Blog Post 03 - Title",
//     link: "#",
//     date: new Date().toLocaleDateString(),
//     image: "https://via.placeholder.com/600/771796",
//     tags: [
//       {
//         id: "tag-1",
//         name: "tag 01",
//       },
//       {
//         id: "tag-2",
//         name: "tag 03",
//       },
//       {
//         id: "tag-3",
//         name: "tag 03",
//       },
//     ],
//   },
// ];

// export const stats = [
//   {
//     id: "stats-1",
//     title: "Organisations",
//     value: "2+",
//   },
//   {
//     id: "stats-2",
//     title: "Issues Opened",
//     value: "6+",
//   },
//   {
//     id: "stats-3",
//     title: "Pull Requests",
//     value: "6+",
//   },
// ];

// export const extraCurricular = [
//   {
//     organisation: "Google Developer Student Club, NITK",
//     title: "Co-Chair",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
//         link: "https://incident.nitk.ac.in/",
//       },
//     ],
//     logo: gdsc,
//   },
//   {
//     organisation: "Genesis, NITK",
//     title: "Competitions Head",
//     duration: "Sep 2021 - Present",
//     content: [
//       {
//         text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
//         link: "",
//       },
//       {
//         text: "Won 7 inter-college solo dance competitions",
//         link: "",
//       },
//     ],
//     logo: genesis,
//   },
//   {
//     organisation: "IRIS, NITK",
//     title: "Tutor",
//     duration: "Jan 2022 - Jan 2022",
//     content: [
//       {
//         text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
//         link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
//       },
//     ],
//     logo: iris,
//   },
//   {
//     organisation: "E-Cell, NITK",
//     title: "Executive Member",
//     duration: "Sep 2021 - Apr 2022",
//     content: [
//       {
//         text: "Organised the season 3 of the E-Cell NITK Podcast",
//         link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
//       },
//       {
//         text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
//         link: "",
//       },
//     ],
//     logo: ecell,
//   },
// ];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/diponkor-chandra-shil-736542198/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/diponkorcs",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:diponkorchandrashil678@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillFacebook,
    link: "https://www.facebook.com/diponkor.chandro/",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://instagram.com/dipto_chandro?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
  },
];

export const aboutMe = {
  name: "Diponkor Chandra Shil",
  tagLine:
    "Software Developer | Full-Stack Developer specialized in ReactJS & NodeJS @ TGIT Bangladesh",
  tagLine2:
    "Experienced working in MERN Stack | Currently Learning & Working on a Native Application",
  intro:
    "A diligent web developer from Bangladesh with experiences in different tools and frameworks and programming languages. Currently expanding my area of expertise and learning new frameworks.",
};
