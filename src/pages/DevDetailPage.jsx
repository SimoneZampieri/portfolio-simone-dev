import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const DevDetailPage = () => {
  const images = ["/alfa.jpg", "/124.jpg"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Side-by-side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">Chi Sono</h1>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-gray-300 text-lg mb-6">
              Frontend Developer appassionato di motorsport, performance e
              codice pulito
            </p>
            <p className="text-gray-300">
              Come un pilota in pista, mi concentro sulla precisione e
              l'efficienza in ogni riga di codice. La mia passione per il
              motorsport si riflette nel mio approccio allo sviluppo.
            </p>
          </div>

          {/* Right Column - Carousel */}
          <div className="h-full flex items-center">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/20 border-2 border-red-600 rounded-lg p-6 hover:shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] transition-shadow">
            <h3 className="text-red-600 text-xl font-bold mb-4">
              Competenze Tecniche
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• React & Modern JavaScript</li>
              <li>• Tailwind CSS & Styled Components</li>
              <li>• Redux & State Management</li>
              <li>• Git & Version Control</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          <div className="bg-black/20 border-2 border-red-600 rounded-lg p-6 hover:shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] transition-shadow">
            <h3 className="text-red-600 text-xl font-bold mb-4">Soft Skills</h3>
            <ul className="text-gray-300 space-y-2">
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
          <h2 className="text-2xl font-bold text-white mb-6">
            Come Contattarmi
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-xl bg-black/90 border-2 border-red-600 rounded-lg shadow-[0_0_20px_4px_rgba(255,0,60,0.2)] divide-y divide-red-600 px-2 text-left">
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
                  className="flex items-center gap-3 px-4 py-3 hover:bg-red-600/20 transition-colors text-white"
                >
                  <span className="text-xl">{contact.icon}</span>
                  <div className="min-w-0">
                    <div className="font-medium">{contact.type}</div>
                    <div className="text-sm text-gray-300 break-all">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/Zampieri Simone cv (2).pdf"
              download
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold mt-2 inline-block"
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
