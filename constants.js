export const METADATA = {
  author: 'Jovanni Morales',
  title: 'Portfolio | Jovanni Morales',
  description:
    'Jovanni is a Frontend Developer from Chicago, interested in crafting beautiful and functional user experiences.',
  siteUrl: 'https://www.shubhporwal.me/',
  twitterHandle: '@na',
  keywords: [
    'Jovanni Mirales',
    'Frontend Developer',
    'Web Developer',
    'React Native Developer',
    'Software Developer',
    'Software Engineer',
    'Portfolio',
  ].join(', '),
  image:
    'https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png',
  language: 'English',
};

export const MENULINKS = [
  {
    name: 'Home',
    ref: 'home',
  },
  {
    name: 'Skills',
    ref: 'skills',
  },
  {
    name: 'Projects',
    ref: 'projects',
  },
  {
    name: 'Education',
    ref: 'work',
  },
  {
    name: 'Contact',
    ref: 'contact',
  },
];

export const TYPED_STRINGS = [
  'A pragmatic Frontend Developer',
  'Crafting immersive user experiences',
  'I build things for the web',
  'I create aesthetic and modern apps',
];

export const SOCIAL_LINKS = [
  {
    name: 'mail',
    url: 'mailto: jnmrles@gmail.com',
  },
  // {
  //   name: 'linkedin',
  //   url: 'https://www.linkedin.com/in/shubhporwal/',
  // },
  // {
  //   name: 'github',
  //   url: 'https://github.com/shubh73',
  // },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/jm.edia/',
  },
  // {
  //   name: 'twitter',
  //   url: 'https://twitter.com/shubh731',
  // },
];

export const SKILLS = {
  languagesAndTools: [
    'html',
    'css',
    'javascript',
    'typescript',
    'sass',
    // "cpp",
    // "java",
    // "python",
    'nodejs',
    'webpack',
    'vite',
    'firebase',
    // "moralis",
    'stripe',
    // 'figma',
    // 'tanstack-query',
  ],
  librariesAndFrameworks: [
    'react',
    'redux',
    'nextjs',
    'tailwindcss',
    'styledcomponents',
  ],
  databases: ['mysql'],
  other: ['git'],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: 'JMedia.Photo',
    image: '/projects/jms.png',
    blurImage: '/projects/blur/airbnb-blur.webp',
    description:
      'Concert Photography Portfolio. Developed using React + Spotify API + Tailwind CSS 📸 ',
    gradient: ['#4FCF3F', '#56CB48'],
    url: 'https://jmedia.photo/',
    tech: ['react', 'tailwindcss'],
  },
  {
    name: 'HackForLA.org',
    image: '/projects/HackForLa.png',
    blurImage: '/projects/blur/medium-blur.webp',
    description:
      'Team Member working on Landing Page for Nonprofit Civic Tech orgnaization using Jekyll + Sass✍🏻',
    gradient: ['#F74848 ', '#EA4D2C'],
    url: 'https://www.hackforla.org/',
    tech: ['sass', 'react'],
  },
  {
    name: 'JM-Filmpire',
    image: '/projects/Filmpire.png',
    blurImage: '/projects/blur/airbnb-blur.webp',
    description:
      ' AI-powered movie web application that helps users find movie selections and view trailers 🎙',
    gradient: ['#000066', '#6699FF'],
    url: 'https://jm-films.netlify.app/',
    tech: ['react', 'chakra-ui', 'alan'],
  },
  {
    name: 'Pro Records Studio',
    image: '/projects/pr.png',
    blurImage: '/projects/blur/tesla-blur.webp',
    description:
      'Designed A Mobile Booking site for Pro Image Recording Studios using WebFlow',
    gradient: ['#142D46', '#2E4964'],
    url: 'https://pro-image-records.webflow.io/',
    tech: ['react'],
  },
];

export const WORK = [
  {
    id: 1,
    company: 'Dukaan',
    title: 'Frontend Developer',
    location: 'Bangalore, Karnataka',
    range: 'December - Current',
    responsibilities: [
      'Led creation of a captivating cross-platform e-commerce solution.',
      'Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.',
      'The app boasts a DAU base of 13k and an extensive MAU count of 170k.',
    ],
    url: 'https://mydukaan.io/',
    video: '/work/dukaan.mp4',
  },
  {
    id: 2,
    company: 'Aviate',
    title: 'Frontend Developer Intern',
    location: 'Goa',
    range: 'May - October 2022',
    responsibilities: [
      'Built their flagship product Q-Rate, a voice-based applicant screening platform.',
      'Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.',
      'Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.',
    ],
    url: 'https://www.aviate.jobs/',
    video: '/work/aviate.mp4',
  },
  {
    id: 3,
    company: 'Spacenos',
    title: 'Web Developer Intern',
    location: 'Bangalore, Karnataka',
    range: 'September - December 2021',
    responsibilities: [
      'Led the Full Stack revamp on the Admin Portal.',
      'Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.',
      'Implemented CRUD features for all the services and providers.',
    ],
    url: 'https://spacenos.com/',
    video: '/work/spacenos.mp4',
  },
];

export const GTAG = 'G-5HCTL2TJ5W';
