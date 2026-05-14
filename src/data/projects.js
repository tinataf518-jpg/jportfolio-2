import ecommerceImg from '../assets/eccomerce.jpg';
import analyticsImg from '../assets/analytics.jpg';
import movieImg from '../assets/movie.jpg';
import chatImg from '../assets/aura-chat.jpg';
import galleryImg from '../assets/gallery.jpg';

const projects = [
  {
    title: 'E-Commerce Frontend UI',
    description: 'Modern product listing UI with product details, cart interface, filtering, and responsive design built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    logo: ecommerceImg,
    github: 'https://github.com/yourusername/ecommerce-ui',
    demo: 'https://ecommerce-ui-demo.vercel.app'
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Analytics dashboard with sidebar navigation, stat cards, charts UI, and table components featuring dark mode support.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    logo: analyticsImg,
    github: 'https://github.com/yourusername/analytics-dashboard',
    demo: 'https://analytics-dashboard-demo.vercel.app'
  },
  {
    title: 'Movie Search App',
    description: 'Movie search application with grid layout, detail pages, loading skeletons, and Netflix-style UI using TMDB API.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    logo: movieImg,
    github: 'https://github.com/yourusername/movie-search',
    demo: 'https://movie-search-demo.vercel.app'
  },
  {
    title: 'AI Chat UI',
    description: 'Chat interface with message bubbles, input box, typing animations, and ChatGPT-style layout for AI conversations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    logo: chatImg,
    github: 'https://github.com/yourusername/ai-chat-ui',
    demo: 'https://ai-chat-ui-demo.vercel.app'
  },
  {
    title: 'Developer Project Gallery',
    description: 'Project gallery with grid layout, category filtering, hover animations, and modal detail views for developer portfolios.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    logo: galleryImg,
    github: 'https://github.com/yourusername/project-gallery',
    demo: 'https://project-gallery-demo.vercel.app'
  }
];

export default projects;
