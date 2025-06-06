import React, { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  maintenance: string;
  advantages: string[];
  idealFor: string[];
  isPopular?: boolean;
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  features,
  price,
  maintenance,
  advantages,
  idealFor,
  isPopular = false,
  gradient
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative group cursor-pointer transition-all duration-300`}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            ⭐ Mais Popular
          </div>
        </div>
      )}

      <div 
        className={`relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:scale-105 ${gradient} ${isPopular ? 'ring-2 ring-cyan-400/30' : ''} shadow-xl group-hover:shadow-2xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-500"></div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
              {icon}
            </div>
          </div>

          <div className="mb-4">
            <h3 className={`text-2xl font-bold text-white mb-1 transition-colors ${isHovered ? 'text-cyan-200' : ''}`}>{title}</h3>
            <p className="text-white/80 text-sm">{subtitle}</p>
          </div>

          {/* Price */}
          <div className="bg-black/20 backdrop-blur rounded-xl p-4 mb-4 group-hover:bg-black/30 transition-colors">
            <div className="text-center">
              <div className={`text-3xl font-bold text-white mb-1 transition-all ${isHovered ? 'scale-110 text-cyan-300' : ''}`}>{price}</div>
              <div className="text-white/70 text-xs">{maintenance}</div>
            </div>
          </div>

          {/* Quick features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-2 text-center group-hover:bg-white/20 transition-colors">
                <span className="text-white/90 text-xs font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Expanded content on hover */}
          <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            
            {/* All Features */}
            <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
              <span className="mr-2">⚡</span>
              Recursos Inclusos:
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 mt-1.5 flex-shrink-0"></span>
                  <span className="text-white/90 text-xs leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* Ideal For */}
            <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
              {/* <span className="mr-2">🎯</span>
              Ideal Para Você Se: */}
            </h4>
            <div className="grid grid-cols-1 gap-y-1 mb-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-400 text-xs mr-2 flex-shrink-0">✓</span>
                  <span className="text-white/90 text-xs leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Advantages */}
            <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
              {/* <span className="mr-2">🚀</span>
              Principais Vantagens: */}
            </h4>
            <div className="grid grid-cols-1 gap-y-1 mb-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 text-xs mr-2 flex-shrink-0">★</span>
                  <span className="text-white/90 text-xs leading-tight">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <button className={`w-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 ${isHovered ? 'animate-pulse' : ''}`}>
              Escolher {title} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceOptions: React.FC = () => {
  const automationService = {
    icon: '🔧',
    title: 'Automação',
    subtitle: 'Solução rápida via WhatsApp',
    features: [
      'WhatsApp Bot',
      'Google Sheets',
      'Gmail Integration',
      'PDF Generator',
      'Excel Reports',
      'Notificações Auto',
      'Backup Seguro',
      'Suporte 24h'
    ],
    price: 'R$ 5.500',
    maintenance: 'R$ 800/mês manutenção',
    advantages: [
      // 'Implementação em 30 dias',
      // 'Processo completo em 30 segundos',
      // 'Investimento inicial acessível',
      // 'Resultados imediatos',
      // 'Baixo risco de investimento',
      // 'Fácil de usar e treinar equipe'
    ],
    idealFor: [
      // 'Quer validar a automação rapidamente',
      // 'Prefere investimento inicial menor',
      // 'Quer resultados em 5 semanas',
      // 'Tem equipe pequena/média',
      // 'Quer testar antes de investir mais',
      // 'Busca ROI rápido'
    ],
    gradient: 'bg-gradient-to-br from-green-600 via-teal-600 to-blue-600'
  };

  const microSaasService = {
    icon: '💻',
    title: 'Micro SaaS',
    subtitle: 'Plataforma profissional completa',
    features: [
      'Dashboard Pro',
      'Gestão Produtos',
      'CRM Revendedoras',
      'Relatórios Avançados',
      'API Integration',
      'Multi-usuário',
      'Backup Cloud',
      'White Label'
    ],
    price: 'R$ 12.000',
    maintenance: 'R$ 400/mês manutenção',
    advantages: [
      // 'Interface profissional premium',
      // 'Crescimento sem limitações',
      // 'Controle total dos dados',
      // 'Menor custo de manutenção',
      // 'Experiência premium',
      // 'Escalabilidade infinita'
    ],
    idealFor: [
      // 'Quer solução profissional completa',
      // 'Planeja crescer significativamente',
      // 'Valoriza interface elegante',
      // 'Busca menores custos de manutenção',
      // 'Quer escalabilidade ilimitada',
      // 'Precisa de controle total dos dados'
    ],
    isPopular: true,
    gradient: 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700'
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">✨</span>
            SOLUÇÕES SOB MEDIDA
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Escolha Sua Transformação
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Duas soluções igualmente poderosas para automatizar suas propostas. Passe o mouse para ver detalhes.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <ServiceCard {...automationService} />
          <ServiceCard {...microSaasService} />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '⏰', value: '30s', label: 'Tempo total' },
            { icon: '📈', value: '95%', label: 'Menos tempo' },
            { icon: '💰', value: '40%', label: 'Mais vendas' },
            { icon: '🔄', value: '24/7', label: 'Funcionamento' }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Comparison */}
        <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">💡 Nossa Recomendação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-green-600/30 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-bold text-white mb-2">Começando?</h4>
              <p className="text-white/70 text-sm">Escolha a <strong className="text-green-300">Automação</strong> para validar rapidamente</p>
            </div>
            <div className="text-center p-4 bg-purple-600/30 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-bold text-white mb-2">Crescendo?</h4>
              <p className="text-white/70 text-sm">Vá direto para o <strong className="text-purple-300">Micro SaaS</strong> completo</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para Transformar seu Negócio?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-700 hover:from-green-700 hover:to-teal-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              🔧 Quero a Automação
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              💻 Quero o Micro SaaS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;