import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: 'none' }}>
      <div style={{ width: '100%', padding: '0 1rem' }}>
        {/* Container principal RESPONSIVO */}
        <div style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: window.innerWidth < 768 ? '1.5rem' : '2rem',
          alignItems: 'flex-start',
          width: '100%'
        }}>
          
          {/* Conteúdo Hero - RESPONSIVO E BONITO */}
          <div style={{ 
            width: window.innerWidth < 768 ? '100%' : '32%', // AUMENTADO para 32%
            minWidth: window.innerWidth < 768 ? 'auto' : '380px',
            paddingRight: window.innerWidth < 768 ? '0' : '2.5rem',
            paddingTop: window.innerWidth < 768 ? '0' : '2rem',
            flexShrink: 0
          }}>
            
            {/* Título Principal - FORMATADO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Revolucione seu Processo de Propostas Comerciais
              </span>
            </h1>
            
            {/* Subtítulo - ESPAÇADO */}
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
              Automatize todo o processo de criação de propostas com uma solução inteligente 
              que reduz o tempo de preparação em até 80% e aumenta suas chances de fechamento.
            </p>
            
            {/* Botões CTA - ESPAÇADOS */}
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
            
            {/* Caixa de Resultados */}
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/70 text-sm">
                ✅ <span className="font-medium text-green-400">Resultados comprovados:</span> Nossos clientes 
                relatam redução média de 78% no tempo de preparação de propostas e aumento de 35% na taxa de conversão.
              </p>
            </div>
          </div>
          
          {/* Vídeo Hero - MANTENDO O TAMANHO GIGANTE */}
          <div style={{ 
            width: window.innerWidth < 768 ? '100%' : '68%', // AJUSTADO para dar mais espaço ao texto
            minWidth: window.innerWidth < 768 ? 'auto' : '850px', // MANTIDO GRANDE
            maxWidth: 'none'
          }}>
            <div style={{ position: 'relative', width: '100%' }}>
              
              {/* Decoração de Fundo */}
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.3))',
                borderRadius: '1rem',
                transform: window.innerWidth < 768 ? 'rotate(3deg) scale(1.02)' : 'rotate(6deg) scale(1.05)'
              }}></div>
              
              {/* Container do Vídeo - GIGANTE */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                width: '100%'
              }}>
                {/* Container do Vídeo RESPONSIVO */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  height: window.innerWidth < 768 ? '400px' : window.innerWidth < 1024 ? '550px' : '650px', // MANTIDO GRANDE
                  minWidth: window.innerWidth < 768 ? 'auto' : '850px'
                }}>
                  <video 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center top', // FOCA NA PARTE DE CIMA do vídeo
                      display: 'block'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/assets/videos/proposta-facil.mp4"
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                  
                  {/* Badge de Qualidade */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.75rem'
                  }}>
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