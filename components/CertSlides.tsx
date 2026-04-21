"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
];

export default function CertSlides() {
  return (
    <section className="bg-black text-white">
      
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold mb-4">Certifications</h1>
        <Link href="/certifications">
          <span className="text-blue-400 cursor-pointer">
            View All →
          </span>
        </Link>
      </div>

      {certs.map((cert, i) => (
        <div key={i} className="h-screen flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            {cert.title}
          </motion.h1>

          <p className="text-gray-400 mb-4">{cert.issuer}</p>

          <a href={cert.link} target="_blank" className="text-blue-400">
            View Certificate →
          </a>
        </div>
      ))}
    </section>
  );
}
