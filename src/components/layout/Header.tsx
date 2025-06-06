import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc = "/logo-loophid.png" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary-dark via-[#2a4ba2] to-primary shadow-lg border-b-3 border-primary">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between md:justify-center relative">
        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden fixed top-[35px] left-[30px] z-[1001] bg-primary-light text-white w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer shadow-lg border-2 border-white/30 transition-transform hover:scale-110 hover:rotate-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="text-xl font-bold">
            {isMobileMenuOpen ? '×' : '☰'}
          </span>
        </button>
        
        <div className="flex items-center">
          <div className="mr-8 p-2 rounded-[15px]">
            <img 
              src={logoSrc} 
              alt="LoopHid Logo" 
              className="h-[90px] rounded-[10px] transition-all duration-300 filter drop-shadow-lg hover:scale-105 hover:-translate-y-1 hover:filter hover:drop-shadow-xl"
            />
          </div>
          
          <div className="pl-4 border-l-3 border-secondary/50">
            <h1 className="text-3xl md:text-[2.8rem] font-bold tracking-tighter mb-2 text-white drop-shadow-md">
              Loophid AI
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide text-white/90">
              Soluções em Automação
            </p>
          </div>
        </div>
      </div>
      
      {/* Side Menu - Mobile Responsive */}
      <div className={`fixed left-0 top-0 h-full w-[320px] bg-gradient-to-br from-primary to-primary-light border-r-2 border-secondary pt-32 pb-10 px-6 overflow-y-auto z-[800] transition-transform duration-500 ease-out shadow-xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav>
          <div className="mb-8">
            <h3 className="text-secondary pb-2 mb-4 border-b-2 border-secondary/50 font-bold text-shadow">
              Menu Principal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="#solucoes-medida"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">🏠</span>
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="#automacao-comercial"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">💼</span>
                  <span>Automação Comercial</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="#micro-saas"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">🚀</span>
                  <span>Micro SaaS</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="#demo-video"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">🎬</span>
                  <span>Demo</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="#comparacao"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">⚖️</span>
                  <span>Comparação</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="#investimento"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="w-8 h-8 mr-3 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary">💰</span>
                  <span>Investimento</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[700] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
