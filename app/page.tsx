import Link from "next/link";
import { siteProjects, siteStats } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio Website</p>
          <h1>Web experiences that feel modern, clear, and ready to ship.</h1>
          <p className="lead">
            I am Vinay, a developer focused on responsive UI, strong visual
            direction, and building websites that are both useful and polished.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              View Projects
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-card surface-card">
          <p className="eyebrow">Quick Snapshot</p>
          <h2>Available for portfolio work, freelance builds, and collaborations.</h2>
          <div className="stats-grid">
            {siteStats.map((item) => (
              <div key={item.label} className="stat-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Design energy with engineering discipline.</h2>
        </div>
        <div className="two-column-copy">
          <p>
            I enjoy building digital work that feels intentional from the first
            screen to the last detail. Clean layouts, smooth interactions, and a
            clear sense of hierarchy matter to me.
          </p>
          <p>
            This portfolio is built as a real multi-page Next.js project so it
            can live comfortably on Vercel, evolve over time, and connect cleanly
            to GitHub for version control and deployment.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Highlights</p>
          <h2>Selected work and ideas in motion.</h2>
        </div>
        <div className="project-grid">
          {siteProjects.slice(0, 3).map((project) => (
            <article key={project.title} className="project-card surface-card">
              <span className="project-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
