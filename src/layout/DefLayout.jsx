import React from "react";
import { useNavigate } from "react-router-dom";

const DefLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-red-600/20">
        <nav className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <button
            onClick={() => navigate("/")}
            className="text-xl sm:text-2xl font-bold hover:text-red-800 transition-colors"
            aria-label="Vai alla home"
          >
            SIMONE ZAMPIERI
          </button>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    document
                      .getElementById("progetti")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                } else {
                  document
                    .getElementById("progetti")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border border-red-600 px-4 sm:px-6 py-2 rounded-full hover:bg-red-600/20 transition-colors w-full sm:w-auto"
            >
              Guarda i progetti
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-[#2A0B98] px-4 sm:px-6 py-2 rounded-full hover:bg-[#2A0B98]/80 transition-colors w-full sm:w-auto"
            >
              Contattami
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-[#0A0A0A] border-t border-red-600/20 py-4 sm:py-6">
        <div className="container mx-auto px-2 sm:px-4 text-center text-gray-400 text-xs sm:text-base">
          <p>© 2024 SIMONE ZAMPIERI - Frontend Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default DefLayout;
