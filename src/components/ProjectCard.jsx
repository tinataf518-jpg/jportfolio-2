function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card">
      {project.logo && (
        <div className="project-logo">
          <img src={project.logo} alt={project.title} />
          <div className="project-overlay">
            <a href={project.github} target="_blank" rel="noreferrer" className="overlay-link github-link" title="View on GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-link demo-link" title="Live Demo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 0h-14c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-4 18h-6v2h6v-2zm8-3h-16v-13h16v13z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
      <div className="project-card-head">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-pill">{tech}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
// Updated: commit 2
// Updated: commit 5
// Updated: commit 8
// Updated: commit 11
// Updated: commit 14
// Updated: commit 17
// Updated: commit 20
// Updated: commit 23
// Updated: commit 26
// Updated: commit 29
// Updated: commit 32
// Updated: commit 35
// Updated: commit 38
// Updated: commit 41
// Updated: commit 44
// Updated: commit 47
// Updated: commit 50
// Updated: commit 53
// Updated: commit 56
// Updated: commit 59
// Updated: commit 62
// Updated: commit 65
// Updated: commit 68
// Updated: commit 71
// Updated: commit 74
