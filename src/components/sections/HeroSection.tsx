import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  // <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-16 md:py-24 px-4 min-h-screen flex items-center">

  return (
    <div className="">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div>
            
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
                onClick={handleVideoPlay}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">▶</span>
                Ver Demo
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
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/30 rounded-2xl transform rotate-6 scale-105"></div>
              
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                
                {!isVideoPlaying ? (
                  // Video Poster/Thumbnail
                  <div 
                    className="relative aspect-video bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800 cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    {/* Video controls overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center">
                          <button className="mr-4 hover:text-blue-400 transition-colors">
                            <span className="text-lg">▶</span>
                          </button>
                          <span>0:00</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button className="hover:text-blue-400 transition-colors">🔊</button>
                          <button className="hover:text-blue-400 transition-colors">⚙️</button>
                          <button className="hover:text-blue-400 transition-colors">⛶</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-16 left-4 text-white text-sm">
                      1:45
                    </div>

                    {/* Quality badge */}
                    <div className="absolute top-4 left-4 text-white/60 text-sm">
                      1.00
                    </div>
                  </div>
                ) : (
                  // Actual Video Player
                  <div className="aspect-video">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      src="/assets/videos/proposta-facil.mp4"
                    >
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;