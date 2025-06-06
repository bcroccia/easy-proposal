import React, { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  benefits: string[];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  gradient, 
  benefits, 
  isActive, 
  onHover, 
  onLeave 
}) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        isActive 
          ? `${gradient} border-white/30 shadow-xl shadow-blue-500/20` 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background decoration */}
      {/* <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-10 translate-x-10 transition-transform duration-700 group-hover:scale-150"></div> */}
      
      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white/10'} flex items-center justify-center mb-4 shadow-lg text-2xl transition-all duration-300 ${isActive ? 'rotate-12 scale-110' : ''}`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-cyan-200' : 'text-white'}`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-white/70'}`}>
        {description}
      </p>

      {/* Benefits - Show on hover */}
      <div className={`transition-all duration-500 overflow-hidden mt-4 ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
          <span className="mr-2">✨</span>
          Benefícios:
        </h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-xs text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 mt-1.5 flex-shrink-0"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Animated border */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${isActive ? 'animate-pulse border-cyan-400/50' : ''} pointer-events-none`}></div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      title: 'Automação WhatsApp',
      description: 'Receba dados via WhatsApp e gere propostas automaticamente em 30 segundos.',
      icon: '📱',
      gradient: 'bg-gradient-to-br from-green-600 to-emerald-700',
      benefits: [
        'Integração direta com WhatsApp',
        'Processamento instantâneo',
        'Zero intervenção manual'
      ]
    },
    {
      title: 'Dashboard Profissional',
      description: 'Interface completa para gerenciar propostas, clientes e relatórios em tempo real.',
      icon: '📊',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      benefits: [
        'Métricas em tempo real',
        'Interface intuitiva',
        'Controle total dos dados'
      ]
    },
    {
      title: 'PDF Personalizado',
      description: 'Gere PDFs profissionais com sua identidade visual e dados atualizados automaticamente.',
      icon: '📄',
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-700',
      benefits: [
        'Design profissional',
        'Marca personalizada',
        'Geração instantânea'
      ]
    },
    {
      title: 'Integração Google Sheets',
      description: 'Conecte com suas planilhas existentes para manter preços e dados sempre atualizados.',
      icon: '📈',
      gradient: 'bg-gradient-to-br from-teal-600 to-cyan-700',
      benefits: [
        'Sincronização automática',
        'Preços sempre atuais',
        'Fácil de gerenciar'
      ]
    },
    {
      title: 'Multi-usuário',
      description: 'Permita que toda sua equipe use o sistema com diferentes níveis de permissão.',
      icon: '👥',
      gradient: 'bg-gradient-to-br from-orange-600 to-red-700',
      benefits: [
        'Controle de acesso',
        'Colaboração em equipe',
        'Histórico de ações'
      ]
    },
    {
      title: 'Escalabilidade Total',
      description: 'Sistema cresce junto com seu negócio, sem limitações de propostas ou usuários.',
      icon: '🚀',
      gradient: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      benefits: [
        'Crescimento ilimitado',
        'Performance constante',
        'Suporte 24/7'
      ]
    }
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16" style={{ marginTop: '50px' }}>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="mr-2 text-cyan-400">⚡</span>
            RECURSOS PRINCIPAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Soluções Sob Medida
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Nossa plataforma oferece todas as ferramentas necessárias para automatizar 
            e acelerar seu processo comercial com tecnologia de ponta.
          </p>
        </div>

        {/* Features Grid - 3x2 FIXO */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              benefits={feature.benefits}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '⏰', value: '30s', label: 'Tempo médio' },
            { icon: '📈', value: '95%', label: 'Redução tempo' },
            { icon: '🎯', value: '40%', label: 'Mais conversões' },
            { icon: '🔄', value: '24/7', label: 'Disponível' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Message */}
        <div className="mt-12 text-center">
          <div className="h-8">
            {activeCard !== null && (
              <p className="text-cyan-300 text-sm animate-fadeIn">
                {activeCard === 0 && '📱 Automatização completa via WhatsApp - o futuro é agora!'}
                {activeCard === 1 && '📊 Controle total com dashboard profissional e intuitivo!'}
                {activeCard === 2 && '📄 PDFs impecáveis que impressionam seus clientes!'}
                {activeCard === 3 && '📈 Integração perfeita com suas planilhas existentes!'}
                {activeCard === 4 && '👥 Trabalho em equipe facilitado e organizado!'}
                {activeCard === 5 && '🚀 Cresça sem limites com nossa tecnologia escalável!'}
              </p>
            )}
          </div>
        </div>
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

export default FeaturesSection;