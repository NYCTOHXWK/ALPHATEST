"use client";

import { useEffect, useMemo, useState } from "react";
import { certifications } from "@/lib/certifications-data";

type CertSlidesProps = {
  compact?: boolean;
};

function getVisibleIndexes(activeIndex: number, length: number) {
  const previous = (activeIndex - 1 + length) % length;
  const next = (activeIndex + 1) % length;
  return [previous, activeIndex, next];
}

export default function CertSlides({ compact = false }: CertSlidesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % certifications.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleCards = useMemo(() => {
    const [previous, current, next] = getVisibleIndexes(activeIndex, certifications.length);
    return [
      { position: "side", cert: certifications[previous], key: `${certifications[previous].credentialId}-previous` },
      { position: "center", cert: certifications[current], key: `${certifications[current].credentialId}-center` },
      { position: "side", cert: certifications[next], key: `${certifications[next].credentialId}-next` }
    ];
  }, [activeIndex]);

  return (
    <div>
      {!compact && <h2>Certifications</h2>}
      <div className="cert-carousel" aria-live="polite">
        {visibleCards.map((item) => (
          <article className={`cert-card cert-card-${item.position}`} key={item.key}>
            <img
              className="cert-image"
              src={item.cert.image}
              alt={`${item.cert.issuer} certificate preview`}
              loading="lazy"
            />
            <div className="cert-content">
              <p className="mini-label">{item.cert.issuer}</p>
              <h3>{item.cert.title}</h3>
              <p>Issued {item.cert.issued}</p>
              <p>Credential ID: {item.cert.credentialId}</p>
              <a className="text-link" href={item.cert.link} target="_blank" rel="noreferrer">
                Show credential
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
