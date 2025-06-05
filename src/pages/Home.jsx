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
    <section className="my-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titolo */}
        <h3 className="text-4xl font-extrabold mb-12 text-white tracking-widest text-center uppercase">
          Il mio tracciato
        </h3>

        {/* Timeline */}
        <div className="relative bg-gradient-to-r from-black/70 via-black/60 to-black/70 border-4 border-red-600 rounded-full py-6 px-10 flex items-center justify-between shadow-[0_0_24px_3px_rgba(255,0,60,0.25)]">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-32 relative z-10">
            <div className="w-16 h-16 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,0,60,0.8)]" />
            <span className="mt-3 text-white text-sm font-medium text-center tracking-wide">
              Partenza
            </span>
          </div>

          {/* Linea tratteggiata */}
          <div className="flex-1 border-t-4 border-dashed border-red-600 mx-2 -mt-4 z-0" />

          {/* Step 2 */}
          <div className="flex flex-col items-center w-32 relative z-10">
            <div className="w-16 h-16 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,0,60,0.8)]" />
            <span className="mt-3 text-white text-sm font-medium text-center tracking-wide">
              Studi serrati
            </span>
          </div>

          {/* Linea tratteggiata */}
          <div className="flex-1 border-t-4 border-dashed border-red-600 mx-2 -mt-4 z-0" />

          {/* Step 3 */}
          <div className="flex flex-col items-center w-32 relative z-10">
            <div className="w-16 h-16 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,0,60,0.8)]" />
            <span className="mt-3 text-white text-sm font-medium text-center tracking-wide">
              Pratica costante
            </span>
          </div>

          {/* Linea tratteggiata */}
          <div className="flex-1 border-t-4 border-dashed border-red-600 mx-2 -mt-4 z-0" />

          {/* Step 4 - Finish */}
          <div className="flex flex-col items-center w-32 relative z-10">
            <div className="w-16 h-16 bg-black border-4 border-red-600 rounded-full shadow-[0_0_20px_4px_rgba(255,0,60,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,0,60,0.8)]">
              <FaFlagCheckered className="text-red-600 text-2xl" />
            </div>
            <span className="mt-3 text-white text-sm font-medium text-center tracking-wide">
              Diventare Esperto
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/about")}
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors font-semibold shadow-lg"
          >
            Scopri chi sono
          </button>
        </div>
        <section id="progetti" className="mt-24">
          <h3 className="text-3xl font-extrabold mb-10 text-white tracking-widest text-center uppercase ">
            I miei Progetti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
