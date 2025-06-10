import React from "react";

const ProjectCards = ({ title, description, link, image }) => {
  return (
    <div className="relative group bg-black/70 border-2 border-red-600 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col hover:scale-105 transition-transform overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-3 sm:mb-4 object-cover h-32 sm:h-40 w-full"
        />
      )}
      <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h4 className="text-lg sm:text-xl font-bold text-red-500 mb-1 sm:mb-2">
        {title}
      </h4>
      <p className="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block w-full sm:w-auto text-center bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold"
      >
        Esplora
      </a>
    </div>
  );
};

export default ProjectCards;
