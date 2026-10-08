export interface Story {
  id: string;
  title: string;
  excerpt: string;
  fullStory: string;
  date: string;
  category: string;
  image: string;
  galleryImages?: string[];
  highlights?: string[];
}

export const STORIES_DATA: Story[] = [
  {
    id: 'koica-5th-cohort',
    title: 'GS Cyahafi TSS Warmly Welcomes the 5th KOICA Volunteer Cohort',
    excerpt: 'On October 2, 2026, GS Cyahafi TSS officially received the 5th Cohort of KOICA (Korea International Cooperation Agency) World Friends Korea volunteers, strengthening technical education and global partnerships.',
    fullStory: ``,
    date: 'October 2, 2026',
    category: 'Global Partnership',
    image: '/KOICANEWS/KOICANEWS1.jpeg',
    galleryImages: [
      '/KOICANEWS/KOICANEWS1.jpeg',
      '/KOICANEWS/KOICANEWS2.jpeg',
      '/KOICANEWS/KOICANEWS3.jpeg',
      '/KOICANEWS/KOICANEWS4.jpeg',
      '/KOICANEWS/KOICANEWS5.jpeg',
      '/KOICANEWS/KOICANEWS6.jpeg',
      '/KOICANEWS/KOICANEWS7.jpeg',
      '/KOICANEWS/KOICANEWS9.jpeg',
    ],
  },
  {
    id: 'fbo-amazing-skills',
    title: 'FBO: Where Amazing Skills Are Born!',
    excerpt: 'They started as students, but they are finishing as experts. Watch our FBO students master professional culinary arts.',
    fullStory: `Our Food & Beverage Operations (FBO) practical sessions have become truly amazing to witness. The discipline, clean work, and beautiful plating show that our students are ready for the global stage.

Through daily hands-on kitchen practicals, bakery production, and restaurant service training, GS Cyahafi FBO students gain real-world confidence and industrial competencies recognized across Rwanda's hospitality sector.`,
    date: 'March 10, 2026',
    category: 'Success Story',
    image: '/fbostory.png',
    galleryImages: ['/fbostory.png', '/TVET/fbo.jpeg', '/TVET/fbo1.jpeg', '/TVET/fbo2.jpeg'],
  },
];
