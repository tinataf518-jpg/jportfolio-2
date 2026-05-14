import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SkillIcon from './components/SkillIcon.jsx';
import ContactForm from './components/ContactForm.jsx';
import ProfilePhoto from './components/ProfilePhoto.jsx';
import Footer from './components/Footer.jsx';
import projects from './data/projects.js';
import joeyPhoto from './assets/Joey.jpg';

function App() {
  const [theme, setTheme] = useState('dark');
  const projectsRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const scrollProjects = (direction) => {
    const container = projectsRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="page-content">
        <section id="home" className="hero-section">
          <div className="hero-grid-wrapper">
            <div className="hero-copy">
              <p className="eyebrow">Hello, I'm</p>
              <h1>Yoseph Tadesse</h1>
              <p className="hero-title">Frontend Developer</p>
              <p className="hero-description">
                Frontend Developer specializing in React and Next.js, focused on building responsive and modern web applications with clean UI/UX design.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="primary-button">View Projects</a>
                <a href="#contact" className="secondary-button">Contact Me</a>
              </div>
            </div>

            <div className="hero-side">
              <ProfilePhoto src={joeyPhoto} alt="Yoseph Tadesse profile photo" />
            </div>
          </div>
        </section>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h2>About Me</h2>
            <p>
              I'm a frontend developer passionate about creating intuitive and responsive user interfaces. I specialize in React and Next.js, building modern web applications with clean design and smooth user experiences. My focus is on writing maintainable code, implementing responsive layouts, and delivering pixel-perfect interfaces that work seamlessly across all devices.
            </p>
          </div>
        </div>



        <section id="projects" className="section-block">
          <SectionTitle title="Projects" subtitle="Recent work" />
          <div className="project-carousel">
            <button type="button" className="carousel-button carousel-button-left" onClick={() => scrollProjects('prev')} aria-label="Previous projects">
              ‹
            </button>
            <div className="projects-grid" ref={projectsRef}>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <button type="button" className="carousel-button carousel-button-right" onClick={() => scrollProjects('next')} aria-label="Next projects">
              ›
            </button>
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionTitle title="Skills" subtitle="Areas of expertise" />
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="React" />
                <SkillIcon name="Next.js" />
                <SkillIcon name="Tailwind CSS" />
                <SkillIcon name="JavaScript" />
                <SkillIcon name="TypeScript" />
                <SkillIcon name="HTML" />
                <SkillIcon name="CSS" />
              </div>
            </div>
            <div className="skill-group">
              <h3>Tools</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="Git" />
                <SkillIcon name="GitHub" />
                <SkillIcon name="VS Code" />
                <SkillIcon name="Vercel" />
                <SkillIcon name="Figma" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <SectionTitle title="Contact" subtitle="Get in touch" />
          <div className="content-grid contact-grid">
            <div className="contact-copy">
              <h3>Ready to collaborate?</h3>
              <p>
                I'm open to frontend internship, freelance, and junior developer opportunities. Let's build something amazing together.
              </p>
              <div className="contact-details">
                <p><strong>Email:</strong> <a href="mailto:tinataf518@gmail.com" className="contact-link">tinataf518@gmail.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/tinataf518-jpg" target="_blank" rel="noreferrer" className="contact-link">github.com/tinataf518-jpg</a></p>
                <p><strong>Telegram:</strong> <a href="https://t.me/Joeyalem" target="_blank" rel="noreferrer" className="contact-link">@Joeyalem</a></p>
                <p><strong>Location:</strong> Adiss Ababa, Ethiopia</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
// Updated: commit 1
// Updated: commit 4
// Updated: commit 7
// Updated: commit 10
// Updated: commit 13
// Updated: commit 16
// Updated: commit 19
// Updated: commit 22
// Updated: commit 25
// Updated: commit 28
// Updated: commit 31
// Updated: commit 34
// Updated: commit 37
// Updated: commit 40
// Updated: commit 43
// Updated: commit 46
// Updated: commit 49
