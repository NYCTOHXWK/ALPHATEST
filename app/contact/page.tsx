import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Start a conversation about your next website or collaboration.</h1>
        <p className="lead narrow">
          This page includes a working form connected to a Next.js route handler.
          It validates input and returns a success message, which makes it ready
          for a future email or database integration.
        </p>
      </section>

      <section className="contact-layout">
        <div className="surface-card contact-copy">
          <p className="mini-label">Get In Touch</p>
          <h2>Use the form or reach out directly.</h2>
          <p>
            GitHub:{" "}
            <a href="https://github.com/NYCTOHXWK" target="_blank" rel="noreferrer">
              github.com/NYCTOHXWK
            </a>
          </p>
          <p>
            Email: <a href="mailto:vinay@example.com">vinay@example.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              Add your real profile here
            </a>
          </p>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
