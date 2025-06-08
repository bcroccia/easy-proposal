import React, { useState } from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon, isActive, onHover, onLeave }) => {
  return (
    <div 
      className={`transition-all duration-300 p-4 rounded-xl cursor-pointer transform hover:scale-105 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-400/50 shadow-lg' 
          : 'bg-white/10 border border-white/10 hover:bg-white/15'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center mb-3">
        <div className={`w-8 h-8 rounded-full ${isActive ? 'bg-cyan-500' : 'bg-blue-500'} text-white flex items-center justify-center text-sm font-bold mr-3`}>
          {number}
        </div>
        <span className={`text-xl ${isActive ? 'animate-bounce' : ''}`}>{icon}</span>
      </div>
      <h4 className={`font-bold mb-2 transition-colors ${isActive ? 'text-cyan-300' : 'text-white'}`}>
        {title}
      </h4>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const NextSteps: React.FC = () => {



  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="">
          
          {/* Bottom Section - LADO A LADO */}
          <div className="border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 gap-6 items-center">
              

            </div>
          </div>
        </div>
        
        {/* Footer
        <div className="mt-6 text-center">
          <p className="text-white/50 text-xs">
            Desenvolvido com ❤️ pela LoopHID | Soluções em Automação
          </p>
        </div> */}
      </div>

      {/* <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style> */}
    </div>
  );
};

export default NextSteps;