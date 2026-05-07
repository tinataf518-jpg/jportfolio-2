import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import CertificateCard from './components/CertificateCard.jsx';
import SkillBadge from './components/SkillBadge.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import projects from './data/projects.js';
import certificates from './data/certificates.js';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="page-content">
        <section id="home" className="hero-section">
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
          <div className="hero-card">
            <div className="hero-card-inner">
              <h2>About Me</h2>
              <p>
                Driven by curiosity and problem-solving, I enjoy turning ideas into responsive user interfaces and backend solutions.
              </p>
            </div>
          </div>
        </section>

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
              <SkillBadge label="HTML" />
              <SkillBadge label="CSS" />
              <SkillBadge label="JavaScript" />
              <SkillBadge label="React" />
            </div>
            <div className="skill-group">
              <h3>Backend</h3>
              <SkillBadge label="Node.js" />
              <SkillBadge label="Express" />
            </div>
            <div className="skill-group">
              <h3>Database</h3>
              <SkillBadge label="MySQL" />
              <SkillBadge label="MongoDB" />
            </div>
            <div className="skill-group">
              <h3>Tools</h3>
              <SkillBadge label="Git" />
              <SkillBadge label="GitHub" />
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
                <p><strong>Email:</strong> tinataf518@gmail.com</p>
                <p><strong>Location:</strong> Bahir Dar, Ethiopia</p>
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
