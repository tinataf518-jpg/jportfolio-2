function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-header">
        <h3>{certificate.title}</h3>
        <span className="certificate-year">{certificate.year}</span>
      </div>
      <p className="certificate-issuer">{certificate.issuer}</p>
      <a href={certificate.link} target="_blank" rel="noreferrer" className="link-button">
        View Certificate
      </a>
    </article>
  );
}

export default CertificateCard;
