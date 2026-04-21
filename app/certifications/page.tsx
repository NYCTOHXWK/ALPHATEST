import CertSlides from "@/components/CertSlides";

export default function CertificationsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">Certifications</p>
        <h1>Verified licenses and certifications.</h1>
        <p className="lead narrow">
          Swipe through all certificates in iOS-style cards and open any credential to verify it.
        </p>
      </section>

      <section className="content-section">
        <CertSlides compact />
      </section>
    </div>
  );
}
