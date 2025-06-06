import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-blue-300 bg-clip-text text-transparent leading-tight">
              Revolucione seu Processo de Propostas Comerciais
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Automatize todo o processo de criação de propostas com uma solução inteligente 
              que reduz o tempo de preparação em até 80% e aumenta suas chances de fechamento.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#demo-video" 
                className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg 
                          transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/50 
                          flex items-center justify-center"
              >
                <span className="mr-2">▶</span>
                Ver Demo
              </a>
              
              <a 
                href="#investimento" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white 
                          border border-white/30 font-medium rounded-lg transition-all duration-300 
                          transform hover:scale-105"
              >
                Preços e Planos
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/70 text-sm">
                ✅ <span className="font-medium text-secondary">Resultados comprovados:</span> Nossos clientes 
                relatam redução média de 78% no tempo de preparação de propostas e aumento de 35% na taxa de conversão.
              </p>
            </div>
          </div>
          
          {/* Hero Image/Video */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/30 rounded-2xl transform rotate-6 scale-105"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                <video 
                  className="w-full h-auto"
                  poster="/demo-poster.jpg"
                  controls
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                  1:45
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
