// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// logo for skills
import nodejslogo from './assets/tech_logo/nodejslogo.png'
import dblogo from './assets/tech_logo/dblogo.png';
import programminglogo from './assets/tech_logo/programming.png';

// Experience Section Logo's
import prodigyinfotect from './assets/company_logo/prodigyinfotech.png';
import codsoft from './assets/company_logo/codsoft.jpg';

// Education Section Logo's
import soa from './assets/education_logo/soa.jpg';
import rbse from './assets/education_logo/rbse.png';
import avm from './assets/education_logo/avm.jpeg';

// Project Section Logo's
import shopper from './assets/work_logo/shopper.png';
import furniture from './assets/work_logo/furniture.png';
import notepad from './assets/work_logo/notepad.png';
import Randomjoke from './assets/work_logo/Randomjoke.png';
import loancalculate from './assets/work_logo/loancal.png';

// Certificate logo's
import apnaclg12 from './assets/education_logo/apnacollege.png';
import fullapnclg123 from './assets/apfullcerti.png';
import felixlogo from './assets/education_logo/felixlogo.png';
import spyderwaveimg from './assets/education_logo/spsmall.png'
import spyderwaveFullimg from './assets/education_logo/spyderCertificate.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    logo: reactjsLogo,
    description: "Technologies for building modern, responsive user interfaces",
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    logo: nodejslogo,
    description: "Server-side technology for application logic",
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Next JS', logo: nextjsLogo },

    ],
  },
  {
    title: 'MERN Stack',
    logo: mongodbLogo,
    description: "Full-stack JavaScript ecosystem for building web applications",
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
    ],
  },

  {
    title: 'Languages',
    logo: programminglogo,
    description: 'A programming language is used to write instructions that tell a computer how to perform tasks.',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Database & Tools',
    logo: dblogo,
    description: 'Essential tools for development and deployment',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: prodigyinfotect,
    role: "Web Development",
    company: "Prodigy InfoTech",
    date: "15th Dec, 2024 to 15th Jan, 2025",
    desc: "I successfully completed a 1-month Web Development internship at Prodigy InfoTech. During this internship, I worked on various tasks involving HTML, CSS, JavaScript, and modern web development tools. This experience helped me improve my coding skills.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS"
    ],
  },
  {
    id: 1,
    img: codsoft,
    role: "Web Development",
    company: "CodSoft",
    date: "20th Sep, 2024 to 20th Oct, 2024",
    desc: "I successfully completed a 1-month Web Development internship at CodSoft. During this internship, I worked on various tasks involving HTML, CSS, JavaScript, and modern web development tools. This experience helped me improve my coding skills.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: soa,
    school: "Bachelor of Technology",
    date: "June 2022 - June 2026",
    grade: "8.51 CGPA",
    desc: "I have completed my Bachelor,s degree in Computer Science and Engineering from Silver Oak University, Ahmedabad, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Silver Oak University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Computer Science and Engineering",
  },
  {
    id: 1,
    img: rbse,
    school: "Govt. Senior Secondary School, Kalandri (Sirohi)",
    date: "June 2021 - June 2022",
    grade: "65.40%",
    desc: "I completed my Class 12 education from Govt. Senior Secondary School, Kalandri, under the RBSE Board, with Physics, Chemistry, and Mathematics (PCM) as my core subjects. This academic foundation strengthened my analytical thinking, problem-solving ability, and interest in technology.",
    degree: "RBSE(XII) - PCM ",
  },
  {
    id: 2,
    img: avm,
    school: "Adarsh Vidya Mandir School, Kalandri (Sirohi)",
    date: "June 2019 - June 2020",
    grade: "70.50%",
    desc: "I completed my Class 10 education from Adarsh Vidya Mandir School, Kalandri, under the RBSE board. During this period, I developed a solid academic base, improved my learning skills, and actively participated in school activities that helped shape my overall personality.",
    degree: "RBSE(X)",
  },
];


export const CertificatesInfo = [
  {
    id: 0,
    title: "Apna College",
    role: "Full Stack Development",
    description:
      "Gained hands-on experience in building responsive front-end applications and developing RESTful UI and backend APIs.",
    img: apnaclg12,
    fullimg: fullapnclg123,
  },
  {
    id: 1,
    title: "Felix it System",
    role: "Full Stack Development",
    description:
      "Built and deployed web applications with responsive frontends using React, Bootstrap, and Tailwind Worked on backend APIs with Node.js and Express.js",
    img: felixlogo,
    // fullimg: felixcertificate,
  },
  {
    id: 2,
    title: "SpyderWave technology",
    role: "C Language",
    description:
      "A powerful and efficient language for system programming and building foundational programming skills.",
    img: spyderwaveimg,
    fullimg: spyderwaveFullimg,
  },
];


export const projects = [
  {
    id: 0,
    title: "Shopper",
    description:
      "Shopper is your one-stop online clothing store offering trendy fashion, premium quality, and affordable styles for men and women. Shop the latest outfits, accessories, and more!",
    image: shopper,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Praveensuthar12/shopper",
    webapp: "https://shopper-orcin-nine.vercel.app/",
  },
  {
    id: 1,
    title: "Furniture Website",
    description:
      "We are a modern furniture brand dedicated to helping you create a home you love. Our mission is to provide high-quality, beautifully designed furniture that fits every lifestyle and budget.Each product is crafted with care using durable materials, ensuring long-lasting comfort and style. Whether you're furnishing a new home or refreshing your space, you’ll find everything you need — from sofas, beds, and wardrobes to dining tables, office furniture, and décor pieces.",
    image: furniture,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "https://github.com/Praveensuthar12/Furniture-web-page/",
    webapp: "https://praveensuthar12.github.io/Furniture-web-page/",
  },
  {
    id: 2,
    title: "Note Pad",
    description:
      "A simple, user-friendly web-based notepad application that allows users to Create, Read, Update, and Delete notes.",
    image: notepad,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Praveensuthar12/Notepad",
    webapp: "https://notepad-inky-pi.vercel.app/",
  },
  {
    id: 3,
    title: "Zoom Clone",
    description:
      "A real-time video conferencing application built with WebRTC, Socket.IO, and Node.js, featuring video/audio calls, chat, screen sharing, and secure room creation.",
    image: notepad,
    tags: ["Javascript", "Express JS", "React JS", "Node.js", "NPM", "Validation", "WebRTC", "Websocket"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Random Joke",
    description:
      "The Random Joke Generator is a fun and interactive web project built using HTML, CSS, and JavaScript that fetches and displays a random joke from a public joke API every time a user clicks a button.",
    image: Randomjoke,
    tags: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/Praveensuthar12/Random-Joke",
    webapp: "https://praveensuthar12.github.io/Random-Joke/",
  },
  {
    id: 6,
    title: "Loan Calculator",
    description:
      "A simple and responsive Loan Calculator built using HTML, CSS, and JavaScript. This tool helps users quickly calculate monthly EMI payments.",
    image: loancalculate,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Praveensuthar12/Loan-Calculate",
    webapp: "https://praveensuthar12.github.io/Loan-Calculate/",
  },

];

