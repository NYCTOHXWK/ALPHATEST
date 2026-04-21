"use client";

import { certifications } from "@/lib/certifications-data";

type CertSlidesProps = {
  compact?: boolean;
};

export default function CertSlides({ compact = false }: CertSlidesProps) {
  return (
    <div>
      {!compact && <h2>Certifications</h2>}
      <div className="cert-slider" role="list" aria-label="Certification slides">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.credentialId} role="listitem">
            <img
              className="cert-image"
              src={cert.image}
              alt={`${cert.issuer} certificate preview`}
              loading="lazy"
            />
            <div className="cert-content">
              <p className="mini-label">{cert.issuer}</p>
              <h3>{cert.title}</h3>
              <p>Issued {cert.issued}</p>
              <p>Credential ID: {cert.credentialId}</p>
              <a className="text-link" href={cert.link} target="_blank" rel="noreferrer">
                Show credential
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
