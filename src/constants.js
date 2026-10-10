// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import php from './assets/tech_logo/php.png';
import noesis from './assets/work_logo/noesis.png';
import deskmitra from './assets/work_logo/deskmitra.png';

// Experience Section Logo's
import rankUpGlobalLogo from './assets/company_logo/rankup_global.webp';

// Education Section Logo's
import rccalogo from './assets/education_logo/rcca_logo.webp';
import rhsslogo from './assets/education_logo/rhss_logo.png';
import lsvgshslogo from './assets/education_logo/goa_board.ico';

// Project Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'PHP', logo: php },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: rankUpGlobalLogo,
      role: "WordPress Developer Intern",
      company: "RankUp Global",
      date: "October 2024 - December 2025",
      desc: "Developed dynamic websites using the wordpress, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "PHP",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rccalogo,
      school: "Rosary College of Commerce & Arts, Navelim, Goa",
      date: "July 2023 - May 2026",
      grade: "9.42 FGPA",
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Rosary College of Commerce & Arts, Navelim, Goa. During my time at Rosary College, I gained a strong foundation in programming, software development, and computer applications principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Agile Methodologies, Full Stack Development, UI/UX development, Cloud Computing and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Rosary College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications BCA",
    },
    {
      id: 1,
      img: rhsslogo,
      school: "Rosary Higher Secondary School, Navelim, Goa",
      date: "June 2021 - Apr 2023",
      grade: "84.5%",
      desc: "I completed my class 12 education from Rosary Higher Secondary School, Navelim, Goa, under the Goa board, where I studied Accounting, Business Studies, Economics, Mathematics and Information Technology",
      degree: "Commerce",
    },
    {
      id: 2,
      img: lsvgshslogo,
      school: "Late Shri Vinayak Gopal Shenvi High School, Rawanfond, Navelim, Goa",
      date: "Jun 2015 - March 2021",
      grade: "85.5%",
      desc: "I completed my class 10 education from Late Shri Vinayak Gopal SHenvi High School School, Rawanfond, Navelim, Goa, under the Goa board, where I studied Mathematics, Geography, History and Computer.",
      degree: "Class 10",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "NOESIS 2K25-26 Event Website",
      description:
        "A dynamic and visually appealing event website for NOESIS 2K25-26, the annual tech fest of Rosary College of Commerce & Arts, Goa. The website features event details, schedules, e-souvenir, and interactive elements to engage participants and provide a seamless user experience.",
      image: noesis,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Surajchavan4124/noesis2k26",
      webapp: "https://rccanoesis.com/",
    },
    {
      id: 1,
      title: "DeskMitra - Service Website (Mini Project)",
      description:
        "A comprehensive service website for DeskMitra with admin panel, a platform that connects people with various Government services. Built using HTML, CSS, bootstrap, JavaScript, php and MySQL.  the website offers an intuitive interface for users to explore and apply for services and access support.",
      image: deskmitra,
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Surajchavan4124/deskmitra",
      // webapp: "https://deskmitra.com/",
    },
  ];  