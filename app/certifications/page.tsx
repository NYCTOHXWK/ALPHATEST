import CertSlides from "@/components/CertSlides";

export default function CertificationsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Certifications</p>
        <h1>Verified licenses and certifications.</h1>
        <p className="lead narrow">
          Auto-scrolling certification cards keep the focus on the center credential every 3 seconds.
        </p>
      </section>

      <section className="content-section">
        <CertSlides compact showAll />
      </section>
    </div>
  );
}
