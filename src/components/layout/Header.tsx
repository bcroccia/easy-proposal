import React from 'react';
import logoImage from '../../../src/assets/logo/logo-loophid.png';

interface HeaderProps {
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc = logoImage }) => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-6 flex items-center justify-center">
        <div className="flex items-center">
          <img 
            src={logoSrc} 
            alt="LoopHid Logo"
            className="h-24 w-auto"
          />
          
          <div className="pl-4 border-l-3 border-secondary/50">
            <h1 className="md:text-[2.5rem] font-bold tracking-tighter mb-2 bg-gradient-to-r from-[#6200ff] to-[#3c71df] bg-clip-text text-transparent">
              Loophid AI
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide to-cyan-400 bg-clip-text">
              Soluções em Automação
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;