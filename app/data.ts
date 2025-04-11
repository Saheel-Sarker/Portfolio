import {Github, Mail, Phone, Linkedin} from 'lucide-react'
import React from 'react'

type TimelineItem = {
  title: string
  company: string
  dateRange: string // e.g., "Jan 2020 - Dec 2022"
  skills: string[] // List of skills used
  link?: string // Optional link to the company or project
  id: string
}

type Project = {
  name: string
  description: string
  link?: string
  github: string
  video: string
  id: string
  technologies?: string[]
  thumbnail: string // Optional thumbnail image 
  demo?: string // Optional demo link
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string 
  logo?: React.ReactNode // Icon component
  link: string
}

type technology = {
  name: string
  logo: string // Path to the logo image
}

export const TECHNOLOGIES: technology[] = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'SQL',
    logo: 'https://www.svgrepo.com/show/341068/sql.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C#',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'C',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'MATLAB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
  },
  {
    name: '.NET',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
  },
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://www.svgrepo.com/show/452075/node-js.svg',
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Android SDK',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'AWS',
    logo: 'https://www.svgrepo.com/show/448266/aws.svg',
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Terraform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Seqr Safe',
    description: 'Secure password manager with encrypted storage, multi-device sync, and a seamless user experience.',
    link: 'https://seqr-safe.com/',
    github: 'https://github.com/Saheel-Sarker/Seqr-Safe',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/...', 
    id: 'project4',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS', 'Stripe', 'Render', 'JWT', 'bcrypt', 'Crypto.js', 'Mailtrap'],
    thumbnail: './SeqrSafe.png',
  },
  {
    name: 'MoneyMinded',
    description:
      'Budget Tracker that uses AI to analyze data, create analytics, and forecast finances.',
    link: 'https://expenseapp-portfolio.up.railway.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
    technologies: ['.NET', 'C#', 'PostgreSQL', "Bootstrap", "Docker", "Railway"],
    thumbnail: './ExpenseTracker.png',
    github: 'https://github.com/Saheel-Sarker/ExpenseApp'
  },
  {
    name: 'Your Scribe',
    description:
      'Real-time audio transcriber and translator powered by AI.',
    link: 'https://your-scribe.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', "Xenova", "Render"],
    thumbnail: './YourScribe.png',
    github: 'https://github.com/Saheel-Sarker/YourScribe'
  },
  // {
  //   name: 'Mealy',
  //   description: 'Meal planner that let\'s that simplifies dieting',
  //   link: '',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  //   technologies: ['Java', 'Android API', 'Firebase', 'XML'],
  //   thumbnail: './Mealy.png',
  // },
  {
    name: 'SkillUP',
    description:
      'Automates the process of finding relevant jobs, analyze the job market using AI, and provides personalized recommendations for skill development.',
    // link: 'https://master.d3dbxfxzl08x6v.amplifyapp.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
    technologies: ['AWS (DynamoDB, S3, Lambda, API Gateway, Eventbridge, Amplify)', 'Angular', 'Typescript', 'Node.js', 'Bootstrap', 'Python', 'Cohere', 'Apify'],
    thumbnail: './SkillUp.png',
    github: 'https://github.com/Saheel-Sarker/JobMatch-Front-End-'
  },

]

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    title: 'Founder & Lead Software Developer',
    company: 'Seqr Safe',
    dateRange: 'Nov 2024 - Present',
    skills: [
      'Designed and developed a secure, subscription-based password manager for 70+ active users.',
      'Built a REST API with robust encryption for sensitive user data using Crypto.js.',
      'Integrated Stripe for subscription payments and Mailtrap for automated email notifications.',
      'Tech Stack: Next.js, Node.js, MongoDB, Express.js, TailwindCSS, JWT, bcrypt, Stripe, Crypto.js, Mailtrap.',
    ],
    id: 'work1',
  },

  {
    title: 'Freelance Software Developer',
    company: 'Upwork',
    dateRange: 'Feb 2024 - Nov 2024',
    skills: [
      'Delivered multiple high-priority projects to various clients while ensuring timely delivery and optimal performance.',
      'Developed professional websites using Angular and React, enhancing user engagement and satisfaction.',
      'Revamped cloud infrastructure with Terraform, improving scalability, reliability, and deployment time.',
      'Tech Stack: Angular, React, Terraform, SQL, AWS (Lambda, EventBridge, S3, DynamoDB, API Gateway), Cohere, Apify, Python.',
    ],
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    logo: React.createElement(Github, { size: 24 }),
    link: 'https://github.com/saheel-sarker',
  },
  {
    label: 'LinkedIn',
    logo: React.createElement(Linkedin, { size: 24 }),
    link: 'https://www.linkedin.com/in/saheels',
  },
  {
    label: 'Email',
    logo: React.createElement(Mail, { size: 24 }),
    link: 'saheel@ualberta.ca',
  },
  {
    label: 'Phone',
    logo: React.createElement(Phone, { size: 24 }),
    link: '17808808416',
  },
]

export const EDUCATION = [
  {
    degree: 'Bachelor\'s in Computer Science',
    minor: 'Mathematics',
    institution: 'University of Alberta',
    dateRange: 'Sept 2018 - Nov 2023',
    description:
      'Specialized in Software Engineering and Artificial Intelligence.',
    courses: [
      'Data Structures and Algorithms',
      'Web and Mobile Development',
      'Database Management',
      'Practical Programming Methodology',
      'Machine Learning',
      'Data Analysis',
      'Numerical Methods',
    ],
  },
]

export const EMAIL = 'saheel@ualberta.ca'
export const PHONE = '+17808808416'
