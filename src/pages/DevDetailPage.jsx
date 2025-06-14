import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { FaGitAlt, FaLinkedin } from "react-icons/fa";
import {
  FaGithub,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "BootStrap", icon: <FaBootstrap className="text-blue-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-sky-300" /> },
];

const DevDetailPage = () => {
  const images = ["/alfa.jpg", "/124.jpg"];

  const contacts = [
    { type: "Email", value: "zampierisimone5@gmail.com", icon: "📧" },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/simone-zampieri-43103a331/",
      icon: <FaLinkedin />,
    },
    {
      type: "GitHub",
      value: "https://github.com/SimoneZampieri",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Chi Sono
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-red-600 mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Frontend Developer appassionato di motorsport, performance e
              codice pulito
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Come un pilota in pista, mi concentro sulla precisione e
              l'efficienza in ogni riga di codice. La mia passione per il
              motorsport si riflette nel mio approccio allo sviluppo.
            </p>
          </div>
          {/* Right Column */}
          <div className="h-48 sm:h-full flex items-center">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Learning Journey Section */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-4 text-center font-audiowide">
            Il Mio Percorso di Apprendimento
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center max-w-3xl mx-auto">
            La mia avventura nello sviluppo web è iniziata con la curiosità e la
            voglia di mettermi in gioco, durante la pandemia infatti ho iniziato
            ad approfondire le basi di HTML e CSS, per poi iniziare un percorso
            in Boolean ad ottobre 2024, che mi ha permesso di diventare un Web
            Developer. Proprio come un pilota che affronta la sua prima pista.
            Ho studiato con determinazione, affrontando ogni curva e ogni
            ostacolo con passione.
            <br />
            <br />
            Ogni nuova tecnologia è stata una tappa, ogni progetto una gara in
            cui migliorare le mie performance. Oggi continuo a imparare e a
            crescere, con la stessa grinta di chi vuole sempre abbassare il
            proprio tempo sul giro!
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Tech Stack Grid */}
          <div className="bg-black/20 border-2 border-red-600 rounded-lg p-4 sm:p-6 hover:shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] transition-shadow flex flex-col">
            <h3 className="text-red-600 text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
              Stack Tecnologico
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center bg-black/40 border border-red-600 rounded-xl p-3 sm:p-4 shadow-md hover:scale-105 transition-transform"
                >
                  <span className="text-3xl sm:text-4xl mb-1 sm:mb-2">
                    {tech.icon}
                  </span>
                  <span className="text-white text-xs sm:text-base font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills Card */}
          <div className="bg-black/20 border-2 border-red-600 rounded-lg p-4 sm:p-6 hover:shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] transition-shadow">
            <h3 className="text-red-600 text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              Soft Skills
            </h3>
            <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>• Problem Solving</li>
              <li>• Team Collaboration</li>
              <li>• Attenzione ai Dettagli</li>
              <li>• Comunicazione Efficace</li>
              <li>• Apprendimento Continuo</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center relative">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Come Contattarmi
          </h2>
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <div className="w-full max-w-xl bg-black/90 border-2 border-red-600 rounded-lg shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] divide-y divide-red-600 px-1 sm:px-2 text-left">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={
                    contact.type === "Email"
                      ? `mailto:${contact.value}`
                      : contact.value
                  }
                  target={contact.type !== "Email" ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 hover:bg-red-600/20 transition-colors text-white"
                >
                  <span className="text-lg sm:text-xl">{contact.icon}</span>
                  <div className="min-w-0">
                    <div className="font-medium">{contact.type}</div>
                    <div className="text-xs sm:text-sm text-gray-300 break-all">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/Zampieri Simone cv (2).pdf"
              download
              className="block w-full sm:w-auto text-center bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold mt-2"
            >
              Scarica il mio CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDetailPage;
