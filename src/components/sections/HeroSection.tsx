import React from 'react';

const HeroSection: React.FC = () => {
  // Removida a lógica de clique, o vídeo agora é sempre reproduzido automaticamente como um GIF
  // <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-16 md:py-24 px-4 min-h-screen flex items-center">

  return (
    <div className="">
      <div className="max-w-[1600px] mx-auto w-full px-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
          
          {/* Hero Content */}
          <div className="md:col-span-2 pr-0 md:pr-4">
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Revolucione seu Processo de Propostas Comerciais
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Automatize todo o processo de criação de propostas com uma solução inteligente 
              que reduz o tempo de preparação em até 80% e aumenta suas chances de fechamento.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">📋</span>
                Ver Planos
              </button>
              
              <button className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300">
                Preços e Planos
              </button>
            </div>
            
            {/* Results Box */}
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/70 text-sm">
                ✅ <span className="font-medium text-green-400">Resultados comprovados:</span> Nossos clientes 
                relatam redução média de 78% no tempo de preparação de propostas e aumento de 35% na taxa de conversão.
              </p>
            </div>
          </div>
          
          {/* Hero Video */}
          <div className="flex justify-center mt-6 md:mt-0 md:col-span-3">
            <div className="relative w-full">
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/30 rounded-2xl transform rotate-6 scale-105"></div>
              
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                {/* Video Container preenchendo completamente as bordas */}
                <div className="h-[800px] w-[1200px] max-w-full overflow-hidden">
                  <video 
                    className="w-full h-full object-fill" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/assets/videos/proposta-facil.mp4"
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                  
                  {/* Quality badge */}
                  <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 rounded text-white/60 text-xs">
                    AUTO-PLAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;