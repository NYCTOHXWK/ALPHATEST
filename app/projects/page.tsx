import Link from "next/link";
import { siteProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Work that balances clarity, speed, and personality.</h1>
        <p className="lead narrow">
          A project page built for real portfolio growth. Replace these examples
          with your own shipped work, case studies, GitHub repos, and live demos.
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
                Ask about this project
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
