import React, { useState } from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border border-cyan-400/50 transform scale-105' 
          : 'bg-slate-700/50 border border-white/10 hover:border-cyan-400/30'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className={`text-3xl mb-2 ${isActive ? 'animate-pulse' : ''}`}>{icon}</div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
};

const VideoDemo: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const features = [
    {
      icon: '📊',
      title: 'Dashboard Pro',
      description: 'Interface completa com métricas em tempo real',
      details: 'Visualize todas as propostas, vendas e performance da equipe em um painel intuitivo'
    },
    {
      icon: '👥',
      title: 'Gestão de Usuários',
      description: 'Controle total de revendedoras e permissões',
      details: 'Adicione, remova e gerencie perfis de usuários com diferentes níveis de acesso'
    },
    {
      icon: '🛍️',
      title: 'Catálogo Dinâmico',
      description: 'Produtos sempre atualizados automaticamente',
      details: 'Sistema inteligente que mantém preços e estoque sempre sincronizados'
    },
    {
      icon: '📈',
      title: 'Relatórios Avançados',
      description: 'Analytics completo para decisões estratégicas',
      details: 'Dados detalhados sobre vendas, conversion rates e performance por período'
    }
  ];

  const benefits = [
    { icon: '⚡', title: 'Interface Profissional', description: 'Design premium e experiência fluida' },
    { icon: '🔧', title: 'Customização Total', description: 'Adapte a plataforma às suas necessidades' },
    { icon: '📱', title: 'Multi-dispositivo', description: 'Acesse de qualquer lugar, qualquer hora' },
    { icon: '🔒', title: 'Segurança Enterprise', description: 'Proteção de dados nível corporativo' }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 mt-10">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-medium mb-4">
            <span className="mr-1">💻</span>
            MICRO SAAS EM AÇÃO
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Como Funciona Nosso Serviço de Micro SaaS
          </h2>
          <p className="text-lg text-white/70">
            Plataforma completa com dashboard profissional e controle total
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Video Demo */}
          <div className="space-y-6">
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

            {/* Feature Details */}
            <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">{features[activeFeature].icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{features[activeFeature].title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {features[activeFeature].details}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Features & Benefits */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">🚀 Funcionalidades Principais</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    {...feature}
                    isActive={activeFeature === index}
                    onClick={() => setActiveFeature(index)}
                  />
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-xl font-bold text-white mb-4">✨ Diferenciais</h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-700/50 border border-white/10 rounded-lg p-3 text-center hover:border-cyan-400/30 transition-colors">
                    <div className="text-2xl mb-1">{benefit.icon}</div>
                    <h4 className="text-sm font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-xs text-white/70">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Results */}
            {/* <div className="bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 text-center">📊 Com o Micro SaaS</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">∞</div>
                  <div className="text-xs text-white/80">Escalabilidade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-xs text-white/80">Controle</div>
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                💻 Ver Demo Completo
              </button>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoDemo;