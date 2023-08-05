import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cjclogo,
  sclogo,
  peslogo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "PES University",
    company_name: "Computer Science and Engineering",
    icon: peslogo,
    iconBg: "#383E56",
    date: "June 2020 - June 2024",
    points: [
      "PESU's CSE program covered Machine Intelligence, Database Management System, Big Data, Data Analytics, Cloud Computing, Computer Network, Compiler Design, and Operating Systems, providing a strong foundation in diverse computer science areas.",
      'Actively involved in various clubs, I led "Head of Hiring" for IEEE, recruiting and nurturing talent to strengthen our community.',
      'Deeply engrossed in "Unified Healthcare Interface," my project aims to revolutionize healthcare with an integrated, user-friendly data management system',
      "Honored with prestigious scholarships at PESU for consistent academic excellence and passion for learning.",
    ],
  },
  {
    title: "Christ Junior College",
    company_name: "PCMB",
    icon: cjclogo,
    iconBg: "#E6DEDD",
    date: "May 2018 - May 2020",
    points: [
      "At Christ Junior College, I excelled academically in both 11th and 12th grades.",
      "Engaging in various clubs and activities at Christ Junior College improved my leadership and teamwork.",
      "Beyond academics, I participated in social initiatives and community service, contributing positively to society.",
      "I actively joined college events like Independence Day and Teacher's Day, fostering a joyous campus spirit.",
    ],
  },
  {
    title: "St. Philomena's Public School",
    company_name: "ICSE",
    icon: sclogo,
    iconBg: "#383E56",
    date: "Jan 2008 - Mar 2018",
    points: [
      "As the School Prime Minister, I represented student interests, facilitated communication with staff, and organized school events.",
      "I led the school to victory in inter-school volleyball, basketball, and cricket, demonstrating leadership and athletic prowess.",
      "Balancing sports commitments with dedication to studies, I achieved academic excellence.",
      "Through sports, I fostered teamwork and sportsmanship, inspiring my teammates on and off the field.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
