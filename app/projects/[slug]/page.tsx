import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, siteProjects } from "@/lib/site-data";

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return siteProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const relatedProjects = siteProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="lead narrow">{project.technicalOverview}</p>
      </section>

      <section className="project-detail-layout surface-card">
        <img src={project.image} alt={`${project.title} visual`} className="project-hero-image" />
        <div className="project-detail-panels">
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Tech Stack</p>
            <p>{project.stack}</p>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Architecture</p>
            <ul className="detail-list">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Key Modules</p>
            <ul className="detail-list">
              {project.keyModules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Project Tools</p>
            <div className="tool-grid">
              {project.tools.map((tool) => (
                <div key={tool.name} className="tool-chip">
                  <img src={tool.image} alt={`${tool.name} icon`} />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Challenges</p>
            <ul className="detail-list">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Outcomes</p>
            <ul className="detail-list">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card project-detail-panel">
            <p className="mini-label">Quick Actions</p>
            <div className="project-detail-actions">
              {project.projectUrl ? (
                <a className="text-link" href={project.projectUrl} target="_blank" rel="noreferrer">
                  Open related website
                </a>
              ) : null}
              <Link className="text-link" href="/projects">
                Back to all projects
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">More Projects</p>
          <h2>Explore other builds.</h2>
        </div>
        <div className="project-grid">
          {relatedProjects.map((item) => (
            <Link key={item.slug} href={`/projects/${item.slug}`} className="project-card surface-card">
              <img src={item.image} alt={`${item.title} preview`} className="project-preview" />
              <span className="project-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
