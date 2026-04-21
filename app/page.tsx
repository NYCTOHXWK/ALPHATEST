import Link from "next/link";
import { siteProjects, siteStats } from "@/lib/site-data";
import CertSlides from "@/components/CertSlides";

export default function HomePage() {
  return (
    <div className="page-stack">
      {/* HERO SECTION */}
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">AI • IoT • Embedded Systems</p>
          <h1>Building real-world systems from hardware to intelligent software.</h1>
          <p className="lead">
            I am Vinay, a Computer Science Engineer specializing in AI & Machine Learning,
            with hands-on experience in IoT systems, embedded development, and data analytics.
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
          <h2>Available for AI, IoT, and full-stack engineering projects.</h2>
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

      {/* ABOUT SECTION */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Engineering intelligent systems with real-world impact.</h2>
        </div>
        <div className="two-column-copy">
          <p>
            I focus on building practical engineering solutions combining software,
            hardware, and data. My work includes EV system conversion, IoT automation,
            and intelligent dashboards for real-world applications.
          </p>
          <p>
            This portfolio reflects my work across AI, embedded systems, and data analytics,
            designed to showcase real-world problem solving and scalable solutions.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Highlights</p>
          <h2>Projects across AI, IoT, and Embedded Systems.</h2>
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

      {/* CERTIFICATIONS SECTION */}
      <section className="content-section">
        <CertSlides />
      </section>

    </div>
  );
}
