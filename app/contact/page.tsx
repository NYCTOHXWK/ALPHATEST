import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s connect for internships, projects, and collaborations.</h1>
        <p className="lead narrow">
          Reach out for AI/ML, data analytics, IoT, and embedded systems opportunities.
        </p>
      </section>

      <section className="contact-layout">
        <div className="surface-card contact-copy">
          <p className="mini-label">Get In Touch</p>
          <h2>Use the form or connect directly.</h2>
          <p>Location: Gurgaon, Haryana, India</p>
          <p>
            Email: <a href="mailto:nycto.hxwk@gmail.com">nycto.hxwk@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/raovinayyadav/" target="_blank" rel="noreferrer">
              linkedin.com/in/raovinayyadav
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/raovinayyadav" target="_blank" rel="noreferrer">
              github.com/raovinayyadav
            </a>
          </p>
        </div>

        <ContactForm />
      </section>

      <section className="surface-card contact-mobile-info">
        <p className="mini-label">Contact Details</p>
        <p>Location: Gurgaon, Haryana, India</p>
        <p>
          Email: <a href="mailto:nycto.hxwk@gmail.com">nycto.hxwk@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/raovinayyadav/" target="_blank" rel="noreferrer">
            linkedin.com/in/raovinayyadav
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/raovinayyadav" target="_blank" rel="noreferrer">
            github.com/raovinayyadav
          </a>
        </p>
      </section>
    </div>
  );
}
