import Link from "next/link";
import { siteProjects, siteStats } from "@/lib/site-data";
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
            at K.R. Mangalam University (Aug 2023 – Jun 2027), with internship experience
            in manufacturing analytics and IoT development.
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
          <p>
            At JTEKT India Ltd. (June 2025 – July 2025), I completed an 8-week industrial
            internship where I worked with DHR-1 and manufacturing teams to build a visual
            dashboard for defect and supply tracking.
          </p>
          <p>
            During my KEIC IoT Internship (July 2024 – Sept 2024), I developed and deployed
            IoT solutions for real-time data collection and device monitoring using Arduino,
            Raspberry Pi, and sensors.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Highlights</p>
          <h2>Selected projects from my CV.</h2>
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

      <section className="content-section">
        <CertSlides />
      </section>
    </div>
  );
}
