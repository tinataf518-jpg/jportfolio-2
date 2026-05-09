import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import CertificateCard from './components/CertificateCard.jsx';
import SkillIcon from './components/SkillIcon.jsx';
import ContactForm from './components/ContactForm.jsx';
import ProfilePhoto from './components/ProfilePhoto.jsx';
import Footer from './components/Footer.jsx';
import projects from './data/projects.js';
import certificates from './data/certificates.js';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="page-content">
        <section id="home" className="hero-section">
          <div className="hero-grid-wrapper">
            <div className="hero-copy">
              <p className="eyebrow">Hello, I'm</p>
              <h1>Yoseph Tadesse</h1>
              <p className="hero-title">Computer Science Student</p>
              <p className="hero-description">
I am a frontend developer focused on React, Tailwind CSS, and TypeScript.
I build modern, scalable, and responsive web applications with clean UI/UX design.
Currently, I am growing into full-stack development with Node.js, Express, and databases to develop complete production-ready applications.
              </p>
              <a href="#projects" className="primary-button">View Projects</a>
            </div>

            <div className="hero-side">
              <ProfilePhoto src="/profile-photo.jpg" alt="Yoseph Tadesse profile photo" />
            </div>
          </div>
        </section>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h2>About Me</h2>
            <p>
              I'm a web developer who enjoys turning ideas into interactive, living products on the web. I build responsive and performance-focused applications where design feels intuitive and functionality feels effortless. I like bridging the gap between creativity and logic—crafting clean user interfaces backed by reliable systems. Always experimenting, learning, and refining, I treat every project as a chance to build something smarter, smoother, and more meaningful than the last.
            </p>
          </div>
        </div>

        <section id="about" className="section-block">
          <SectionTitle title="About" subtitle="A quick introduction" />
          <div className="content-grid about-grid">
            <div>
              <p>
                I am a Computer Science student at Bahir Dar University with a strong interest in full-stack development. I enjoy building real-world applications and solving problems using technology.
              </p>
              <p>
                My academic journey has taught me software engineering principles, data structures, and system design. I aim to work on scalable applications and continue improving my skills through practical projects.
              </p>
            </div>
            <div className="info-card">
              <h3>Education & Goals</h3>
              <ul>
                <li>BSc in Computer Science, Bahir Dar University</li>
                <li>Focused on full-stack development and cloud-friendly applications</li>
                <li>Passionate about building intuitive user experiences and efficient backend systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <SectionTitle title="Projects" subtitle="Recent work" />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionTitle title="Skills" subtitle="Areas of expertise" />
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="HTML" />
                <SkillIcon name="CSS" />
                <SkillIcon name="JavaScript" />
                <SkillIcon name="React" />
                <SkillIcon name="TypeScript" />
              </div>
            </div>
            <div className="skill-group">
              <h3>Backend</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="Node.js" />
                <SkillIcon name="Express" />
              </div>
            </div>
            <div className="skill-group">
              <h3>Database</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="MySQL" />
                <SkillIcon name="MongoDB" />
              </div>
            </div>
            <div className="skill-group">
              <h3>Tools</h3>
              <div className="skill-icons-grid">
                <SkillIcon name="Git" />
                <SkillIcon name="GitHub" />
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="section-block">
          <SectionTitle title="Certificates" subtitle="Verified highlights" />
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.title} certificate={certificate} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <SectionTitle title="Contact" subtitle="Get in touch" />
          <div className="content-grid contact-grid">
            <div className="contact-copy">
              <h3>Ready to collaborate?</h3>
              <p>
                If you have a project idea or want to talk about technology, feel free to send a message.
              </p>
              <div className="contact-details">
                <p><strong>Email:</strong> <a href="mailto:tinataf518@gmail.com" className="contact-link">tinataf518@gmail.com</a></p>
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
