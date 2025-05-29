import React from "react";

const DefLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-red-600/20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SIMONE ZAMPIERI</h1>
          <div className="flex gap-4">
            <button className="border border-red-600 px-6 py-2 rounded-full hover:bg-red-600/20 transition-colors">
              Guarda i progetti
            </button>
            <button className="bg-[#2A0B98] px-6 py-2 rounded-full hover:bg-[#2A0B98]/80 transition-colors">
              Contattami
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-[#0A0A0A] border-t border-red-600/20 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 SIMONE ZAMPIERI - Frontend Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default DefLayout;
