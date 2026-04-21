"use client";

const certs = [
  {
    title: "Big Data Engineer",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/51588b3bb671473385a04ab424b8c506",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy8JaF1yJ",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy80vpaR2",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy8ktLKpQ",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy8ajhyA0",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy8qjEaX1",
  },
  {
    title: "Certificate of Accomplishment",
    issuer: "Samatrix Consulting Private Limited",
    link: "https://verify.netcredential.com/roy84TUGhU",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/c84312958cd14a168918866e584699a1",
  },
  {
    title: "AWS APAC",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/aMXsTyHdNT5hucn25",
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
