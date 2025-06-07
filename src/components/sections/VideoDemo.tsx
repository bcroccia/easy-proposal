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
    <div style={{ width: '100%', maxWidth: 'none', padding: '0 1rem' }}>
      <div style={{ maxWidth: 'none', width: '100%' }}>
        
        {/* Header */}
        <div className="text-center mb-10 mt-10">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-medium mb-4">
            <span className="mr-1">💻</span>
            MICRO SAAS EM AÇÃO
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Como Funciona <br /> Nosso Serviço de Micro SaaS
          </h2>
          <p className="text-lg text-white/70">
            Plataforma completa com dashboard profissional e controle total
          </p>
        </div>

        {/* Container Principal RESPONSIVO */}
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
          gap: window.innerWidth < 1024 ? '2rem' : '3rem',
          alignItems: 'flex-start',
          width: '100%'
        }}>
          
          {/* Left: Video Demo - GIGANTE */}
          <div style={{
            width: window.innerWidth < 1024 ? '100%' : '65%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '800px',
            maxWidth: 'none'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              {/* Video Container - MESMO TAMANHO DO HERO */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: window.innerWidth < 768 ? '400px' : window.innerWidth < 1024 ? '500px' : '600px'
                }}>
                  <video 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
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
                  
                  {/* Quality badge */}
                  <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 rounded text-white/60 text-xs">
                    AUTO-PLAY
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Details - ABAIXO DO VÍDEO */}
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

          {/* Right: Features & Benefits - BALANCEADO */}
          <div style={{
            width: window.innerWidth < 1024 ? '100%' : '35%',
            minWidth: window.innerWidth < 1024 ? 'auto' : '350px',
            flexShrink: 0
          }}>
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoDemo;