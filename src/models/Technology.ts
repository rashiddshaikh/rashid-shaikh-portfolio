export const Technology = [
  // Mobile & OS
  'Android',
  'HarmonyOS',
  'Kotlin',
  'Java',
  'React-Native',

  // Huawei
  'Huawei Mobile Services (HMS)',

  // Web & Frontend
  'JavaScript',
  'TypeScript',
  'HTML',
  'HTML5',
  'CSS',
  'Tailwind CSS',
  'React',
  'Next.js',
  'Angular',

  // Backend
'Node.js',
'Express.js',
'Laravel',
'PHP',
'Spring Boot',
'REST API',
'REST APIs',
'Stripe API',
'Thymeleaf',
'Postman',



  // Databases
  'MongoDB',
  'MySQL',

  // Cloud
  'AWS EC2',
  'AWS RDS',

  // Messaging & MQ
  'ActiveMQ',

  // Testing
  'JUnit',
  'Mockito',

  // AI / ML
  'Python',
  'TensorFlow',
  'Flask',
  'Scikit-learn',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'OpenAI API',
  'Google Generative AI',

  // Dev Tools
  'GitHub REST API',
  'Drizzle ORM',
  'Clerk',

  // Misc
  'Firebase',
  'Google Play Services',
  'WooCommerce',
  'WordPress',
  'MUI',
  'Photoshop',
  'Linux',
] as const;

export type TechnologyType = (typeof Technology)[number];
