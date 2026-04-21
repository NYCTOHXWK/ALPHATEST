import Link from "next/link";
import { siteProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Projects in EV systems, IoT, security, and education technology.</h1>
        <p className="lead narrow">
          These projects reflect my practical experience in building real systems—from
          EV conversion and drone prototyping to RFID security and student record management.
        </p>
      </section>

      <section className="project-list">
        {siteProjects.map((project) => (
          <article key={project.title} className="project-showcase surface-card">
            <div className="project-showcase-copy">
              <span className="project-tag">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="detail-list">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="project-side-panel">
              <p className="mini-label">Stack</p>
              <p>{project.stack}</p>
              <Link className="text-link" href="/contact">
                Contact for details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
