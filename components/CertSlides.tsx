"use client";

const certs = [
  {
    title: "Big Data Engineer",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/51588b3bb671473385a04ab424b8c506",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/cb4312935d4c1648918666e584696a1",
  },
  {
    title: "AWS APAC Solutions Architecture",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/AbXkVjxNf3Ykcu2S",
  },
  {
    title: "Samatrix Certification",
    issuer: "Samatrix.io",
    link: "https://verify.netcredential.com/20ybWab2",
  },
  {
    title: "Samatrix Certification",
    issuer: "Samatrix.io",
    link: "https://verify.netcredential.com/roy80vpaR2",
  },
  {
    title: "Samatrix Certification",
    issuer: "Samatrix.io",
    link: "https://verify.netcredential.com/RoyBqE6d1",
  },
  {
    title: "Samatrix Certification",
    issuer: "Samatrix.io",
    link: "https://verify.netcredential.com/roy8uTTG4hU",
  },
  {
    title: "Samatrix Certification",
    issuer: "Samatrix.io",
    link: "https://verify.netcredential.com/roy8JaF1yJ",
  },
];

export default function CertSlides() {
  return (
    <div>
      <h2>Certifications</h2>

      <ul>
        {certs.map((cert, i) => (
          <li key={i}>
            <a href={cert.link} target="_blank">
              {cert.title} - {cert.issuer}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
