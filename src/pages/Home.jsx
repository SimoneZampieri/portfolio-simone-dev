import React from "react";
import { FaFlagCheckered } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";

const projects = [
  {
    title: "Comics Generator",
    description: "Un generatore di fumetti basato su 50 fumetti randomici",
    link: "https://comic-generator-sand.vercel.app/",
    image: "/comics.png",
  },
  {
    title: "GMail Debloater",
    description:
      "Una estensione per GMail che permette di eliminare e disiscriversi automaticamente da newsletter indesiderate",
    link: "https://github.com/SimoneZampieri/gmail-debloater",
    image: "/mail.png",
  },
  {
    title: "BoolBnB",
    description:
      "Una replica creativa dell interfaccia di Airbnb, ultimata durante il mio percorso di studi in Boolean",
    link: "https://github.com/RobertoFloris/react-bool-beb",
    image: "/bnb.png",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="my-12 sm:my-24">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 relative">
        {/* Titolo */}
        <h3 className="text-2xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-white tracking-widest text-center uppercase">
          Il mio tracciato
        </h3>

        {/* Timeline */}
        <div>
          {/* Desktop: horizontal timeline */}
          <div className="hidden sm:flex relative bg-gradient-to-r from-black/70 via-black/60 to-black/70 border-4 border-red-600 rounded-full py-6 px-10 items-center justify-between shadow-[0_0_24px_3px_rgba(255,0,60,0.25)]">
            {[
              { label: "Partenza" },
              { label: "Studi serrati" },
              { label: "Pratica costante" },
              {
                label: "Diventare Esperto",
                icon: <FaFlagCheckered className="text-red-600 text-2xl" />,
              },
            ].map((step, idx, arr) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center w-32 relative z-10">
                  <div className="w-16 h-16 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,0,60,0.8)] animate-pulse">
                    {step.icon}
                  </div>
                  <span className="mt-3 text-white text-sm font-medium text-center tracking-wide">
                    {step.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-1 border-t-4 border-dashed border-red-600 mx-2 -mt-4 z-0" />
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Mobile: vertical timeline */}
          <div className="flex sm:hidden flex-col items-center bg-gradient-to-b from-black/70 via-black/60 to-black/70 border-4 border-red-600 rounded-2xl py-4 px-2 shadow-[0_0_24px_3px_rgba(255,0,60,0.25)] gap-0 w-full max-w-xs mx-auto">
            {[
              { label: "Partenza" },
              { label: "Studi serrati" },
              { label: "Pratica costante" },
              {
                label: "Diventare Esperto",
                icon: <FaFlagCheckered className="text-red-600 text-2xl" />,
              },
            ].map((step, idx, arr) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center w-full relative z-10">
                  <div className="w-12 h-12 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center animate-pulse">
                    {step.icon}
                  </div>
                  <span className="mt-2 text-white text-xs font-medium text-center tracking-wide">
                    {step.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="h-6 border-l-4 border-dashed border-red-600 my-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="my-10 sm:my-16 flex flex-col items-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-audiowide text-red-500 text-center max-w-2xl mb-4">
            "La velocità è utile solo se sai dove andare."
          </blockquote>
          <p className="text-gray-300 text-center max-w-xl text-sm sm:text-base">
            Come nello sviluppo e nelle corse, punto sempre alla precisione,
            alla crescita e all’innovazione. Ogni progetto è una nuova pista da
            affrontare!
          </p>
        </div>
        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-red-800 transition-colors font-semibold shadow-lg text-base sm:text-lg"
          >
            Scopri chi sono
          </button>
        </div>

        <section id="progetti" className="mt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 text-white tracking-widest text-center uppercase ">
            I miei Progetti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCards key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
