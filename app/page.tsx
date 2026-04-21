import Link from "next/link";
import { education, jobRoles, siteProjects, siteStats } from "@/lib/site-data";
import CertSlides from "@/components/CertSlides";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">AI & ML • Data Analytics • IoT</p>
          <h1>Vinay — Computer Science Engineer building practical AI and IoT solutions.</h1>
          <p className="lead">
            I am currently pursuing B.Tech in Computer Science and Engineering (AI & ML)
            at{" "}
            <a
              className="inline-brand-link"
              href={education.website}
              target="_blank"
              rel="noreferrer"
            >
              <img src={education.logo} alt={`${education.name} logo`} />
              <span>{education.name}</span>
            </a>{" "}
            ({education.duration}), with internship experience in manufacturing analytics
            and IoT development.
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
          <h2>Open to AI, data analytics, and embedded systems opportunities.</h2>
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
          <h2>Experience across manufacturing analytics, IoT, and embedded systems.</h2>
        </div>
        <div className="two-column-copy">
          {jobRoles.map((role) => (
            <article key={role.company} className="job-role-card">
              <p className="mini-label">{role.role}</p>
              <h3>
                <a href={role.website} target="_blank" rel="noreferrer">
                  <img src={role.logo} alt={`${role.company} logo`} />
                  <span>{role.company}</span>
                </a>
              </h3>
              <p>{role.duration}</p>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Highlights</p>
          <h2>Selected projects from my CV.</h2>
        </div>
        <div className="project-grid">
          {siteProjects.slice(0, 3).map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card surface-card">
              <img src={project.image} alt={`${project.title} preview`} className="project-preview" />
              <span className="project-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <CertSlides />
      </section>
    </div>
  );
}
