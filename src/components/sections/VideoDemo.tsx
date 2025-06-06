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
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const handlePlayVideo = () => {
    setIsPlaying(true);
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
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
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
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gradient-to-br from-blue-600/80 to-indigo-700/80 overflow-hidden">
                {!isPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button 
                        onClick={handlePlayVideo}
                        className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center 
                                  transform transition-transform duration-300 hover:scale-110 focus:outline-none
                                  shadow-lg hover:shadow-cyan-500/50"
                        aria-label="Play demo video"
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">Demo do SaaS</h3>
                        <p className="text-sm opacity-80">Veja a plataforma em ação</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/8K-hTZ4Cnkg?autoplay=1"
                      title="Micro SaaS Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-0 right-0 mx-4 px-4 py-3 bg-black/70 backdrop-blur-sm rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <button className="text-white mr-4 hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isPlaying ? 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /> : 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      }
                    </svg>
                  </button>
                  <span className="text-white text-xs">Demo SaaS Platform</span>
                </div>
                <div className="flex items-center">
                  <button className="text-white hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </button>
                </div>
              </div>
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

            <div>
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
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-xl p-6">
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoDemo;