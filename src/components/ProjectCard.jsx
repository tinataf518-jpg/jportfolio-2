function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-pill">{tech}</span>
        ))}
      </div>
      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noreferrer" className="link-button">GitHub</a>
        <a href={project.demo} target="_blank" rel="noreferrer" className="link-button secondary">Live Demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;
